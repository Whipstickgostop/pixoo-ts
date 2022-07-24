import type { RESIZE_NEAREST_NEIGHBOR, RESIZE_BILINEAR, RESIZE_BICUBIC } from 'jimp';
export declare enum PixooCommand {
    GET_GIF_ID = "Draw/GetHttpGifId",
    SEND_GIF = "Draw/SendHttpGif",
    SEND_TEXT = "Draw/SendHttpText",
    SET_BRIGHTNESS = "Channel/SetBrightness",
    SET_CLOCK_SELECT_ID = "Channel/SetClockSelectId",
    SET_INDEX = "Channel/SetIndex",
    SET_EQ_POSITION = "Channel/SetEqPosition"
}
export declare type Position = [number, number];
export declare type PixooBufferPayload = {
    Command: PixooCommand;
    PicNum: number;
    PicWidth: number;
    PicOffset: number;
    PicID: number;
    PicSpeed: number;
    PicData: string;
};
export declare type RGB = [number, number, number];
export declare type PixooSize = 16 | 32 | 64;
export declare type GetHttpGifIdResponse = {
    error_code: number;
    PicId: number;
};
export declare type PixooGenericResponse = {
    error_code: number;
};
export declare type ImageResampleMode = typeof RESIZE_NEAREST_NEIGHBOR | typeof RESIZE_BILINEAR | typeof RESIZE_BICUBIC;
export declare const Colors: {
    [value: string]: RGB;
};
