"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpGifId = exports.postBuffer = void 0;
const axios_1 = __importDefault(require("axios"));
const types_1 = require("../types");
async function postBuffer(pixoo, payload) {
    const response = await axios_1.default.post(pixoo.url, payload);
    const data = response.data;
    if (data.error_code !== 0) {
        throw new Error('Error!');
    }
}
exports.postBuffer = postBuffer;
async function getHttpGifId(pixoo) {
    const response = await axios_1.default.post(pixoo.url, {
        Command: types_1.PixooCommand.GET_GIF_ID,
    });
    const data = response.data;
    if (data.error_code !== 0) {
        throw new Error('Error!');
    }
    return data;
}
exports.getHttpGifId = getHttpGifId;
//# sourceMappingURL=pixoo.js.map