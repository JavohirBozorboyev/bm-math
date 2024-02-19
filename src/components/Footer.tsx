import Logo from "../assets/LogoGroup.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#313C49]  py-8">
      <div className="container px-4 max-w-4xl mx-auto py-4 flex justify-between">
        <div>
          <img src={Logo} alt="" className="h-10 sm:h-12 object-cover" />
        </div>
        <div>
          <a
            href="tel:+998907522500"
            className="text-white text-xs sm:text-sm text-right  block"
          >
            +998 90 752 25 00
          </a>
          <p className="w-44 text-[12px] sm:text-xs text-gray-400 text-right">
            Namangan, Yangi Namangan, Islom Karimov st, 1
          </p>
        </div>
      </div>
      <div className="container px-4 max-w-4xl mx-auto flex  justify-between items-center flex-col gap-5 sm:flex-row">
        <p className=" hidden sm:block sm:text-xs text-white ml-1">
          Copyright 2024. All rights reserved.
        </p>
        <article className="text-xs text-gray-200">
          Created by-{" "}
          <span className="bg-white rounded-sm p-1 text-[#313C49]">
            BM-Team
          </span>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
