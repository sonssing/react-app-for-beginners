import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    // 스위치 를 넣은 이유는 한번에 하나의 라우터만 렌더링하기위해서, 리액트는 한번에 2개라우터도 렌더링해줌
    <Router>
      <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
