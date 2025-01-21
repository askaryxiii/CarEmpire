import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../../redux/slices/carsSlice";
import { Link } from "react-router-dom";

const CarCard = ({
  carModel: { model, img, id, date, style, color, price },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="max-w-xs group bg-BgGrey flex flex-col gap-2 rounded-3xl shadow-none pb-3 px-5 ">
      <Link to={`/car/${id}`}>
        <img
          src={img}
          alt="Car"
          className="w-full transition-all duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800 m-0">{model}</h2>
        <button
          onClick={() => dispatch(deleteCar(id))}
          className="new rounded-full shadow-none bg-BgGrey border-none cursor-pointer"
        >
          <MdDelete className="w-5 h-5 text-red-700 font-bold" />
        </button>
      </div>
      <div className="text-sm flex justify-between text-gray-600 ">
        <p className="m-0 font-semibold">
          <span className="font-normal">Style:</span> {style}
        </p>
        <p className="m-0 font-semibold">
          <span className="font-normal">Date:</span> {date}
        </p>
        <p className="m-0 font-semibold">
          <span className="font-normal">Color:</span> {color}
        </p>
      </div>
      <p className="text-blue-500 font-bold text-xl m-0">${price}</p>
    </div>
  );
};

export default CarCard;
