import 'phaser';
import ChatScene from './scenes/chat_scene';
import MenuScene from './scenes/menu_scene';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: [MenuScene, ChatScene]
};

const game = new Phaser.Game(config);
