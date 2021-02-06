import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';
import Customers from './components/customers/Customers';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Customers />
        </header>
      </div>
    </Provider>
  );
}

export default App;
