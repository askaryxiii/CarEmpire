import { Button, Input, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCar } from "../../redux/slices/carsSlice";

const AddCar = () => {
  const [newCar, setNewCar] = useState({
    id: Math.floor(Math.random() * (10000 - 3 + 1) + 3),
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addNewCar(newCar));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-14 max-sm:w-full w-4/5 p-5"
    >
      <Typography variant="h6" className="font-bold">
        ADD YOUR CAR
      </Typography>
      <div className="flex max-sm:flex-col w-full gap-10 ">
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-title" className="font-semibold text-sm">
            Enter Car Model
          </InputLabel>
          <Input
            id="model-title"
            placeholder="Car Model"
            className=" text-sm"
            onChange={(e) =>
              setNewCar((prev) => ({
                ...prev,
                model: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-date" className="font-semibold text-sm">
            Enter Car Manufacturing Date
          </InputLabel>
          <Input
            id="model-date"
            placeholder="Manufacturing Date"
            className=" text-sm"
            onChange={(e) =>
              setNewCar((prev) => ({
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
            Enter Car Style
          </InputLabel>
          <Input
            id="model-style"
            placeholder="Car style"
            className=" text-sm"
            onChange={(e) =>
              setNewCar((prev) => ({
                ...prev,
                style: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-image" className="font-semibold text-sm">
            Enter Car Image
          </InputLabel>
          <Input
            id="model-image"
            placeholder="Only accept URL"
            className=" text-sm"
            onChange={(e) =>
              setNewCar((prev) => ({
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
            Enter Car Color
          </InputLabel>
          <Input
            id="model-color"
            placeholder="Car Color"
            className=" text-sm"
            onChange={(e) =>
              setNewCar((prev) => ({
                ...prev,
                color: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full w-1/2">
          <InputLabel htmlFor="model-price" className="font-semibold text-sm">
            Enter Car Price
          </InputLabel>
          <Input
            id="model-price"
            placeholder="Car Price"
            className=" text-sm"
            onChange={(e) =>
              setNewCar((prev) => ({
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
          Add Car
        </Button>
      </div>
    </form>
  );
};

export default AddCar;
