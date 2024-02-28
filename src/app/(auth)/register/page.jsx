import { RegisterModal } from "@/components/RegisterModal/RegisterModal";

const RegisterPage = ({ searchParams }) => {
  const showModal = searchParams?.modal;

  return <>{showModal && <RegisterModal onShow={showModal} />}</>;
};

export default RegisterPage;
