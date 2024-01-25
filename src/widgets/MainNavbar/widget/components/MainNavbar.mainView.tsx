import React from "react";
import { Button, Dropdown, Navbar, Menu, Avatar } from "@common-components";
import { NavLink, useNavigate } from "react-router-dom";

interface MainNavbarMainViewProps {
  className?: string;
  links: { label: string; to: string }[];
  user: { username: string; fullName: string } | null;
  logout: () => Promise<void>;
}

export default function MainNavbarMainView({
  links,
  user,
  logout,
}: MainNavbarMainViewProps) {
  const navigate = useNavigate();
  const onNavItemClicked = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };
  const onLogout = () => {
    logout().then(() => navigate("/"));
  };
  return (
    <Navbar>
      <Navbar.Start>
        {/*<Dropdown>*/}
        {/*  <Button shape="circle" color="ghost">*/}
        {/*    <svg*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      className="h-5 w-5"*/}
        {/*      fill="none"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      stroke="currentColor"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*        strokeWidth={2}*/}
        {/*        d="M4 6h16M4 12h16M4 18h7"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*  </Button>*/}
        {/*  <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1]">*/}
        {/*    {links.map((link) => (*/}
        {/*      <Dropdown.Item key={link.label} anchor={false}>*/}
        {/*        <NavLink to={link.to} onClick={onNavItemClicked}>*/}
        {/*          {link.label}*/}
        {/*        </NavLink>*/}
        {/*      </Dropdown.Item>*/}
        {/*    ))}*/}
        {/*  </Dropdown.Menu>*/}
        {/*</Dropdown>*/}
      </Navbar.Start>
      <Navbar.Center>
        <h1 className="text-xl">AZ React Boilerplate</h1>
      </Navbar.Center>
      <Navbar.End className="navbar-end">
        <Menu horizontal={true} className="px-1">
          {!user && (
            <>
              <Menu.Item>
                <NavLink to="login" onClick={onNavItemClicked}>
                  Sign in
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="register" onClick={onNavItemClicked}>
                  Register
                </NavLink>
              </Menu.Item>
            </>
          )}
        </Menu>
        {user && (
          <>
            <Dropdown vertical="bottom" end>
              <Dropdown.Toggle button={false} className="cursor-pointer">
                <Avatar
                  shape="circle"
                  size="xs"
                  color="primary"
                  borderColor="secondary"
                  letters={user.fullName[0]}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="card compact w-64 !p-0 shadow bg-base-100 rounded-box">
                <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </Navbar.End>
    </Navbar>
  );
}
