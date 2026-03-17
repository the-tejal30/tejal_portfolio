import { useState, useEffect, useRef } from "react";

const PROMPT = "tejal@portfolio:~$";

const LINES = [
  { type: "cmd",   text: "whoami" },
  { type: "out",   text: "Tejal Wani, Frontend Engineer" },
  { type: "spacer" },
  { type: "cmd",   text: "cat role.txt" },
  { type: "out",   text: "Frontend Engineer at FinalLayer, Hyderabad" },
  { type: "out",   text: "2+ years building production grade web apps" },
  { type: "spacer" },
  { type: "cmd",   text: "ls tech stack/" },
  { type: "chips", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL", "Astro", "Node.js"] },
  { type: "spacer" },
  { type: "cmd",   text: "cat about me.txt" },
  { type: "check", text: "I care deeply about how an interface feels to use" },
  { type: "check", text: "I have shipped products used by real people at scale" },
  { type: "check", text: "I write code I am proud to open again six months later" },
  { type: "check", text: "I enjoy owning a feature from design to deployment" },
  { type: "spacer" },
  { type: "cmd",   text: "echo $STATUS" },
  { type: "status", text: "Open to new opportunities" },
];

function buildSchedule(lines) {
  const events = [];
  let t = 900;
  for (const line of lines) {
    if (line.type === "cmd") {
      for (let i = 0; i <= line.text.length; i++) {
        events.push({ at: t + i * 50, kind: "type", text: line.text.slice(0, i) });
      }
      t += line.text.length * 50 + 80;
      events.push({ at: t, kind: "commit", line: { type: "cmd", text: line.text } });
      events.push({ at: t + 10, kind: "type", text: "" });
      t += 380;
    } else if (line.type === "spacer") {
      events.push({ at: t, kind: "commit", line });
      t += 60;
    } else if (line.type === "chips") {
      events.push({ at: t, kind: "commit", line });
      t += 220;
    } else {
      events.push({ at: t, kind: "commit", line });
      t += line.type === "check" ? 165 : 160;
    }
  }
  return events;
}

const SCHEDULE = buildSchedule(LINES);

function TerminalLine({ line }) {
  if (line.type === "spacer") return <div className="t-spacer" />;
  if (line.type === "cmd")
    return (
      <div className="t-line">
        <span className="t-prompt">{PROMPT}</span>
        <span className="t-cmd-text">&nbsp;{line.text}</span>
      </div>
    );
  if (line.type === "chips")
    return (
      <div className="t-chips">
        {line.items.map((item) => (
          <span key={item} className="t-chip">{item}</span>
        ))}
      </div>
    );
  if (line.type === "check")
    return (
      <div className="t-line t-check-line">
        <span className="t-checkmark">✓</span>&nbsp;{line.text}
      </div>
    );
  if (line.type === "status")
    return <div className="t-line t-status-line">{line.text}</div>;
  return <div className="t-line t-out">{line.text}</div>;
}

function TerminalIntro() {
  const [history, setHistory] = useState([]);
  const [typing, setTyping] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    const timers = SCHEDULE.map(({ at, kind, text, line }) =>
      setTimeout(() => {
        if (kind === "commit") setHistory((h) => [...h, line]);
        if (kind === "type")   setTyping(text);
      }, at)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (bodyRef.current)
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history, typing]);

  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div className="t-dots">
          <span className="t-dot t-red" />
          <span className="t-dot t-yellow" />
          <span className="t-dot t-green" />
        </div>
        <span className="t-title">~/portfolio  zsh</span>
        <div className="t-dots-spacer" />
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, i) => (
          <TerminalLine key={i} line={line} />
        ))}
        <div className="t-line">
          <span className="t-prompt">{PROMPT}</span>
          <span className="t-cmd-text">&nbsp;{typing}</span>
          <span className="t-cursor" />
        </div>
      </div>
    </div>
  );
}

export default TerminalIntro;
