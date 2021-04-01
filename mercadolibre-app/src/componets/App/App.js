import logo from '../../utils/assets/Logo_ML.png';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Products from '../../pages/Products';
import Details from '../../pages/Details';
import { Provider } from 'react-redux';
import configureStore from '../../store/createStore';

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header></Header>

            <Switch>
              <Route exact path="/items/:id" component={Details} />
              <Route exact path="/items" component={Products} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
