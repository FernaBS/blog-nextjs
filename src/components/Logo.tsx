import profileImg from "@/../project files/profile-img.png";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";
import { AvatarImage } from "./ui/avatar";

const Logo = () => {
  return (
    <Link href="/">
      <Avatar>
        <AvatarImage
          src={profileImg.src}
          alt="CodeBucks"
          className="rounded-full border border-black h-[3rem] w-[3rem]"
        />
        <AvatarFallback>CB</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default Logo;
