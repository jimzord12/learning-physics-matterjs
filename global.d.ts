import matter from 'matter-js';
import p5 from 'p5';
import { idGen as idGenerator } from 'src/utils/simpleIdGen';
import type { colorfulPalette } from './src/constants/colorPalette';
import { HandTrackingData, HandTrackingInstance } from './types/ml5-types';

interface ml5 {
  handPose: () => void;
}

declare global {
  /// -- Matter -- ///
  const Matter: typeof matter;

  /// -- ml5 -- ///
  const ml5: typeof ml5;
  type HandData = HandTrackingData;
  type HandPose = HandTrackingInstance;

  /// -- p5 -- ///
  // World Related
  const createCanvas: typeof p5.prototype.createCanvas;
  const createCapture: typeof p5.prototype.createCapture;
  const background: typeof p5.prototype.background;
  const width: typeof p5.prototype.width;
  const height: typeof p5.prototype.height;
  const image: typeof p5.prototype.image;
  const circle: typeof p5.prototype.circle;
  const noStroke: typeof p5.prototype.noStroke;
  let preload: typeof p5.prototype.preload;
  let setup: typeof p5.prototype.setup;
  let draw: typeof p5.prototype.draw;
  let mouseDragged: typeof p5.prototype.mouseDragged;
  let mousePressed: typeof p5.prototype.mousePressed;

  type p5Element = InstanceType<typeof p5.Element>;

  // Shape Creators
  const ellipse: typeof p5.prototype.ellipse;
  const rect: typeof p5.prototype.rect;
  const line: typeof p5.prototype.line;

  // Shape Modifiers
  const fill: typeof p5.prototype.fill;

  // Translate
  const translate: typeof p5.prototype.translate;
  const push: typeof p5.prototype.push;
  const pop: typeof p5.prototype.pop;
  const rotate: typeof p5.prototype.rotate;

  // Utilities
  const random: typeof p5.prototype.random;
  const dist: typeof p5.prototype.dist;

  // Modes
  const rectMode: typeof p5.prototype.rectMode;
  const ellipseMode: typeof p5.prototype.ellipseMode;

  // Properties
  const mouseX: typeof p5.prototype.mouseX;
  const mouseY: typeof p5.prototype.mouseY;
  const CENTER: typeof p5.prototype.CENTER;

  const idGen: typeof idGenerator;
  const colorfulPalette: string[];

  /// -- My Classes -- ///
  // class Ball {
  //   constructor(x: number, y: number, r: number, engine: Engine);
  //   x: number;
  //   y: number;
  //   r: number;
  //   body: Matter.Body;
  //   show(): void;
  //   isOffCanvas(canvasWidth: number, canvasHeight: number): boolean;
  //   resetXY(): void;
  // }

  // class Rect {
  //   constructor(
  //     x: number,
  //     y: number,
  //     w: number,
  //     h: number,
  //     engine: Engine,
  //     isStatic?: boolean
  //   );
  //   x: number;
  //   y: number;
  //   w: number;
  //   h: number;
  //   isStatic: boolean;
  //   body: Matter.Body;

  //   show(): void;
  //   getWidth(): number;
  //   getHeight(): number;
  //   resetXY(): void;
  //   rotate(): void;
  // }

  // class Bridge {
  //   constructor(
  //     engine: Engine,
  //     ballAmount: number,
  //     radius: number,
  //     length: number
  //   );

  //   composite: Matter.Composite;
  //   balls: BallInstance[];

  //   show(): void;
  //   removeWhenOffCanvas(canvasWidth: number, canvasHeight: number): void;
  //   changeFirstBallPosition(x: number, y: number): void;
  //   changeLastBallPosition(x: number, y: number): void;
  // }

  type BallInstance = InstanceType<typeof Ball>;
  type RectInstance = InstanceType<typeof Rect>;
  type BridgeInstance = InstanceType<typeof Bridge>;

  interface Window {
    // /// -- Matter.js -- ///
    // Matter: typeof matter;

    // /// -- p5 -- ///
    // p5: typeof p5;
    // createCanvas: typeof p5.prototype.createCanvas;
    // background: typeof p5.prototype.background;
    // width: typeof p5.prototype.width;
    // height: typeof p5.prototype.height;
    // preload: typeof p5.prototype.preload;
    // ellipse: typeof p5.prototype.ellipse;
    // rect: typeof p5.prototype.rect;
    // line: typeof p5.prototype.line;
    // fill: typeof p5.prototype.fill;
    // translate: typeof p5.prototype.translate;
    // push: typeof p5.prototype.push;
    // pop: typeof p5.prototype.pop;
    // rotate: typeof p5.prototype.rotate;
    // random: typeof p5.prototype.random;
    // dist: typeof p5.prototype.dist;
    // rectMode: typeof p5.prototype.rectMode;
    // ellipseMode: typeof p5.prototype.ellipseMode;
    // mouseX: typeof p5.prototype.mouseX;
    // mouseY: typeof p5.prototype.mouseY;
    // CENTER: typeof p5.prototype.CENTER;
    // preload: typeof p5.prototype.preload;
    // setup: typeof p5.prototype.setup;
    // draw: typeof p5.prototype.draw;
    // mouseDragged: typeof p5.prototype.mouseDragged;
    // mousePressed: typeof p5.prototype.mousePressed;

    /// -- Utility Functions -- ///
    idGen: typeof idGenerator;
    removeFromArray: <T>(arr: T[], value: T) => void;

    /// -- My Classes -- ///
    Ball: typeof Ball;
    Rect: typeof Rect;
    Bridge: typeof Bridge;
    BallInstance: Ball;
    RectInstance: Rect;
    BridgeInstance: Bridge;
    colorfulPalette: typeof colorfulPalette;
  }
}

export { BallInstance, RectInstance, BridgeInstance };
