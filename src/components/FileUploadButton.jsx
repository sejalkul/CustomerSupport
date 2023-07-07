import React, { useState } from "react";
import "./FileUploadButton.css";
function FileUploadButton() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <label htmlFor="file-upload" className="file-upload-label">
        +Attach a File
      </label>
      <input
        type="file"
        id="file-upload"
        name="file-upload"
        onChange={handleFileChange}
        className="file-upload-input"
      />

      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
}

export default FileUploadButton;
