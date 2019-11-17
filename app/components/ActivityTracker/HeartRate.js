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

    this.heartRate = new HeartRateSensor();
    this.heartRate.addEventListener("reading", () => {
      this.amount = this.heartRate.heartRate;
      this.update();
    });

    this.bodyPresenceSensor = new BodyPresenceSensor();
    this.bodyPresenceSensor.addEventListener("reading", () => {
      if (!this.bodyPresenceSensor.present) {
        this.heartRate.stop();
        this.update();
      } else {
        this.heartRate.start();
      }
    });

    this.bodyPresenceSensor.start();

    this.incompleteIcon = "icons/stat_hr_open_32px.png";
    this.completeIcon = "icons/stat_hr_solid_32px.png";

    super();
  }

  update () {
    if (
      !this.element ||
      !this.amount
    ) {
      return;
    }

    if (!this.bodyPresenceSensor.present) {
      for (const i in this.texts) {
        this.texts[i].text = '--';
      }
    } else {
      for (const i in this.texts) {
        this.texts[i].text = this.amount.toLocaleString(locale.language);
      }
    }

    // Custom implementation of update
    // super.update();
  }
}
