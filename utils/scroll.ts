// utils/scroll.ts

export const smoothScrollTo = (targetY: number, duration = 600) => {
  const startY = window.scrollY;
  const distanceY = targetY - startY;
  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = 0.5 * (1 - Math.cos(Math.PI * progress)); // ease-in-out

    window.scrollTo(0, startY + distanceY * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};
