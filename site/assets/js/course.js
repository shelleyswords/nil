/* THE NIL PLAYBOOK — mobile-first course player.
   No backend. Progress + access stored in localStorage.
   Free lessons (free:true) are open to everyone. Paid lessons unlock when the
   visitor has access — granted by arriving at /course/?access=member (the URL
   you set as the Stripe payment success redirect), then remembered locally. */
(function () {
  var data = window.NIL_CURRICULUM;
  var main = document.getElementById('course-main');
  if (!data || !main) return;

  var LS_DONE = 'nil_done', LS_LAST = 'nil_last', LS_ACCESS = 'nil_access';

  // Flatten lessons + keep module ref
  var flat = [];
  data.modules.forEach(function (m) {
    m.lessons.forEach(function (l) { flat.push({ lesson: l, module: m }); });
  });

  function getDone() { try { return JSON.parse(localStorage.getItem(LS_DONE) || '[]'); } catch (e) { return []; } }
  function setDone(arr) { try { localStorage.setItem(LS_DONE, JSON.stringify(arr)); } catch (e) {} }
  function isDone(id) { return getDone().indexOf(id) !== -1; }
  function toggleDone(id) {
    var arr = getDone(), i = arr.indexOf(id);
    if (i === -1) arr.push(id); else arr.splice(i, 1);
    setDone(arr); return arr;
  }

  // Access handling
  var params = new URLSearchParams(location.search);
  if (params.get('access') === 'member') {
    try { localStorage.setItem(LS_ACCESS, 'true'); } catch (e) {}
  }
  function hasAccess() { try { return localStorage.getItem(LS_ACCESS) === 'true'; } catch (e) { return false; } }
  function isLocked(l) { return !l.free && !hasAccess(); }

  function indexOfId(id) { for (var i = 0; i < flat.length; i++) if (flat[i].lesson.id === id) return i; return -1; }

  function currentId() {
    var q = params.get('lesson');
    if (q && indexOfId(q) !== -1) return q;
    var last;
    try { last = localStorage.getItem(LS_LAST); } catch (e) {}
    if (last && indexOfId(last) !== -1) return last;
    return flat[0].lesson.id;
  }

  function updateProgress() {
    var total = flat.length, done = 0;
    flat.forEach(function (f) { if (isDone(f.lesson.id)) done++; });
    var pct = total ? Math.round(done / total * 100) : 0;
    document.getElementById('progress-pct').textContent = pct + '%';
    document.getElementById('progress-fill').style.width = pct + '%';
    var note = document.getElementById('access-note');
    note.textContent = hasAccess() ? '✓ Full access unlocked' : 'Free preview — unlock all lessons with the Playbook';
  }

  function renderSidebar(activeId) {
    var html = '';
    data.modules.forEach(function (m) {
      html += '<div class="module-group"><div class="module-title">' + esc(m.title) + '</div>';
      m.lessons.forEach(function (l) {
        var cls = 'lesson-link' + (l.id === activeId ? ' active' : '') + (isDone(l.id) ? ' done' : '');
        var mark = isDone(l.id) ? '✓' : '';
        var lock = isLocked(l) ? '<span class="lock" aria-label="Locked">🔒</span>' : '';
        html += '<a class="' + cls + '" href="?lesson=' + l.id + '" data-lesson="' + l.id + '">' +
                '<span class="dot">' + mark + '</span><span style="flex:1">' + esc(l.title) + '</span>' + lock + '</a>';
      });
      html += '</div>';
    });
    document.getElementById('lesson-list').innerHTML = html;
  }

  function renderLesson(id) {
    var idx = indexOfId(id), f = flat[idx], l = f.lesson;
    try { localStorage.setItem(LS_LAST, id); } catch (e) {}

    var videoHtml;
    if (isLocked(l)) {
      videoHtml =
        '<div class="video-frame video-sticky"><div class="video-placeholder">' +
        '<div class="play">🔒</div><strong style="font-size:1.1rem">This lesson is part of the full course</strong>' +
        '<p style="margin-top:8px;max-width:34ch">Unlock all ' + flat.length + ' lessons, the written guide, and your year-one plan.</p>' +
        '<a href="/playbook.html" class="btn" style="margin-top:16px">Unlock the full course — $29</a>' +
        '</div></div>';
    } else if (l.video) {
      var isFile = /\.(mp4|webm|mov)(\?|$)/i.test(l.video);
      videoHtml = '<div class="video-frame video-sticky">' +
        (isFile
          ? '<video controls preload="metadata" src="' + esc(l.video) + '"></video>'
          : '<iframe src="' + esc(l.video) + '" title="' + esc(l.title) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>') +
        '</div>';
    } else {
      videoHtml =
        '<div class="video-frame video-sticky"><div class="video-placeholder">' +
        '<div class="play">▶</div><strong style="font-size:1.05rem">Video coming soon</strong>' +
        '<p style="margin-top:8px;max-width:36ch">This lesson\'s video is being produced. The written recap and action step below cover everything you need in the meantime.</p>' +
        '</div></div>';
    }

    var doneNow = isDone(l.id);
    var prev = idx > 0 ? flat[idx - 1].lesson : null;
    var next = idx < flat.length - 1 ? flat[idx + 1].lesson : null;

    var body =
      '<div class="breadcrumb"><a href="/">Home</a> › <a href="/course/">Course</a> › ' + esc(f.module.title) + '</div>' +
      '<span class="article-tag">' + esc(f.module.title) + '</span>' +
      '<h1 style="font-size:clamp(1.5rem,3.4vw,2.1rem);margin:12px 0 4px">' + esc(l.title) + '</h1>' +
      '<p style="color:var(--ink-soft);margin-bottom:18px">⏱ ' + esc(l.dur) + (l.free ? ' · Free preview' : '') + '</p>' +
      videoHtml;

    if (!isLocked(l)) {
      body +=
        '<div class="recap"><strong>In this lesson</strong><p style="margin:8px 0 0">' + esc(l.recap) + '</p></div>' +
        '<div class="action-step"><span class="label">✓ Your action step</span>' + esc(l.action) + '</div>' +
        '<div style="margin-top:22px">' +
          '<button class="btn ' + (doneNow ? 'btn-outline' : 'btn-green') + '" id="mark-done">' +
          (doneNow ? '✓ Completed — mark as not done' : 'Mark lesson complete') + '</button>' +
        '</div>';
    }

    body += '<div class="lesson-nav">' +
      (prev ? '<a class="btn btn-outline" href="?lesson=' + prev.id + '">← Previous</a>' : '<span></span>') +
      (next ? '<a class="btn" href="?lesson=' + next.id + '">Next lesson →</a>' : '<a class="btn" href="/playbook.html">Get the full Playbook →</a>') +
      '</div>';

    main.innerHTML = body;

    var btn = document.getElementById('mark-done');
    if (btn) btn.addEventListener('click', function () {
      toggleDone(l.id);
      updateProgress();
      renderSidebar(l.id);
      // auto-advance when newly completed
      if (isDone(l.id) && next) { go(next.id); }
      else { renderLesson(l.id); }
    });

    // scroll to top of player on mobile
    if (window.innerWidth <= 920) { document.querySelector('.course-layout').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  function go(id) {
    history.pushState({}, '', '?lesson=' + id);
    params = new URLSearchParams(location.search);
    renderSidebar(id); renderLesson(id); updateProgress();
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  // Intercept sidebar + nav clicks for SPA feel
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="?lesson="]');
    if (!a) return;
    e.preventDefault();
    go(a.getAttribute('href').replace('?lesson=', ''));
  });
  window.addEventListener('popstate', function () {
    params = new URLSearchParams(location.search);
    var id = currentId(); renderSidebar(id); renderLesson(id); updateProgress();
  });

  // init
  var start = currentId();
  renderSidebar(start);
  renderLesson(start);
  updateProgress();
})();
