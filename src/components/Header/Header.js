import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Container, Dropdown } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";

import { useWindowSize } from "../../hooks/useWindowSize";
import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Logo from "../Logo";
import { menuItems } from "./menuItems";

import imgP from "../../assets/image/header-profile.png";

const SiteHeader = styled.header`
  .dropdown-toggle::after {
    opacity: 0;
  }

  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.6s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.6s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({ dark, theme }) => (dark ? theme.colors.dark : "#fff")};
    }
  }
`;

const ToggleButton = styled.button`
  color: ${({ dark, theme }) =>
    dark ? theme.colors.lightShade : theme.colors.heading}!important;
  border-color: ${({ dark, theme }) =>
    dark ? theme.colors.lightShade : theme.colors.heading}!important;
`;

const Header = () => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  const size = useWindowSize();

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <>
      <SiteHeader
        className={`site-header site-header--sticky  site-header--absolute py-7 py-xs-0 sticky-header ${
          gContext.header.bgClass
        } ${
          gContext.header.align === "left"
            ? "site-header--menu-left "
            : gContext.header.align === "right"
            ? "site-header--menu-right "
            : "site-header--menu-center "
        }
        ${gContext.header.theme === "dark" ? "dark-mode-texts" : " "} ${
          showScrolling ? "scrolling" : ""
        } ${
          gContext.header.reveal &&
          showReveal &&
          gContext.header.theme === "dark"
            ? "reveal-header bg-blackish-blue"
            : gContext.header.reveal && showReveal
            ? "reveal-header"
            : ""
        }`}
      >
        <Container
          fluid={gContext.header.isFluid}
          className={gContext.header.isFluid ? "pr-lg-9 pl-lg-9" : ""}
        >
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg px-0 py-0">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo">
              <Logo white={gContext.header.theme === "dark"} />
            </div>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav-wrapper">
                <ul className="navbar-nav main-menu d-none d-lg-flex">
                  {menuItems.map(
                    (
                      { label, isExternal = false, name, items, ...rest },
                      index
                    ) => {
                      const hasSubItems = Array.isArray(items);
                      return (
                        <React.Fragment key={name + index}>
                          {hasSubItems ? (
                            <li className="nav-item dropdown" {...rest}>
                              <a
                                className="nav-link dropdown-toggle gr-toggle-arrow"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/#"
                                onClick={(e) => e.preventDefault()}
                              >
                                {label}
                                <i className="icon icon-small-down"></i>
                              </a>
                              <ul className="gr-menu-dropdown dropdown-menu ">
                                {items.map((subItem, indexSub) => {
                                  const hasInnerSubItems = Array.isArray(
                                    subItem.items
                                  );
                                  return (
                                    <React.Fragment
                                      key={subItem.name + indexSub}
                                    >
                                      {hasInnerSubItems ? (
                                        <li className="drop-menu-item dropdown">
                                          <a
                                            className="dropdown-toggle gr-toggle-arrow"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            href="/#"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            {subItem.label}
                                            <i className="icon icon-small-down"></i>
                                          </a>
                                          <ul className="gr-menu-dropdown dropdown-menu dropdown-left">
                                            {subItem.items.map(
                                              (itemInner, indexInnerMost) => (
                                                <li
                                                  className="drop-menu-item"
                                                  key={
                                                    itemInner.name +
                                                    indexInnerMost
                                                  }
                                                >
                                                  {itemInner.isExternal ? (
                                                    <a
                                                      href={`${itemInner.name}`}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                    >
                                                      {itemInner.label}
                                                    </a>
                                                  ) : (
                                                    <Link
                                                      href={`/${itemInner.name}`}
                                                    >
                                                      <a>{itemInner.label}</a>
                                                    </Link>
                                                  )}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </li>
                                      ) : (
                                        <li className="drop-menu-item">
                                          {subItem.isExternal ? (
                                            <a
                                              href={`${subItem.name}`}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              {subItem.label}
                                            </a>
                                          ) : (
                                            <Link href={`/${subItem.name}`}>
                                              <a>{subItem.label}</a>
                                            </Link>
                                          )}
                                        </li>
                                      )}
                                    </React.Fragment>
                                  );
                                })}
                              </ul>
                            </li>
                          ) : (
                            <li className="nav-item" {...rest}>
                              {isExternal ? (
                                <a
                                  className="nav-link"
                                  href={`${name}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {label}
                                </a>
                              ) : (
                                <Link href={`/${name}`}>
                                  <a
                                    className="nav-link"
                                    role="button"
                                    aria-expanded="false"
                                  >
                                    {label}
                                  </a>
                                </Link>
                              )}
                            </li>
                          )}
                        </React.Fragment>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>

            {gContext.header.button === "cta" && (
              <div className="header-btn ml-auto ml-lg-0 mr-6 mr-lg-0 d-none d-xs-block">
                <Link href="/#">
                  <a className={`btn btn-${gContext.header.variant}`}>
                    {gContext.header.buttonText}
                  </a>
                </Link>
              </div>
            )}

            {gContext.header.button === "profile" && (
              <div className="header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center">
                <div>
                  <Link href="/#">
                    <a className="px-3 ml-7 font-size-7 notification-block flex-y-center position-relative">
                      <i className="fas fa-bell heading-default-color"></i>
                      <span className="font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white">
                        3
                      </span>
                    </a>
                  </Link>
                </div>
                <div>
                  <Dropdown className="show-gr-dropdown py-5">
                    <Dropdown.Toggle
                      as="a"
                      className="proile media ml-7 flex-y-center"
                    >
                      <div className="circle-40">
                        <img src={imgP} alt="" />
                      </div>
                      <i className="fas fa-chevron-down heading-default-color ml-6"></i>
                    </Dropdown.Toggle>
                    {size.width <= 991 ? (
                      <Dropdown.Menu
                        className="gr-menu-dropdown border-0 border-width-2 py-2 w-auto bg-default"
                        key="1"
                      >
                        <Link href="/#">
                          <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Settings
                          </a>
                        </Link>
                        <Link href="/#">
                          <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Edit Profile
                          </a>
                        </Link>
                        <Link href="/#">
                          <a className=" dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Log Out
                          </a>
                        </Link>
                      </Dropdown.Menu>
                    ) : (
                      <div
                        className="dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default"
                        key="2"
                      >
                        <Link href="/#">
                          <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Settings
                          </a>
                        </Link>
                        <Link href="/#">
                          <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Edit Profile
                          </a>
                        </Link>
                        <Link href="/#">
                          <a className=" dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Log Out
                          </a>
                        </Link>
                      </div>
                    )}
                  </Dropdown>
                </div>
              </div>
            )}

            {gContext.header.button === "account" && (
              <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
                <a
                  className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleSignInModal();
                  }}
                >
                  Log In
                </a>
                <a
                  className={`btn btn-${gContext.header.variant} text-uppercase font-size-3`}
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleSignUpModal();
                  }}
                >
                  Sign Up
                </a>
              </div>
            )}

            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={gContext.header.theme === "dark" ? 1 : 0}
            >
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu menuItems={menuItems} />
      </Offcanvas>
    </>
  );
};
export default Header;
