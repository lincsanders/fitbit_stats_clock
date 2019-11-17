import { gettext as t } from "i18n";
import { preferences, locale } from "user-settings";
import * as util from "../../../common/utils";

export default class DateDisplay {
  constructor (element) {    
    this.container = element;
  }
  
  update (e) {
    let date = e.date;
    const day = date.getDay();
    
    const days = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wednesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday',
    };
    
    const dateString = date.toLocaleDateString(locale.language);

    const dayString = t(days[day]).toUpperCase();

    this.container.getElementById('day').text = dayString;
    this.container.getElementById('date').text = dateString;
  }
}