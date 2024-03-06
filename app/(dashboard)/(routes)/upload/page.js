import React from "react";
import UploadForm from "./_components/UploadForm";

const Upload = () => {
  return (
    <div className="items-center">
      <div className="p-6 px-8 md:px-28">
        <h2 className="text-[20px] text-center m-5">
          Start
          <strong className="text-primary"> Uploading</strong> File and{" "}
          <strong className="text-primary">Share</strong> it
        </h2>
        <UploadForm />
      </div>
    </div>
  );
};

export default Upload;
