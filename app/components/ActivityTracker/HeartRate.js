import document from "document";
import { preferences, locale } from "user-settings";
import { me as appbit } from "appbit";
import { HeartRateSensor } from "heart-rate";
import { BodyPresenceSensor } from "body-presence";
import { today, goals } from "user-activity";

import * as util from "../../../common/utils";

import BaseIndicator from './BaseIndicator';

export default class HeartRate extends BaseIndicator {
  constructor (element) {
    this.element = element;

    if (
      !this.element ||
      !HeartRateSensor ||
      !BodyPresenceSensor ||
      !appbit.permissions.granted("access_heart_rate")
    ) {
      console.log('Heart Rate disabled!');
      return;
    }

    this.icons = {
      incomplete: "icons/stat_hr_open_32px.png",
      complete: "icons/stat_hr_solid_32px.png",
    };

    super();

    this.icon = 'incomplete';

    this.heartRate = new HeartRateSensor();
    this.bodyPresenceSensor = new BodyPresenceSensor();

    this.heartRate.addEventListener("reading", () => {
      if (this.bodyPresenceSensor.present) {
        if (this.amount != this.heartRate.heartRate) {
          this.amount = this.heartRate.heartRate;
          this.update();
        }
      }
    });

    this.bodyPresenceSensor.addEventListener("reading", () => {
      if (!this.bodyPresenceSensor.present) {
        console.log('Body Sensor DISCONNECTED');
        this.heartRate.stop();
        this.update();
      } else {
        console.log('Body Sensor CONNECTED');
        this.heartRate.start();
      }
    });

    this.bodyPresenceSensor.start();
  }

  update () {
    if (
      !this.element
    ) {
      return;
    }

    if (!this.amount || !this.bodyPresenceSensor.present) {
      this.text = '--';
    } else {
      this.text = this.amount.toLocaleString(locale.language);
    }

    // Custom implementation of update
    // super.update();
  }
}
