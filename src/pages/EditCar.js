import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const EditCar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const car = location.state; // Directly access the car object

  const [make, setMaker] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (car) {
      setMaker(car.make || "");
      setModel(car.model || "");
      setYear(car.year || "");
      setPrice(car.price || "");
      setImage(car.image || "");
      setColor(car.color || "");
      setDescription(car.description || "");
    }
  }, [car]); // Runs only when 'car' changes

  const Edit = (e) => {
    e.preventDefault();
    const updatedCar = {
      make,
      model,
      year,
      price,
      image,
      color,
      description,
    };
    axios
      .put(`http://localhost:9000/cars/${car.id}`, updatedCar)
      .then((response) => {
        swal("Good job!", `You updated the ${car.make}!`, "success");
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="container mt-3">
      <h2 className="text-secondary-emphasis">Edit {make}</h2>
      <form onSubmit={Edit} id="carForm">
        <div className="mb-3">
          <label htmlFor="make" className="form-label">
            Make
          </label>
          <input
            value={make}
            onChange={(e) => setMaker(e.target.value)}
            type="text"
            className="form-control"
            id="make"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">
            Model
          </label>
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            type="text"
            className="form-control"
            id="model"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="number"
            className="form-control"
            id="year"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">
            Color
          </label>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
            className="form-control"
            id="color"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="description"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="form-control"
            id="image"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            className="form-control"
            id="price"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Edit Car
        </button>
      </form>
    </div>
  );
};

export default EditCar;
