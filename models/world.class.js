import { Ball } from "./ball.class.js";
import { Draw } from "./draw.class.js"
import { DynamicWall } from "./dynamic-wall.class.js";
import { GameBorder } from "./game-border.class.js";

export class World {

    canvas;

    maxHeight; // the maximum height of the canvas
    maxWidth; // the maximum width of the canvas

    gameBorder;
    dynamicWall = new DynamicWall();
    ball = new Ball();

    constructor(canvas) {
        this.canvas = canvas;
        this.maxHeight = canvas.height;
        this.maxWidth = canvas.width;
        this.gameBorder = new GameBorder(canvas.width, canvas.height);
        this.drawWorld();
    }


    /**
     * I am drawing the world...
     * gameLoop, for rendering the graphic(s)
     * Draw to the canvas
     */
    drawWorld() {

        Draw.clear(0, 0, this.maxWidth, this.maxHeight);

        // GAME-BORDER
        this.gameBorder.draw();

        // DYNAMIC-WALL
        if (this.dynamicWall._isMovingRight()) this.dynamicWall.moveRight(); if (this.dynamicWall._isOutOfCanvas(this.maxWidth, this.maxHeight)) this.dynamicWall.setX(this.maxWidth - this.dynamicWall.width); // maxwidth - dynamicWall => equals the maximum x1, otherwise the wall would bounce out of the canvas, therefore we setting to the max-x1 
        if (this.dynamicWall._isMovingLeft()) this.dynamicWall.moveLeft(); if (this.dynamicWall._isOutOfCanvas(this.maxWidth, this.maxHeight)) this.dynamicWall.setX(0);
        this.dynamicWall.draw();

        // BALL 
        if (this.ball._isColliding(this.dynamicWall)) {
            this.ball.changeDirectionOfY();
            // ...
        }
        else if (this.ball._isColliding(this.gameBorder, 'border-left', 'border-right')) this.ball.changeDirectionOfX()
        else if (this.ball._isColliding(this.gameBorder, 'border-bottom')) this.ball.changeDirectionOfY()
        else if (this.ball._isColliding(this.gameBorder, 'border-top')) console.warn('Game Over!') // ...
        // independent block
        this.ball.move();
        this.ball.draw();

        requestAnimationFrame(() => {
            this.drawWorld();
        });
    }
}