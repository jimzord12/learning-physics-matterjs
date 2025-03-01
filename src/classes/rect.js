(function () {
  class Rect extends Identifiable {
    /** @type {Matter.Body} */
    body;

    /**
     *  Create a Rectangle with p5 & matter.js
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @param {import('matter-js').Engine} engine - The world's physics engine
     * @param {boolean} [isStatic = false]
     */
    constructor(x, y, w, h, engine, isStatic = false) {
      super();
      this.x = x ?? 0;
      this.y = y ?? 0;
      this.w = w;
      this.h = h;
      this.isStatic = isStatic;
      this.body = Matter.Bodies.rectangle(x, y, w, h, { isStatic });
      this.number = Matter.Composite.add(engine.world, this.body);
    }

    rotate() {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      this.resetXY();
      this.show();
      pop();
    }

    show() {
      rectMode(CENTER);
      rect(this.x, this.y, this.w, this.h);
    }

    getWidth() {
      dist(
        this.body.vertices[0].x,
        this.body.vertices[0].y,
        this.body.vertices[1].x,
        this.body.vertices[1].y
      );
    }

    getHeight() {
      dist(
        this.body.vertices[1].x,
        this.body.vertices[1].y,
        this.body.vertices[2].x,
        this.body.vertices[2].y
      );
    }

    resetXY() {
      this.x = 0;
      this.y = 0;
    }
  }

  window.Rect = Rect;
})();
