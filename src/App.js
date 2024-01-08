import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/redux/appStore";


function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
