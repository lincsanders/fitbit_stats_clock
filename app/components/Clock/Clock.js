import clock from "clock";
import { preferences } from "user-settings";
import * as util from "../../../common/utils";

import TimeDisplay from "./TimeDisplay";
import DateDisplay from "./DateDisplay";

export default class Clock {
  constructor (timeElement, dateElement) {  
    this.timeDisplay = new TimeDisplay(timeElement);
    this.dateDisplay = new DateDisplay(dateElement);

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