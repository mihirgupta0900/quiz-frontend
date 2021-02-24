const Navbar = () => {
  return (
    <div
      style={{ height: "10vh" }}
      className="flex items-center justify-between mx-12"
    >
      <div className="">
        <a href="/">Quiz App</a>
      </div>
      <div className="">
        <a href="/quizes" className="mr-5">
          Quizes
        </a>
        <a href="/login">
          <button className="px-6 py-2 text-black bg-primary rounded-md">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
