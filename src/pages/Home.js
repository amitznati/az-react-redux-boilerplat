import * as React from 'react';
import logo from '../styles/assets/images/logo192.png';
export function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">react bp</span>
            <span className="heading-primary-sub">scalable react boilerplate</span>
          </h1>
          <a href="#" className="btn btn-white btn-animated">get started</a>
        </div>

      </header>
    </div>
  );
}

export default Home;
