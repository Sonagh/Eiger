import Logo from "@assets/images/logo.svg";
import HeaderIcon1 from "@assets/images/header-icon1.svg";
import HeaderIcon2 from "@assets/images/header-icon2.svg";
import HeaderIcon3 from "@assets/images/header-icon3.svg";

const Header = () => {
  return (
   <header className="flex justify-between mt-4 pt-2 px-4">
     <img src={Logo} alt="logo" loading="lazy" width="110" height="32" />
     <div className="flex">
        <img src={HeaderIcon1} alt="icon1" loading="lazy" width="42" height="42" className="-ml-1 z-20" />
        <img src={HeaderIcon2} alt="icon2" loading="lazy" width="42" height="42" className="-ml-1 z-10" />
        <img src={HeaderIcon3} alt="icon3" loading="lazy" width="42" height="42" className="-ml-1" />
     </div>
   </header>
  );
};

export default Header;
