import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  calendarEvents,
  birthdayEvents,
  holidayEvents,
  discoveredEvents,
  meetupEvents,
  otherEvents,
} from "../../components/data/events";

// // Define the initial state using that type
const initialState = {
  eventSources: [
    calendarEvents,
    birthdayEvents,
    holidayEvents,
    discoveredEvents,
    meetupEvents,
    otherEvents,
  ],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    createEvent: {
      reducer: (state, action) => {
        const {
          payload: { category, ...data },
        } = action;
        const source = state.eventSources.find(
          (src) => src.category === category
        );

        source?.events.push(data);
      },
      prepare: (
        title,
        startDate,
        endDate,
        category,
        startTime,
        endTime,
        description
      ) => {
        const start = startTime ? `${startDate}T${startTime}:00` : startDate;
        const end = endTime ? `${endDate}T${endTime}:00` : endDate;
        const data = {
          id: uuidv4(),
          title,
          start,
          end,
          description,
          category,
        };
        return { payload: { ...data } };
      },
    },
    editEvent: {
      reducer: (state, action) => {
        const {
          payload: { category, ...data },
        } = action;
        const source = state.eventSources.find(
          (src) => src.category === category
        );
        if (source) {
          const index = source.events.findIndex((el) => el.id === data.id);
          if (index !== undefined && index >= 0) {
            source.events[index] = data;
          }
        }
      },
      prepare: (
        id,
        title,
        startDate,
        endDate,
        category,
        startTime,
        endTime,
        description
      ) => {
        const start = startTime ? `${startDate}T${startTime}:00` : startDate;
        const end = endTime ? `${endDate}T${endTime}:00` : endDate;
        const data = {
          category,
          id,
          title,
          start,
          end,
          description,
        };
        return { payload: { ...data } };
      },
    },
    deleteEvent: (state, action) => {
      const {
        payload: { id, category },
      } = action;
      const source = state.eventSources.find(
        (src) => src.category === category
      );
      if (source) {
        const index = source.events.findIndex((el) => el.id === id);
        if (index !== undefined && index >= 0) {
          source.events.splice(index, 1);
        }
      }
    },
  },
});

export const { createEvent, editEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;
