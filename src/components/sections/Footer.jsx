import styled from "styled-components";
import { Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Bio, event } from "../../data/constants";

const Foot = styled.footer`
  z-index: 1;
  position: relative;

  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px max(20px, 5vw);
  > div {
    max-width: 1160px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px 18px;
  }
  small {
    color: ${({ theme }) => theme.text_secondary};
  }
  .queries {
    flex-basis: 100%;
    margin: 0;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;
  }
  .queries a {
    display: inline;
    width: auto;
    height: auto;
    color: ${({ theme }) => theme.accent};
    text-underline-offset: 3px;
  }
  nav {
    margin-left: auto;
    display: flex;
  }
  a {
    display: grid;
    place-items: center;
    color: inherit;
    width: 44px;
    height: 44px;
  }
  @media (max-width: 620px) {
    small {
      order: 3;
      width: 100%;
    }
  }
`;
export default function Footer() {
  return (
    <Foot>
      <div>
        <strong>{event.name}</strong>
        <small>© 2026 · {event.dates}</small>
        <nav aria-label="Social media">
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="HACKKSHETRA on LinkedIn"
          >
            <LinkedIn />
          </a>
          <a
            href={Bio.insta}
            target="_blank"
            rel="noreferrer"
            aria-label="HACKKSHETRA on Instagram"
          >
            <Instagram />
          </a>
        </nav>
        <p className="queries">
          For any queries, email{" "}
          <a href="mailto:hack_kshetra@vvce.ac.in">
            hack_kshetra@vvce.ac.in
          </a>{" "}
          or contact our <Link to="/team">student coordinators</Link>.
        </p>
      </div>
    </Foot>
  );
}
