import React from "react";
import { Dropdown, Navbar, Menu, Avatar } from "@common-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function MainNavbarMainView() {
  const navigate = useNavigate();
  const { onLogout, user } = useAuth();
  const onNavItemClicked = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };
  const onLogoutClick = () => {
    onLogout().then(() => navigate("/"));
  };
  return (
    <Navbar>
      <Navbar.Start></Navbar.Start>
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
                <Dropdown.Item onClick={onLogoutClick}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </Navbar.End>
    </Navbar>
  );
}
