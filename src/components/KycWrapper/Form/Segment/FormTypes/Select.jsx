import PropTypes from "prop-types";

const SelectType = (props) => {
  const { data, register, errors } = props;
  const { name, options } = data;

  return (
    <div>
      <select
        name={name}
        id={name}
        className="bg-inherit border-2 p-2 my-2 text-label rounded-md"
        {...register(name)}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>

      <p className="text-sm w-4/5 text-red-500">{errors[`${name}`]?.message}</p>
    </div>
  );
};

SelectType.propTypes = {
  data: PropTypes.object,
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default SelectType;
