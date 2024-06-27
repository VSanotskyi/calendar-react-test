import Calendar from './Calendar';
import FormEvent from './FormEvent';

const style = {
  display: 'flex',
  gap: "100px",
  padding: '10px 20px'
};

const App = () => {
  return (<div style={style}>
    <Calendar />
    <FormEvent />
  </div>);
};

export default App;
