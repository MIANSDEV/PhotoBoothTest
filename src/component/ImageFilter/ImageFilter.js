//import { Button } from "@mui/material";
import "./ImageFilter.css";
import React, { useContext, useRef, useState } from "react";
import { Button } from "@mui/material";
import FilterTab from "../FilterTab/FilterTab";
import InstaFilter from "../InstaFilter/InstaFilter";
import { FilterContext } from "../../App";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import "../../styles/instagram.css";

const ImageFilter = () => {
  const uploadImage = useRef(null);
  const imgResultRef = useRef(null);
  const [imageFile, setImageFile] = useState();
  const { filterClass } = useContext(FilterContext);
  const handleChangeInput = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleDownloadImage = () => {
    domtoimage
      .toBlob(imgResultRef.current)
      .then(function (blob) {
        saveAs(blob, "download_img.png");
      })
      .catch(function (error) {
        console.error("ooops, something wrong!", error);
      });
  };

  const renderImage = () => (
    <div>
      <img className={filterClass} src={imageFile} alt="" ref={imgResultRef} />
    </div>
  );
  return (
    <div>
      <div className="main-container">
        <div className="title">
          <h1>Image Filter</h1>
        </div>
        <div className="main-filter">
          <div className="imagetab">
            <div
              className="for-border"
              onClick={() => uploadImage.current && uploadImage.current.click()}
            >
              {imageFile ? renderImage() : <p>Upload Image</p>}
            </div>
            <input
              onChange={handleChangeInput}
              ref={uploadImage}
              type="file"
              accept="image/*"
              hidden
            />
            <div className="button">
              <Button
                onClick={handleDownloadImage}
                variant="contained"
                disabled={!imageFile}
                fullWidth
              >
                Download
              </Button>
            </div>
          </div>
          <div className="filtertab">
            <div>
              <FilterTab />
              <div className="instafilter">
                <InstaFilter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFilter;
