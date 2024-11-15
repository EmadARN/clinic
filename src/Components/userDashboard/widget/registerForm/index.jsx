import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { postCustomerInformation } from "@/features/customerDashboard/customerDashboardSlice";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import RegisterForm from "./RegisterForm";
import StepperPrototype from "../stepper/Stepper";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";
import useStepper from "@/hooks/userDashboard/useSteper";
import { useCustomToast } from "@/utils/useCustomToast ";

const UserInformation = ({ slug }) => {
  const { showToast } = useCustomToast();
  const [inputsData, setinputsData] = useState({
    name: "",
    last_name: "",
    phone_number: "",
    national_code: "",
    address: "",
    house_number: "",
    drug_hist: false,
    decease_hist: false,
    doctor: "-",
    offline_number: 0,
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [drugHistory, setDrugHistory] = useState("fasle");
  const [diseaseHistory, setDiseaseHistory] = useState("fasle");
  const [{ auth_token } = cookies] = useCookies(["auth_token"]);
  const dispatch = useDispatch();
  const { handleNextStep } = useStepper();

  useEffect(() => {
    // تابع برای بررسی اینکه آیا تمام فیلدها پر شده‌اند یا نه
    const isFormValid = () => {
      const requiredFields = [
        "name",
        "last_name",
        "phone_number",
        "national_code",
        "address",
        "house_number",
      ];
      return requiredFields.every(
        (field) => inputsData[field] && inputsData[field].trim() !== ""
      );
    };

    // به‌روزرسانی وضعیت دکمه با توجه به وضعیت فیلدهای ضروری
    setIsDisabled(!isFormValid());
  }, [inputsData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputsData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setinputsData((prev) => ({ ...prev, [name]: value === "true" }));
    if (name === "drug_hist") setDrugHistory(value);
    if (name === "decease_hist") setDiseaseHistory(value);
  };

  const submitHandler = async () => {
    const result = await dispatch(
      postCustomerInformation({
        ...inputsData,
        auth_token,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({
        title: "موفقیت‌آمیز",
        description: "اطلاعات با موفقیت ثبت شد",
        status: "success",
      });
    } else {
      showToast({
        title: "خطا",
        description: "خطا در ثبت اطلاعات",
        status: "error",
      });
    }
  };

  return (
    <>
      <StepperPrototype onCompleteStep={handleNextStep} />
      <TitleUserDashboard />
      <RegisterForm
        handleChange={handleChange}
        handleRadioChange={handleRadioChange}
        drugHistory={drugHistory}
        diseaseHistory={diseaseHistory}
        inputsData={inputsData}
      />
      <AcceptBtn
        slug={slug}
        text="ادامه"
        bgColor={"white"}
        submitHandler={submitHandler}
        onNextStep={handleNextStep}
        isDisabled={isDisabled}
      />
    </>
  );
};

export default UserInformation;
