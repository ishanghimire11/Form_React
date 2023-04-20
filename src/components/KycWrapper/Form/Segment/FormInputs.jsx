import PropTypes from "prop-types";
import Checkbox from "./FormTypes/Checkbox";
import Common from "./FormTypes/Common";
import FileType from "./FormTypes/File";
import SelectType from "./FormTypes/Select";

const FormInputs = (props) => {
  const { data, handleChange } = props;

  return (
    <div className="grid grid-cols-2">
      {data.map((inputs) => {
        const { type, id } = inputs;
        if (type === "select") {
          return (
            <SelectType data={inputs} key={id} handleChange={handleChange} />
          );

        } if (type === "file"){
          return (
            <FileType data={inputs} key={id} handleChange={handleChange} />
          );

        } if (type === "radio" || type === "checkbox") {
          return (
            <Checkbox data={inputs} key={id} handleChange={handleChange} />
          );
        }else {
          return (
            <Common data={inputs} key={id} handleChange={handleChange} />
          );
        }
      })}
    </div>
  );
};
FormInputs.propTypes={
  data: PropTypes.array,
  handleChange: PropTypes.func
};

export default FormInputs;
