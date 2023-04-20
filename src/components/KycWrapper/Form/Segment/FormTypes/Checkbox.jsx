import PropTypes from "prop-types";

const Checkbox = (props) => {
  const { data, handleChange, register } = props;
  const { name, value, type, label, required } = data;

  return (
    <div className="flex">
      <div>
        <input
          name={name}
          id={name}
          onChange={handleChange}
          className={"border-2 mr-2"}
          value={value}
          required={required}
          type={type}
          {...register(name)}
        />
      </div>

      <label htmlFor={name} className="text-label opacity-80">
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  register: PropTypes.func,
};

export default Checkbox;
