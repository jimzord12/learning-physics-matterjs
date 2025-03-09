//@ts-check
(function () {
  'use strict';
  const engine = Matter.Engine.create();
  const world = engine.world;

  /** @type {BridgeInstance} */
  let bridge;

  const CANVAS_W = 800;
  const CANVAS_H = 640;

  setup = function () {
    createCanvas(CANVAS_W, CANVAS_H);

    bridge = new Bridge(engine, 12, 20, 20);
  };

  draw = function () {
    background(200);
    Matter.Engine.update(engine);

    bridge.show();
    bridge.removeWhenOffCanvas(width, height);

    bridge.changeLastBallPosition(mouseX, mouseY);
  };

  mouseDragged = function () {};
  mousePressed = function () {};
})();
