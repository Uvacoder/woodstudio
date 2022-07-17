import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img src="/logo.svg" alt="On End Studio" style={{ width: 360 }} />
      </a>
    </Link>
  );
};

export default Logo;
