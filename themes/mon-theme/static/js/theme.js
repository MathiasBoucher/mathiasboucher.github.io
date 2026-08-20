(function () {
  var root = document.documentElement;

  function updateIcon(theme) {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Le thème initial est déjà appliqué par le script inline dans <head>
    // (évite le flash de contenu clair au chargement).
    updateIcon(root.getAttribute('data-theme') || 'light');
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateIcon(next);
    });
  });
})();