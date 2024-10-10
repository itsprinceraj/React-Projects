import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Pagination = () => {
  const { page, totalPages, handlePages } = useContext(AppContext);
  return (
    <div className=" page py-3 flex justify-between w-full fixed bottom-0 bg-white mt-[0px] ">
      <div className=" flex  justify-between items-center w-[42%] m-auto ">
        <div className=" flex gap-2 text-sm">
          {" "}
          {page > 1 && (
            <button
              className=" py-2 px-5 border  rounded-sm flex justify-center items-center "
              onClick={() => handlePages(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="py-2 px-5 border  rounded-sm flex justify-center items-center "
              onClick={() => handlePages(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className=" text-sm font-bold ">
          {" "}
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};
