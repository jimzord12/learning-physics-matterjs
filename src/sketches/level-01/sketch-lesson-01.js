//@ts-check
(function () {
  'use strict';

  /**
   * This is how we combine TS with JSDoc - Using "typedef"
   * @typedef {RectInstance} RectInst
   */

  /** @typedef  {BallInstance} BallInst  */

  // 📊 STATS
  const stats = new Stats();
  stats.showPanel(0);
  document.body.appendChild(stats.dom);

  const engine = Matter.Engine.create({
    gravity: {
      scale: 0.0005,
      x: 1,
      y: 1,
    },
  });

  /** @type {BallInst[]} */
  const boxes = [];

  /** @type {RectInst[]} */
  let grounds = [];

  setup = function () {
    createCanvas(800, 800);

    const ground_1 = new Rect(200, 300, 800, 10, engine, true);
    const ground_2 = new Rect(600, 400, 400, 10, engine, true);
    const ground_3 = new Rect(200, 500, 800, 10, engine, true);
    const ground_4 = new Rect(490, 220, 150, 10, engine, true);

    Matter.Body.setAngle(ground_2.body, Math.PI / 2);

    grounds = [ground_1, ground_2, ground_3, ground_4];
    // console.log('All The Grounds: ', grounds);
  };

  draw = function () {
    stats.begin();
    background(200);

    Matter.Engine.update(engine);

    boxes.forEach((b) => {
      b.show();
    });

    grounds.forEach((g) => {
      if (g.body.angle > 0) {
        g.rotate();
      } else {
        g.show();
      }
    });

    stats.end();
  };

  mouseDragged = function () {
    const b = new Ball(0, 0, random(10, 30), engine);
    Matter.Body.setAngularVelocity(b.body, 0.05);

    boxes.push(b);
  };
})();
