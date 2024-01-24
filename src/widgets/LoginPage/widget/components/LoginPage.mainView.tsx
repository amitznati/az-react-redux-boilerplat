import { useState, MouseEvent } from "react";
import { Button } from "@common-components";

interface LoginPageMainViewProps {
  className?: string;
  login: (data: { username: string; password: string }) => void;
}

export default function LoginPageMainView({ login }: LoginPageMainViewProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    login({ username, password });
  };
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Simple Login Form
        </h1>
        <div className="flex items-center justify-center mt-4">
          (use demo@demo)
        </div>
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
            <Button color="primary" onClick={onLogin}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
