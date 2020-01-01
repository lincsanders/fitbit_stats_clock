import { gettext as t } from "i18n";
import { preferences, locale } from "user-settings";
import * as util from "../../../common/utils";

export default class DateDisplay {
  constructor (settings, element) {
    this.settings = settings;
    this.container = element;
  }

  update (e) {
    let date = e.date;

    const day = date.getDay();

    this.container.getElementById('day').style.fill = this.settings.get('day_color') || 'lightblue';
    this.container.getElementById('date').style.fill = this.settings.get('date_color') || 'lightblue';

    const days = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wednesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday',
    };

    const dateString = [
      date.getFullYear(),
      util.zeroPad(date.getMonth()+1),
      util.zeroPad(date.getDate())
    ].join('-');
    const dayString = t(days[day]).toUpperCase();

    this.container.getElementById('day').text = dayString;
    this.container.getElementById('date').text = dateString;
  }
}
