import './App.css'
import Todo from './components/todo'
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <div style={{
        background: '#2b2b2b',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '500px',
        color: '#fff',
        textAlign: 'center'
      }}>
        <Todo />
      </div>
    </Provider>
  )
}

export default App;
