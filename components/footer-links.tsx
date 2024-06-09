import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterLinks = () => {
  return (
    <ul className="flex gap-2 items-center">
      <li>
        <Link href="https://facebook.com">
          <FaFacebookSquare className="h-7 w-7" />
        </Link>
      </li>
      <li>
        <Link href="https://instagram.com">
          <FaInstagram className="h-7 w-7" />
        </Link>
      </li>
      <li>
        <Link href="https://linkedin.com">
          <FaLinkedin className="h-7 w-7" />
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com">
          <FaSquareXTwitter className="h-7 w-7" />
        </Link>
      </li>
    </ul>
  );
};

export default FooterLinks;
