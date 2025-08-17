import './App.css';
import { IoMenu, IoClose } from 'react-icons/io5';
import { IoMdLogIn } from 'react-icons/io';
import { articlesArray } from './data';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dynamicStyles = {
    overflowHidden: {
      overflow: 'hidden',
    },
    overflowAuto: {
      overflow: 'auto',
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    blockScroll();
  };

  const blockScroll = () => {
    if (!isMenuOpen) {
      Object.assign(document.body.style, dynamicStyles.overflowHidden);
    } else {
      Object.assign(document.body.style, dynamicStyles.overflowAuto);
    }
  };
  return (
    <>
      <header className="header">
        <div className={`${isMenuOpen ? 'overlay' : 'overlay-none'}`}></div>
        <div className="header__logo">
          <img className="logo" src="logo.svg" alt="Logo" />
          <div className="company-name">Boldo</div>
        </div>
        <nav>
          <ul className="header__nav">
            <li>
              <a href="" className="nav-btn ml40 nav-btn__hide">
                Product
              </a>
            </li>
            <li>
              <a href="" className="nav-btn ml40 nav-btn__hide">
                Services
              </a>
            </li>
            <li>
              <a href="" className="nav-btn ml40 nav-btn__hide">
                About
              </a>
            </li>
            <li>
              <button
                onClick={toggleMenu}
                href=""
                className="burger-btn ml40 display-none nav-btn__show"
              >
                <IoMenu fill="var(--dark-blue)" className="burger-menu" />
              </button>
            </li>
            <li>
              <a
                href=""
                className="nav-btn ml40 nav-btn__active nav-btn__hide-small"
              >
                Log In
              </a>
              <a
                href=""
                className="nav-btn ml40 nav-btn__active display-none nav-btn__active-small"
              >
                <IoMdLogIn fill="currentColor" className="svg-enter" />
              </a>
            </li>
          </ul>
          <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="side-menu__nav">
              <h1 className="manrope large-text regular-text black-text">
                Menu
              </h1>
              <button className="side-menu__exit-button">
                <IoClose className="svg-exit" onClick={toggleMenu} />
              </button>
            </div>
            <ul className="side-menu__main">
              <li className="mb32">
                <a href="" className="nav-btn">
                  Product
                </a>
              </li>
              <li className="mb32">
                <a href="" className="nav-btn">
                  Services
                </a>
              </li>
              <li className="mb32">
                <a href="" className="nav-btn">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="block-with-title">
          <div className="open-sans medium-text regular-text blue-text">
            Blog
          </div>
          <h1 className="manrope extra-large-text regular-text blue-text mt12">
            Thoughts and words
          </h1>
        </div>
        <a href="">
          <article className="main-article mb32">
            <img
              className="article__picture"
              src="large-picture.svg"
              alt="Houses"
            />
            <div className="main-article-text">
              <div>
                <strong className="open-sans small-text bold-text blue-text mr12">
                  Category
                </strong>{' '}
                <span className="open-sans small-text regular-text light-text">
                  November 22, 2021
                </span>
              </div>
              <h2 className="manrope large-text regular-text black-text">
                Pitch termsheet backing validation focus release.
              </h2>
              <div className="flex-row">
                <img src="avatar-Chandler.svg" alt="Chandler's avatar" />{' '}
                <span className="open-sans small-text regular-text black-text ml12">
                  Chandler Bing
                </span>
              </div>
            </div>
          </article>
        </a>
        <hr className="line"></hr>
        <div className="block-with-articles">
          <h2 className="manrope large-text regular-text black-text mt0 mb40">
            Latest news
          </h2>
          <div className="articles-wrapper">
            {articlesArray.map((article) => {
              return (
                <a href="">
                  <article className="article">
                    <div>
                      <img
                        className="article__picture mb24"
                        src={article.imgMain}
                        alt={article.imgMainAlt}
                      ></img>
                      <div>
                        <strong className="open-sans small-text bold-text blue-text mr12">
                          {article.category}
                        </strong>
                        <span className="open-sans small-text regular-text light-text">
                          {article.data}
                        </span>
                      </div>
                      <h5 className="open-sans medium-text bold-text black-text">
                        {article.text}
                      </h5>
                    </div>
                    <div className="flex-row">
                      <img
                        src={article.profileImg}
                        alt={article.profileImgAlt}
                      />
                      <span className="open-sans small-text regular-text black-text ml12">
                        {article.author}
                      </span>
                    </div>
                  </article>
                </a>
              );
            })}
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="secondary-btn">Load more</button>
        </div>
        <div className="getting-info">
          <img
            className="getting-info__mask"
            src="mask.svg"
            alt="Geometric figure"
          />
          <div className="getting-info__main">
            <h2 className="manrope large-text regular-text white-text">
              An enterprise template to ramp up your company website
            </h2>
            <div className="flex-row flex-to-column">
              <input
                className="input-medium"
                type="email"
                placeholder="Your email address"
              ></input>
              <button className="primary-btn ml24 ml0">Start now</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div>
          <div className="flex-row mb40">
            <img className="logo" src="logo.svg" alt="Logo" />
            <div className="company-name">Boldo</div>
          </div>
          <p className="light-text mb64">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="light-text mb40">All rights reserved.</p>
        </div>
        <div className="footer__sections">
          <div className="flex-column">
            <strong className="bold-text-medium mb32">Landings</strong>
            <a href="" className="footer-btn mb32">
              Home
            </a>
            <a href="" className="footer-btn mb32">
              Products
            </a>
            <a href="" className="footer-btn mb40">
              Services
            </a>
          </div>
          <div className="flex-column">
            <strong className="bold-text-medium mb32">Company</strong>
            <a href="" className="footer-btn mb32">
              Home
            </a>
            <div className="flex-row mb32">
              <a href="" className="footer-btn mr12">
                Careers
              </a>
              <div className="attracting-attention">Hiring!</div>
            </div>
            <a href="" className="footer-btn mb40">
              Services
            </a>
          </div>
          <div className="flex-column">
            <strong className="bold-text-medium mb32">Resources</strong>
            <a href="" className="footer-btn mb32">
              Blog
            </a>
            <a href="" className="footer-btn mb32">
              Products
            </a>
            <a href="" className="footer-btn mb40">
              Services
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
