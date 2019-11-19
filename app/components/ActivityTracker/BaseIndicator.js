import { locale } from "user-settings";

export default class BaseIndicator {
  constructor () {
    this.goalReached = false;

    this.label = this.element.getElementsByTagName('text')[0];
    this.image = this.element.getElementsByTagName('image')[0];

    this._text = '';
    this._icon = null;
    this.icons = this.icons || {};

    this.update();
  }

  set icon (icon) {
    if (this.icons[icon] === undefined) {
      return;
    }

    if (this._icon === icon) {
      return;
    }

    if (!icon) {
      return;
    }

    this.image.href = this._icon = this.icons[icon];
  }

  get icon () {
    return this._icon;
  }

  set text (text) {
    if (this._text === text) {
      return;
    }

    this.label.text = this._text = text;
  }

  get text () {
    return this._text;
  }

  update () {
    if (!this.element) {
      return;
    }

    const hasReachedGoal = this.amount >= this.goal;

    if (hasReachedGoal !== this.goalReachedForToday) {
      if (hasReachedGoal) {
        this.goalReached = true;
        this.icon = 'complete';
      } else {
        this.goalReached = false;
        this.icon = 'incomplete';
      }

      this.goalReachedForToday = hasReachedGoal;
    }
  }
}
