import styled from "styled-components";
import { event, skills } from "../../data/constants";
import celebrationImage from "../../images/hackkshetra 2.0/Valedictory/DSC00299.jpg";
import {
  PageDescription,
  PageTitle,
  PrimaryLink,
  Section,
} from "./PageElements";

const Steps = styled.ol`
  list-style-position: inside;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  li {
    background: ${({ theme }) => theme.card};
    padding: clamp(20px, 3vw, 40px);
    &:first-child {
      background: ${({ theme }) => theme.primaryDark};
      p {
        color: inherit;
      }
    }
  }
  li::marker {
    color: ${({ theme }) => theme.accent};
    font-weight: 600;
  }
  h2 {
    display: inline;
    font-size: clamp(18px, 2.5vw, 24px);
  }
  p {
    margin: 10px 0 0;
    line-height: 1.7;
    color: ${({ theme }) => theme.text_secondary};
  }
  a {
    margin-top: 16px;
  }
`;
const Celebration = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  min-height: 280px;
  margin-bottom: clamp(22px, 3vw, 36px);
  border: 1px solid rgba(85, 217, 244, 0.24);
  border-radius: 10px;
  background: ${({ theme }) => theme.card};

  .copy {
    position: relative;
    z-index: 2;
    padding: clamp(24px, 4vw, 48px);
  }
  .free {
    display: inline-flex;
    margin-bottom: 18px;
    padding: 8px 12px;
    border: 1px solid rgba(85, 217, 244, 0.4);
    border-radius: 999px;
    background: rgba(85, 217, 244, 0.08);
    color: ${({ theme }) => theme.accent};
    font-weight: 700;
    letter-spacing: 0.04em;
  }
  h2 {
    max-width: 12ch;
    font-size: clamp(28px, 4vw, 52px);
    line-height: 1;
    letter-spacing: -0.05em;
  }
  p {
    margin-top: 14px;
    color: ${({ theme }) => theme.text_secondary};
  }
  .photo {
    min-height: 280px;
    background:
      linear-gradient(90deg, ${({ theme }) => theme.card} 0%, transparent 30%),
      url(${celebrationImage}) center 35% / cover;
  }
  .confetti {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }
  .confetti i {
    position: absolute;
    width: 7px;
    height: 14px;
    border-radius: 2px;
    background: #55d9f4;
    transform: rotate(24deg);
  }
  .confetti i:nth-child(1) { left: 8%; top: 14%; }
  .confetti i:nth-child(2) { left: 24%; top: 8%; background: #f7ca45; transform: rotate(-32deg); }
  .confetti i:nth-child(3) { left: 43%; top: 20%; background: #b5a4ff; transform: rotate(58deg); }
  .confetti i:nth-child(4) { left: 18%; bottom: 12%; background: #ff7c9f; transform: rotate(12deg); }
  .confetti i:nth-child(5) { left: 36%; bottom: 8%; background: #70e1b1; transform: rotate(-18deg); }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    .photo {
      min-height: 220px;
      background:
        linear-gradient(180deg, ${({ theme }) => theme.card} 0%, transparent 24%),
        url(${celebrationImage}) center 38% / cover;
    }
  }
`;
export default function Registration() {
  return (
    <Section>
      <PageTitle>Registration</PageTitle>
      <PageDescription>
        {event.name} · {event.dates}
        <br />
        {event.venue} · {event.participationMode}
      </PageDescription>
      <Celebration>
        <div className="copy">
          <span className="free">FREE FOR EVERYONE</span>
          <h2>From ideas to impact.</h2>
          <p>Team up with 3–4 innovators and celebrate every step of the journey.</p>
        </div>
        <div className="photo" role="img" aria-label="Teams celebrating at a hackathon award ceremony" />
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => <i key={index} />)}
        </div>
      </Celebration>
      <Steps>
        <li>
          <h2>Form your team</h2>
          <p>Registrations are free for everyone. Gather {event.teamSize} and choose one domain.</p>
          {skills.map((s) => (
            <p key={s.title}>{s.title}</p>
          ))}
        </li>
        <li>
          <h2>Prepare your idea</h2>
          <p>
            Define your own problem statement. Describe existing solutions and
            their limitations, then explain your proposed solution, technology
            stack, feasibility and expected impact.
          </p>
          <PrimaryLink
            href={event.ideaTemplate}
            download="HACKKSHETRA-3.0-Idea-Template.pptx"
          >
            Download PowerPoint template
          </PrimaryLink>
        </li>
        <li>
          <h2>Export your presentation</h2>
          <p>
            Remove the final instruction slide. Keep the presentation to a
            maximum of six slides, including the title slide, and export it as a
            PDF.
          </p>
        </li>
        <li>
          <h2>Submit your PDF</h2>
          <p>
            Upload your completed presentation as a PDF using the official
            submission form.
          </p>
          <PrimaryLink
            href={event.ideaSubmissionUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit your PDF
          </PrimaryLink>
        </li>
      </Steps>
    </Section>
  );
}
