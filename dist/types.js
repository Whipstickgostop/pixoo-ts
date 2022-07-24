"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = exports.PixooCommand = void 0;
var PixooCommand;
(function (PixooCommand) {
    PixooCommand["GET_GIF_ID"] = "Draw/GetHttpGifId";
    PixooCommand["SEND_GIF"] = "Draw/SendHttpGif";
    PixooCommand["SEND_TEXT"] = "Draw/SendHttpText";
    PixooCommand["SET_BRIGHTNESS"] = "Channel/SetBrightness";
    PixooCommand["SET_CLOCK_SELECT_ID"] = "Channel/SetClockSelectId";
    PixooCommand["SET_INDEX"] = "Channel/SetIndex";
    PixooCommand["SET_EQ_POSITION"] = "Channel/SetEqPosition";
})(PixooCommand = exports.PixooCommand || (exports.PixooCommand = {}));
exports.Colors = {
    BLACK: [0, 0, 0],
    WHITE: [255, 255, 255],
};
//# sourceMappingURL=types.js.map