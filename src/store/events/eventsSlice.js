import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [
      {
        id: 'z7iYJmTarpUSUPPtrUUOq',
        title: 'dfgffdg',
        description: 'fdgfdgfdg',
        date: '21.06.2024',
        time: '16.20',
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
