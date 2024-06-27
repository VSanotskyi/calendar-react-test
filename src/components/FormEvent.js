import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { TextField, Button, Box } from '@mui/material';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import { nanoid } from 'nanoid'

import { addEvent } from '../store/events/eventsSlice';

const FormEvent = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, control, reset, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      id: nanoid(),
      ...data,
      date: dayjs(data.date).format('DD.MM.YYYY'),
      time: dayjs(data.time).format('HH.mm'),
    };
    dispatch(addEvent(formattedData));
    reset()
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto' }}
      >
        <h3>Add new event</h3>
        <TextField
          label="Title"
          {...register('title', { required: true })}
        />
        {errors.title && <p style={{color: 'red'}}>This is required</p>}
        <TextField
          label="Description"
          {...register('description')}
        />
        <Controller
          name="date"
          control={control}
          defaultValue={null}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <DatePicker
              label="Date"
              value={field.value}
              onChange={field.onChange}
              renderInput={(params) => <TextField {...params} required />}
            />
          )}
        />
        {errors.date && <p style={{color: 'red'}}>This is required</p>}
        <Controller
          name="time"
          control={control}
          defaultValue={null}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TimePicker
              label="Time"
              ampm={false}
              value={field.value}
              onChange={field.onChange}
              renderInput={(params) => <TextField {...params} required />}
            />
          )}
        />
        {errors.time && <p style={{color: 'red'}}>This is required</p>}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default FormEvent;
