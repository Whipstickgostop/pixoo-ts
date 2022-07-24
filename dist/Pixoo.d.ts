import type { ImageResampleMode, PixooSize, Position, RGB } from './types';
export default class Pixoo {
    host: string;
    picId: number;
    size: PixooSize;
    buffer: RGB[];
    constructor(host: string, size: PixooSize);
    init(): Promise<void>;
    fill(rgb?: RGB): void;
    fillRGB(r: number, g: number, b: number): void;
    drawBuffer(): Promise<void>;
    drawPixel(pos: Position, rgb: RGB): Promise<void>;
    drawText(text: string, pos: Position, color?: RGB): Promise<void>;
    drawChar(char: string, pos: Position, color: RGB): Promise<void>;
    drawImage(imagePath: string, pos: Position, resampleMode?: ImageResampleMode): Promise<void>;
    get url(): string;
    get pixelCount(): number;
}
