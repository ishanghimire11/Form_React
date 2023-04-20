import PropTypes from "prop-types";

const Checkbox = (props) => {
  const { data, handleChange } = props;
  const { name, value, type, label, required, errorMessage } = data;
  return (
    <div>
      <div className="flex">
        <div>
          <input
            name={name}
            id={name}
            onChange={handleChange}
            className={"border-2 mr-2"}
            value={value}
            type={type}
            required={required}
          />
        </div>
        <label htmlFor={name}>{label}</label>
      </div>
      <p className="text-sm w-4/5 text-red-500 mt-4">{errorMessage}</p>
    </div>
  );
};

Checkbox.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
};

export default Checkbox;
