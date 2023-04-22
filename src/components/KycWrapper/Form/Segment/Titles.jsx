import PropTypes from "prop-types";
import SubHeading from "./SubHeadings";

const Titles = (props) => {
  const { data,register, errors } = props;

  return (
    <div>
      {data.map((data) => {
        const { title, subTitles } = data;

        return (
          <div key={data.id}>
            <p className="p-8 bg-title text-white my-10 text-3xl">{title}</p>

            <SubHeading
              data={subTitles}
              register={register}
              errors={errors}
            />
          </div>
        );
      })}
    </div>
  );
};

Titles.propTypes = {
  data: PropTypes.array,
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default Titles;
