import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <div className="container mx-auto text-center text-white py-4 px-6 md:px-20 lg:px-32">
        <h1 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams.
        </h1>
        <p className="text-white text-lg mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt
          eaque dignissimos? Totam aliquid tenetur voluptas a sint numquam
          voluptatum corrupti, repellat soluta deserunt temporibus.
        </p>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="bg-white px-8 py-2 rounded-full font-medium text-black"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-white px-8 py-2 rounded-full font-medium text-black"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
