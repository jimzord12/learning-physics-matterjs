//@ts-check
(function () {
  const { Engine } = Matter;

  const engine = Engine.create();
  console.log(engine);

  /** @type {BridgeInstance} */
  let bridge;

  const CANVAS_W = 800;
  const CANVAS_H = 640;

  // its the same as window.setup
  setup = function () {
    createCanvas(CANVAS_W, CANVAS_H);

    bridge = new Bridge(engine, 12, 20, 20);
  };

  draw = function () {
    background(200);
    Engine.update(engine);

    bridge.show();
    bridge.removeWhenOffCanvas(width, height);
  };

  mouseDragged = function () {};
  mousePressed = function () {};
})();
