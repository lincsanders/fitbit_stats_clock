import { locale } from "user-settings";

export default class BaseIndicator {
  constructor () {
    this.goalReached = false;

    this.texts = this.element.getElementsByTagName('text');
    this.icons = this.element.getElementsByTagName('image');

    this.setIconIncomplete();

    this.update();
  }

  setIconIncomplete () {
    for (const i in this.icons) {
      this.icons[i].href = this.incompleteIcon;
    }
  }

  setIconComplete () {
    for (const i in this.icons) {
      this.icons[i].href = this.completeIcon;
    }
  }

  update () {
    if (!this.element) {
      return;
    }

    for (const i in this.texts) {
      this.texts[i].text = this.amountText || this.amount.toLocaleString(locale.language);
    }

    if (!this.goalReached && (this.amount >= this.goal)) {
      this.goalReached = true;
      this.setIconComplete();
    }

    if (this.goalReached && (this.amount < this.goal)) {
      this.goalReached = true;
      this.setIconComplete();
    }
  }
}
