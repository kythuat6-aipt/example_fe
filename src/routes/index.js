import { useSelector } from "react-redux"
import { isEmpty } from "utils/helps"
import pages from 'pages'
import { useWindowSize } from "hooks"
import { useMemo } from "react"
import { Routes, Route } from "react-router-dom"

const PageContent = () => {
  const userLogin = useSelector(state => state?.profile)

  // Check device
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width <= 768, [width]);

  return (
    <Routes>
      {pages.filter(page => !isEmpty(userLogin) ? page : !page?.auth)
        .map((page, index) =>
          <Route
            key={index}
            path={page.path}
            element={isMobile ? page?.elementMobile : page?.elementDesktop}
          />
        )}
    </Routes>
  )
}

export default PageContent;