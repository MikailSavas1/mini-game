import { World } from "./models/world.class.js";

console.log('Hello World says "app.js"!');

const canvas = document.getElementById('my-canvas');
export const ctx = canvas.getContext('2d');

const world = new World(canvas);

// detecting, whether a movement is started by Key-Listener of type "keydown" 
window.addEventListener('keydown', (key) => {
    let keyCode = key.keyCode;

    if (keyCode == 37 || keyCode == 65) {
        world.dynamicWall.isMovingLeft = true;
    }
    else if (keyCode == 39 || keyCode == 68) {
        world.dynamicWall.isMovingRight = true;
    }
})

// detecting, whether the current movement is stopped by releasing its key (=> keyup)
window.addEventListener('keyup', (key) => {
    let keyCode = key.keyCode;

    if (keyCode == 37 || keyCode == 65) {
        world.dynamicWall.isMovingLeft = false;
    }
    else if (keyCode == 39 || keyCode == 68) {
        world.dynamicWall.isMovingRight = false;
    }
})