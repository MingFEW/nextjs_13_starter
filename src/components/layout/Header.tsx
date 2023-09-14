import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <div className="pt-8 pb-4 flex flex-row justify-between items-center">
        <div className="web-logo">
          <Link href="/">
            <Image  
              src="/images/n_logo.svg" 
              width={50} 
              height={50} 
              quality={100} 
              alt="Website Logo" 
            />
          </Link>
        </div>
        <div className="nav-left-side">
          <nav>
            <ul className="flex flex-row items-center gap-10 text-xl">
              <li>
                <Link href="/" className="text-[#999999] font-light hover:underline hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-[#999999] font-light hover:underline hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/blogs" className="text-[#999999] font-light hover:underline hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Header;
