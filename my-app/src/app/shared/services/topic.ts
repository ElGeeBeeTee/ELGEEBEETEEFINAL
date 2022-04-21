import { Comments } from './comments';
export class Topic {
    constructor(public myname: string, public content: string, public imagePath: string, public comment: Comments[]) {}
}
