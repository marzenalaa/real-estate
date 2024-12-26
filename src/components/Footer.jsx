import { links, footer } from "../constants";
import Button from "./Button";

const Footer = () => {
  return (
    <footer
      className="py-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <p className="text-yummyYellow font font-bold text-xl">
            {footer.logo}
          </p>
          <p className="text-gray-300 mt-4">{footer.description}</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-yummyYellow text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="hover:text-yummyYellow">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-yummyYellow text-lg font-bold mb-4">
            {footer.newsletter}
          </h3>
          <p className="text-gray-300 mb-4 max-w-80">{footer.newsletterText}</p>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-2">
            <input
              type="email"
              placeholder={footer.inputPlaceholder}
              className="p-2 rounded bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none w-full md:w-64"
            />
            <Button
              title={footer.buttonText}
              className="bg-bonusBlue text-white text-center w-full md:w-32"
              href="#"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8">
        <p className="text-center text-gray-300 mt-4">
          &copy;{footer.rightsText}{" "}
          <a
            href={footer.rightsLink}
            target="_blank"
            className="font-medium text-yummyYellow"
          >
            {footer.rightsLinkText}
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
