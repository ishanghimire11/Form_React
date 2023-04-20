import PropTypes from "prop-types";
import FormInputs from "./FormInputs";

const SubHeading = (props) => {
  const { data, handleChange } = props;

  return (
    <div>
      {data.map(data => {
        const { subHeading, fields, content } = data;
        return <div key={data.id} className="p-4">
          <p>{content}</p>
          <p className="text-lg my-2 text-subHeading">{subHeading}</p>
          <FormInputs data={fields} handleChange={handleChange}/>
        </div>;
      })}
    </div>
  );
};

SubHeading.propTypes={
  data: PropTypes.array,
  handleChange: PropTypes.func
};

export default SubHeading;