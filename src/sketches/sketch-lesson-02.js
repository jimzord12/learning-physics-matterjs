//@ts-check
(function () {
  const { Engine, Body, Bodies, Composite } = Matter;
  const engine = Engine.create({
    gravity: {
      scale: 0.00005,
      y: 1,
      x: 0,
    },
  });

  const CANVAS_W = 400;
  const CANVAS_H = 400;

  /**
   * Represents a Ball in the physics engine.
   * @typedef {Object} Ball
   * @property {number} x
   * @property {number} y
   * @property {number} r
   * @property {Matter.Body} body
   * @property {() => void} show
   * @property {(canvasWidth: number, canvasHeight:number) => boolean} isOffCanvas
   */

  /** @type {Ball[]} */
  const balls = [];

  window.setup = function () {
    createCanvas(CANVAS_W, CANVAS_H);
  };

  window.draw = function () {
    background(200);

    Engine.update(engine);

    for (let i = balls.length - 1; i > 0; i -= 1) {
      const _ball = balls[i];
      if (_ball.isOffCanvas(CANVAS_W, CANVAS_H)) {
        Composite.remove(engine.world, _ball.body);
        balls.splice(i, 1);
        console.log('');
        // console.log('Removed Ball: ', _ball);
        console.log('Total Balls: ', balls.length);
        continue;
      }
      balls[i].show();
    }
  };

  window.mouseDragged = function () {
    balls.unshift(new Ball(mouseX, mouseY, random(10, 30), engine));
  };

  // window.mousePressed = function () {
  //   balls.push(new Ball(mouseX, mouseY, random(10, 30), engine));
  // };
})();
