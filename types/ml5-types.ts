import p5 from 'p5';

export type HandKeypoint = {
  x: number;
  y: number;
  x3D: number;
  y3D: number;
  z3D: number;
};

export type HandTrackingData = {
  confidence: number;
  handedness: 'Left' | 'Right';
  wrist: HandKeypoint;
  thumb_cmc: HandKeypoint;
  thumb_mcp: HandKeypoint;
  thumb_ip: HandKeypoint;
  thumb_tip: HandKeypoint;
  index_finger_mcp: HandKeypoint;
  index_finger_pip: HandKeypoint;
  index_finger_dip: HandKeypoint;
  index_finger_tip: HandKeypoint;
  middle_finger_mcp: HandKeypoint;
  middle_finger_pip: HandKeypoint;
  middle_finger_dip: HandKeypoint;
  middle_finger_tip: HandKeypoint;
  ring_finger_mcp: HandKeypoint;
  ring_finger_pip: HandKeypoint;
  ring_finger_dip: HandKeypoint;
  ring_finger_tip: HandKeypoint;
  pinky_finger_mcp: HandKeypoint;
  pinky_finger_pip: HandKeypoint;
  pinky_finger_dip: HandKeypoint;
  pinky_finger_tip: HandKeypoint;
  keypoints: HandKeypoint[];
  keypoints3D: HandKeypoint[];
};

type BoundingBox = {
  x: number;
  y: number;
  w: number;
  h: number;
};

type HandDetectorModel = {
  modelUrl: string;
  loadOptions: Record<string, any>;
  version: string;
  io: any;
  resourceManager: any;
};

type HandTrackingRuntimeConfig = {
  flipHorizontal: boolean;
};

type HandTrackingUserOptions = {
  maxHands: number;
  flipped: boolean;
};

export type HandTrackingInstance = {
  modelName: 'MediaPipeHands';
  model: any | null;
  userOptions: HandTrackingUserOptions;
  runtimeConfig: HandTrackingRuntimeConfig;
  detectMedia: HTMLVideoElement | null;
  detectCallback: (data: any) => void;
  detecting: boolean;
  detectorModel: HandDetectorModel;
  landmarkModel: HandDetectorModel;
  maxHands: number;
  anchorTensor: BoundingBox;
  anchors: BoundingBox[];
  prevHandRectsFromLandmarks: any | null;
  prevCall: string;
  ready: Promise<any>;
  signalStop: boolean;
  detectStart: (video: p5.Element, dataHandler: Function) => void;
};
