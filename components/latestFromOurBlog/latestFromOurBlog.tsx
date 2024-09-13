import Image from 'next/image';

const LatestFromOurBlog = () => {
    return (
      <>
        <div className="relative bg-white py-8 w-full">
          <div className="w-full flex flex-col md:flex-row justify-between items-center px-4">
            <div className="text-xl font-medium font-['Nunito'] mb-4 md:mb-0">Latest from our Blog</div>
            <div className="text-[#0f62fe] text-base font-medium font-['Nunito']">View All</div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 w-full mt-6">
            <div className="flex flex-col w-full h-auto rounded">
              <Image src="https://via.placeholder.com/421x234" alt="Blog Image" layout="responsive" width={38} height={38}/>
              <div className="mt-4 flex justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-['Nunito']">Research</div>
                <div className="text-black text-sm font-light font-['Nunito']">5 Sept 2024</div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex flex-col">
    <div className="text-lg font-medium font-['Nunito']">Tech in Healthcare</div>
    <div className="text-sm font-light font-['Nunito']">
      Technology is helping in the field of <br /> healthcare
    </div>
                </div>
                <div className="flex items-center">
                  <Image
                    className="w-[45px] h-[45px] rounded-full"
                    src="https://via.placeholder.com/45x45"
                    alt="Author"
                    width={38}
                    height={38}
                  />
                  <div className="text-black text-base font-normal font-['Nunito'] ml-2">Writer Name</div>
                </div>
              </div>

            </div>
  
            <div className="flex flex-col w-full h-auto rounded">
              <Image src="https://via.placeholder.com/421x234" alt="Blog Image" layout="responsive" width={38} height={38}/>
              <div className="mt-4 flex justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-['Nunito']">Research</div>
                <div className="text-black text-sm font-light font-['Nunito']">5 Sept 2024</div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex flex-col">
    <div className="text-lg font-medium font-['Nunito']">Tech in Healthcare</div>
    <div className="text-sm font-light font-['Nunito']">
      Technology is helping in the field of <br /> healthcare
    </div>
                </div>
                <div className="flex items-center">
                  <Image
                    className="w-[45px] h-[45px] rounded-full"
                    src="https://via.placeholder.com/45x45"
                    alt="Author"
                    width={38}
                    height={38}
                  />
                  <div className="text-black text-base font-normal font-['Nunito'] ml-2">Writer Name</div>
                </div>
              </div>

            </div>
  
            <div className="flex flex-col w-full h-auto rounded">
              <Image src="https://via.placeholder.com/421x234" alt="Blog Image" layout="responsive" width={38} height={38}/>
              <div className="mt-4 flex justify-start items-start gap-4">
                <div className="text-black text-sm font-light font-['Nunito']">Research</div>
                <div className="text-black text-sm font-light font-['Nunito']">5 Sept 2024</div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex flex-col">
    <div className="text-lg font-medium font-['Nunito']">Tech in Healthcare</div>
    <div className="text-sm font-light font-['Nunito']">
      Technology is helping in the field of <br /> healthcare
    </div>
                </div>
                <div className="flex items-center">
                  <Image
                    className="w-[45px] h-[45px] rounded-full"
                    src="https://via.placeholder.com/45x45"
                    alt="Author"
                    width={38}
                    height={38}
                  />
                  <div className="text-black text-base font-normal font-['Nunito'] ml-2">Writer Name</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default LatestFromOurBlog;
  