import Calendar from './Calendar';
import FormEvent from './FormEvent';

const style = {
  display: 'flex',

}

const App = () => {
  return (
    <div style={style}>
      <Calendar />
      <FormEvent />
    </div>
  );
};

export default App;
