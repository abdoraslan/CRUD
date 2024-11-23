import React, { Fragment, useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import "../pages/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    GetAllCars();
  }, []);

  const [carsApi, setCars] = useState([]);

  const GetAllCars = () => {
    axios
      .get("http://localhost:9000/cars")
      .then(function (response) {
        setCars(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const DeleteCar = (car) => {
    swal({
      title: "Are you sure?",
      text: `Once deleted, you will not be able to recover ${car.make} information!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(`Poof! Your ${car.make} information has been deleted!`, {
          icon: "success",
        });
        fetch(`http://localhost:9000/cars/${car.id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              return response.json(); // Optional: if you want to return some data from the server
            }
            throw new Error("Delete failed");
          })
          .then(() => {
            GetAllCars(); // Refresh the list of cars after deletion
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        swal(`Your ${car.make} information is safe!`);
      }
    });
  };

  const cars = carsApi.map((car) => {
    return (
      <tr key={car.id}>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.price}</td>
        <td>{car.color}</td>
        <td>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              onClick={() => {
                DeleteCar(car);
              }}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>
            <button
              onClick={() => {
                navigate(`/cars/${car.id}`);
              }}
              type="button"
              className="btn btn-warning"
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/cars`, { state: car });
              }}
              type="button"
              className="btn btn-primary"
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <div className="d-flex justify-content-between px-3 py-2">
        <h2 className="text-secondary-emphasis">Available Cars</h2>
        <button
          onClick={() => {
            const lastCar = carsApi[carsApi.length - 1];
            navigate("/cars/add", { state: { lastId: lastCar.id } });
          }}
          type="button"
          className="btn btn-success"
        >
          Add New Car
        </button>
      </div>

      <table className="table custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th>Color</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>{cars}</tbody>
      </table>
    </Fragment>
  );
};

export default Home;
