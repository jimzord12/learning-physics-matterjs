
//@ts-check
(function () {
  const { Engine } = Matter;
  let engine;
  let bodies = [];
  let ground;
  let num = 15;
  let radius = 10;
  let length = 25;
  let chains, mouse, mouseConstraint;
  let colorPalette = [
    '#abcd5e',
    '#14976b',
    '#2b67af',
    '#62b6de',
    '#f589a3',
    '#ef562f',
    '#fc8405',
    '#f9d531',
  ];
  // const engine = Engine.create({
  //   timing: {
  //     timeScale: 0.01,
  //   },
  // });

  /** @type {BridgeInstance} */
  let bridge;

  const CANVAS_W = 800;
  const CANVAS_H = 640;

  // its the same as window.setup
  setup = function () {
    createCanvas(400, 400);
    engine = Engine.create();

    mouse = Matter.Mouse.create(document.body);
    mouseConstraint = Matter.MouseConstraint.create(engine, mouse);

    for (let i = 0; i < num; i++) {
      let x = width / 2 + i * 20;
      let y = random(10, 40);

      let fixed;
      if (i == 0) {
        fixed = true;
      } else {
        fixed = false;
      }
      bodies[i] = Matter.Bodies.circle(x, y, radius, { isStatic: fixed });
    }

    chains = Matter.Composite.create();
    Matter.Composite.add(chains, bodies);
    let options = {
      stiffness: 0.25,
      length: length,
    };
    Matter.Composites.chain(chains, 0, 0, 0, 0, options);

    ground = Matter.Bodies.rectangle(width / 2, 350, width, 10, { isStatic: true });
    Matter.Composite.add(engine.world, [chains, ground, mouseConstraint]);
  };

  draw = function () {
    background(220);
    Engine.update(engine);
    for (let i = 0; i < bodies.length; i++) {
      let x1 = bodies[i].position.x;
      let y1 = bodies[i].position.y;
      fill(colorPalette[i % colorPalette.length]);
      ellipse(x1, y1, radius * 2, radius * 2);

      let x2, y2;
      if (i < bodies.length - 1) {
        x2 = bodies[i + 1].position.x;
        y2 = bodies[i + 1].position.y;
        line(x1, y1, x2, y2);
      }
    }

    fill(0);
    rectMode(CENTER);
    rect(width / 2, 350, width, 10);
  };

  mouseDragged = function () {};
  mousePressed = function () {};
})();
