"use client";
export default function ImageGallery() {
  return (
    <>
      <div
        className="relative w-full px-4 overflow-hidden top-20 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        {/* Title Section */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-down"
        >
          <div className="flex gap-2 items-center w-full max-w-[350px]">
            <hr className="flex-grow border-[0.2px] border-green-800" />
            <h2 className="text-sm font-bold tracking-widest text-green-800 whitespace-nowrap">
              OUR GALLERY
            </h2>
            <hr className="flex-grow border-[0.2px] border-green-800" />
          </div>{" "}
          <br />
          <h1 className="pt-5 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Capturing Agricultural
            <span className="text-green-800">Excellence</span>
          </h1>{" "}
          <br />
          <h5 className="max-w-xl text-sm font-medium leading-relaxed text-center w-[90%] text-gray-600 ">
            Experience the beauty and innovation of modern agriculture through
            our lens. Each image tells a story of dedication, technology, and
            sustainable farming practices.
          </h5>
          <br />
        </div>
        {/* Gallery 1 */}
        <div className="flex justify-center w-full ">
          <div
            className="flex flex-col lg:flex-row justify-between gap-6 mt-16 max-w-[1488px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Left big image */}
            <div
              className="w-full overflow-hidden lg:w-1/3 rounded-xl"
              data-aos="zoom-in-right"
            >
              <img
                src="/gal4.JPG"
                alt=""
                className="w-full  sm:h-[450px] md:h-[600px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
              />
            </div>

            {/* Middle stacked images */}
            <div className="flex flex-col w-full gap-12 lg:w-1/3">
              <div className="overflow-hidden rounded-xl" data-aos="zoom-in">
                <img
                  src="/gal3.JPG"
                  alt=""
                  className="w-full  sm:h-[200px] md:h-[270px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
                />
              </div>
              <div className="overflow-hidden rounded-xl" data-aos="zoom-in">
                <img
                  src="/gal2.jpg"
                  alt=""
                  className="w-full  sm:h-[200px] md:h-[270px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
                />
              </div>
            </div>

            {/* Right big image */}
            <div
              className="w-full overflow-hidden lg:w-1/3 rounded-xl"
              data-aos="zoom-in-left"
            >
              <img
                src="/gal1.JPG"
                alt=""
                className="w-full sm:h-[450px] md:h-[600px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
              />
            </div>
          </div>
        </div>
        <br />
        <hr className="my-12 border-2 border-gray-300 max-w-[1488px] mx-auto" />
        <br />
        {/* Gallery 2 */}
        <div className="flex items-center justify-center">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-[1488px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {["gal6.JPG", "gal8.jpg", "gal5.jpg", "gal7.jpg"].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl"
                data-aos="flip-left"
                data-aos-delay={i * 100}
              >
                <img
                  src={`/${img}`}
                  alt=""
                  className="w-full  sm:h-[250px] md:h-[354px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}