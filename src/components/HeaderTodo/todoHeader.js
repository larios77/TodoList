import ImageMobileLight from '../../images/bg-mobile-light.jpg'
// import ImageMobileDark from '../../images/bg-mobile-dark.jpg'
import ImageDesktopLight from '../../images/bg-desktop-light.jpg'
// import ImageDesktopDark from '../../images/bg-desktop-dark.jpg'
import './todoHeader.scss'

function TodoHeader() {
  return (
    <div>
      <header className="header__container">
        <div className="hero__image">
          <img src={ImageMobileLight} alt="ImageMobileLight" />
        </div>
        <div className="hero__image-desktop">
          <img src={ImageDesktopLight} alt="ImageDesktopLight" />
        </div>
        <div className="container__hero">
          <h1 className="header__title">TODO</h1>
        </div>
      </header>
    </div>
  )
}
export default TodoHeader
