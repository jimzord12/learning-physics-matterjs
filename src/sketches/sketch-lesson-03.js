//@ts-check
(function () {
  const { Engine, Composite, Render, Runner, Bodies, Body, Composites } =
    Matter;
  const engine = Engine.create();
  const world = engine.world;

  /** @type {BridgeInstance} */
  let bridge;

  const CANVAS_W = 800;
  const CANVAS_H = 640;

  window.setup = function () {
    createCanvas(CANVAS_W, CANVAS_H);

    bridge = new Bridge(engine, 12, 20, 20);
  };

  window.draw = function () {
    background(200);
    Engine.update(engine);

    bridge.show();
    bridge.removeWhenOffCanvas(width, height);
  };

  window.mouseDragged = function () {};
  window.mousePressed = function () {};
})();
