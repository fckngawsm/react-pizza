import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={530}
    viewBox="0 0 280 530"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="138" r="138" />
    <rect x="11" y="417" rx="0" ry="0" width="114" height="43" />
    <rect x="159" y="418" rx="18" ry="18" width="113" height="40" />
    <rect x="9" y="296" rx="0" ry="0" width="268" height="23" />
    <rect x="8" y="335" rx="0" ry="0" width="266" height="61" />
  </ContentLoader>
)

export default Skeleton