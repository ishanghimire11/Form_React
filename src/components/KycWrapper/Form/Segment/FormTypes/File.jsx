import { useState, useRef } from "react";
import PropTypes from "prop-types";
import importPhoto from "assets/upload.png";

const FileType = (props) => {
  const imageRef = useRef(null);
  const [ upload, setUpload ] = useState(null);

  const { data, register, errors } = props;
  const { name, type, accept } = data;
  const { ref, ...rest } = register(name);

  const handleuploadChange = (event) => {
    const { files } = event.target;
    if (files && files[0]) {
      return setUpload(URL.createObjectURL(files[0]));
    } else {
      setUpload(null);
      return (imageRef.current.value = null);
    }
  };

  const handleUploadDelete = () => {
    setUpload(null);
    imageRef.current.value = null;
  };

  return (

    <div className={`w-full flex-col flex items-center justify-center border-2 border-dashed col-span-2 mt-6 py-10 rounded-md ${errors[name]? "border-red-400" :""}`}>
      <label
        htmlFor={name}
        className={`flex flex-col text-center w-full
          items-center justify-center hover:cursor-pointer px-10`}
      >
        {upload ? (
          <img src={upload} className="w-3/5" />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img src={importPhoto} alt="upload" className="w-20" />
            <p className="font-semibold">Click to upload</p>
            <p>SVG, PNG, JPG or GIF for identifications</p>
          </div>
        )}

        <div className="text-center w-fit mt-9">
          <input
            type={type}
            id={name}
            accept={accept}
            name={name}
            className="w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4 file:cursor-pointer
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-title file:text-white
              hover:file:bg-title-hover"
            {...rest}
            ref={(e) => {
              ref(e);
              imageRef.current = e;
            }}
            onChange={handleuploadChange}
          />
        </div>
      </label>

      <p className={`text-sm w-4/5 text-red-500 text-center mt-4  ${upload ? "" : "hidden"}`}>
        {errors[`${name}`]?.message}
      </p>

      <button
        id={`${name}-action-delete`}
        type="button"
        className={`border-0 bg-rose-700 text-white py-2 px-4 mt-16 rounded-md ${
          upload ? "" : "hidden"
        }`}
        onClick={handleUploadDelete}
      >
          Delete this image
      </button>
    </div>

  );
};

FileType.propTypes = {
  data: PropTypes.object,
};

export default FileType;
