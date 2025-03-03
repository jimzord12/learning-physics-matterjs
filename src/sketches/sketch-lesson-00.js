//@ts-check
(function () {
  const { Engine, Composite } = Matter;
  const engine = Engine.create();

  const CANVAS_W = 400;
  const CANVAS_H = 400;

  window.setup = function () {
    createCanvas(CANVAS_W, CANVAS_H);
  };

  window.draw = function () {
    background(200);

    Engine.update(engine);
  };

  window.mouseDragged = function () {};
  window.mousePressed = function () {};
})();
