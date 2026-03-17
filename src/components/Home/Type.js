import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Engineer",
          "React.js Developer",
          "Next.js & TypeScript Dev",
          "UI/UX Enthusiast",
          "AI Tools Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 60,
      }}
    />
  );
}

export default Type;
