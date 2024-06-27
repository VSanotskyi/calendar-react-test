import { useState } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import dayjs from 'dayjs';

import HourlyTable from './HourlyTabel';

const Calendar = () => {
  const [isOpenTable, setIsOpenTable] = useState(false);
  const [date, setDate] = useState(null);

  const handleChange = ({$d}) => {
    const formattedDate = dayjs($d).format('DD.MM.YYYY');
    setDate(formattedDate)
    setIsOpenTable(true);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={handleChange} />
      </LocalizationProvider>
      {isOpenTable && <HourlyTable date={date}/>}
    </div>
  );
};

export default Calendar;
