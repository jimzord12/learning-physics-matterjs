(function () {
  const { Bodies } = Matter;

  /**
   * Represents a Ball in the physics engine.
   */
  class Ball {
    /**
     * @type {import('matter-js').Body}
     */
    body;

    /**
     * @param {number} x - The x position of the ball.
     * @param {number} y - The y position of the ball.
     * @param {number} r - The radius of the ball.
     */
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(x, y, r, { restitution: 0.8 });
    }

    /**
     * Displays the ball using p5.js.
     */
    show() {
      const pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipse(0, 0, this.r * 2);
      pop();
    }
  }

  // 🌐 Expose Ball globally
  window.Ball = Ball;
})();
