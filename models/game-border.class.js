import { Draw } from "./draw.class.js";
import { Shapes } from "./shapes.class.js";

export class GameBorder extends Draw {

    x = this.initialX = 0;
    y = this.initialY = 0;
    width;
    height;

    draw = () => {
        Shapes.strokedRectangle(this.x, this.y, this.width, this.height, 'blue');
    }

    constructor(canvasMaxWidth, canvasMaxHeight) {
        super();
        this.width = canvasMaxWidth;
        this.height = canvasMaxHeight;
    }
}