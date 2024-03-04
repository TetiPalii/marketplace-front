import { CodeModal } from "@/components/CodeModal/CodeModal";

const VerificationPage = ({ searchParams }) => {
  const showModal = searchParams?.modal;

  return <>{showModal && <CodeModal onShow={showModal} />}</>;
};

export default VerificationPage;
