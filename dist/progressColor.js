const progressColor = (color) => {
    const injectProgress = document.createElement('style');
    injectProgress.textContent = `.progress-bar::-webkit-progress-value { background-color: ${color}; }`;
    document.head.appendChild(injectProgress);
    return injectProgress; 
  };
export default progressColor;