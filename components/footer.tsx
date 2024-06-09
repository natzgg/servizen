import Logo from "@/app/(home)/_components/navbar/logo";
import FooterLinks from "./footer-links";

const Footer = () => {
  return (
    <div className="border-t-2 border-white">
      <div className="p-4 flex flex-col items-center justify-center">
        <Logo />
        <span className="text-basetext text-sm font-semibold lg:text-lg mb-5 text-center">
          Let us help you grow your business by teaching you how to automate
          your marketing, customer capture, and sales.
        </span>
        <FooterLinks />
        <span className="mt-2">Copyright ©2024 Metaverse Group</span>
      </div>
    </div>
  );
};

export default Footer;
