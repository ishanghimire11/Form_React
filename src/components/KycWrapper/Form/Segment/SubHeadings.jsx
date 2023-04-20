import PropTypes from "prop-types";
import FormInputs from "./FormInputs";

const SubHeading = (props) => {
  const { data, handleChange, register, errors } = props;
  console.log(typeof register);

  return (
    <div>
      {data.map(data => {
        const { subHeading, fields, content, optional } = data;
        return <div key={data.id} className="p-4">
          <p>{content}</p>
          <p className="text-lg my-2 text-subHeading">{subHeading}{optional ? <span className="text-sm ml-1 italic">&#40;{optional}&#41;</span>: ""} </p>
          <FormInputs data={fields} handleChange={handleChange} register={register} errors={errors}/>
        </div>;
      })}
    </div>
  );
};

SubHeading.propTypes={
  data: PropTypes.array,
  handleChange: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.object
};

export default SubHeading;