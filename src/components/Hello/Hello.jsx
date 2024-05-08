import Rocket from "../../../public/icons/Rocket";
import Image from "next/image";
export const Hello = () => {
  return (
    <div className="w-full px-6 flex justify-center items-center mx-auto gap-4">
      <Image
        src={"/images/rocket-iso-color.png"}
        width={80}
        height={80}
        alt="rocket"
      />
      <div className="flex flex-col gap-3">
        <p className="text-xl leading-[1.219">Привіт</p>
        <p className="text-base leading-[1.218]">Увійди, і закажи вже шось</p>
      </div>
    </div>
  );
};
