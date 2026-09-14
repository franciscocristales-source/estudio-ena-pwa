import React, { useEffect, useRef } from 'react';
import katex from 'katex';

export default function MathText({ text, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    // Parser for inline $...$ and block $$...$$
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
    containerRef.current.innerHTML = '';

    parts.forEach(part => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const math = part.slice(2, -2);
        const span = document.createElement('div');
        span.className = "my-2 overflow-x-auto text-center font-serif";
        try {
          katex.render(math, span, { displayMode: true, throwOnError: false });
        } catch (e) {
          span.textContent = part;
        }
        containerRef.current.appendChild(span);
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1);
        const span = document.createElement('span');
        try {
          katex.render(math, span, { displayMode: false, throwOnError: false });
        } catch (e) {
          span.textContent = part;
        }
        containerRef.current.appendChild(span);
      } else {
        const span = document.createElement('span');
        span.textContent = part;
        containerRef.current.appendChild(span);
      }
    });
  }, [text]);

  return <div ref={containerRef} className={`whitespace-pre-line leading-relaxed ${className}`} />;
}
