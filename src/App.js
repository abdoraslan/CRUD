import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CarDetails from "./pages/CarDetails";
import AddingCar from "./pages/AddingCar";
import EditCar from "./pages/EditCar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="row">
        <div className="col-2 bg-body-secondary">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars/:carId" element={<CarDetails />} />
            <Route path="/cars/add" element={<AddingCar />} />
            <Route path="/cars" element={<EditCar />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
};
export default App;
