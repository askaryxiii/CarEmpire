import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCarModels, singleCarDetails } from "../redux/slices/carsSlice";
import { Button, Input, InputLabel, Typography } from "@mui/material";

const EditCar = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleCarDetails(id));
  }, []);
  const { carDetails } = useSelector((reducer) => reducer.cars);
  const [editedCar, setEditedCar] = useState(carDetails);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editCarModels(editedCar));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-14 pt-8 px-20">
      <Typography variant="h6" className="font-bold">
        Edit {carDetails.model}
      </Typography>
      <div className="flex max-sm:flex-col w-full gap-10 ">
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-title" className="font-semibold text-sm">
            Edit Car Model
          </InputLabel>
          <Input
            id="model-title"
            defaultValue={carDetails.model}
            className=" text-sm"
            onChange={(e) =>
              setEditedCar((prev) => ({
                ...prev,
                model: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-date" className="font-semibold text-sm">
            Edit Car Manufacturing Date
          </InputLabel>
          <Input
            id="model-date"
            defaultValue={carDetails.date}
            className=" text-sm"
            onChange={(e) =>
              setEditedCar((prev) => ({
                ...prev,
                date: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="flex max-sm:flex-col w-full gap-10 ">
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-style" className="font-semibold text-sm">
            Edit Car Style
          </InputLabel>
          <Input
            id="model-style"
            defaultValue={carDetails.style}
            className=" text-sm"
            onChange={(e) =>
              setEditedCar((prev) => ({
                ...prev,
                style: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-image" className="font-semibold text-sm">
            Edit Car Image
          </InputLabel>
          <Input
            id="model-image"
            defaultValue={carDetails.img}
            className=" text-sm"
            onChange={(e) =>
              setEditedCar((prev) => ({
                ...prev,
                img: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="flex max-sm:flex-col w-full gap-10 ">
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-color" className="font-semibold text-sm">
            Edit Car Color
          </InputLabel>
          <Input
            id="model-color"
            defaultValue={carDetails.color}
            className=" text-sm"
            onChange={(e) =>
              setEditedCar((prev) => ({
                ...prev,
                color: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-price" className="font-semibold text-sm">
            Edit Car Price
          </InputLabel>
          <Input
            id="model-price"
            defaultValue={`$` + carDetails.price}
            className=" text-sm"
            onChange={(e) =>
              setEditedCar((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Button
          type="submit"
          variant="contained"
          className="px-10"
          disableElevation
        >
          Edit Car
        </Button>
      </div>
    </form>
  );
};

export default EditCar;
