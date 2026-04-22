/* ===== CV Website — Script ===== */

// --- Dark Mode Toggle ---
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Update button text
  const btn = document.querySelector('.btn-theme');
  if (btn) btn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// --- Load saved theme ---
(function loadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    const btn = document.querySelector('.btn-theme');
    if (btn) btn.textContent = '☀️ Light Mode';
  }
})();

// --- Mobile Menu ---
function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('open');
  document.querySelector('.menu-overlay').classList.toggle('open');
}

// Close menu on overlay click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('menu-overlay')) {
    toggleMenu();
  }
});

// Close menu on nav link click (mobile)
document.querySelectorAll('.sidebar nav a').forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.querySelector('.menu-overlay');
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
    }
  });
});

// --- Active nav link highlight ---
(function highlightActiveNav() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a').forEach(function(a) {
    const href = a.getAttribute('href').split('/').pop();
    if (href === currentPage) {
      a.classList.add('active');
    }
  });
})();
