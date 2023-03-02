import logo from './logo.svg';
import './App.css';
import List from './List';

function App() {
  const items = [
    {id: 1, name: 'Facebook'},
    {id: 2, name: 'Instagram'},
    {id: 3, name: 'WhatsApp'},
  ];
  return (
    <div className='list'>
      <List items={items} />
    </div>
  );
}

export default App;
