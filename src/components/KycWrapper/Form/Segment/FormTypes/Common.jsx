import PropTypes from "prop-types";

const Common = (props) => {
  const { data, handleChange } = props;
  const { name, value, type, required, placeholder, label, errorMessage } = data;

  return (
    <div>
      <label
        htmlFor={name}
        className="text-label opacity-70 text-sm"
      >
        {label}
      </label>
      <div>
        <input
          name={name}
          id={name}
          onChange={handleChange}
          className={"border-2 my-2 block w-5/6 p-2 text-label opacity-80 rounded-md"}
          value={value}
          type={type}
          required={required}
          placeholder={placeholder}
        />
      </div>

      <p className="text-sm w-4/5 text-red-500">{errorMessage}</p>
    </div>
  );
};

Common.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func
};


export default Common;