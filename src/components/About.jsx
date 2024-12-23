import { assets } from "../assets/assets";

const About = () => {
  return (
    <section
      className="container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-medium">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-700 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 gap-4 text-gray-700">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            We are a team of professionals who are passionate about properties.
            We are dedicated to helping you find the perfect property that fits
            your vision. We understand that buying a property is a big decision
            and we are here to help you every step of the way.
          </p>
          <button className="bg-blue-500 text-white px-8 py-2 rounded-full font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
