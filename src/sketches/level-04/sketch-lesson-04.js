//@ts-check
(function () {
  const { Engine } = Matter;

  let engine;

  /** @type {BridgeInstance} */
  let bridge;
  let handPose;
  let video;
  let hand = { index: null, pinky: null };

  const CANVAS_W = 800;
  const CANVAS_H = 640;

  const constraints = {
    video: {
      mandatory: {
        minWidth: 640,
        minHeight: 480,
      },
      optional: [{ maxFrameRate: 45 }],
    },
    audio: false,
  };

  preload = function () {
    // Load the handPose model
    handPose = ml5.handPose({
      maxHands: 1,
      flipped: true,
    });
    console.log('ml5 handPose: ', handPose);
  };

  // its the same as window.setup
  setup = function () {
    createCanvas(640, 480);
    engine = Engine.create();
    // Create the webcam video and hide it
    video = createCapture(constraints, { flipped: true });
    console.log(video);
    video.hide();
    // start detecting hands from the webcam video
    handPose.detectStart(video, (data) => {
      if (data && data[0] && data[0]['index_finger_tip']) {
        const index = data[0]['index_finger_tip'];
        const pinky = data[0]['pinky_finger_tip'];
        // console.log(data[0]['index_finger_tip']);
        hand = { index, pinky };
      }
    });

    bridge = new Bridge(engine, 8, 15, 17.5);
  };

  draw = function () {
    // Draw the webcam video
    image(video, 0, 0, width, height);
    Engine.update(engine);

    const indexFinger = hand.index;
    const pinkyFinger = hand.pinky;
    if (!(indexFinger && pinkyFinger)) return;

    bridge.changeFirstBallPosition(indexFinger.x, indexFinger.y);
    // bridge.changeLastBallPosition(pinkyFinger.x, pinkyFinger.y);

    bridge.show();
  };

  mouseDragged = function () {};
  mousePressed = function () {};
})();
