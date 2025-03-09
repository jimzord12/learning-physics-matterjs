//@ts-check
const engine = Matter.Engine.create();

const CANVAS_W = 400;
const CANVAS_H = 400;

export const setup = function () {
  createCanvas(CANVAS_W, CANVAS_H);
};

export const draw = function () {
  background(200);

  Matter.Engine.update(engine);
};

export const mouseDragged = function () {};
export const mousePressed = function () {};
