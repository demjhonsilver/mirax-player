export const attach = (className, initialText = '') => {
    const element = document.querySelector(className);
    if (element) {
      element.textContent = initialText; // Set the initial text content
    }
    return element;
  };
  