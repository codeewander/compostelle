import React from 'react'
import "./App.css";
import { Routes, Route } from 'react-router-dom';
// import Router from './routes';
import Header from "./components/Header";
import Home from "./pages/Home";
import WalkingMap from "./pages/WalkingMap";
import ViaRoutes from "./pages/ViaRoutes";
import PreTrip from "./pages/PreTrip";
import HowToPlan from "./pages/HowToPlan";
import HowToPrepare from "./pages/HowToPrepare";
import HowToGetInfo from "./pages/HowToGetInfo";
import QA from "./pages/QA";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App max-w-7xl mx-auto p-2 mb-40"> 
        <Header />
        {/* 不可與其他元件包在一起，只能包 <Route> */}
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/walking-map' element= {<WalkingMap />} />
          <Route path='/via-routes' element= {<ViaRoutes />} />
          <Route path='/how-to-plan' element= {<HowToPlan />} />
          <Route path='/pre-trip' element= {<PreTrip />} >
            <Route path='/pre-trip/how-to-plan' element= {<HowToPlan />} />
            <Route path='/pre-trip/how-to-prepare' element= {<HowToPrepare />} />
            <Route path='/pre-trip/how-to-get-info' element= {<HowToGetInfo />} />
          </Route>
          <Route path='/qa' element= {<QA />} />
          <Route path='*' element= {<NotFound />} />
        </Routes>
    </div>
      )
}

export default App;
