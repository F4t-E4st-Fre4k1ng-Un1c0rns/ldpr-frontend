import { Link } from "preact-router";

const Header = () => {
  return (
    <header className="bg-base-200">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          {/* @ts-expect-error seems like error in preact-router types */}
          <Link className="btn btn-ghost text-xl" href="/">
            ЛДПР.Аниме
          </Link>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* @ts-expect-error seems like error in preact-router types */}
              <Link className="btn btn-ghost" href="/">
                Home
              </Link>
            </li>
            <li>
              {/* @ts-expect-error seems like error in preact-router types */}
              <Link className="btn btn-ghost" href="/anime">
                Anime List
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
