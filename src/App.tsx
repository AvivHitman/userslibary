import HomePage from "./Page/HomePage";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  );
}

export default App;
