import { Button, Chip, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleCarDetails } from "../redux/slices/carsSlice";
import { Link, useParams } from "react-router-dom";

const CarModel = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleCarDetails(id));
  }, []);
  const { carDetails } = useSelector((reducer) => reducer.cars);

  return (
    <div className="flex flex-col gap-3 m-8 p-8 rounded-xl bg-white">
      <Typography variant="h6">{carDetails.model}</Typography>
      <div className="flex max-sm:flex-col gap-5">
        <img
          src={carDetails.img}
          alt={carDetails.model}
          className="max-sm:w-full w-1/2"
        />
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="flex flex-col gap-8 max-sm:w-full w-1/2">
          <div className="flex flex-col">
            <Typography variant="h6">{carDetails.model}</Typography>
            <Typography className="text-sm font-semibold text-primaryBlue">
              ${carDetails.price}
            </Typography>
          </div>
          <div id="more-info" className="flex flex-col gap-2.5">
            <Typography className="text-sm font-semibold">
              More Information
            </Typography>
            <div className="flex flex-col gap-2">
              <Chip
                label={
                  <span className="text-sm text-gray-500">
                    style :
                    <span className="font-semibold text-black pl-2">
                      {carDetails.style}
                    </span>
                  </span>
                }
                className="rounded-lg w-full justify-start border-gray-200"
                variant="outlined"
              />
              <Chip
                label={
                  <span className="text-sm text-gray-500">
                    Manufacturing Date :
                    <span className="font-semibold text-black pl-2">
                      {carDetails.date}
                    </span>
                  </span>
                }
                className="rounded-lg w-full justify-start border-gray-200"
                variant="outlined"
              />
              <Chip
                label={
                  <span className="text-sm text-gray-500">
                    Stock Color :
                    <span className="font-semibold text-black pl-2">
                      {carDetails.color}
                    </span>
                  </span>
                }
                className="rounded-lg w-full justify-start border-gray-200"
                variant="outlined"
              />
            </div>
          </div>
          <Link
            to={`/car/edit/${carDetails.id}`}
            className="w-fit no-underline"
          >
            <Button variant="contained" className="px-10" disableElevation>
              Edit Car
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarModel;
