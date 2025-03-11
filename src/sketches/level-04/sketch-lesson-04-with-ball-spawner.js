//@ts-check
(function () {
  const { Engine } = Matter;

  /** @type {InstanceType<typeof Matter.Engine>} */
  let engine;

  /** @type {BridgeInstance} */
  let bridge;

  /** @type {InstanceType<typeof BallSpawner>} */
  let ballSpawner;

  /** @type {HandPose}} */
  let handPose;

  /** @type {p5Element} */
  let video;

  /**
   * @typedef {Object} FingerCords
   * @property {number} x
   * @property {number} y
   */

  /** @type {{indexFinger: FingerCords | null}} */
  let hand_1 = { indexFinger: null };

  /** @type {{indexFinger: FingerCords | null}} */
  let hand_2 = { indexFinger: null };

  const CANVAS_W = 1280;
  const CANVAS_H = 720;

  const constraints = {
    video: {
      mandatory: {
        minWidth: CANVAS_W,
        minHeight: CANVAS_H,
      },
      optional: [{ maxFrameRate: 60 }],
    },
    audio: false,
  };

  preload = function () {
    // Load the handPose model
    // handPose = ml5.handPose({
    //   maxHands: 2,
    //   flipped: true,
    // });
  };

  // its the same as window.setup
  setup = function () {
    createCanvas(CANVAS_W, CANVAS_H);
    engine = Engine.create();
    // Create the webcam video and hide it
    // @ts-ignore
    // video = createCapture(constraints, { flipped: true });
    // video.hide();
    // start detecting hands from the webcam video
    // handPose.detectStart(video, ml5DataHandler);

    bridge = new Bridge(engine, 14, 30, 25);

    // ballSpawner = new BallSpawner(engine, Infinity, { min: 20, max: 35 }, 750);
    // ballSpawner.startCreatingBalls();
  };

  draw = function () {
    // Draw the webcam video
    Engine.update(engine);
    // image(video, 0, 0, width, height);

    // const indexFinger1 = hand_1.indexFinger;
    // const indexFinger2 = hand_2.indexFinger;

    // ballSpawner.removeWhenOffCanvas(CANVAS_W, CANVAS_H);

    // if (!(indexFinger1 && indexFinger2)) return;

    // bridge.changeFirstBallPosition(indexFinger1.x, indexFinger1.y);
    // bridge.changeLastBallPosition(indexFinger2.x, indexFinger2.y);

    bridge.show();

    // ballSpawner.show();
  };

  /**
   *
   * @param {HandData[]} data
   */
  function ml5DataHandler(data) {
    if (
      data &&
      data[0] &&
      data[1] &&
      data[0]['index_finger_tip'] &&
      data[1]['index_finger_tip']
    ) {
      const index_1 = data[0]['index_finger_tip'];
      const index_2 = data[1]['index_finger_tip'];

      hand_1 = { indexFinger: index_1 };
      hand_2 = { indexFinger: index_2 };
    }
  }

  mouseDragged = function () {};
  mousePressed = function () {};
})();
