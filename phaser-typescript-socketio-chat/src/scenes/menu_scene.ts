import ChatScene from "./chat_scene";

export default class MenuScene extends Phaser.Scene {
    static readonly SCENE_KEY = 'MENU_SCENE';

    constructor() {
        super(MenuScene.SCENE_KEY);
    }

    preload() {
        this.load.glsl('stars', 'assets/starfields.glsl.js');
    }

    create() {
        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);
        this.input.on('pointerup', _pointer => this.scene.start(ChatScene.SCENE_KEY));
    }
}
