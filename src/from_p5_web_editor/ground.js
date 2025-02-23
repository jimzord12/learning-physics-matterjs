class Ground extends Rect {

  constructor(x, y, w, h) {
    super(x, y, w, h)
    Body.setStatic(this.body, true)
  }
}