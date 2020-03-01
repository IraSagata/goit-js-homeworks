"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.secs = document.querySelector('[data-value="secs"]');
    this.mins = document.querySelector('[data-value="mins"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.days = document.querySelector('[data-value="days"]');

    this.action = this.action.bind(this);
    this.timerId = setInterval(this.action, 1000);
  }

  action() {
    const time = this.targetDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.secs.textContent = secs < 10 ? "0" + secs : secs;
    this.mins.textContent = mins < 10 ? "0" + mins : mins;
    this.hours.textContent = hours < 10 ? "0" + hours : hours;
    this.days.textContent = days;
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2020")
});

countdownTimer.action();
