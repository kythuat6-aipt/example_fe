import { useWindowSize } from "hooks"
import { useEffect, useMemo } from 'react';
import DesktopLayout from 'layouts/desktop';
import MobileLayout from 'layouts/mobile';
import { connectSocket } from 'utils/services/socket';
import { useSelector, useDispatch } from "react-redux";
import { findPageByPath, isEmpty } from 'utils/helps';
import axiosInstance from 'utils/services/api';
import endpoint from 'utils/services/api/endpoint';
import reduxActions from 'utils/constants/reduxActions';
import { useLocation, useNavigate } from "react-router-dom";
import navigatePage from "utils/helps/navigate";
import { AIPT_WEB_TOKEN } from "utils/constants/config";
import Cookies from "js-cookie";
import pages from "pages";

function App() {
  // redux
  const dispatch = useDispatch()
  const userProfile = useSelector((state) => state?.profile)

  // Check device
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width <= 768, [width]);

  // Navigate
  const navigate = useNavigate();
  const currentPath = useLocation().pathname
  window.navigatePage = (name, params = {}, query = {}) => navigatePage(navigate, name, params, query)

  const isPublicPage = useMemo(() => {
    const page = findPageByPath(currentPath, pages)
    return !page?.auth 
  }, [currentPath])

  // call api get provinces
  const handleGetProvinces = async () => {
    try {
      const { data, status } = await axiosInstance.get(endpoint.getProvinces)
      if (status === 200) {
        dispatch({ type: reduxActions.SET_PROVINCES, payload: data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  // call api get profile
  const handleGetUserProfile = async () => {
    try {
      const { data, status } = await axiosInstance.get(endpoint.getProfile)
      if (status === 200) {
        dispatch({ type: reduxActions.SET_PROFILE, payload: data })
      }
    } catch (error) {
      window.navigatePage("login")
      console.log(error)
    }
  }

  // useEffect đã đăng nhập
  useEffect(() => {
    if (!isEmpty(userProfile)) {
      handleGetProvinces()
      connectSocket()
    }   
  }, [userProfile])

  // useEffect chạy khi component mount
  useEffect(() => {
    const token = Cookies.get(AIPT_WEB_TOKEN)

    if (!isEmpty(token)) {
      handleGetUserProfile()
    } else if (!isPublicPage) {
      window.navigatePage("login")
    }
  }, [])

  return (
    <div className="app">
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}

export default App;