import Phaser from 'phaser';
import { ChatScene } from './scenes/chat_scene';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: ChatScene
};

const game = new Phaser.Game(config);
