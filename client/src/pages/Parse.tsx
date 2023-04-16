import React from "react";
import Papa from "papaparse";

import PageLayout from "../layouts/PageLayout";

function Parse() {
  const handleFileUpload = (e: any) => {
    Papa.parse(e.target.files[0], {
      dynamicTyping: true,
      header: true,
      complete: function (results) {
        console.log("Finished:", results.data);
      },
    });
  };
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-3xl text-white font-bold mb-2.5">
          Parse films csv
        </h1>
        <label
          htmlFor="upload-csv"
          className="text-xl text-white font-bold bg-vRed py-1 px-3 rounded cursor-pointer"
        >
          Upload
        </label>
        <input
          id="upload-csv"
          type="file"
          accept=".csv,.xlsx,.xls"
          className="invisible"
          onChange={handleFileUpload}
        />
      </div>
    </PageLayout>
  );
}

export default Parse;
