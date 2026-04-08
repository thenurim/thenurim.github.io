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

function applyLang(lang) {
  document.body.className = document.body.className
    .replace(/\blang-\w+\b/g, '').trim();
  document.body.classList.add('lang-' + lang);

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

function setLang(lang) {
  localStorage.setItem('lang', lang);

  var path = location.pathname;
  if (path.match(/^\/(en|ko|zh|es|hi|ar|bn|pt|ru|ja|de|mr|te|tr|fr|id|uk|sw|ta|ur)\//)) {
    location.href = path.replace(/^\/(en|ko|zh|es|hi|ar|bn|pt|ru|ja|de|mr|te|tr|fr|id|uk|sw|ta|ur)\//, '/' + lang + '/');
    return;
  }

  applyLang(lang);
  if (typeof filterByTag === 'function') filterByTag();
}

// Script is loaded at bottom of body — DOM is ready, no need for DOMContentLoaded
(function() {
  // On a single post page, sync language to the post's lang
  var singlePost = document.querySelector('.post[data-page-lang]');
  var lang = singlePost
    ? singlePost.getAttribute('data-page-lang')
    : (localStorage.getItem('lang') || 'ko');

  localStorage.setItem('lang', lang);
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

  // Markdown ![caption](url) → alt는 접근성용으로만 쓰이므로, 동일 문구를 이미지 아래에 캡션으로 표시
  (function enhancePostImageCaptions() {
    var post = document.querySelector('.post');
    if (!post) return;

    post.querySelectorAll('img').forEach(function(img) {
      if (img.closest('figure')) return;

      var altText = (img.getAttribute('alt') || '').trim();
      if (!altText) return;

      var figcaption = document.createElement('figcaption');
      figcaption.textContent = altText;
      img.setAttribute('alt', '');

      var figure = document.createElement('figure');
      figure.className = 'post-img-figure';

      var parent = img.parentNode;
      if (parent && parent.tagName === 'A' && parent.childElementCount === 1 &&
          parent.firstElementChild === img) {
        var block = parent.parentNode;
        if (!block) return;
        block.insertBefore(figure, parent);
        figure.appendChild(parent);
        figure.appendChild(figcaption);
      } else if (parent) {
        parent.insertBefore(figure, img);
        figure.appendChild(img);
        figure.appendChild(figcaption);
      }
    });
  }());

  // <a><img …>본문 텍스트</a> 처럼 링크에 이미지와 텍스트가 함께 있으면 img 하단 margin 제거용 클래스
  (function markAnchorsWithImgAndText() {
    var post = document.querySelector('.post');
    if (!post) return;

    post.querySelectorAll('a[href]').forEach(function(a) {
      if (!a.querySelector('img')) return;
      if (a.textContent.replace(/\uFEFF/g, '').trim().length > 0) {
        a.classList.add('post-a-has-img-text');
      }
    });
  }());
}());
