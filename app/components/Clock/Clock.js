import clock from "clock";
import { preferences } from "user-settings";
import * as util from "../../../common/utils";

import TimeDisplay from "./TimeDisplay";
import DateDisplay from "./DateDisplay";

export default class Clock {
  constructor (settings, timeElement, dateElement) {
    this.settings = settings;

    this.timeDisplay = new TimeDisplay(settings, timeElement);
    this.dateDisplay = new DateDisplay(settings, dateElement);

    clock.granularity = "seconds";

    clock.ontick = (e) => {
      this.onTick(e);
    }
  }

  onTick (e) {
    this.timeDisplay.update(e);
    this.dateDisplay.update(e);
  }
}
