import { useState } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import dayjs from 'dayjs';

import { useDispatch } from 'react-redux';
import { filterEvents } from '../store/events/eventsSlice';

import HourlyTable from './HourlyTabel';

const Calendar = () => {
  const dispatch = useDispatch()
  const [isOpenTable, setIsOpenTable] = useState(false);

  const handleChange = ({$d}) => {
    const date = dayjs($d).format('DD.MM.YYYY');
    dispatch(filterEvents(date))
    setIsOpenTable(true);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={handleChange} />
      </LocalizationProvider>
      {isOpenTable && <HourlyTable/>}
    </div>
  );
};

export default Calendar;
