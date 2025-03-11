//@ts-check
(function () {
  const engine = Matter.Engine.create();

  const CANVAS_W = 800;
  const CANVAS_H = 640;

  const setup = function () {
    // createCanvas(CANVAS_W, CANVAS_H);
    const render = Matter.Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: CANVAS_W,
        height: CANVAS_H,
      },
    });

    const width = render.options.width ?? CANVAS_W / 2;
    const height = render.options.height
      ? render.options.height / 4
      : CANVAS_H / 4;

    // Create staff Here
    const ballA = Matter.Bodies.circle(width / 2, height / 2, 10, {
      isStatic: true,
    });
    const ballB = Matter.Bodies.circle(100, 70, 20);
    const ballC = Matter.Bodies.circle(230, 100, 20);
    const ballD = Matter.Bodies.circle(260, 130, 20);
    const ballE = Matter.Bodies.circle(290, 160, 20);

    const balls = Matter.Composite.create({
      label: 'balls',
      bodies: [ballA, ballB, ballC, ballD, ballE],
    });

    Matter.Composites.chain(balls, 0, 0, -0.2, -0.2, {
      stiffness: 0.025,
      length: 40,
      render: {
        type: 'line',
        strokeStyle: 'blue',
        lineWidth: 2,
      },
    });

    // Adding to the world
    Matter.Composite.add(engine.world, balls);

    Matter.Render.run(render);

    // Running the Engine
    /// Creating a runner
    const runner = Matter.Runner.create();

    Matter.Runner.run(runner, engine);
    // Running the Engine
  };

  const draw = function () {
    // background(200);
    // Engine.update(engine);
  };

  const mouseDragged = function () {};
  const mousePressed = function () {};
})();
