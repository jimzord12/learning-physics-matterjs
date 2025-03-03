//@ts-check
(function () {
  const { Engine, Composite, Render, Runner, Bodies, Body } = Matter;
  const engine = Engine.create();

  const CANVAS_W = 400;
  const CANVAS_H = 400;

  window.setup = function () {
    // createCanvas(CANVAS_W, CANVAS_H);
    const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: CANVAS_W,
        height: CANVAS_H,
      },
    });

    // Create staff Here
    const ballA = Bodies.circle(200, 50, 10, { isStatic: true });
    const ballB = Bodies.circle(100, 10, 40, { density: 0.1 });
    const ballC = Bodies.circle(200, 100, 20);
    const ballD = Bodies.circle(200, 100, 20);
    // const ground = Bodies.rectangle(200, 350, 400, 7.5, {
    //   isStatic: true,
    // });

    const AB_Constraint = Matter.Constraint.create({
      bodyA: ballA,
      bodyB: ballB,
      length: 150,
      stiffness: 0.02, // Lower stiffness makes it bouncier
      damping: 0.05, // Reduces oscillation
    });

    // Adding to the world
    Composite.add(engine.world, [
      ballA,
      ballB,
      ballC,
      ballD,
      // ground,
      AB_Constraint,
    ]);

    Render.run(render);

    // Running the Engine
    /// Creating a runner
    const runner = Runner.create();

    Runner.run(runner, engine);
    // Running the Engine

    setTimeout(() => {
      Body.applyForce(ballB, ballB.position, { x: 0, y: 200 });
      Body.applyForce(ballD, ballD.position, { x: 0, y: -0.2 });
      console.log('AAAAAAAAAAA');
    }, 3000);
    // Apply an initial push to ballB
  };

  window.draw = function () {
    // background(200);
    // Engine.update(engine);
  };

  window.mouseDragged = function () {};
  window.mousePressed = function () {};
})();
