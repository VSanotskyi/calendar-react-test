import { useDispatch, useSelector } from 'react-redux';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

import { eventsSelect } from '../store/events/eventsSelect';
import { deleteEvent } from '../store/events/eventsSlice';
import { useEffect } from 'react';

const HourlyTable = ({date}) => {
  const dispatch = useDispatch();
  const events = useSelector(eventsSelect);

  const renderEventsForHour = (hour) => {
    const filterEvents = events.filter(e => {
      return  e.date === date
    })

    const eventsForHour = filterEvents.filter(event => {
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
          console.log(event);
          dispatch(deleteEvent(event.id));
        }}>Delete
        </button>
      </li>))}
    </ul>);
  };

  useEffect(() => {

  }, [events]);

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
