class Rect {
  constructor(x, y, w, h) {
    this.x = x ?? 0
    this.y = y ?? 0
    this.w = w
    this.h = h
    this.body = Bodies.rectangle(x, y ,w ,h)
  }
  
  render() {
    rectMode(CENTER)
    rect(this.x, this.y, this.w, this.h)
  }
  
  getWidth() {
    dist(this.body.vertices[0].x, this.body.vertices[0].y, this.body.vertices[1].x, this.body.vertices[1].y);
  }

  getHeight() {
    dist(this.body.vertices[1].x, this.body.vertices[1].y, this.body.vertices[2].x, this.body.vertices[2].y);
  }
  
  resetXY() {
    this.x = 0
    this.y = 0
  }

}

