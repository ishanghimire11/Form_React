import PropTypes from "prop-types";

const Checkbox = (props) => {
  const { data,register } = props;
  const { name, value, type, label, required } = data;

  return (
    <>
      <div className="flex">
        <div>
          <input
            name={name}
            id={`${name}-${value}`}
            type={type}
            className={"border-2 mr-2"}
            value={value}
            required={required}
            {...register(name)}
          />
        </div>

        <label htmlFor={`${name}-${value}`} className="text-label opacity-80">
          {label}
        </label>
      </div>
    </>
  );
};

Checkbox.propTypes = {
  data: PropTypes.object,
  register: PropTypes.func,
};

export default Checkbox;
