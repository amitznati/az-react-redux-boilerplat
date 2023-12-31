import logo from '../assets/images/logo.svg';
export function Home() {
  return (
    <div className="hero bg-base-200" style={{minHeight: 'calc(100vh - 4rem)'}}>
      <div className="hero-content w-full flex-col lg:flex-row">
        <img src={logo} className="max-w-sm rounded-lg shadow-2xl" alt="logo" />
        <div>
          <h1 className="text-5xl font-bold">react-bp</h1>
          <p className="py-6">scalable react boilerplate</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
