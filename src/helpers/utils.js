function debounce(func, wait) {
  let timeout;
  return function debouncing() {
    const context = this; const
      args = arguments;
    const later = function finish() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export { debounce };
