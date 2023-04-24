import PropTypes from "prop-types";
import FormInputs from "./FormInputs";

const SubHeading = (props) => {
  const { data, register, errors } = props;

  return (
    <div>
      {data.map((data) => {
        const { subHeading, fields, content } = data;
        return (
          <div key={data.id} className="p-4">
            <p>{content}</p>

            <p className="text-lg my-2 text-subHeading">
              {subHeading}
            </p>

            <FormInputs
              data={fields}
              register={register}
              errors={errors}
            />
          </div>
        );
      })}
    </div>
  );
};

SubHeading.propTypes = {
  data: PropTypes.array,
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default SubHeading;
