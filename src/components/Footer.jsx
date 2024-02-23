const navLinks = [
  { element: "Home", to: "/" },
  { element: "Our Story", to: "/" },
  { element: "Venue", to: "/" },
  { element: "Itinery", to: "/" },
  { element: "Registy", to: "/" },
  { element: "RSVP", to: "/" },
];
function Footer() {
  return (
    <div className="justify-center items-center py-10 mx-auto w-full flex flex-wrap">
      {navLinks.map((item) => (
        <a href={item.to} className="px-10 py-2 text-primary text-[22px] block">
          {item.element}
        </a>
      ))}
    </div>
  );
}

export default Footer;
