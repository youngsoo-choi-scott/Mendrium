// 모바일 메뉴
(function () {
  const body = document.body;
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');

  if (!toggleBtn || !menu || !overlay) return;

  function openMenu() {
    body.classList.add('menu-open');
    menu.classList.add('show');
    overlay.classList.add('show');
    overlay.hidden = false;
    toggleBtn.setAttribute('aria-label', '메뉴 닫기');
    toggleBtn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    // 스크롤 잠금
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    body.classList.remove('menu-open');
    menu.classList.remove('show');
    overlay.classList.remove('show');
    setTimeout(() => { overlay.hidden = true; }, 180);
    toggleBtn.setAttribute('aria-label', '메뉴 열기');
    toggleBtn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  }

  toggleBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();
