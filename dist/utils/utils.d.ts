import Jimp from 'jimp';
import type { RGB, ImageResampleMode } from '../types';
export declare function loadImage(path: string): Promise<import("@jimp/core").Jimp & import("@jimp/jpeg").JpegClass & import("@jimp/png").PNGClass & import("@jimp/plugin-blit").Blit & import("@jimp/plugin-blur").Blur & import("@jimp/plugin-circle").Circle & import("@jimp/plugin-color").Color & import("@jimp/plugin-contain").Contain & import("@jimp/plugin-cover").Cover & import("@jimp/plugin-displace").Displace & import("@jimp/plugin-dither").Dither & import("@jimp/plugin-flip").Flip & import("@jimp/plugin-fisheye").Fisheye & import("@jimp/plugin-gaussian").Gaussian & import("@jimp/plugin-invert").Invert & import("@jimp/plugin-mask").Mask & import("@jimp/plugin-normalize").Normalize & import("@jimp/plugin-rotate").Rotate & import("@jimp/plugin-scale").Scale & import("@jimp/plugin-shadow").Shadow & import("@jimp/plugin-threshold").Threshold & import("@jimp/plugin-crop").CropClass & import("@jimp/plugin-print").PrintClass & import("@jimp/plugin-resize").ResizeClass>;
export declare function resizeImage(image: Jimp, size: [number, number], method?: ImageResampleMode): Promise<Jimp>;
export declare function toImageBuffer(image: Jimp): RGB[];
export declare function clamp(num: number, min?: number, max?: number): number;
export declare function clampColor(rgb: RGB): RGB;
export declare function rgbToHex(rgb: RGB): string;
