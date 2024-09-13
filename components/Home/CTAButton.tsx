import Image from "next/image";
import Link from "next/link";

const CTAButton = () => {
  return (
    <Link href={"https://tally.so/r/wg49NK"}>
    <div className="w-[299px] h-[79px] relative bg-[#2545d3] rounded-md flex items-center justify-center">
      <div className="gap-1 flex items-center justify-center">
        <div className="text-center text-white text-xl md:text-2xl font-medium font-['Poppins']">
          Book Demo
        </div>
        <div className="w-[34px] h-[34px] relative">
          <Image
            alt={"rocket"}
            width={34}
            height={34}
            src="/icons/rocket.svg"
          />
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CTAButton;
