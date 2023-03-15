import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

import "./App.css";

const App = () => {

  return(
  <div className="App">
<Routes>
  <Route>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/search" element={<SearchPage ></SearchPage>} />
  </Route>

</Routes>

  </div>
  );
}
export default App;