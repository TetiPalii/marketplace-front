import { LoginModal } from "@/components/LoginModal/LoginModal";

const LoginPage = ({ searchParams }) => {
  const showModal = searchParams?.modal;

  return <>{showModal && <LoginModal onShow={showModal} />}</>;
};

export default LoginPage;
