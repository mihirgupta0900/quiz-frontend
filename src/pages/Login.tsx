import GoogleButton from "react-google-button";

const Login = () => {
  return (
    <div
      style={{ minHeight: "90vh" }}
      className="flex justify-center items-center"
    >
      <a href="http://localhost:3000/auth/google">
        <GoogleButton />
      </a>
    </div>
  );
};

export default Login;
