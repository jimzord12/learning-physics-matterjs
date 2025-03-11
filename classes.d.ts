import { Engine } from 'matter-js';
import { idGen as idGenerator } from 'src/utils/simpleIdGen';

declare class Identifiable {
  constructor();
  id: number;
  static idGenerator: Generator;
  static createId: number;
}

declare class Ball {
  constructor(x: number, y: number, r: number);
  x: number;
  y: number;
  r: number;
  body: Matter.Body;
  show(): void;
  isOffCanvas(canvasWidth: number, canvasHeight: number): boolean;
  resetXY(): void;
}

declare class Rect {
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

declare class Bridge {
  constructor(
    engine: Engine,
    ballAmount: number,
    radius: number,
    length: number
  );

  composite: Matter.Composite;
  balls: Ball[];

  show(): void;
  removeWhenOffCanvas(canvasWidth: number, canvasHeight: number): void;
  changeFirstBallPosition(x: number, y: number): void;
  changeLastBallPosition(x: number, y: number): void;
}
