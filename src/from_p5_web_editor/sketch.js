const  {Engine, Body, Bodies, Composite} = Matter;

const rotateAndRenderRect = (_rect) => {
  
  push();
  translate(_rect.body.position.x, _rect.body.position.y)
  rotate(_rect.body.angle)
  _rect.resetXY()
  _rect.render()
  pop();
}

const engine = Engine.create()
const boxes = [];
let ground;

function mousePressed () {
  print("New Box created!")
  const _rect = new Rect(mouseX, mouseY, 20, 20)
  Body.setAngularVelocity(_rect.body, 0.2);
  
  boxes.push(_rect)
  Composite.add(engine.world, _rect.body)
}

setup = () => {
    createCanvas(400, 400);
    
  // box = Bodies.rectangle(100, 100 ,50 ,50)
  _box = new Rect(100, 100 ,50 ,50)
  Body.setAngularVelocity(_box.body, 0.2);
  ground = new Ground(200, 300, 400, 10)
  
  boxes.push(_box)

  Composite.add(engine.world, [_box.body, ground.body])
};

draw = () => {
  background(200);
  

  Engine.update(engine)
  
  
  boxes.forEach((b) => {
    rotateAndRenderRect(b)
  })

  ground.render()
  
  
  };

