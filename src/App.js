import Contacts from './components/contacts/Contacts';
import NavBar from './components/NavBar';
import './styles/App.scss';
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';



function App() {
  return (
    <Provider store={store}>


      <Router>
        <div className="app">
          <NavBar />
          <div className="container"></div>
          <div className="py-3"></div>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contact/add" component={AddContact} />
        </div>
      </Router>

    </Provider>
  );
}

export default App;
