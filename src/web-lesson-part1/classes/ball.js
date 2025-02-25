(function () {
  const { Bodies, Composite, Vector } = Matter;

  class Ball {
    /** @type {string[]} */
    static colorPallete = [
      '#16C47F',
      '#FFD65A',
      '#FF9D23',
      '#F93827',
      '#E53888',
      '#FF6500',
      '#66D2CE',
    ];

    /** @type {import('matter-js').Body} */
    body;

    // /** @type {boolean} */
    // isOffBounds = false;

    /** @type {number} */
    magnitude = random(-5, 5);

    /** @type {string} */
    color = random(Ball.colorPallete);

    /**
     * @param {number} x - The x position of the ball.
     * @param {number} y - The y position of the ball.
     * @param {number} r - The radius of the ball.
     * @param {import('matter-js').Engine} engine - The world's physics engine
     */
    constructor(x, y, r, engine) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(x, y, r, {
        restitution: 0.8,
        velocity: Vector.create(this.magnitude, this.magnitude),
      });

      Composite.add(engine.world, this.body);
    }

    /**
     * Displays the ball using p5.js.
     */
    show() {
      const pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(this.color); // ⚠️ You must first fill it, and then create it xD
      ellipse(0, 0, this.r * 2);
      pop();
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

  // 🌐 Expose Ball globally
  window.Ball = Ball;
})();
