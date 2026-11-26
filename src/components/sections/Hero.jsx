import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { motion, useReducedMotion } from "framer-motion";

import { event } from "../../data/constants";
import HeroBgAnimation from "../HeroBgAnimation";
import DefenseShield from "../canvas/DefenseShield";
import { Actions, PrimaryLink, Section } from "./PageElements";

const Stage = styled.header`
  position: relative;
  padding: clamp(20px, 3.8vw, 58px) max(16px, 4vw) 0;
  isolation: isolate;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: min(54vw, 760px);
    aspect-ratio: 1;
    right: -14%;
    top: -38%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(19, 173, 199, 0.16), transparent 68%);
    filter: blur(12px);
  }
`;
const Pass = styled(Section)`
  width: min(100%, 1320px);
  display: grid;
  grid-template-columns: minmax(0, 2.35fr) minmax(250px, 1fr);
  overflow: hidden;
  border-radius: 14px;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(85, 217, 244, 0.2);
  box-shadow:
    0 30px 80px rgba(2, 5, 18, 0.48),
    0 0 0 1px rgba(23, 92, 230, 0.04);
  transform: translateZ(0);
  @media (prefers-reduced-motion: no-preference) {
    animation: pass-arrive 0.7s cubic-bezier(0.2, 0.75, 0.25, 1) both;
  }
  @keyframes pass-arrive {
    from { opacity: 0; transform: translateY(18px) scale(0.985); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1.8fr) minmax(230px, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
const Face = styled(motion.div)`
  position: relative;
  isolation: isolate;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.2fr;
  grid-template-areas: "title title" "details art";
  padding: clamp(24px, 3vw, 48px);
  background:
    radial-gradient(ellipse at 75% 42%, rgba(12, 108, 146, 0.3), transparent 44%),
    radial-gradient(ellipse at 12% 100%, rgba(17, 56, 117, 0.42), transparent 56%),
    linear-gradient(126deg, #08111e, #0b1728 58%, #08101b);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    opacity: 0.22;
    background-image:
      linear-gradient(rgba(178, 229, 255, 0.18) 1px, transparent 1px),
      linear-gradient(90deg, rgba(178, 229, 255, 0.18) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: radial-gradient(circle at 72% 50%, black, transparent 68%);
  }
  h1 {
    grid-area: title;
    font-size: clamp(34px, 5.25vw, 82px);
    line-height: 1.04;
    letter-spacing: -0.06em;
    text-shadow: 0 0 34px rgba(67, 196, 229, 0.13);
  }
  .info {
    grid-area: details;
  }
  h2 {
    font-size: clamp(18px, 1.65vw, 25px);
    font-weight: 500;
    line-height: 1.32;
    max-width: 18ch;
  }
  .date {
    display: block;
    margin: clamp(20px, 2.4vw, 34px) 0 8px;
    font-size: clamp(19px, 2.1vw, 32px);
    font-weight: 600;
    letter-spacing: -0.04em;
    line-height: 1.16;
  }
  .date b {
    display: block;
    font-size: clamp(44px, 5.2vw, 78px);
    letter-spacing: -0.065em;
    font-weight: 650;
    line-height: 1;
    color: #b7f5ff;
    text-shadow: 0 0 24px rgba(85, 217, 244, 0.2);
  }
  p {
    font-size: clamp(15px, 1.2vw, 18px);
    line-height: 1.5;
  }
  @media (max-width: 680px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-areas: "title title" "art details";
    column-gap: 10px;
    padding: 22px 18px 20px;
    h1 {
      font-size: clamp(27px, 8.8vw, 48px);
      margin-bottom: 12px;
      text-align: center;
    }
    h2 {
      font-size: 16px;
      line-height: 1.28;
    }
    .date {
      font-size: 16px;
      margin: 12px 0 6px;
    }
    .date b {
      font-size: 34px;
    }
    p {
      font-size: 14px;
    }
  }
`;
const Artwork = styled.figure`
  grid-area: art;
  position: relative;
  margin: 0;
  perspective: 900px;
  isolation: isolate;
  .shield-canvas {
    position: absolute;
    inset: 2% 5% 8%;
    width: 90%;
    height: 90%;
    z-index: 0;
    opacity: 0.48;
    pointer-events: none;
  }
  .petal-orbit {
    position: absolute;
    inset: 3%;
    z-index: 1;
    pointer-events: none;
    animation: petal-turn 48s linear infinite;
  }
  .petal-orbit span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 21%;
    height: 34%;
    margin: -17% 0 0 -10.5%;
    border: 1px solid rgba(139, 227, 255, 0.3);
    border-radius: 75% 75% 24% 24% / 70% 70% 28% 28%;
    background: linear-gradient(
      180deg,
      rgba(89, 217, 244, 0.11),
      rgba(102, 110, 255, 0.025) 72%,
      transparent
    );
    box-shadow: inset 0 0 16px rgba(85, 217, 244, 0.06);
    transform: rotate(var(--angle)) translateY(-95%);
    transform-origin: center;
  }
  .petal-orbit span:nth-child(even) {
    border-color: rgba(167, 146, 255, 0.25);
    background: linear-gradient(
      180deg,
      rgba(123, 108, 255, 0.09),
      rgba(85, 217, 244, 0.02) 72%,
      transparent
    );
  }
  @keyframes petal-turn {
    to { transform: rotate(360deg); }
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    pointer-events: none;
  }
  &::before {
    width: 88%;
    aspect-ratio: 1;
    left: 6%;
    top: 7%;
    border: 1px solid rgba(190, 235, 255, 0.22);
    box-shadow:
      inset 0 0 34px rgba(19, 173, 199, 0.12),
      0 0 45px rgba(19, 173, 199, 0.08);
  }
  &::after {
    width: 56%;
    aspect-ratio: 1;
    left: 22%;
    top: 23%;
    border: 1px dashed rgba(220, 247, 255, 0.18);
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 12px rgba(9, 9, 23, 0.28));
  }
  .logo {
    position: relative;
    z-index: 1;
    transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
    transition: transform 0.32s ease-out;
  }
  @keyframes emblem-float {
    50% {
      transform: translateY(-4px);
    }
  }
  @media (hover: hover) and (min-width: 681px) and (prefers-reduced-motion: no-preference) {
    img {
      animation: emblem-float 7s ease-in-out infinite;
    }
    &::after {
      animation: orbit-spin 18s linear infinite;
    }
  }
  @keyframes orbit-spin {
    to { transform: rotate(360deg); }
  }
  @media (prefers-reduced-motion: reduce) {
    .petal-orbit { animation: none; }
  }
  @media (max-width: 680px) {
    width: calc(100% + 22px);
    margin-left: -11px;
    .shield-canvas {
      inset: 4% 3% 10%;
      width: 94%;
      height: 86%;
    }
  }
