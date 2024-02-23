import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const navLinks = [
  { element: "Home", to: "/" },
  { element: "Our Story", to: "/" },
  { element: "Venue", to: "/" },
  {
    element: (
      <span
        className="flex items-center justify-center p-5 px-y w-[104px] h-[104px] rounded-[100%] border-primary border-[1px] text-[30px]"
        style={{ letterSpacing: "-2px" }}
      >
        C<span style={{ letterSpacing: "-6px" }}>&A</span>
      </span>
    ),
    to: "/",
  },
  { element: "Itinery", to: "/" },
  { element: "Registy", to: "/" },
  { element: "RSVP", to: "/" },
];

const mobileNavLinks = [
  { element: "Home", to: "/" },
  { element: "Our Story", to: "/" },
  { element: "Venue", to: "/" },
  { element: "Itinery", to: "/" },
  { element: "Registy", to: "/" },
  { element: "RSVP", to: "/" },
];

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-2 py-5 lg:px-[160px]">
      <div className="hidden md:flex gap-3 justify-between items-center">
        {navLinks.map((item) => (
          <a
            href={item.to}
            className="px-5 xl:px-10 py-2 text-primary block text-lg lg:text-[22px]"
          >
            {item.element}
          </a>
        ))}
      </div>
      <div className="flex md:hidden justify-between items-center">
        <span
          className="flex items-center justify-center p-5 px-y w-[80px] h-[80px] rounded-[100%] border-primary border-[1px] text-[25px]"
          style={{ letterSpacing: "-2px" }}
        >
          C<span style={{ letterSpacing: "-6px" }}>&A</span>
        </span>
        <HiBars3 onClick={() => setOpen(true)} className="text-4xl" />
      </div>
      <div>
        <div
          className={`md:hidden flex py-10 px-10 flex-col fixed text-white transition-all ease-in-out bg-secondary top-0 left-0 w-full h-full gap-3 items-center ${
            open ? "left-0" : "left-[500px]"
          }`}
        >
          <AiOutlineClose
            onClick={() => setOpen(false)}
            className="ml-auto text-3xl"
          />
          {mobileNavLinks.map((item) => (
            <a
              href={item.to}
              className="px-5 xl:px-10 py-2 block text-lg lg:text-[22px]"
            >
              {item.element}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <div className="text-center text-xs sm:text-lg md:text-[24px]">
          <div className="text-secondary">Please join us to celebrate</div>
          <div className="text-2xl sm:text-5xl md:text-[100px]">
            Caleb & Amaya
          </div>
          <div className="text-secondary">July 15, 2022 - Boise, Idaho </div>
        </div>
        <img src="/hero.svg" className="mt-16 w-full block" />
      </div>
    </div>
  );
};

export default Hero;
