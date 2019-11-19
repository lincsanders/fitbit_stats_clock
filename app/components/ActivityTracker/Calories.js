import document from "document";
import { preferences, locale } from "user-settings";
import { me as appbit } from "appbit";
import { today, goals } from "user-activity";

import * as util from "../../../common/utils";

import BaseIndicator from './BaseIndicator';

export default class Calories extends BaseIndicator {
  constructor (element) {
    this.element = element;

    if (
      !this.element ||
      !appbit.permissions.granted("access_activity")
    ) {
      console.log('Calories disabled!');
      return;
    }

    this.icons = {
      incomplete: "icons/stat_cals_open_32px.png",
      complete: "icons/stat_cals_solid_32px.png",
    };

    super();
  }

  update () {
    if (!this.element) {
      return;
    }

    this.amount = today.adjusted.calories;
    this.goal = goals.calories;

    this.text = this.amount.toLocaleString(locale.language);

    super.update();
  }
}
