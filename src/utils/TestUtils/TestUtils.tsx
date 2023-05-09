import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactElement } from "react";
import { store } from "../../store/store";

const TestingWrapper: React.FC<{ children: ReactElement }> = (props) => {
  return (
    <Router>
      <Provider store={store}>{props.children}</Provider>
    </Router>
  );
};

export default TestingWrapper;
