import { battery, charger } from "power";

export default class Battery {
  constructor (settings, element) {
    if (!element) {
      console.log('Battery not enabled!');
    }

    this.settings = settings;

    this.element = element;

    this.isCharging = null;

    this.icon = this.element.getElementsByTagName('image')[0];
    this.text = this.element.getElementsByTagName('text')[0];

    battery.onchange = (e) => {
      this.update();
    }

    this.update();
  }

  setIconIncomplete () {
    this.icon.href = "icons/battery_open_24px.png";
  }

  setIconComplete () {
    this.icon.href = "icons/battery_solid_24px.png";
  }

  update () {
    if (!this.element) {
      return;
    }

    this.updateIsCharging();

    if (this.amount === Math.floor(battery.chargeLevel)) {
      return;
    }

    this.amount = Math.floor(battery.chargeLevel);

    this.amountText = this.amount + "%";

    this.text.text = this.amountText;
  }

  updateIsCharging () {
    if (this.isCharging === charger.connected) {
      return;
    }

    this.isCharging = charger.connected;

    if (this.isCharging) {
      this.setIconComplete();
    } else {
      this.setIconIncomplete();
    }
  }
}
