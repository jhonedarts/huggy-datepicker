import DatePicker from 'huggy-datepicker';
import th from 'date-format-parse/lib/locale/th';

const lang = {
  formatLocale: th,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('th', lang);

export default lang;
