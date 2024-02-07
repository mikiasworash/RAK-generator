import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="h-30 py-5 flex flex-col mx-auto  items-center bg-[#fcfcfc] shadow-inner dark:bg-black">
      <p>
        <span className="text-lg">&copy; </span> {new Date().getFullYear()} Made
        with <span className="text-red-500">❤</span>
      </p>
      <div className="flex items-center gap-5 my-4">
        <a
          href="https://www.linkedin.com/in/mikiasworash/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
            <FaLinkedinIn />
          </div>
        </a>
        <a
          href="https://twitter.com/mikiasworash"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3  cursor-pointer hover:scale-125 ease-in duration-300">
            <FaTwitter />
          </div>
        </a>
        <a
          href="https://github.com/mikiasworash"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3  cursor-pointer hover:scale-125 ease-in duration-300">
            <FaGithub />
          </div>
        </a>
        <Link href="/contact">
          <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3  cursor-pointer hover:scale-125 ease-in duration-300">
            <AiOutlineMail />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
