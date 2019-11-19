import document from "document";
import { preferences, locale } from "user-settings";
import { me as appbit } from "appbit";
import { today, goals } from "user-activity";

import * as util from "../../../common/utils";

import BaseIndicator from './BaseIndicator';

export default class Steps extends BaseIndicator {
  constructor (element) {
    this.element = element;

    if (
      !this.element ||
      !appbit.permissions.granted("access_activity")
    ) {
      console.log('Steps disabled!');
      return;
    }

    this.icons = {
      incomplete: "icons/stat_steps_open_32px.png",
      complete: "icons/stat_steps_solid_32px.png",
    };

    super();
  }

  update () {
    if (!this.element) {
      return;
    }

    this.amount = today.adjusted.steps;
    this.goal = goals.steps;

    this.text = this.amount.toLocaleString(locale.language);

    super.update();
  }
}
