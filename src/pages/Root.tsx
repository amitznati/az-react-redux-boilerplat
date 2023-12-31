import { Outlet, NavLink } from "react-router-dom";
import {Navbar, Dropdown, Button, Indicator, Badge} from "../common-components";


const links = [
  {to: '/', label: 'Home'},
  {to: 'posts', label: 'Posts'},
]
export default function Root() {
  const onNavItemClicked = () => {
    const elem = (document.activeElement as HTMLElement);
    if (elem) {
      elem?.blur();
    }
  }
  return (
      <div>
        <Navbar>
          <Navbar.Start>
            <Dropdown>
              <Button shape="circle" color="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
              </Button>
              <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1]">
                {links.map(link => (
                    <Dropdown.Item key={link.label} anchor={false}>
                      <NavLink to={link.to} onClick={onNavItemClicked}>{link.label}</NavLink>
                    </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Start>
          <Navbar.Center>
            <Button tag="a" color="ghost" className="normal-case text-xl">
              Chat App Client
            </Button>
          </Navbar.Center>
          <Navbar.End className="navbar-end">
            <Button color="ghost" shape="circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
            <Button color="ghost" shape="circle">
              <Indicator>
                <Badge size="xs" color="primary" className={Indicator.Item.className()} />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </Indicator>
            </Button>
          </Navbar.End>
        </Navbar>
        <Outlet />
      </div>

  );
}