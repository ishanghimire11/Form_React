import PropTypes from "prop-types";
import Checkbox from "./FormTypes/Checkbox";
import Common from "./FormTypes/Common";
import FileType from "./FormTypes/File";
import SelectType from "./FormTypes/Select";

const FormInputs = (props) => {
  const { data, handleChange, register, errors } = props;

  return (
    <div className="grid grid-cols-2">
      {data.map((inputs) => {
        const { type, id } = inputs;
        if (type === "select") {
          return (
            <SelectType data={inputs} key={id} handleChange={handleChange} register={register} errors={errors} />
          );

        } if (type === "file"){
          return (
            <FileType data={inputs} key={id} handleChange={handleChange} register={register} errors={errors} />
          );

        } if (type === "radio" || type === "checkbox") {
          return (
            <Checkbox data={inputs} key={id} handleChange={handleChange} register={register} errors={errors} />
          );
        }else {
          return (
            <Common data={inputs} key={id} handleChange={handleChange} register={register} errors={errors} />
          );
        }
      })}
    </div>
  );
};
FormInputs.propTypes={
  data: PropTypes.array,
  handleChange: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.object
};

export default FormInputs;
