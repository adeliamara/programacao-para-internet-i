import { IPost } from "./interfaces/IPost";
import { v4 as uuidv4 } from 'uuid';


export class Post implements IPost {
    public id: number;
    public text: string;
    public likes: number;

    constructor(text: string, likes: number = 0, numericId: number = parseInt(uuidv4().replace(/-/g, '').substring(0, 8), 16)){
        this.id = numericId;
        this.text = text;
        this.likes = likes;
    }
    
}