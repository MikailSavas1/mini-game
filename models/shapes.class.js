import { ctx } from "../app.js";

export class Shapes {

    static strokedRectangle(x, y, width, height, color = 'black') {
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, width, height);
    }

    static filledRectangle(x, y, width, height, color = 'black') {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    static strokedCircle(x, y, radius, startAngle, endAngle, color = "black", counterclockwise = false) {
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    static filledCircle(x, y, radius, startAngle, endAngle, color = "black", counterclockwise = false,) {
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
        ctx.fillStyle = color;
        ctx.fill();
    }

    // ... 
}