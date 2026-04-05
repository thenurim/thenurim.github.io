(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);

(function(document) {
  var STORAGE_KEY = 'preferred-lang';

  function applyLang(lang) {
    document.querySelectorAll('.post[data-lang]').forEach(function(post) {
      var postLang = post.getAttribute('data-lang');
      post.style.display = (postLang === 'all' || postLang === lang) ? '' : 'none';
    });

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var saved = localStorage.getItem(STORAGE_KEY) || 'ko';
    applyLang(saved);

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  });
})(document);
