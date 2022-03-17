import 'phaser';
import ChatScene from './scenes/chat_scene';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: ChatScene
};

const game = new Phaser.Game(config);
