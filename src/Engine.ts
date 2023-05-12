export class Engine {
  private on: boolean = false
  turnOn(): void {
    if(this.on) throw new Error('Engine already on')
    this.on = true
  }
  turnOff(): void {
    if(!this.on) throw new Error('Engine already off')
    this.on = false
  }

  isOn(): boolean {
    return this.on
  }
}
