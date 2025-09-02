
// Contador animado simples
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('[data-counter]');
  const speed = 30; // maior = mais lento

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    let current = 0;
    const step = Math.max(1, Math.floor(target / 100));

    const update = () => {
      current += step;
      if (current >= target) current = target;
      el.textContent = `${prefix}${current}${suffix}`;
      if (current < target) requestAnimationFrame(update);
    };
    update();
  };

  // usa IntersectionObserver para iniciar quando aparece na tela
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  els.forEach(el => io.observe(el));
});

