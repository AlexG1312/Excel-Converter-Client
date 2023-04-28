import './App.css';
import Converter from './components/Converter';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { excelMiddleware } from './middlewares';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...excelMiddleware, thunk),
  )
)
function App() {
  return (
    <Provider store={store}>
      <Converter />
    </Provider>
  );
}

export default App;
