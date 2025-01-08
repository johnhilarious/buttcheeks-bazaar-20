import React from "react";

interface AnimatedTextProps {
  displayText: string;
  CONTRACT_ADDRESS: string;
}

const AnimatedText = ({ displayText, CONTRACT_ADDRESS }: AnimatedTextProps) => {
  const renderWavyBillion = () => {
    return (
      <span className="inline-flex">
        {'billions'.split('').map((letter, i) => (
          <span
            key={i}
            className="text-cyan-400 inline-block animate-wave"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s'
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    );
  };

  const renderTextWithLink = (text: string) => {
    return text.split('$buttcheeks').map((part, index, array) => {
      if (index < array.length - 1) {
        return (
          <React.Fragment key={index}>
            {part.split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
            <a
              href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 font-semibold hover:text-pink-300 transition-colors"
            >
              Buttcheeks
            </a>
          </React.Fragment>
        );
      }
      return part.split('\n').map((line, i, arr) => (
        <React.Fragment key={`${index}-${i}`}>
          {line}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ));
    });
  };

  const renderTextWithBillionAndLinks = (text: string) => {
    const parts = text.split('{BILLION}');
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {renderTextWithLink(part)}
        {index < parts.length - 1 && renderWavyBillion()}
      </React.Fragment>
    ));
  };

  return (
    <p className="text-green-400 font-mono text-center text-lg sm:text-xl mx-auto max-w-4xl leading-relaxed">
      {renderTextWithBillionAndLinks(displayText)}
      <span className="animate-pulse">_</span>
    </p>
  );
};

export default AnimatedText;