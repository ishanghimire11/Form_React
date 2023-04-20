import { useState } from "react";
import PropTypes from "prop-types";
import upload from "assets/upload.png";

const FileType = (props) => {

  const [ photo, setPhoto ] = useState(null);
  const [ imageName, setImageName ] = useState("No file selected");

  const { data, handleChange } = props;
  const { name, type } = data;

  const handlePhotoChange = (event) => {
    const { files } = event.target;
    files[0] && setImageName(files[0].name);
    if (files) {
      setPhoto(URL.createObjectURL(files[0]));
    }
  };
  console.log(imageName);

  return (
    <>
      <div className="w-full flex items-center justify-center col-span-2 mt-6">
        <label
          htmlFor={name}
          className={`flex ${photo ? "flex-col" : "flex-row"} w-full  items-center justify-center border-2 border-dashed hover:cursor-pointer p-20`}
        > {photo ?
            <>
              <img src={photo} className="w-2/5"/>
              <p className="mt-4 opacity-80 text-lg font-semibold">{imageName}</p>
            </>
            :
            <div className="flex flex-col items-center justify-center">
              <img src={upload} alt="upload" className="w-20" />
              <p className="font-semibold">Click to upload</p>
              <p>SVG, PNG, JPG or GIF for identifications</p>
            </div>}
          <input
            type={type}
            id={name}
            className="hidden"
            onChange={(e)=> {handleChange(e); handlePhotoChange(e);}}
            name={name}
          />
        </label>
      </div>
    </>
  );
};

FileType.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func
};

export default FileType;
