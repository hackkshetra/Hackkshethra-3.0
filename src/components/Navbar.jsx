import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { event } from "../data/constants";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Domains", "/domains"],
  ["Schedule", "/schedule"],
  ["Prizes", "/prizes"],
  ["Sponsors", "/sponsors"],
  ["Glimpses", "/glimpses"],
  ["Team", "/team"],
  ["Register", "/register"],
];
const Nav = styled.nav`
  position: relative;
  z-index: 100;
  background: rgba(5, 10, 18, 0.72);
  border-bottom: 1px solid rgba(91, 196, 224, 0.13);
  backdrop-filter: blur(22px) saturate(145%);
  box-shadow: 0 10px 34px rgba(0, 0, 0, 0.16);
  color: ${({ theme }) => theme.text_primary};

  padding-inline: max(20px, 4vw);
`;
const Bar = styled.div`
  max-width: 1320px;
  margin: auto;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  @media (max-width: 1099px) {
    height: 56px;
  }
`;
const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: -0.035em;
  img {
    width: 36px;
    height: 40px;
    object-fit: contain;
    filter: drop-shadow(0 0 12px rgba(65, 193, 225, 0.2));
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(10px, 1.3vw, 24px);
  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: inherit;
    text-decoration: none;
    position: relative;
    font-size: 13px;
    letter-spacing: 0.025em;
    transition: color 0.2s ease, background 0.2s ease;
  }
  a:hover,
  a.active {
    color: ${({ theme }) => theme.accent};
  }
  a:hover::after,
  a.active::after {
    content: "";
    position: absolute;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 4px;
    background: ${({ theme }) => theme.accent};
    box-shadow: 0 0 12px rgba(85, 217, 244, 0.62);
  }
  a:last-child {
    background: linear-gradient(120deg, rgba(20, 91, 134, 0.52), rgba(11, 38, 68, 0.75));
    border: 1px solid rgba(85, 217, 244, 0.34);
    border-radius: 4px;
    padding: 0 18px;
    color: #e7fbff;
    &:hover {
      background: rgba(18, 101, 139, 0.62);
      box-shadow: 0 0 22px rgba(85, 217, 244, 0.16);
    }
    &:hover::after,
    &.active::after {
      display: none;
    }
  }
  @media (max-width: 1099px) {
    display: ${({ $open }) => ($open ? "grid" : "none")};
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;
    position: absolute;
    inset: 100% 0 auto;
    background: rgba(7, 13, 23, 0.96);
    backdrop-filter: blur(20px);
    padding: 12px max(20px, 4vw) 20px;
    max-height: calc(100dvh - 64px);
    overflow: auto;
    border-bottom: 1px solid ${({ theme }) => theme.border_color};
  }
`;
const Toggle = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  @media (max-width: 1099px) {
    display: flex;
  }
`;
const Skip = styled.a`
  position: absolute;
  left: 16px;
  top: -68px;
  background: ${({ theme }) => theme.bg};
  color: inherit;
  padding: 10px;
  &:focus {
    top: 10px;
  }
`;
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const { key } = useLocation();
  useEffect(() => setOpen(false), [key]);
  return (
    <Nav
      aria-label="Primary navigation"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (open && e.key === "Escape") {
          setOpen(false);
          button.current.focus();
        }
      }}
    >
      <Skip href="#main-content">Skip to content</Skip>
      <Bar>
        <Brand to="/">
          <img src={event.logo} alt="" />
          {event.name}
        </Brand>
        <Toggle
          type="button"
          ref={button}
          onClick={() => setOpen(!open)}
          aria-controls="site-menu"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <CloseRounded /> : <MenuRounded />}
        </Toggle>
        <Menu id="site-menu" $open={open}>
          {links.map(([label, to]) => (
            <NavLink end key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </Menu>
      </Bar>
    </Nav>
  );
}
