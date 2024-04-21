import {Request} from 'express';

// TODO: Try to extend Request type by using globals
export interface RequestCustom extends Request
{
    userId: number;
}
