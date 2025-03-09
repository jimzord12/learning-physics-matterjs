const { Composite, Composites, Vector } = Matter;

class Bridge {
  /** @type {string[]} */
  static colors = colorfulPalette;

  /** @type {import('matter-js').Composite} */
  composite = Composite.create();

  /** @type {Ball[]} */
  balls = [];

  /**
   * @param {import('matter-js').Engine} engine - The world's physics engine
   * @param {number} ballAmount - The amount of balls to create
   * @param {number} radius - The radius of the ball
   * @param {number} length - The length of each constraint
   */
  constructor(engine, ballAmount, radius, length) {
    for (let i = 0; i < ballAmount; i++) {
      const x = width / 2;
      const y = i * 50 + 50;
      const ball = new Ball(x, y, radius, engine);
      this.balls.push(ball);
      Composite.add(this.composite, ball.body);
    }

    this.composite.label = 'balls';
    this.composite.bodies[0].isStatic = true;
    this.composite.bodies[ballAmount - 1].isStatic = true;
    Composites.chain(this.composite, 0, 0, 0, 0, {
      stiffness: 0.05,
      length: length,
    });

    this.changeFirstBallPosition(width - 0.9 * width, height / 4);

    this.changeLastBallPosition(width - 0.1 * width, height / 4);

    Composite.add(engine.world, this.composite);
  }

  /**
   * Displays the ball using p5.js.
   */
  show() {
    for (let i = 0; i < this.balls.length; i++) {
      const thisBall = this.balls[i];
      const nextBall = this?.balls[i + 1];
      thisBall.show();
      if (!nextBall) break;
      line(
        thisBall.body.position.x,
        thisBall.body.position.y,
        nextBall.body.position.x,
        nextBall.body.position.y
      );
    }
  }

  /**
   *
   * @param {number} canvasWidth
   * @param {number} canvasHeight
   */
  removeWhenOffCanvas(canvasWidth, canvasHeight) {
    for (const ball of this.balls) {
      if (ball.isOffCanvas(canvasWidth, canvasHeight)) {
        console.log('Removing Ball: ', ball);
        Composite.remove(this.composite, ball.body);
        this.balls.splice(this.balls.indexOf(ball), 1);
      }
    }
  }

  /**
   * Resets the position of the balls to the initial state.
   * @param {number} x - The x position of the first ball.
   * @param {number} y - The y position of the first ball.
   */
  changeFirstBallPosition(x, y) {
    if (this.balls.length === 0) return;
    this.balls[0].body.position = Vector.create(x, y);
  }

  /**
   * Resets the position of the last ball to the initial state.
   * @param {number} x - The x position of the first ball.
   * @param {number} y - The y position of the first ball.
   */
  changeLastBallPosition(x, y) {
    if (this.balls.length === 0) return;
    this.balls[this.balls.length - 1].body.position = Vector.create(x, y);
  }
}
