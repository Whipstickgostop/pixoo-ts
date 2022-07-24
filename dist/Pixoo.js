"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
const font_1 = __importDefault(require("./utils/font"));
const pixoo_1 = require("./services/pixoo");
const types_1 = require("./types");
const utils_1 = require("./utils/utils");
class Pixoo {
    constructor(host, size) {
        this.picId = 0;
        this.buffer = [];
        this.host = host;
        this.size = size;
    }
    async init() {
        const { PicId } = await (0, pixoo_1.getHttpGifId)(this);
        this.picId = PicId;
        this.fill();
    }
    fill(rgb = types_1.Colors.BLACK) {
        const clamped = (0, utils_1.clampColor)(rgb);
        this.buffer = [];
        for (let i = 0; i < this.pixelCount; i += 1) {
            this.buffer.push(clamped);
        }
    }
    fillRGB(r, g, b) {
        this.fill([r, g, b]);
    }
    async drawBuffer() {
        this.picId += 1;
        await (0, pixoo_1.postBuffer)(this, {
            Command: types_1.PixooCommand.SEND_GIF,
            PicNum: 1,
            PicWidth: this.size,
            PicOffset: 0,
            PicID: this.picId,
            PicSpeed: 1000,
            PicData: buffer_1.Buffer.from(this.buffer.flat()).toString('base64'),
        });
    }
    async drawPixel(pos, rgb) {
        if (pos[0] < 0
            || pos[1] >= this.size
            || pos[1] < 0
            || pos[1] >= this.size) {
            return;
        }
        const index = pos[0] + pos[1] * this.size;
        if (index < 0 || index >= this.pixelCount) {
            return;
        }
        const clamped = (0, utils_1.clampColor)(rgb);
        this.buffer[index] = clamped;
    }
    async drawText(text, pos, color = types_1.Colors.WHITE) {
        [...text].map((c, i) => this.drawChar(c, [i * 4 + pos[0], pos[1]], color));
        await this.drawBuffer();
    }
    async drawChar(char, pos, color) {
        const charMatrix = font_1.default[char];
        if (!charMatrix) {
            return;
        }
        charMatrix.forEach((bit, index) => {
            if (bit === 1) {
                const x = index % 3;
                const y = Math.floor(index / 3);
                this.drawPixel([pos[0] + x, pos[1] + y], color);
            }
        });
    }
    async drawImage(imagePath, pos, resampleMode = 'nearestNeighbor') {
        this.buffer = [];
        const image = await (0, utils_1.loadImage)(imagePath);
        const resized = await (0, utils_1.resizeImage)(image, [this.size, this.size], resampleMode);
        const imgBuf = (0, utils_1.toImageBuffer)(resized);
        for (let y = 0; y < resized.getHeight(); y += 1) {
            for (let x = 0; x < resized.getWidth(); x += 1) {
                const shiftedXPos = x + pos[0];
                if (this.size - 1 < shiftedXPos || shiftedXPos < 0) {
                    continue;
                }
                const shiftedYPos = y + pos[1];
                if (this.size - 1 < shiftedYPos || shiftedYPos < 0) {
                    continue;
                }
                this.drawPixel([shiftedXPos, shiftedYPos], imgBuf[x + y * this.size]);
            }
        }
        await this.drawBuffer();
    }
    get url() {
        return `${this.host}/post`;
    }
    get pixelCount() {
        return this.size * this.size;
    }
}
exports.default = Pixoo;
//# sourceMappingURL=Pixoo.js.map