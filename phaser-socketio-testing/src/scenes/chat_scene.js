import Phaser from 'phaser';
import mapSampleImg from '../assets/gentel_forest/Gentle Forest - Pixel Art Asset/map samples/sample 1.png';
import chatPanelImg from '../assets/fantasy_buttons_icons_set/Blue/Custom Panel/Custom_5.png';

const SAMPLE_MAP_KEY = 'SAMPLE_MAP_KEY';
const CHAT_PANEL_KEY = 'CHAT_PANEL_KEY';

export class ChatScene extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image(SAMPLE_MAP_KEY, mapSampleImg);
        this.load.image(CHAT_PANEL_KEY, chatPanelImg);
    }

    create() {
        this._buildMap();
        this._buildHud();
    }

    _buildMap() {
        this.add.image(400, 300, SAMPLE_MAP_KEY);
    }

    _buildHud() {
        this.add.image(10, 455, CHAT_PANEL_KEY).setOrigin(0, 0).setScale(1.4, 4.5).setAlpha(0.6);
    }
}
