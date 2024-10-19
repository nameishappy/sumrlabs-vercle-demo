import Image from "next/image";
import React from "react";

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "/images/team.jpg" },
  { name: "John Doe", role: "CEO", image: "/images/team.jpg" },
  { name: "John Doe", role: "CEO", image: "/images/team.jpg" },
  { name: "John Doe", role: "CEO", image: "/images/team.jpg" },
  { name: "John Doe", role: "CEO", image: "/images/team.jpg" },
  { name: "John Doe", role: "CEO", image: "/images/team.jpg" },
];

const TeamMember = ({ name, role, image }) => (
  <div className="flex flex-col items-center p-4">
    <Image src={image} alt={name} width={300} height={300} className=" mb-4" />
    <p className="">{name + "," + role}</p>
  </div>
);

const page = () => {
  return (
    <div className="w-full">
      <div className="h-[40vh] w-full relative flex flex-col justify-end bg-[#3F4BEF]">
        <div className="pb-5 font-bold w-3/4 mx-auto  text-5xl">Team</div>
      </div>
      <section className="py-12 w-3/4 mx-auto">
        <div className="mx-auto">
          <div className="grid grid-cols-1 text-[#333] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
