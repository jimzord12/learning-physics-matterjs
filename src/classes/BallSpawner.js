class BallSpawner {
  xPositions = [0.25, 0.5, 0.75];

  /** @type {Ball[]} */
  balls = [];

  /** @type {number} */
  ballAmount;

  /** @type {{min: number, max: number}} */
  radiusRange;

  /** @type {number} */
  spawnSpeed;

  /** @type {import('matter-js').Engine} */
  engine;

  /** @type {number | null} */
  timerId = null;

  /**
   * @param {import('matter-js').Engine} engine - The world's physics engine
   * @param {number} ballAmount - The amount of balls to create
   * @param {{min: number, max: number}} radiusRange - The Ball radius range
   * @param {number} spawnSpeed - The interval between the ball spawning (ms)
   */
  constructor(engine, ballAmount, radiusRange, spawnSpeed) {
    this.ballAmount = ballAmount;
    this.radiusRange = radiusRange;
    this.spawnSpeed = spawnSpeed;
    this.engine = engine;
  }

  /**
   * Displays the ball using p5.js.
   */
  show() {
    for (let i = 0; i < this.balls.length; i++) {
      this.balls[i].show();
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
        // console.log('Removing Ball: ', ball);
        Matter.Composite.remove(this.engine.world, ball.body);
        this.balls.splice(this.balls.indexOf(ball), 1);
      }
    }
  }

  startCreatingBalls() {
    setInterval(this.spawnBall.bind(this), this.spawnSpeed);
  }

  stopCreatingBalls() {
    if (this.timerId === null) return;
    clearInterval(this.timerId);
  }

  spawnBall() {
    // console.log('AAAAAAA: ', this.balls);
    if (this.balls.length > this.ballAmount) {
      this.stopCreatingBalls();
      return;
    }

    const x = width * random(this.xPositions);
    const y = height * 0.2;
    const r = random(this.radiusRange.min, this.radiusRange.max);
    this.balls.push(new Ball(x, y, r, this.engine));
  }
}
