import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { formInputs } from "/src/components/KycWrapper/DataList";
import formSchema from "/src/validation/form";
import Titles from "./Segment/Titles";

const KYC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Titles data={formInputs} register={register} errors={errors} />

      <div className="text-center border-t-2 pt-10 my-4">
        <button
          type="submit"
          id="kyc-action-submit"
          className="p-4 rounded-md border-none bg-yellow-400 hover:bg-yellow-500"
        >
          Submit KYC
        </button>
      </div>

      <DevTool control={control} />
    </form>
  );
};

export default KYC;
