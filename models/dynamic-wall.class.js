import { Draw } from "./draw.class.js";
import { Shapes } from "./shapes.class.js";

export class DynamicWall extends Draw {

    x = this.initialX = 0;
    y = this.initialY = 0;
    width = 120;
    height = 7;

    isMovingRight = false;
    isMovingLeft = false;

    draw = () => {
        Shapes.filledRectangle(this.x, this.y, this.width, this.height, 'red');
    }

    constructor() {
        super();
        console.log(this);
    }

    _isMovingRight() {
        return !this.isMovingLeft && this.isMovingRight;
    }

    _isMovingLeft() {
        return this.isMovingLeft && !this.isMovingRight;
    }

    _isOutOfCanvas(canvasMaximumWidth, canvasMaximumHeight) {
        const x2 = this.x + this.width;
        return x2 > canvasMaximumWidth || this.x < 0;
    }

    moveRight() {
        this.x += 10;
    }

    moveLeft() {
        this.x -= 10;
    }

    setX(newX) {
        this.x = newX;
    }

}