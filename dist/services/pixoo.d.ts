import type { GetHttpGifIdResponse, PixooBufferPayload } from '../types';
import type Pixoo from '../Pixoo';
export declare function postBuffer(pixoo: Pixoo, payload: PixooBufferPayload): Promise<void>;
export declare function getHttpGifId(pixoo: Pixoo): Promise<GetHttpGifIdResponse>;
