import TopBanner from '../images/top_banner.jpg';
import logo from '../images/logo.png';

function OrganicFood() {
  return (
    <div className="w-screen h-auto">
      <div className="w-full h-auto bg-lime-400 self-center">
        <img src={TopBanner} alt="top_banner" className="top_banner" />
      </div>
      <div className="bg-green5bbb46">
        <div>
          <a>
            <img src={logo} alt="logo" className="" />
          </a>
        </div>
        <div>
          <input type="search" placeholder="Search product..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default OrganicFood;
