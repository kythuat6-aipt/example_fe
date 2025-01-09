// Desktop Pages
import HomeDesktop from "./desktop/HomeDesktop";
import LoginDesktop from "./desktop/LoginDesktop";
import PublicDesktop from "./desktop/PublicDesktop";

// Mobile pages
import HomeMobile from "./mobile/HomeMobile";
import LoginMobile from "./mobile/LoginMobile";

const pages = [
  {
    name: 'login',
    path: '/login',
    auth: false,
    label: 'login',
    elementDesktop: <LoginDesktop />,
    elementMobile: <LoginMobile />
  },
  {
    name: 'public',
    path: '/public',
    auth: false,
    label: 'public',
    elementDesktop: <PublicDesktop />,
    elementMobile: <PublicDesktop />
  },
  {
    name: 'home',
    path: '/',
    label: 'Home',
    auth: true,
    elementDesktop: <HomeDesktop />,
    elementMobile: <HomeMobile />
  }
]

export default pages;