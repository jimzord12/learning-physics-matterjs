import type { Engine } from 'matter-js';
import * as p5 from 'p5';

// class StatsType {
//   REVISION: number;
//   dom: HTMLDivElement;

//   /**
//    * @param value 0:fps, 1: ms, 2: mb, 3+: custom
//    */
//   showPanel(value: number): void;
//   begin(): void;
//   end(): number;
//   update(): void;
// }

declare global {
  /// -- p5 -- ///
  // World Related
  const createCanvas: typeof p5.prototype.createCanvas;
  const background: typeof p5.prototype.background;

  // Shape Creators
  const ellipse: typeof p5.prototype.ellipse;
  const rect: typeof p5.prototype.rect;

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

  // const Stats: Stat;

  /// -- My Classes -- ///
  const Ball: {
    new (x: number, y: number, r: number, engine: Engine): {
      x: number;
      y: number;
      r: number;
      body: Matter.Body; // ✅ Now properly referenced from matter-js
      show(): void;
      isOffCanvas(canvasWidth, canvasHeight): boolean;
      resetXY(): void;
    };
  };

  const Rect: {
    new (
      x: number,
      y: number,
      w: number,
      h: number,
      engine: Engine,
      isStatic?: boolean
    ): {
      x: number;
      y: number;
      w: number;
      h: number;
      isStatic: boolean;
      body: Matter.Body;
      show(): void;
      getWidth(): void;
      getHeight(): void;
      resetXY(): void;
      rotate(): void;
    };
  };

  const BallInstance: InstanceType<typeof Ball>;
  const RectInstance: InstanceType<typeof Rect>;

  interface Window {
    /// -- p5 -- ///d
    p5: typeof p5;
    setup: typeof p5.prototype.setup;
    draw: typeof p5.prototype.draw;
    mouseDragged: typeof p5.prototype.mouseDragged;
    mousePressed: typeof p5.prototype.mousePressed;
    removeFromArray: <T>(arr: T[], value: T) => void;

    /// -- My Classes -- ///
    Ball: typeof Ball;
    Rect: typeof Rect;
    BallInstance: InstanceType<typeof Ball>;
    RectInstance: InstanceType<typeof Rect>;
  }
}

export {};
