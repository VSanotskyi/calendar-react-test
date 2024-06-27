import { useDispatch, useSelector } from 'react-redux';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

import { eventsPerDaySelect } from '../store/events/eventsSelect';
import { deleteEvent } from '../store/events/eventsSlice';

const HourlyTable = () => {
  const eventsPerDay = useSelector(eventsPerDaySelect);
  const dispatch = useDispatch();

  const renderEventsForHour = (hour) => {
    const eventsForHour = eventsPerDay.filter(event => {
      const normalizeTme = Number(Math.floor(event.time));
      return normalizeTme === hour;
    });
    return (<ul>
      {eventsForHour.map((event, index) => (<li key={index}>
        <EventIcon />
        <p>{event.title}</p>
        {event.description && <p>{event.description}</p>}
        <p>{event.date}</p>
        <p>{event.time}</p>
        <button onClick={() => {
          dispatch(deleteEvent(event.id));
        }}>Delete
        </button>
      </li>))}
    </ul>);
  };

  const renderHourlyTable = () => {
    let rows = [];
    for (let hour = 0; hour < 24; hour++) {
      rows.push(<TableRow key={hour}>
        <TableCell>{hour}:00</TableCell>
        <TableCell>{renderEventsForHour(hour)}</TableCell>
      </TableRow>);
    }
    return rows;
  };

  return (<TableContainer component={Paper}>
    <Table aria-label="hourly table">
      <TableHead>
        <TableRow>
          <TableCell>Hours</TableCell>
          <TableCell>Events</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderHourlyTable()}
      </TableBody>
    </Table>
  </TableContainer>);
};

export default HourlyTable;
