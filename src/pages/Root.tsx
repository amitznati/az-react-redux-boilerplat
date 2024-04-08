import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import { FeedbackHandler } from "@widgets";

export default function Root() {
  return (
    <div>
      <MainNavbar />
      <FeedbackHandler />
      <Outlet />
    </div>
  );
}
