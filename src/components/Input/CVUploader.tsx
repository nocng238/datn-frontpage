import { File } from "@app/types";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
interface Props {
  file: File;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CVUploader = (props: Props) => {
  const { handleFileChange, file } = props;
  return (
    <div className="">
      <label htmlFor="container-update-cv" className="flex gap-2">
        <div className="cursor-pointer mt-1">
          <ArrowUpTrayIcon className="w-6 h-6" />
        </div>
        <p className="w-full p-1 ml-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
          {file.file_name || "Please upload your cv here."}
        </p>
      </label>
      <input
        id="container-update-cv"
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default CVUploader;
