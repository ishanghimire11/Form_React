import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formInputs,formValues } from "/src/components/KycWrapper/DataList";
import formSchema from "/src/Validation/form";
import Titles from "./Segment/Titles";


const KYC = () => {
  const [ data, setData ] = useState(formValues);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log(errors);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Titles data={formInputs} handleChange={handleChange} register={register} errors={errors} />
      <div className="text-center border-t-2 pt-10 my-4">
        <button
          type="submit"
          id="kyc-action-submit"
          className="p-4 rounded-md border-none bg-yellow-400 hover:bg-yellow-500"
        >
        Submit KYC
        </button>
      </div>
    </form>
  );
};

export default KYC;
