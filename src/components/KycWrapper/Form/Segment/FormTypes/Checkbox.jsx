import PropTypes from "prop-types";

const Checkbox = (props) => {
  const { data, handleChange, register } = props;
  const { name, value, type, label } = data;
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
            {...register(name)}
          />
        </div>
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  register: PropTypes.func,
};

export default Checkbox;
