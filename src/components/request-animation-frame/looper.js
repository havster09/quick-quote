export default class Loop {
  constructor() {
    this.subscribers = [];
    this.loopID = null;
    this.loop = this.loop.bind(this);
  }
  loop() {
    this.loopID = window.requestAnimationFrame(this.loop);
    if(this.subscribers) {
      this.subscribers.forEach(callback => {
        if(callback) {
          callback.call();
        }
      });
    }
  }
  start() {
    if (!this.loopID) {
      this.loop();
    }
  }
  stop() {
    window.cancelAnimationFrame(this.loopID);
  }
  subscribe(callback) {
    return this.subscribers.push(callback);
  }
  unsubscribe(id) {
    delete this.subscribers[id - 1];
  }
}
