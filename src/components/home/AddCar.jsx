import { Button, Input, InputLabel, Typography } from "@mui/material";
import React from "react";

const AddCar = () => {
  return (
    <div className="flex flex-col gap-14 w-4/5 p-5">
      <Typography variant="h6" className="font-bold">
        ADD YOUR CAR
      </Typography>
      <div className="flex gap-10 ">
        <div className="flex flex-col gap-1 w-1/2">
          <InputLabel htmlFor="model-title" className="font-semibold text-sm">
            Enter Car Model
          </InputLabel>
          <Input
            id="model-title"
            placeholder="Car Model"
            className=" text-sm"
          />
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <InputLabel htmlFor="model-title" className="font-semibold text-sm">
            Enter Car Manufacturing Date
          </InputLabel>
          <Input
            id="model-title"
            placeholder="Manufacturing Date"
            className=" text-sm"
          />
        </div>
      </div>
      <div className="flex gap-10 ">
        <div className="flex flex-col gap-1 w-1/2">
          <InputLabel htmlFor="model-title" className="font-semibold text-sm">
            Enter Car Style
          </InputLabel>
          <Input
            id="model-title"
            placeholder="Car style"
            className=" text-sm"
          />
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <InputLabel htmlFor="model-title" className="font-semibold text-sm">
            Enter Car Image
          </InputLabel>
          <Input
            id="model-title"
            placeholder="Only accept URL"
            className=" text-sm"
          />
        </div>
      </div>
      <div className="flex gap-10 ">
        <div className="flex flex-col gap-1 w-1/2">
          <InputLabel htmlFor="model-title" className="font-semibold text-sm">
            Enter Car Color
          </InputLabel>
          <Input
            id="model-title"
            placeholder="Car Color"
            className=" text-sm"
          />
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <InputLabel htmlFor="model-title" className="font-semibold text-sm">
            Enter Car Price
          </InputLabel>
          <Input
            id="model-title"
            placeholder="Car Price"
            className=" text-sm"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Button variant="contained" className="px-10" disableElevation>
          Add Car
        </Button>
      </div>
    </div>
  );
};

export default AddCar;
