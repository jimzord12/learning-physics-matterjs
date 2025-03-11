//@ts-check
(function () {
  const { Engine } = Matter;

  /** @type {InstanceType<typeof Matter.Mouse>}  */
  let mouse;
  let mouseConstraint;

  const engine = Engine.create({
    timing: {
      timeScale: 1,
    },
  });
  console.log(engine);

  /** @type {BridgeInstance} */
  let bridge;

  const CANVAS_W = 800;
  const CANVAS_H = 640;

  // its the same as window.setup
  setup = function () {
    createCanvas(CANVAS_W, CANVAS_H);

    mouse = Matter.Mouse.create(document.body);
    mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
    });

    bridge = new Bridge(engine, 15, 10, 25);
    Matter.Composite.add(engine.world, [mouseConstraint]);
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
