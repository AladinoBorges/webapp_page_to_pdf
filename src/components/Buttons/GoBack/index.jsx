import { useRouter } from "next/router";
import { HiChevronLeft } from "react-icons/hi";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <div className={false}>
      <HiChevronLeft size="22px" />

      <button onClick={() => router.back()} className={false}>
        Voltar
      </button>
    </div>
  );
};

export default GoBackButton;
