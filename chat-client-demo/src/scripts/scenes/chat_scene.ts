import ChatListener from "../chat/chat_listener";
import ChatMessageEvent from "../chat/chat_message_event";
import ChatService from "../chat/chat_service";

export default class ChatScene extends Phaser.Scene implements ChatListener {
    static readonly SCENE_KEY = 'CHAT_SCENE';
    
    private static readonly CHAT_FORM_ASSET_KEY = 'CHAT_FORM_ASSET_KEY';
    private static readonly PHASER_3_LOGO_ASSET_KEY = 'CHAT_FORM_ASSET_KEY';

    private nickname: string;
    private chatInputForm: Phaser.GameObjects.DOMElement;
    private chatTextArea: Phaser.GameObjects.Text;
    private chatMessages: ChatMessageEvent[] = [];
    private chatService: ChatService;

    constructor() {
        super(ChatScene.SCENE_KEY);
        this.chatService = new ChatService();
        this.chatService.registerListener(this);
    }

    init(data: any) {
        this.nickname = data.nickname;
        this.chatService.registerUser(this.nickname);
    }

    preload() {
        this.load.html(ChatScene.CHAT_FORM_ASSET_KEY, 'assets/html/chat-form.html');
        this.load.image(ChatScene.PHASER_3_LOGO_ASSET_KEY, 'assets/img/phaser3-logo.png');
    }

    create() {
        const logo = this.add.image(200, 70, ChatScene.PHASER_3_LOGO_ASSET_KEY);
        this.tweens.add({
            targets: logo,
            x: 600,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        });

        this.chatInputForm = this.add.dom(10, 555).createFromCache(ChatScene.CHAT_FORM_ASSET_KEY).setOrigin(0);
        this.chatTextArea = this.add.text(10, 345, "", { backgroundColor: "#21313CDD", color: "#26924F", fontStyle: "bold" })
            .setLineSpacing(15).setPadding(10).setFixedSize(270, 200);

        
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER).on("down", _event => {
            let chatInput: HTMLInputElement = <HTMLInputElement> this.chatInputForm.getChildByName("chat-input");
            let message: string = chatInput.value.trim();
            if(message && message.trim().length > 0) {
                this.chatService.sendMesage(message);
                chatInput.value = '';
                this.onMessage({
                    username: this.nickname,
                    message
                })
            }
        });
    }

    onMessage(message: ChatMessageEvent): void {
        this.chatMessages.push(message);
        if(this.chatMessages.length > 20) {
            this.chatMessages.shift();
        }
        this.chatTextArea.setText(this.chatMessages.map(m => `${m.username}: ${m.message}`));
    }
}
