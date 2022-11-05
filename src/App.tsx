import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/pokemon/:name"
        element={<Pokemon />}
      />
    </Routes>
  </Router>
);

export default App;
