import { BrowserRouter, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import $ from 'jquery';
window.$ = $; // Make it globally accessible for DataTables
import Header from "./header/Header";
import RoutingComp from "./routing/RoutingComp";
import { createContext,useState } from "react";
export const store=createContext();
function App() {
 let [token,setToken]=useState("");
 let [userName,setUsername]=useState("");
 console.log(token,userName); 
 return (
    <BrowserRouter>
<store.Provider value={[token,setToken,userName,setUsername]}>
    <div className="App">

<Header />
<RoutingComp />

    </div>
    </store.Provider>
    </BrowserRouter>
  );
}

export default App;
