import Contacts from './components/contacts/Contacts';
import NavBar from './components/NavBar';
import './styles/App.scss';
import { Provider } from "react-redux";
import store from './store';
function App() {
  return (
    <Provider store={store}>


      <div className="app">
        <NavBar />
        <div className="container"></div>
        <div className="py-3"></div>
        <Contacts />
      </div>

    </Provider>
  );
}

export default App;
