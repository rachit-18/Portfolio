import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Socials = [
  { icon: <FaGithub />, path: "https://github.com/rachit-18" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rachit-pal" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
