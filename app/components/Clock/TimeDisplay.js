import { preferences } from "user-settings";
import * as util from "../../../common/utils";

export default class TimeDisplay {
  constructor (settings, element) {
    this.settings = settings;
    this.textDisplay = element;
  }

  update (e) {
    let date = e.date;

    const hours = date.getHours();
    const minutes = util.zeroPad(date.getMinutes());
    const seconds = util.zeroPad(date.getSeconds());

    try {
      this.time_format = this.settings.get('time_format').values[0].name;
    } catch (e) {
      this.time_format = '24 Hour';
    }

    if (this.time_format === "AM/PM") {
      hours = hours % 12 || 12;
    } else {
      hours = util.zeroPad(hours);
    }

    if (this.settings.get('show_seconds')) {
      this.textDisplay.text = `${hours}:${minutes}:${seconds}`;
    } else {
      this.textDisplay.text = `${hours}:${minutes}`;
    }
  }
}
