import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [
      {
        id: '1',
        title: 'Meeting with team',
        date: '21.06.2024',
        time: '16.20',
      },
      {
        id: '2',
        title: 'Breakfast with friend',
        date: '27.06.2024',
        time: '13.00',
      },
    ],
    eventsPerDay: [],
  },

  reducers: {
    addEvent: (state, { payload }) => {
      state.events.push(payload);
    },
    filterEvents: (state, { payload }) => {
      state.eventsPerDay = state.events.filter(e => e.date === payload);
    },
    deleteEvent: (state, { payload }) => {
      state.events = state.events.filter(e => e.id === payload.id);

    },
  },
});

const { addEvent, filterEvents, deleteEvent } = eventsSlice.actions;
const eventsReducer = eventsSlice.reducer;

export {
  eventsReducer,
  addEvent,
  filterEvents,
  deleteEvent,
};
