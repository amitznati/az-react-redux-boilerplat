import { Outlet } from "react-router-dom";
import {MainNavbar} from "../widgets";

export default function Root({
  links,
}: {
  links: { label: string; to: string }[];
}) {

  return (
    <div>
      <MainNavbar links={links} />
      <Outlet />
    </div>
  );
}
