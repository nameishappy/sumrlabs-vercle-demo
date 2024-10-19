import { ArrowBigLeft, ArrowRight, ArrowRightFromLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface CTAButtonProps {
  color: string; // Background color will be passed as a prop
  text_color?: string;
  classNames?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  color,
  text_color,
  classNames,
}) => {
  return (
    <Link href={"https://tally.so/r/wg49NK"} passHref>
      <div
        className={`w-full md:px-4 md:py-4 p-2   relative rounded-md flex items-center justify-center ${classNames}`}
        style={{ backgroundColor: color }} // Inline style for dynamic background color
      >
        <div
          className={`gap-1 w-max flex items-center justify-center text-base`}
        >
          {/* Change text color to black if background is white */}
          <div className={`text-center  ml-1`}>Book Demo</div>
          <ArrowRight
          // className={` ${text_color ? `text-[${text_color}]` : "text-[#333333]"}`}
          />
        </div>
      </div>
    </Link>
  );
};

export default CTAButton;
