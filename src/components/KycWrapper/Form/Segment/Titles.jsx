import PropTypes from "prop-types";
import SubHeading from "./SubHeadings";

const Titles = (props) => {
  const { data, handleChange } = props;
  return (
    <div>
      {data.map(data => {
        const { title, subTitles } = data;
        return <div key={data.id}>
          <p className="p-8 bg-title text-white my-10 text-3xl">{title}</p>
          <SubHeading data={subTitles} handleChange={handleChange}/>
        </div>;
      })}
    </div>
  );
};

Titles.propTypes={
  data: PropTypes.array,
  handleChange: PropTypes.func
};

export default Titles;
