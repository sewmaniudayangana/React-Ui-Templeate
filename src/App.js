import {Route, Routes} from "react-router-dom";
import Loginform from "./page/login/login";

function App() {
  return (
   <div className="App">
   <Routes>
   <Route path='/page' element={<Loginform/>}/>
   </Routes>
      
   </div>
  );
}

export default App;
