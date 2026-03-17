import { useState, useCallback } from "react";
import { DiJavascript1, DiReact, DiGit, DiNodejs } from "react-icons/di";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux,
  SiGraphql, SiVite, SiDocker, SiFirebase,
} from "react-icons/si";

const TECHS = [
  { techId: "react",      label: "React",       icon: <DiReact /> },
  { techId: "typescript", label: "TypeScript",  icon: <SiTypescript /> },
  { techId: "nextjs",     label: "Next.js",     icon: <SiNextdotjs /> },
  { techId: "tailwind",   label: "Tailwind",    icon: <SiTailwindcss /> },
  { techId: "redux",      label: "Redux",       icon: <SiRedux /> },
  { techId: "graphql",    label: "GraphQL",     icon: <SiGraphql /> },
  { techId: "js",         label: "JavaScript",  icon: <DiJavascript1 /> },
  { techId: "git",        label: "Git",         icon: <DiGit /> },
  { techId: "nodejs",     label: "Node.js",     icon: <DiNodejs /> },
  { techId: "vite",       label: "Vite",        icon: <SiVite /> },
  { techId: "docker",     label: "Docker",      icon: <SiDocker /> },
  { techId: "firebase",   label: "Firebase",    icon: <SiFirebase /> },
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function createDeck() {
  return shuffle(
    [...TECHS, ...TECHS].map((tech, i) => ({
      ...tech,
      cardId: i,
      flipped: false,
      matched: false,
    }))
  );
}

function TechGame() {
  const [cards, setCards] = useState(() => createDeck());
  const [selected, setSelected] = useState([]);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const [shake, setShake] = useState([]);

  const matchedPairs = cards.filter((c) => c.matched).length / 2;
  const totalPairs = TECHS.length;
  const won = matchedPairs === totalPairs;

  const handleFlip = useCallback(
    (cardId) => {
      if (locked) return;
      const card = cards.find((c) => c.cardId === cardId);
      if (!card || card.flipped || card.matched) return;
      if (selected.length >= 2) return;

      const newCards = cards.map((c) =>
        c.cardId === cardId ? { ...c, flipped: true } : c
      );
      const newSelected = [...selected, cardId];
      setCards(newCards);
      setSelected(newSelected);

      if (newSelected.length === 2) {
        setMoves((m) => m + 1);
        const [id1, id2] = newSelected;
        const c1 = newCards.find((c) => c.cardId === id1);
        const c2 = newCards.find((c) => c.cardId === id2);

        if (c1.techId === c2.techId) {
          setCards((prev) =>
            prev.map((c) =>
              c.cardId === id1 || c.cardId === id2 ? { ...c, matched: true } : c
            )
          );
          setSelected([]);
        } else {
          setLocked(true);
          setShake([id1, id2]);
          setTimeout(() => {
            setCards((prev) =>
              prev.map((c) =>
                c.cardId === id1 || c.cardId === id2 ? { ...c, flipped: false } : c
              )
            );
            setSelected([]);
            setLocked(false);
            setShake([]);
          }, 950);
        }
      }
    },
    [cards, selected, locked]
  );

  return (
    <div className="tech-game-wrapper">
      <div className="game-header">
        <div className="game-info">
          <span className="game-stat">
            <span className="game-stat-num">{matchedPairs}</span>
            <span className="game-stat-label">/ {totalPairs} Pairs</span>
          </span>
          <span className="game-stat">
            <span className="game-stat-num">{moves}</span>
            <span className="game-stat-label">Moves</span>
          </span>
        </div>
      </div>

      {won && (
        <div className="game-win-banner">
          All matched in <strong>{moves} moves</strong>. Nice work!
        </div>
      )}

      <div className="game-grid">
        {cards.map((card) => (
          <div
            key={card.cardId}
            className={[
              "game-card",
              card.flipped || card.matched ? "flipped" : "",
              card.matched ? "matched" : "",
              shake.includes(card.cardId) ? "shake" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => handleFlip(card.cardId)}
          >
            <div className="game-card-inner">
              <div className="game-card-face game-card-back">
                <span className="game-card-q">?</span>
              </div>
              <div className="game-card-face game-card-front">
                <span className="game-card-icon">{card.icon}</span>
                <span className="game-card-label">{card.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechGame;
