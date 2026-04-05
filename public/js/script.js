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

function setLang(lang) {
  localStorage.setItem('lang', lang);

  var path = location.pathname;
  if (path.match(/^\/(en|ko)\//)) {
    location.href = path.replace(/^\/(en|ko)\//, '/' + lang + '/');
    return;
  }

  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(function(el) {
    el.style.display = (el.getAttribute('data-lang') === lang) ? '' : 'none';
  });

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  var select = document.getElementById('lang-select');
  if (select) select.value = lang;
}

var i18n = {
  en: {
    'nav.home':  'Home',
    'nav.about': 'About',
  },
  ko: {
    'nav.home':  '홈',
    'nav.about': '소개',
  }
};

(function() {
  var lang = localStorage.getItem('lang') || 'ko';
  document.addEventListener('DOMContentLoaded', function() {
    var singlePost = document.querySelector('.post[data-page-lang]');
    if (singlePost) {
      lang = singlePost.getAttribute('data-page-lang') || lang;
      localStorage.setItem('lang', lang);
    }
    applyLang(lang);

    var select = document.getElementById('lang-select');
    if (select) {
      select.addEventListener('change', function() {
        setLang(this.value);
      });
    }

    document.querySelectorAll('a[href]').forEach(function(a) {
      if (a.hostname && a.hostname !== location.hostname) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
    });
  });
})();
