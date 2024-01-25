import { Button, Card } from "@common-components";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/AuthProvider";

const LoginPageLoginForm = () => {
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLoginSubmit = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onLogin({ username, password }).then(() => {
      navigate("/posts");
    });
  };
  return (
    <Card className="w-full m-auto rounded-md shadow-md lg:max-w-lg">
      <Card.Body>
        <h1 className="text-3xl font-semibold text-center">
          Simple Login Form
        </h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email/User Name</span>
            </label>
            <input
              type="text"
              placeholder="Email Address/User Name"
              className="w-full input input-bordered input-primary"
              value={username}
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="password"
              className="w-full input input-bordered input-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a
            target="_blank"
            href="/#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>
          <div>
            <Button color="primary" onClick={onLoginSubmit}>
              Login
            </Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default LoginPageLoginForm;
