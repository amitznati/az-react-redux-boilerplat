import LoginPageLoginForm from "./LoginPage.LoginForm";

interface LoginPageMainViewProps {
  className?: string;
  login: (data: { username: string; password: string }) => void;
}

export default function LoginPageMainView({ login }: LoginPageMainViewProps) {

  return (
      <div className="relative flex flex-col justify-center h-[700px] overflow-hidden">
        <LoginPageLoginForm login={login} />
      </div>
  );
}
