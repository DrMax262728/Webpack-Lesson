function CreateAnalytics() {
  let count = 0;
  let isDestroyed = false;

  const listener = () => count++;
  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return 'analytics as destroyed';
      }
      return count;
    }
  }
}

window.analytics = CreateAnalytics();