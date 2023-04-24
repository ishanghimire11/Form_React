import PropTypes from "prop-types";

const Common = (props) => {
  const { data, register, errors } = props;
  const { name, value, type, placeholder, label } = data;

  return (
    <div>
      <label htmlFor={name} className="text-label opacity-70 text-sm">
        {label}
      </label>

      <div>
        <input
          name={name}
          id={name}
          className="border-2 my-2 block w-5/6 p-2
          text-label opacity-80 rounded-md focus:outline-2 focus:outline-titleBg"
          value={value}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      </div>

      <p className="text-sm w-4/5 text-red-500">{errors[`${name}`]?.message}</p>
    </div>
  );
};

Common.propTypes = {
  data: PropTypes.object,
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default Common;
