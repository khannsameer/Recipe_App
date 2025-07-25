import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <PuffLoader color="white" size={60} />
    </div>
  );
};

export default Loading;
