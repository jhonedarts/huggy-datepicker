import DatePicker from 'huggy-datepicker';
import uk from 'date-format-parse/lib/locale/uk';

const lang = {
  formatLocale: uk,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('uk', lang);

export default lang;
