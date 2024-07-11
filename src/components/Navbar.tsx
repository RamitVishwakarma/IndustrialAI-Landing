import Logo from "../../public/Logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-1.5">
          <Image width={32} height={32} src={Logo} alt="Industrial AI" />
          <span className="font-Satoshi w-fit font-medium text-base">
            Industrial AI
          </span>
        </div>
        <ul className="flex gap-6 text-slate-500 font-medium text-sm">
          <li>
            <Link href="#">Solutions</Link>
          </li>
          <li>
            <Link href="#">Our Approach</Link>
          </li>
          <li>
            <Link href="#">Security</Link>
          </li>
          <li>
            <Link href="#">Company</Link>
          </li>
        </ul>

        <button className="text-slate-950 bg-slate-100 px-3.5 py-1.5 rounded-[0.625rem] text-sm">
          Book a demo
        </button>
      </div>
    </>
  );
};

export default Navbar;