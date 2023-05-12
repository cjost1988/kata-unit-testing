import {Engine} from "./Engine";

enum BlinkerStateEnum {
  off,
  left,
  right
}

export class Car {
  blinker: BlinkerStateEnum = BlinkerStateEnum.off

  constructor(private readonly engine: Engine) {}

  start(): void {
    this.engine.turnOn()
  }

  stop(): void {
    this.engine.turnOff()
  }

  blinkLeft(): void {
    if(!this.engine.isOn()) throw new Error('Engine must be on to blink')
    this.blinker = BlinkerStateEnum.left
  }

  blinkerRight(): void {
    if(!this.engine.isOn()) throw new Error('Engine must be on to blink')
    this.blinker = BlinkerStateEnum.right
  }

  blinkerOff(): void {
    if(!this.engine.isOn()) throw new Error('Engine must be on to blink')
    this.blinker = BlinkerStateEnum.off
  }
}
