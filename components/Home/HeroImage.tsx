import Image from "next/image";

const HeroImage = () => {
  return (
    <div>
      <Image
        src="/Hero-section.png"
        alt="Hero Image"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default HeroImage;
