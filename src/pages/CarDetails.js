import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const CarDetails = () => {
  const [car, setCar] = useState({});
  const { carId } = useParams();
  const GetOnlyCar = (id) => {
    axios
      .get(`http://localhost:9000/cars/?id=${id}`)
      .then(function (response) {
        setCar(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (carId) {
      GetOnlyCar(carId);
    }
  }, [carId]);
  return (
    <div className="card">
      <div
        style={{
          width: "100%",
          height: "800px", // or any desired height
          backgroundImage: `url(${car.image})`,
          backgroundSize: "100% 100%", // Ensures the whole image is visible without cropping
          backgroundPosition: "center", // Centers the image within the div
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
        className="card-img-top"
      ></div>
      <div className="card-body">
        <h3>Company: {car.make}</h3>
        <h4>Model: {car.model}</h4>
        <div className="d-flex">
          <h5>Price: {car.price}</h5>
          <h5 className="ms-4">Year: {car.year}</h5>
          <h5 className="ms-4">Color: {car.color}</h5>
        </div>

        <p className="card-text">{car.description}</p>
      </div>
    </div>
  );
};

export default CarDetails;
