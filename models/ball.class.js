import { Draw } from "./draw.class.js";
import { DynamicWall } from "./dynamic-wall.class.js";
import { GameBorder } from "./game-border.class.js";
import { Shapes } from "./shapes.class.js";

export class Ball extends Draw {

    x = 200;
    y = 400;

    radius = 7.5;

    movementOfX = 1;
    movementOfY = -2;

    color = 'green';

    draw = () => {
        Shapes.filledCircle(this.x, this.y, this.radius, 0, Math.PI * 2, this.color);
    }

    constructor() {
        super();
    }

    move() {
        this.x += this.movementOfX;
        this.y += this.movementOfY;
    }

    _isColliding(object, ...info) {
        if (object instanceof DynamicWall) return this._isCollidingWithDynamicWall(object)
        else if (object instanceof GameBorder && info.includes('border-left') && info.includes('border-right')) return this._isColldingWithOuterGameBorders(object);
        else if (object instanceof GameBorder && info.includes('border-bottom')) return this._isColldingWithBottomGameBorder(object);
        else if (object instanceof GameBorder && info.includes('border-top')) return this._isCollidingWithTopBorder(object);
    }

    _isCollidingWithDynamicWall(obj) {

        const dynamicWall = obj;

        // wall
        const x1_wall = dynamicWall.x;
        const x2_wall = dynamicWall.x + dynamicWall.width;
        const y1_wall = dynamicWall.y;
        const y2_wall = dynamicWall.y + dynamicWall.height;

        // circle
        const x1_circle = this.x - this.radius;
        const x2_circle = this.x + this.radius;
        const y1_circle = this.y - this.radius;
        const y2_circle = this.y + this.radius;

        // collision-detection
        return (y1_circle <= y2_wall && y1_circle >= y1_wall && x1_circle >= x1_wall && x2_circle <= x2_wall) || // ball completely within the wall
            (y1_circle <= y2_wall && y1_circle >= y1_wall && x1_circle >= x1_wall && x1_circle <= x2_wall && x2_circle <= (x2_wall + (this.radius * 2))) || // ball partly within the wall; right-side
            (y1_circle <= y2_wall && y1_circle >= y1_wall && x1_circle >= x1_wall - (this.radius * 2) && x2_circle <= x2_wall); // ball partly within the wall; left-side
    }

    _isColldingWithOuterGameBorders(gameBorder) {
        // circle
        const x1_circle = this.x - this.radius;
        const x2_circle = this.x + this.radius;
        // borders
        const xOfBorder1 = gameBorder.x;
        const xOfBorder2 = gameBorder.width;
        return x1_circle <= xOfBorder1 || x2_circle >= xOfBorder2;
    }

    _isColldingWithBottomGameBorder(gameBorder) {
        // circle
        const y2_circle = this.y + this.radius;
        // border
        const y2_border = gameBorder.height;
        return y2_circle >= y2_border;
    }

    _isCollidingWithTopBorder(gameBorder) {
        // circle
        const y1_circle = this.y + this.radius;
        // border
        const y1_border = gameBorder.y;
        return y1_circle < y1_border;
    }

    changeDirectionOfY() {
        this.movementOfY = -this.movementOfY;
    }

    changeDirectionOfX() {
        this.movementOfX = -this.movementOfX;
    }

}