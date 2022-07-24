"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHex = exports.clampColor = exports.clamp = exports.toImageBuffer = exports.resizeImage = exports.loadImage = void 0;
const jimp_1 = __importDefault(require("jimp"));
async function loadImage(path) {
    return jimp_1.default.read(path);
}
exports.loadImage = loadImage;
async function resizeImage(image, size, method = 'nearestNeighbor') {
    return image.resize(size[0], size[1], method);
}
exports.resizeImage = resizeImage;
function toImageBuffer(image) {
    function unflattenToRGB(arr, result) {
        if (arr.length === 0) {
            return result;
        }
        const pixelRGBData = arr.splice(0, 3);
        result.push(pixelRGBData);
        return unflattenToRGB(arr, result);
    }
    // image.bitmap.data is format (r, g, b, a), but Pixoo only handles RGB data
    // so we remove the alpha channel here
    const imgBuf = Array.from(image.bitmap.data.filter((_val, index) => (index + 1) % 4 !== 0));
    if (imgBuf.length % 3 !== 0) {
        throw new Error('invalid image!');
    }
    const rgbBuf = [];
    unflattenToRGB(imgBuf, rgbBuf);
    return rgbBuf;
}
exports.toImageBuffer = toImageBuffer;
function clamp(num, min = 0, max = 255) {
    return Math.min(Math.max(num, min), max);
}
exports.clamp = clamp;
function clampColor(rgb) {
    return [clamp(rgb[0]), clamp(rgb[1]), clamp(rgb[2])];
}
exports.clampColor = clampColor;
function rgbToHex(rgb) {
    function toHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }
    return `#${rgb.map(toHex).join('')}`;
}
exports.rgbToHex = rgbToHex;
//# sourceMappingURL=utils.js.map