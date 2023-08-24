const progressFrame = (color) => {
    const injectFrame = document.createElement('style');
    injectFrame.textContent = `.progress-bar::-webkit-progress-bar { background-color: ${color}; }`;
    document.head.appendChild(injectFrame);
    return injectFrame; 
  };
export default progressFrame;
  