import type { Engine } from 'matter-js';
import * as p5 from 'p5';
import { idGen as idGenerator } from 'src/utils/simpleIdGen';
import type { colorfulPalette } from './src/constants/colorPalette';

declare global {
  /// -- p5 -- ///
  // World Related
  const createCanvas: typeof p5.prototype.createCanvas;
  const background: typeof p5.prototype.background;
  const width: typeof p5.prototype.width;
  const height: typeof p5.prototype.height;

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

  /// -- My Classes -- ///
  // const Ball: {
  //   new (x: number, y: number, r: number, engine: Engine): {
  //     x: number;
  //     y: number;
  //     r: number;
  //     body: Matter.Body; // ✅ Now properly referenced from matter-js
  //     show(): void;
  //     isOffCanvas(canvasWidth, canvasHeight): boolean;
  //     resetXY(): void;
  //   };
  // };

  class Ball {
    constructor(x: number, y: number, r: number, engine: Engine);
    x: number;
    y: number;
    r: number;
    body: Matter.Body;
    show(): void;
    isOffCanvas(canvasWidth: number, canvasHeight: number): boolean;
    resetXY(): void;
  }

  class Rect {
    constructor(
      x: number,
      y: number,
      w: number,
      h: number,
      engine: Engine,
      isStatic?: boolean
    );
    x: number;
    y: number;
    w: number;
    h: number;
    isStatic: boolean;
    body: Matter.Body;

    show(): void;
    getWidth(): number;
    getHeight(): number;
    resetXY(): void;
    rotate(): void;
  }

  class Bridge {
    constructor(
      engine: Engine,
      ballAmount: number,
      radius: number,
      length: number
    );

    composite: Matter.Composite;
    balls: BallInstance[];

    show(): void;
    removeWhenOffCanvas(canvasWidth: number, canvasHeight: number): void;
    changeFirstBallPosition(x: number, y: number): void;
    changeLastBallPosition(x: number, y: number): void;
  }

  type BallInstance = InstanceType<typeof Ball>;
  type RectInstance = InstanceType<typeof Rect>;
  type BridgeInstance = InstanceType<typeof Bridge>;

  const colorfulPalette: string[];

  interface Window {
    /// -- p5 -- ///
    p5: typeof p5;
    setup: typeof p5.prototype.setup;
    draw: typeof p5.prototype.draw;
    mouseDragged: typeof p5.prototype.mouseDragged;
    mousePressed: typeof p5.prototype.mousePressed;
    removeFromArray: <T>(arr: T[], value: T) => void;

    /// -- My Classes -- ///
    Ball: typeof Ball;
    Rect: typeof Rect;
    Bridge: typeof Bridge;
    BallInstance: Ball;
    RectInstance: Rect;
    BridgeInstance: Bridge;
  }
}

export { BallInstance, RectInstance };
