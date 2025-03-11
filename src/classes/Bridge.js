class Bridge {
  /** @type {string[]} */
  static colors = colorfulPalette;

  /** @type {import('matter-js').Composite} */
  chains = Matter.Composite.create();

  /** @type {Ball[]} */
  balls = [];

  /** @type {import('matter-js').Body[]} */
  ballBodies = [];

  /**
   * @param {import('matter-js').Engine} engine - The world's physics engine
   * @param {number} ballAmount - The amount of balls to create
   * @param {number} radius - The radius of the ball
   * @param {number} length - The length of each constraint
   */
  constructor(engine, ballAmount, radius, length) {
    const startingPointX = width / 2;
    const startingPointY = height / 4;
    for (let i = 0; i < ballAmount; i++) {
      const x = startingPointX;
      const y = startingPointY + i * length;
      const ball = new Ball(x, y, radius);
      this.balls.push(ball);
      this.ballBodies.push(ball.body);
    }

    this.chains.label = 'balls';
    Matter.Body.setStatic(this.ballBodies[0], true);
    Matter.Composite.add(this.chains, this.ballBodies);
    // this.chains.bodies[ballAmount - 1].isStatic = true;
    Matter.Composites.chain(this.chains, 0, 0, 0, 0, {
      stiffness: 1,
      length,
    });

    this.changeFirstBallPosition(startingPointX, startingPointY);

    // this.changeLastBallPosition(width - 0.1 * width, height / 2);

    Matter.Composite.add(engine.world, this.chains);
    // Matter.World.add(engine.world, this.chains);
  }

  /**
   * Displays the ball using p5.js.
   */
  show() {
    for (let i = 0; i < this.balls.length; i++) {
      const thisBall = this.balls[i];
      const nextBall = this?.balls[i + 1];
      thisBall.show();

      // const { x, y } = this.balls[3].body.position;
      // console.log('Ball #3: ', x, y);
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
        Matter.Composite.remove(this.chains, ball.body);
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
    Matter.Body.setPosition(this.balls[0].body, { x, y });
  }

  /**
   * Resets the position of the last ball to the initial state.
   * @param {number} x - The x position of the first ball.
   * @param {number} y - The y position of the first ball.
   */
  changeLastBallPosition(x, y) {
    if (this.balls.length === 0) return;
    Matter.Body.setPosition(this.balls[this.balls.length - 1].body, { x, y });
  }
}
