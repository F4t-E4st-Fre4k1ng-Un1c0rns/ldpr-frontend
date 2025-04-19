const Header = () => {
  const projectName = import.meta.env.VITE_PROJECT_NAME || "LDPR";

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{projectName}</a>
      </div>
    </div>
  );
};

export default Header;
