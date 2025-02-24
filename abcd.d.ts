/// <reference types="p5" />
import p5 from 'p5';
// type A = typeof Matter;

declare global {
  const createCanvas: typeof p5.prototype.createCanvas;
  const background: typeof p5.prototype.background;
  const ellipse: typeof p5.prototype.ellipse;
  // const setup: typeof p5.prototype.setup;
  // const draw: typeof p5.prototype.draw;
  const push: typeof p5.prototype.push;
  const pop: typeof p5.prototype.pop;
  const translate: typeof p5.prototype.translate;

  // const Matter: typeof import('matter-js'); // ✅ Correct global Matter reference
  const Ball: {
    new (x: number, y: number, r: number): {
      x: number;
      y: number;
      r: number;
      body: Matter.Body;
      show(): void;
    };
  };

  interface Window {
    setup: typeof p5.prototype.setup;
    draw: typeof p5.prototype.draw;
    Ball: typeof Ball;
  }
}

export {};