`;
const Pattern = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.45;
  overflow: hidden;
  pointer-events: none;
  > div {
    width: 100%;
    height: 100%;
  }
`;
const Stub = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(22px, 3vw, 44px);
  padding: clamp(22px, 2.8vw, 42px);
  border-left: 2px dashed rgba(19, 173, 199, 0.38);
  background:
    radial-gradient(circle at 90% 12%, rgba(19, 173, 199, 0.09), transparent 34%),
    ${({ theme }) => theme.bgLight};
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.bg};
    border-radius: 50%;
    left: -13px;
    top: -12px;
  }
  &::after {
    top: auto;
    bottom: -12px;
    z-index: 1;
    background: ${({ theme }) => theme.card};
  }
  .signature {
    color: ${({ theme }) => theme.accent};
    font-weight: 600;
    min-height: 48px;
    font-family: "IBM Plex Mono", monospace;
    font-size: 13px;
    letter-spacing: 0.05em;
  }
  .tagline {
    color: ${({ theme }) => theme.text_secondary};
    font-size: clamp(12px, 1vw, 15px);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  ${Actions} {
    display: grid;
    gap: 10px;
  }
  ${Actions} a {
    min-height: 48px;
  }
  @media (max-width: 680px) {
    padding: 18px 20px;
    gap: 18px;
    border-left: none;
    border-top: 2px dashed rgba(19, 173, 199, 0.38);
    .signature {
      display: none;
    }
    ${Actions} {
      grid-template-columns: 1fr 1fr;
    }
    ${Actions} a {
      padding: 8px 4px;
      font-size: 14px;
    }
    &::before,
    &::after {
      top: -13px;
      left: -12px;
    }
    &::after {
      left: auto;
      right: -12px;
      bottom: auto;
      background: ${({ theme }) => theme.bg};
    }
  }
`;
const Imprint = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px 22px;
  padding: 15px clamp(22px, 3vw, 48px);
  background: ${({ theme }) => theme.card};
  border-top: 1px solid rgba(85, 217, 244, 0.1);
  color: ${({ theme }) => theme.text_secondary};
  font-size: 15px;
  strong {
    color: ${({ theme }) => theme.text_primary};
    font-weight: 550;
  }
  @media (max-width: 680px) {
    display: grid;
    padding: 14px 20px;
    font-size: 14px;
    gap: 4px;
  }
`;
const Clock = styled.div`
  padding: 14px;
  border: 1px solid rgba(85, 217, 244, 0.16);
  border-radius: 6px;
  background: linear-gradient(145deg, rgba(6, 18, 31, 0.74), rgba(7, 13, 23, 0.48));
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.025);
  strong {
    display: block;
    font-size: clamp(14px, 1.2vw, 17px);
    letter-spacing: -0.02em;
  }
  dl {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(4px, 0.8vw, 10px);
    margin: 12px 0 10px;
  }
  .unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }
  .dial {
    display: grid;
    place-items: center;
    position: relative;
    width: clamp(48px, 5.2vw, 64px);
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(19, 173, 199, 0.08), rgba(5, 14, 26, 0.68) 68%);
    box-shadow: 0 0 18px rgba(19, 173, 199, 0.07);
  }
  .dial svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .dial circle {
    fill: none;
    stroke-width: 2.2;
  }
  .dial .track {
    stroke: rgba(144, 196, 218, 0.16);
  }
  .dial .progress {
    stroke: #55d9f4;
    stroke-linecap: round;
    filter: drop-shadow(0 0 3px rgba(85, 217, 244, 0.7));
    transition: stroke-dashoffset 0.6s ease;
  }
  .value {
    color: #e6fbff;
    font-family: "IBM Plex Mono", monospace;
    font-size: clamp(16px, 1.9vw, 23px);
    font-weight: 600;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 12px rgba(85, 217, 244, 0.22);
  }
  dt {
    font-family: "IBM Plex Mono", monospace;
    font-size: 9px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.text_secondary};
  }
  .event-date {
    display: flex;
    align-items: center;
    gap: 7px;
    color: ${({ theme }) => theme.text_secondary};
    font-size: 11px;
  }
  .event-date::before {
    content: "";
    width: 6px;
    height: 6px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: #64f2c2;
    box-shadow: 0 0 9px rgba(100, 242, 194, 0.65);
  }
  @media (max-width: 680px) {
    padding: 12px;
    .dial {
      width: clamp(48px, 13vw, 60px);
    }
    .value {
      font-size: 18px;
    }
  }
`;
function Countdown() {
  const [now, setNow] = useState(Date.now);
  const start = Date.parse(event.startDateTime),
    end = Date.parse(event.endDateTime);
  const started = now >= start,
    ended = now >= end;
  useEffect(() => {
    if (ended) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [ended]);
  const seconds = Math.max(
    0,
    Math.ceil(((started ? end : start) - now) / 1000),
  );
  const values = [
    Math.floor(seconds / 86400),
    Math.floor(seconds / 3600) % 24,
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ];
  const maximums = [365, 24, 60, 60];
  const units = ["Days", "Hours", "Minutes", "Seconds"];
  return (
    <Clock>
      <strong>
        {ended
          ? "Hackathon concluded"
          : started
            ? "Hackathon ends in"
            : "Countdown to kickoff"}
      </strong>
      {seconds > 0 && (
        <dl>
          {units.map((unit, i) => (
            <div className="unit" key={unit}>
              <div
                className="dial"
                role="img"
                aria-label={`${values[i]} ${unit}`}
              >
                <svg viewBox="0 0 36 36" aria-hidden="true">
                  <circle className="track" cx="18" cy="18" r="15.5" />
                  <circle
                    className="progress"
                    cx="18"
                    cy="18"
                    r="15.5"
                    pathLength="100"
                    strokeDasharray="100 100"
                    strokeDashoffset={100 - (values[i] / maximums[i]) * 100}
                  />
                </svg>
                <span className="value">{String(values[i]).padStart(2, "0")}</span>
              </div>
              <dt>{unit}</dt>
            </div>
          ))}
        </dl>
      )}
      <small className="event-date">
        {started ? "12" : "11"} December · 10:30 AM IST
      </small>
    </Clock>
  );
}
const chunks = (text) => text.match(/\S+\s*/g) || [];
const type = (instance) =>
  instance
    .typeString("Forge. Fight. Flourish.")
    .start();
export default function Hero() {
  const reduce = useReducedMotion();
  function tilt(e) {
    if (
      reduce ||
      e.pointerType !== "mouse" ||
      !window.matchMedia(
        "(min-width:681px) and (hover:hover) and (pointer:fine)",
      ).matches
    )
      return;
    const el = e.currentTarget,
      box = el.getBoundingClientRect();
    el.style.setProperty(
      "--ry",
      ((e.clientX - box.left) / box.width - 0.5) * 10 + "deg",
    );
    el.style.setProperty(
      "--rx",
      (0.5 - (e.clientY - box.top) / box.height) * 8 + "deg",
    );
  }
  const logo = <img src={event.logo} alt="Official HACKKSHETRA 3.0 emblem" />;
  return (
    <Stage>
      <Pass>
        <Face
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h1>{event.name}</h1>
          <div className="info">
            <h2>{event.eventType}</h2>
            <strong className="date">
              <b>{event.dates.split(" ")[0]}</b>{" "}
              {event.dates.slice(event.dates.indexOf(" ") + 1)}
            </strong>
            <p>VVCE Sports Complex, Mysuru</p>
          </div>
          <Artwork
            onPointerMove={tilt}
            onPointerLeave={(e) => {
              e.currentTarget.style.removeProperty("--rx");
              e.currentTarget.style.removeProperty("--ry");
            }}
          >
            {!reduce && (
              <Pattern aria-hidden="true">
                <HeroBgAnimation />
              </Pattern>
            )}
            <div className="shield-canvas" aria-hidden="true">
              <DefenseShield />
            </div>
            <div className="petal-orbit" aria-hidden="true">
              {Array.from({ length: 8 }, (_, index) => (
                <span
                  key={index}
                  style={{ "--angle": `${index * 45}deg` }}
                />
              ))}
            </div>
            <div className="logo">{logo}</div>
          </Artwork>
        </Face>
        <Stub>
          <div className="tagline">From Intelligence to Impact</div>
          <div className="signature" aria-hidden="true">
            {reduce ? (
              "Forge. Fight. Flourish."
            ) : (
              <Typewriter
                onInit={type}
                options={{ delay: 180, stringSplitter: chunks }}
              />
            )}
          </div>
          <Countdown />
          <Actions>
            <PrimaryLink as={Link} to="/register">
              Register Free
            </PrimaryLink>
            <PrimaryLink as={Link} $secondary to="/domains">
              Explore Domains
            </PrimaryLink>
          </Actions>
        </Stub>
        <Imprint>
          <span>
            {event.association}
          </span>
          <span>
            Prize Pool · <strong>{event.prizePool}</strong>
          </span>
        </Imprint>
      </Pass>
    </Stage>
  );
}
