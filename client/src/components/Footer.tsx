const Footer = () => {
  return (
    <footer className="w-full h-full  px-4 mt-2">
      <div className="bg-black flex flex-col gap-4 p-6 lg:p-10 lg:px-20 rounded-lg text-white ">
        <div className="flex flex-col 2xl:container 2xl:mx-auto items-start md:flex-row md:grid md:grid-cols-2 gap-10 border-b border-white/20 pb-10 lg:gap-20 w-full">
          <div className="flex items-start justify-start">
            <div className="border border-[#D4A017] rounded-full  ">
              <img
                src="/logo.jpg"
                alt="logo"
                className="w-44 h-44 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-2xl">Quick Links</p>
            <ul className="grid    gap-4 lg:gap-x-24 text-lg text-white/80">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              {/* <li>
                <a href="#our-work">Our work</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li> */}
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-white/90 2xl:container 2xl:mx-auto">
          &copy; 2025 Altanova. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
