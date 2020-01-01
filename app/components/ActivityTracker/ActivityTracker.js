import document from "document";
import { preferences } from "user-settings";
import { me as appbit } from "appbit";
import { today } from "user-activity";
import Steps from './Steps';
import Floors from './Floors';
import ActiveMinutes from './ActiveMinutes';
import Calories from './Calories';
import Distance from './Distance';
import HeartRate from './HeartRate';

import * as util from "../../../common/utils";

export default class ActivityTracker {
  constructor (settings) {
    this.settings = settings;

    // Does it's own updating, no need to put in the update function
    this.heartRate = new HeartRate(document.getElementById('heart-rate'));

    // These will be in the update function
    this.steps = new Steps(document.getElementById('steps'));
    this.floors = new Floors(document.getElementById('floors'));
    this.activeMinutes = new ActiveMinutes(document.getElementById('active-minutes'));
    this.calories = new Calories(document.getElementById('calories'));
    this.distance = new Distance(settings, document.getElementById('distance'));
  }

  update (e) {
    this.steps.update();
    this.floors.update();
    this.activeMinutes.update();
    this.calories.update();
    this.distance.update();
  }
}
