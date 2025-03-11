class Ball extends Identifiable {
  /** @type {string[]} */
  static colors = colorfulPalette;

  /** @type {import('matter-js').Body} */
  body;

  // /** @type {boolean} */
  // isOffBounds = false;

  /** @type {number} */
  magnitude = random(-10, 10);

  /** @type {string} */
  color = random(Ball.colors);

  /**
   * @param {number} x - The x position of the ball.
   * @param {number} y - The y position of the ball.
   * @param {number} r - The radius of the ball.
   */
  constructor(x, y, r) {
    super();
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Matter.Bodies.circle(x, y, r, {
      // restitution: 0.8,
      // velocity: Matter.Vector.create(this.magnitude, this.magnitude),
    });

    // Matter.Composite.add(engine.world, this.body);
    // Matter.World.add(engine.world, this.body);
  }

  /**
   * Displays the ball using p5.js.
   */
  show() {
    const { x, y } = this.body.position;
    // push();
    // translate(pos.x, pos.y);
    fill(this.color); // ⚠️ You must first fill it, and then create it xD
    ellipse(x, y, this.r * 2);
    // pop();
  }

  /**
   *
   * @param {number} canvasWidth
   * @param {number} canvasHeight
   * @returns {boolean}
   */
  isOffCanvas(canvasWidth, canvasHeight) {
    return (
      this.body.position.x > canvasWidth + this.r ||
      this.body.position.x < -this.r ||
      this.body.position.y > canvasHeight + this.r ||
      this.body.position.x < -this.y
    );
  }

  resetXY() {
    this.x = 0;
    this.y = 0;
  }
}
