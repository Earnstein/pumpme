import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="uppercase font-bold text-foreground tracking-wider"> Contact us </span>

          <span  className="flex text">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 hover:text-green-500/90 transition mr-2"/> debonair@gmail.com
          </span>
        </p>

        <ul className="mt-8 space-y-1 text">
          <h2 className="uppercase font-bold text-foreground tracking-wider">Join our space</h2>
          <li>Monday: 9pm - 9:30pm</li>
          <li>Thursday: 9pm - 9:30pm</li>
        </ul>

        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text transition hover:text-green-500/80"
            >
              <span className="sr-only">Facebook</span>
                <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 hover:text-green-500/90 transition"/>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text transition hover:text-green-500/80"
            >
              <span className="sr-only">Instagram</span>

              <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 hover:text-green-500/90 transition"/>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text transition hover:text-green-500/80"
            >
              <span className="sr-only">Twitter</span>

              <FaXTwitter className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 hover:text-green-500/90 transition"/>
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text transition hover:text-green-500/80"
            >
              <span className="sr-only">Whatsapp</span>
              <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 hover:text-green-500/90 transition"/>
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-bold text-foreground  tracking-wider">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text transition hover:text-green-500/80"> Airdrop Onboarding </a>
            </li>

            <li>
              <a href="#" className="text transition hover:text-green-500/80"> Web3 Development </a>
            </li>

            <li>
              <a href="#" className="text transition hover:text-green-500/80"> Marketing </a>
            </li>

            <li>
              <a href="#" className="text transition hover:text-green-500/80"> DeFi Training </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-foreground tracking-wider">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text transition hover:text-green-500/80"> About </a>
            </li>

            <li>
              <a href="#" className="text transition hover:text-green-500/80"> Meet the Team </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text transition hover:text-green-500/80"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" className="text transition hover:text-green-500/80"> Cookies </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text sm:mt-0">
          &copy; 2024. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
