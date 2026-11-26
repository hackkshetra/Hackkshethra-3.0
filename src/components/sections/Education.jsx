import styled from "styled-components";
import { event, prizeAwards, skills } from "../../data/constants";
import { PageDescription, PageTitle, Section } from "./PageElements";

const PrizeIntro = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px;
  margin: 30px 0 clamp(28px, 5vw, 46px);
  padding: clamp(24px, 5vw, 48px);
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 12px;
  background:
    radial-gradient(ellipse at 92% 10%, rgba(108, 91, 255, 0.18), transparent 38%),
    radial-gradient(ellipse at 12% 100%, rgba(85, 217, 244, 0.12), transparent 42%),
    ${({ theme }) => theme.card};
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
  .eyebrow {
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.accent};
    font: 600 11px/1.4 "IBM Plex Mono", monospace;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  h2 {
    margin: 0;
    font-size: clamp(20px, 3vw, 30px);
    letter-spacing: -0.035em;
  }
  p {
    max-width: 46ch;
    margin: 10px 0 0;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.65;
  }
  .pool {
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 20px);
    color: ${({ theme }) => theme.text_primary};
    font-size: clamp(38px, 7vw, 76px);
    font-weight: 750;
    letter-spacing: -0.075em;
    line-height: 1;
    white-space: nowrap;
    text-shadow: 0 0 34px rgba(85, 217, 244, 0.18);
  }
  .confetti {
    position: absolute;
    inset: -10px -8px;
    pointer-events: none;
  }
  .confetti i {
    position: absolute;
    width: 6px;
    height: 12px;
    border-radius: 2px;
    background: #ffd76b;
    box-shadow: 0 0 10px rgba(255, 194, 66, 0.38);
    animation: confetti-dance 2.8s ease-in-out infinite;
  }
  .confetti i:nth-child(1) {
    left: 5%;
    top: 14%;
  }
  .confetti i:nth-child(2) {
    left: 42%;
    bottom: 8%;
    background: #55d9f4;
    animation-delay: -0.8s;
  }
  .confetti i:nth-child(3) {
    right: 24%;
    top: 5%;
    background: #ff83b7;
    animation-delay: -1.4s;
  }
  .confetti i:nth-child(4) {
    right: 3%;
    bottom: 12%;
    background: #a792ff;
    animation-delay: -2s;
  }
  @keyframes confetti-dance {
    0%, 100% { opacity: 0.55; transform: translateY(0) rotate(-8deg); }
    50% { opacity: 1; transform: translateY(-7px) rotate(12deg); }
  }
  .trophy,
  .prize-value {
    position: relative;
    z-index: 1;
  }
  .trophy {
    width: clamp(46px, 6vw, 68px);
    height: auto;
    flex: 0 0 auto;
    color: #ffd76b;
    filter: drop-shadow(0 0 14px rgba(255, 194, 66, 0.25));
    animation: trophy-glow 3.2s ease-in-out infinite;
  }
  @keyframes trophy-glow {
    50% { filter: drop-shadow(0 0 24px rgba(255, 194, 66, 0.56)); }
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    .pool {
      grid-row: 1;
      font-size: clamp(42px, 14vw, 68px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .trophy { animation: none; }
    .confetti i { animation: none; }
  }
`;

const AwardSection = styled.section`
  margin: 0 0 clamp(28px, 4vw, 44px);
  .section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: clamp(21px, 3vw, 30px);
    letter-spacing: -0.04em;
  }
  .applies {
    color: ${({ theme }) => theme.text_secondary};
    font: 500 11px/1.5 "IBM Plex Mono", monospace;
    letter-spacing: 0.08em;
    text-align: right;
    text-transform: uppercase;
  }
`;

const AwardGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: end;
  gap: clamp(10px, 2vw, 20px);
  margin: 0;
  padding: 18px 0 0;
  list-style: none;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    align-items: stretch;
    padding-top: 0;
  }
`;

const Award = styled.li`
  --medal: #c9824e;
  --medal-light: #ffd0a4;
  --medal-dark: #633d2c;
  position: relative;
  min-width: 0;
  min-height: 222px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 14px 20px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--medal) 35%, transparent);
  border-radius: 12px 12px 8px 8px;
  background:
    radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--medal) 16%, transparent), transparent 62%),
    ${({ theme }) => theme.card};
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.2);
  text-align: center;
  &:nth-child(1) {
    --medal: #d3a33c;
    --medal-light: #fff0a5;
    --medal-dark: #76511d;
    min-height: 262px;
  }
  &:nth-child(2) {
    --medal: #a7bacd;
    --medal-light: #f0f7ff;
    --medal-dark: #536579;
    min-height: 232px;
  }
  &:nth-child(3) {
    min-height: 212px;
  }
  .medal {
    width: 68px;
    height: 82px;
    margin-bottom: 10px;
    overflow: visible;
    filter: drop-shadow(0 0 13px color-mix(in srgb, var(--medal) 32%, transparent));
    animation: medal-float 3s ease-in-out infinite;
  }
  &:nth-child(2) .medal { animation-delay: -0.7s; }
  &:nth-child(3) .medal { animation-delay: -1.4s; }
  @keyframes medal-float {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-5px) rotate(2deg); }
  }
  .place {
    color: ${({ theme }) => theme.text_secondary};
    font: 600 11px/1.4 "IBM Plex Mono", monospace;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .amount {
    margin-top: 5px;
    color: ${({ theme }) => theme.text_primary};
    font-size: clamp(27px, 4vw, 40px);
    font-weight: 750;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.065em;
    line-height: 1.12;
    white-space: nowrap;
  }
  @media (max-width: 600px) {
    min-height: 0 !important;
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr) auto;
    justify-content: initial;
    gap: 12px;
    padding: 14px 16px;
    text-align: left;
    .medal {
      width: 54px;
      height: 66px;
      grid-row: span 2;
      margin: 0;
    }
    .place { align-self: end; }
    .amount {
      grid-column: 2;
      grid-row: 2;
      margin: 0;
      font-size: 24px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .medal { animation: none; }
  }
`;

const DomainSection = styled.section`
  padding: clamp(18px, 3vw, 26px);
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 10px;
  background: linear-gradient(130deg, rgba(85, 217, 244, 0.07), rgba(108, 91, 255, 0.05));
  h2 {
    margin-bottom: 14px;
    font-size: 17px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    padding: 8px 12px;
    border: 1px solid ${({ theme }) => theme.border_color};
    border-radius: 999px;
    background: rgba(3, 10, 22, 0.42);
    color: ${({ theme }) => theme.text_secondary};
    font-size: 13px;
  }
  li::before {
    content: "◈";
    margin-right: 8px;
    color: ${({ theme }) => theme.accent};
  }
`;

const Rewards = styled.aside`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: clamp(20px, 3vw, 30px);
  padding: 18px 22px;
  border: 1px solid rgba(85, 217, 244, 0.24);
  border-radius: 8px;
  background: linear-gradient(100deg, rgba(85, 217, 244, 0.08), rgba(108, 91, 255, 0.07));
  .spark {
    display: grid;
    width: 42px;
    height: 42px;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid rgba(85, 217, 244, 0.35);
    border-radius: 50%;
    color: ${({ theme }) => theme.accent};
    font-size: 20px;
  }
  strong {
    display: block;
    margin-bottom: 3px;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.55;
  }
`;

function Medal({ rank }) {
  const medalLabels = ["Gold medal", "Silver medal", "Bronze medal"];
  return (
    <svg
      className="medal"
      viewBox="0 0 68 82"
      role="img"
      aria-label={medalLabels[rank - 1]}
    >
      <path
        d="M22 4h12l7 27-9 10-10-10 5-15z"
        fill="var(--medal-dark)"
      />
      <path
        d="M34 4h12l-5 27-8 10-8-10 9-15z"
        fill="var(--medal)"
      />
      <circle cx="34" cy="52" r="23" fill="var(--medal-dark)" />
      <circle cx="34" cy="50" r="20" fill="var(--medal)" />
      <circle cx="34" cy="50" r="15" fill="none" stroke="var(--medal-light)" strokeWidth="1.5" opacity=".8" />
      <path
        d="m34 38 3.6 7.3 8 .1-5.8 5.2 2 7.8-7.8-4.1-7.1 4.1 1.4-7.8-5.9-5.2 8-.1z"
        fill="var(--medal-light)"
      />
    </svg>
  );
}

function Trophy() {
  return (
    <svg className="trophy" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M19 8h26v12c0 12-6 19-13 19s-13-7-13-19V8Z" fill="currentColor" opacity=".92" />
      <path d="M19 13H9v7c0 9 5 14 14 14m22-21h10v7c0 9-5 14-14 14" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M32 39v9m-12 8h24M25 48h14v8H25z" fill="currentColor" />
      <path d="m32 14 2.2 4.5 5 .7-3.6 3.5.8 5-4.4-2.4-4.4 2.4.8-5-3.6-3.5 5-.7z" fill="#152033" />
    </svg>
  );
}

export default function Education() {
  return (
    <Section>
      <PageTitle>Prizes & rewards</PageTitle>
      <PageDescription>
        Three AI domains. Three winning teams in each. Bring your best idea and
        build something that matters.
      </PageDescription>
      <PrizeIntro>
        <div>
          <span className="eyebrow">Across all three domains</span>
          <h2>Big ideas deserve meaningful rewards.</h2>
          <p>
            Every domain has its own podium and the same prize structure.
            Exciting goodies and rewards await participating teams too.
          </p>
        </div>
        <strong
          className="pool"
          aria-label={`Total prize pool ${event.prizePool}`}
        >
          <span className="confetti" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <Trophy />
          <span className="prize-value">{event.prizePool}</span>
        </strong>
      </PrizeIntro>
      <AwardSection aria-labelledby="award-heading">
        <div className="section-heading">
          <h2 id="award-heading">The winners’ podium</h2>
          <p className="applies">Prize amounts · for each domain</p>
        </div>
        <AwardGrid>
          {prizeAwards.map((award, index) => (
            <Award key={award.place}>
              <Medal rank={index + 1} />
              <span className="place">{award.place}</span>
              <strong className="amount">{award.amount}</strong>
            </Award>
          ))}
        </AwardGrid>
      </AwardSection>
      <DomainSection aria-labelledby="domain-prizes-heading">
        <h2 id="domain-prizes-heading">Each domain has this prize structure</h2>
        <ul>
          {skills.map((domain) => (
            <li key={domain.title}>{domain.title}</li>
          ))}
        </ul>
      </DomainSection>
      <Rewards>
        <span className="spark" aria-hidden="true">✦</span>
        <div>
          <strong>More than just the prize</strong>
          <p>Exciting goodies and rewards await participating teams.</p>
        </div>
      </Rewards>
    </Section>
  );
}
