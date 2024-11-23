import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
const AddingCar = () => {
  const location = useLocation();
  const { lastId } = location.state || {};
  useEffect(() => {
    console.log(lastId);
  });
  const navigate = useNavigate();
  const [make, setMaker] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const AddCar = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    axios
      .post("http://localhost:9000/cars", {
        make,
        model,
        year,
        price,
        image,
        color,
        description,
        id: (parseInt(lastId) + 1).toString(),
      })
      .then((res) => {
        swal("Good job!", `You Added the ${make} Car!`, "success");
        navigate("/");
      });
  };

  return (
    <div className="container mt-3">
      <h2 className="text-secondary-emphasis">Add Car</h2>
      <form onSubmit={AddCar} id="carForm">
        <div className="mb-3">
          <label htmlFor="make" className="form-label">
            Make
          </label>
          <input
            onChange={(e) => {
              setMaker(e.target.value);
            }}
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
            onChange={(e) => {
              setModel(e.target.value);
            }}
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
            onChange={(e) => {
              setYear(e.target.value);
            }}
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
            onChange={(e) => {
              setColor(e.target.value);
            }}
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
            onChange={(e) => {
              setImage(e.target.value);
            }}
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
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            className="form-control"
            id="price"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddingCar;
