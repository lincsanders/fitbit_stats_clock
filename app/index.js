import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { display } from "display";

import Clock from "./components/Clock/Clock";
import Battery from "./components/Battery/Battery";
import ActivityTracker from "./components/ActivityTracker/ActivityTracker";

const clock = new Clock(
  document.getElementById("time"),
  document.getElementById("calendar")
);

const battery = new Battery(
  document.getElementById("battery")
);

const activityTracker = new ActivityTracker();

const updateComponents = () => {
  if (display.on) {
    activityTracker.update();
  }
};

display.onchange = () => updateComponents();

const updateInterval = setInterval(() => {
  updateComponents();
}, 2000)
