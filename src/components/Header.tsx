import { Link } from "preact-router";

const Header = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">ЛДПР.Аниме</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/" className="btn btn-ghost">Home</Link></li>
          <li><Link href="/anime" className="btn btn-ghost">Anime List</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
