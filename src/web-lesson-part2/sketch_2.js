(function () {
  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create();

  let ball;
  let x = 100;
  let y = 100;
  let r = 50;

  window.setup = function () {
    createCanvas(400, 400);

    ball = new Ball(x, y, r);

    Composite.add(engine.world, [ball.body]);
  };

  window.draw = function () {
    background(200);

    Engine.update(engine);
  };
})();
