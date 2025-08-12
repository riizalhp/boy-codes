import React, { useState, useEffect } from 'react';

const SplashScreen: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "boycodes.";
  const typingSpeed = 150; // ms per character

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayText]);

  // Split text for styling
  const boyPart = displayText.slice(0, 3);
  const codesPart = displayText.length > 3 ? displayText.slice(3, 8) : '';
  const dotPart = displayText.length > 8 ? displayText.slice(8) : '';

  return (
    <div className="fixed inset-0 bg-brand-dark flex items-center justify-center z-[9999]" aria-label="Loading page" role="status">
      <div className="text-center">
        <h1 className="text-5xl font-heading font-normal tracking-wider h-16 flex items-center">
          <span>{boyPart}</span>
          {codesPart && <span className="font-bold">{codesPart}</span>}
          {dotPart && <span className="text-brand-green">{dotPart}</span>}
          {/* Blinking cursor */}
          <span className="animate-blink ml-1">|</span>
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
