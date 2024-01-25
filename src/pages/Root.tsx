import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";

export default function Root() {
  return (
    <div>
      <MainNavbar />
      <Outlet />
    </div>
  );
}
