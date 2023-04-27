import './App.css';
import Converter from './components/Converter';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";


export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
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
