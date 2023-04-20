import PropTypes from "prop-types";

const SelectType = (props) => {
  const { data, handleChange } = props;
  const { name, required, options } = data;
  return (
    <div>
      <select
        name={name}
        id={name}
        onChange={handleChange}
        required={required}
        className="bg-inherit border-2 p-2 my-2 text-label rounded-md"
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

SelectType.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func
};

export default SelectType;
