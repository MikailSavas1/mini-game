import { ctx } from "../app.js";

export class Draw {
    x;
    y;
    width;
    height;

    draw; // undefined | function():void => result of drawing; final (self)-drawn image (with shapes)

    initialX;
    initialY;

    color = 'black';

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.initialX = x;
        this.initialY = y;
    }

    // Like a rubber, clears the content within the canvas/context in a reactangle-way
    static clear(x, y, width, height) {
        ctx.clearRect(x, y, width, height);
    }
}