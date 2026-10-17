(function () {
  'use strict';
  var D = window.SS_DATA;
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  // ---- storage that never throws (sandboxed iframes / private mode) ----
  var mem = {};
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem('ss_' + k); return v === null ? d : JSON.parse(v); } catch (e) { return k in mem ? mem[k] : d; } },
    set: function (k, v) { mem[k] = v; try { localStorage.setItem('ss_' + k, JSON.stringify(v)); } catch (e) {} }
  };

  var T = {
    en: {
      skip: 'Skip to content', brand: 'ShikshaSetu Begusarai', tagline: 'Class 10–12 guide · BSEB & CBSE',
      tabs: { home: '🏠 Home', exams: '📝 Exams', colleges: '🎓 Colleges', schemes: '💰 Scholarships', heritage: '📜 Heritage', quiz: '🏆 Quiz' },
      h1: 'Your Class 10–12 guide for Begusarai', h1p: 'Board exams, colleges, scholarships and district GK, in Hindi and English. Free, works offline.',
      cta1: '💰 Find my scholarships', cta2: '🏆 Take the quiz',
      qlH: 'Official links', qlP: 'Results, admissions and scholarship portals. All open in a new tab.',
      disclaimer: 'Scheme amounts and dates change. Always check the official portal before applying. This site is not a government website.',
      exH: 'Board exam corner', exP: 'How each board works, what to do next, and how to prepare.',
      nextH: 'What next?', tipsH: 'Study tips', ckH: 'Exam-day checklist',
      coH: 'Colleges & schools', coP: 'Search and filter. Save the ones you like to your list.',
      search: 'Search', type: 'Type', stream: 'Stream', searchPh: 'e.g. G.D. College, Barauni…',
      types: { all: 'All types', degree: 'Degree colleges', tech: 'Engineering & polytechnic', school: 'Schools (+2)' },
      streams: { all: 'All streams', sci: 'Science', arts: 'Arts', com: 'Commerce', tech: 'Engineering' },
      showing: function (n, t) { return 'Showing ' + n + ' of ' + t; }, none: 'Nothing found. Try another word or clear the filters.', clear: 'Clear filters',
      women: 'Women', visit: 'Official site ↗', save: '🔖 Save', saved: '✓ Saved',
      scH: 'Scholarship & scheme finder', scP: 'Choose your details to see Bihar schemes you may be eligible for.',
      stage: 'I have…', cat: 'Category', gender: 'Gender',
      stages: { all: 'Show all schemes', s10: 'Passed Class 10 / in Class 11–12', s12: 'Passed Class 12', ug: 'In or passed graduation', prelims: 'Cleared BPSC/UPSC Prelims' },
      cats: { all: 'Any category', gen: 'General', bc: 'BC', ebc: 'EBC', sc: 'SC', st: 'ST' },
      genders: { all: 'Any', f: 'Girl / Woman', m: 'Boy / Man' },
      matched: function (n) { return n + (n === 1 ? ' scheme' : ' schemes') + ' match'; }, noScheme: 'No scheme matches these choices. Try "Any".',
      how: 'How to apply', apply: 'Official portal ↗',
      heH: 'Begusarai: people & places', heP: 'Useful for Hindi, History, Geography and competitive-exam GK. Mark each one when you have read it.',
      progress: 'Your progress', markRead: '✓ Mark as read', read: '✓ Read', unmark: 'Mark unread', source: 'Read more ↗',
      qzH: 'Begusarai & Bihar GK quiz', qzP: '10 random questions each round. Good practice for BPSC, BSSC and board GK.',
      qOf: function (i, n) { return 'Question ' + i + ' of ' + n; }, score: 'Score', right: '✓ Correct!', wrong: function (a) { return '✗ Correct answer: ' + a; },
      next: 'Next →', finish: 'See result', again: '🔁 New round', best: 'Best score',
      verdict: function (s, n) { var p = s / n; return p === 1 ? 'Perfect! 🌟' : p >= .7 ? 'Very good! 👏' : p >= .4 ? 'Good try. Read the Heritage tab and try again.' : 'Keep learning. Read the Heritage tab first.'; },
      shareScore: function (s, n) { return 'I scored ' + s + '/' + n + ' in the Begusarai GK quiz on ShikshaSetu! Try it: '; },
      myList: 'My list', emptyList: 'Nothing saved yet. Tap 🔖 Save on a college or scheme.', remove: 'Remove', clearAll: 'Clear all',
      share: '📲 Share on WhatsApp', shareMsg: 'ShikshaSetu Begusarai: free Class 10–12 guide (BSEB & CBSE), scholarships, colleges and GK quiz in Hindi & English: ',
      foot: 'Made for students of Begusarai. Facts checked', addedT: 'Saved to your list', removedT: 'Removed from your list',
      langBtn: 'हिंदी', langAria: 'हिंदी में देखें', themeAria: 'Switch dark / light mode', listAria: 'Open my saved list', close: 'Close'
    },
    hi: {
      skip: 'मुख्य सामग्री पर जाएँ', brand: 'शिक्षासेतु बेगूसराय', tagline: 'कक्षा 10–12 गाइड · BSEB व CBSE',
      tabs: { home: '🏠 होम', exams: '📝 परीक्षा', colleges: '🎓 कॉलेज', schemes: '💰 छात्रवृत्ति', heritage: '📜 धरोहर', quiz: '🏆 क्विज़' },
      h1: 'बेगूसराय के कक्षा 10–12 विद्यार्थियों की गाइड', h1p: 'बोर्ड परीक्षा, कॉलेज, छात्रवृत्ति और ज़िले का सामान्य ज्ञान, हिंदी व अंग्रेज़ी में। मुफ़्त, बिना इंटरनेट भी चलता है।',
      cta1: '💰 मेरी छात्रवृत्ति खोजें', cta2: '🏆 क्विज़ खेलें',
      qlH: 'आधिकारिक लिंक', qlP: 'रिज़ल्ट, नामांकन और छात्रवृत्ति पोर्टल। सभी नए टैब में खुलते हैं।',
      disclaimer: 'योजनाओं की राशि और तिथियाँ बदलती रहती हैं। आवेदन से पहले आधिकारिक पोर्टल ज़रूर देखें। यह सरकारी वेबसाइट नहीं है।',
      exH: 'बोर्ड परीक्षा कॉर्नर', exP: 'हर बोर्ड कैसे काम करता है, आगे क्या करें और तैयारी कैसे करें।',
      nextH: 'आगे क्या?', tipsH: 'पढ़ाई के टिप्स', ckH: 'परीक्षा के दिन की चेकलिस्ट',
      coH: 'कॉलेज और स्कूल', coP: 'खोजें और फ़िल्टर करें। पसंद के कॉलेज अपनी सूची में सहेजें।',
      search: 'खोजें', type: 'प्रकार', stream: 'संकाय', searchPh: 'जैसे जी.डी. कॉलेज, बरौनी…',
      types: { all: 'सभी प्रकार', degree: 'डिग्री कॉलेज', tech: 'इंजीनियरिंग व पॉलिटेक्निक', school: 'स्कूल (+2)' },
      streams: { all: 'सभी संकाय', sci: 'विज्ञान', arts: 'कला', com: 'वाणिज्य', tech: 'इंजीनियरिंग' },
      showing: function (n, t) { return t + ' में से ' + n + ' दिख रहे हैं'; }, none: 'कुछ नहीं मिला। दूसरा शब्द आज़माएँ या फ़िल्टर हटाएँ।', clear: 'फ़िल्टर हटाएँ',
      women: 'महिला', visit: 'आधिकारिक साइट ↗', save: '🔖 सहेजें', saved: '✓ सहेजा',
      scH: 'छात्रवृत्ति व योजना खोजक', scP: 'अपनी जानकारी चुनें और देखें कि बिहार की कौन-सी योजनाएँ आपके लिए हो सकती हैं।',
      stage: 'मैंने…', cat: 'वर्ग', gender: 'लिंग',
      stages: { all: 'सभी योजनाएँ दिखाएँ', s10: 'कक्षा 10 पास / कक्षा 11–12 में', s12: 'कक्षा 12 पास', ug: 'स्नातक में / स्नातक पास', prelims: 'BPSC/UPSC प्रारंभिक पास' },
      cats: { all: 'कोई भी वर्ग', gen: 'सामान्य', bc: 'पिछड़ा वर्ग (BC)', ebc: 'अति पिछड़ा (EBC)', sc: 'अनुसूचित जाति (SC)', st: 'अनुसूचित जनजाति (ST)' },
      genders: { all: 'कोई भी', f: 'छात्रा / महिला', m: 'छात्र / पुरुष' },
      matched: function (n) { return n + ' योजनाएँ मिलीं'; }, noScheme: 'इन विकल्पों से कोई योजना नहीं मिली। "कोई भी" चुनकर देखें।',
      how: 'आवेदन कैसे करें', apply: 'आधिकारिक पोर्टल ↗',
      heH: 'बेगूसराय: व्यक्तित्व और स्थान', heP: 'हिंदी, इतिहास, भूगोल और प्रतियोगी परीक्षा GK के लिए उपयोगी। पढ़ने के बाद हर एक को चिह्नित करें।',
      progress: 'आपकी प्रगति', markRead: '✓ पढ़ लिया', read: '✓ पढ़ा', unmark: 'हटाएँ', source: 'और पढ़ें ↗',
      qzH: 'बेगूसराय व बिहार GK क्विज़', qzP: 'हर राउंड में 10 नए प्रश्न। BPSC, BSSC और बोर्ड GK का अच्छा अभ्यास।',
      qOf: function (i, n) { return 'प्रश्न ' + i + ' / ' + n; }, score: 'अंक', right: '✓ सही!', wrong: function (a) { return '✗ सही उत्तर: ' + a; },
      next: 'अगला →', finish: 'परिणाम देखें', again: '🔁 नया राउंड', best: 'सर्वश्रेष्ठ अंक',
      verdict: function (s, n) { var p = s / n; return p === 1 ? 'शानदार! 🌟' : p >= .7 ? 'बहुत अच्छा! 👏' : p >= .4 ? 'अच्छा प्रयास। धरोहर टैब पढ़कर फिर खेलें।' : 'सीखते रहें। पहले धरोहर टैब पढ़ें।'; },
      shareScore: function (s, n) { return 'मैंने शिक्षासेतु पर बेगूसराय GK क्विज़ में ' + s + '/' + n + ' अंक पाए! आप भी खेलें: '; },
      myList: 'मेरी सूची', emptyList: 'अभी कुछ सहेजा नहीं। किसी कॉलेज या योजना पर 🔖 सहेजें दबाएँ।', remove: 'हटाएँ', clearAll: 'सब हटाएँ',
      share: '📲 व्हाट्सऐप पर शेयर करें', shareMsg: 'शिक्षासेतु बेगूसराय: कक्षा 10–12 (BSEB व CBSE) की मुफ़्त गाइड, छात्रवृत्ति, कॉलेज और GK क्विज़, हिंदी व अंग्रेज़ी में: ',
      foot: 'बेगूसराय के विद्यार्थियों के लिए। तथ्य जाँचे गए', addedT: 'आपकी सूची में सहेजा गया', removedT: 'सूची से हटाया गया',
      langBtn: 'English', langAria: 'View in English', themeAria: 'डार्क / लाइट मोड बदलें', listAria: 'मेरी सहेजी सूची खोलें', close: 'बंद करें'
    }
  };

  var S = {
    lang: store.get('lang', (navigator.language || '').indexOf('hi') === 0 ? 'hi' : 'en'),
    theme: store.get('theme', (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'),
    tab: 'home', board: 'bseb10',
    saved: store.get('saved', []), read: store.get('read', []), checks: store.get('checks', []), best: store.get('best', 0),
    cq: '', ct: 'all', cs: 'all', sl: 'all', sc: 'all', sg: 'all', quiz: null
  };
  var TABS = ['home', 'exams', 'colleges', 'schemes', 'heritage', 'quiz'];
  var t = function () { return T[S.lang]; };
  var L = function (o) { return o[S.lang] || o.en; };
  var URL_ = 'https://sanjay289.github.io/shikshasetu-begusarai/';

  function toast(msg) { var el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toast._t); toast._t = setTimeout(function () { el.classList.remove('on'); }, 1800); }
  function opts(sel, map, val) { sel.innerHTML = Object.keys(map).map(function (k) { return '<option value="' + k + '"' + (k === val ? ' selected' : '') + '>' + esc(map[k]) + '</option>'; }).join(''); }
  function link(u, label, cls) { return '<a class="' + (cls || '') + '" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>'; }

  // ---------- static text ----------
  function renderStatic() {
    var tt = t();
    document.documentElement.lang = S.lang;
    document.querySelectorAll('[data-t]').forEach(function (el) { var v = tt[el.getAttribute('data-t')]; if (typeof v === 'string') el.textContent = v; });
    $('#langLbl').textContent = tt.langBtn; $('#lang').setAttribute('aria-label', tt.langAria);
    $('#theme').setAttribute('aria-label', tt.themeAria); $('#savedBtn').setAttribute('aria-label', tt.listAria); $('#closeDlg').setAttribute('aria-label', tt.close);
    $('#tabs').innerHTML = TABS.map(function (k) { return '<button role="tab" id="tab-' + k + '" aria-controls="v-' + k + '" aria-selected="' + (S.tab === k) + '" data-tab="' + k + '">' + esc(tt.tabs[k]) + '</button>'; }).join('');
    $('#cq').placeholder = tt.searchPh;
    $('#upd').textContent = D.updated;
  }

  function renderHome() {
    $('#stats').innerHTML = D.stats.map(function (s) { return '<div class="card stat"><b>' + esc(s.n) + '</b><span>' + esc(L(s)) + '</span></div>'; }).join('');
    $('#quick').innerHTML = D.quickLinks.map(function (q) { return link(q.url, '<span aria-hidden="true">' + q.icon + '</span><span>' + esc(L(q)) + '</span>', 'card ql'); }).join('');
  }

  function renderExams() {
    $('#boardSeg').innerHTML = D.boards.map(function (b) { return '<button data-board="' + b.id + '" aria-pressed="' + (S.board === b.id) + '">' + esc(L(b).t.replace(/ \(.*\)/, '')) + '</button>'; }).join('');
    var b = D.boards.filter(function (x) { return x.id === S.board; })[0], l = L(b);
    $('#boardCard').innerHTML = '<span class="tag">' + b.badge + '</span><h3 style="margin-top:8px">' + esc(l.t) + '</h3><ul class="f">' + l.p.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>';
    $('#after').innerHTML = D.afterClass.map(function (a, i) { var l = L(a); return '<details' + (i === 0 ? ' open' : '') + '><summary>' + esc(l.t) + '</summary><div class="body"><ul class="f">' + l.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div></details>'; }).join('');
    $('#tips').innerHTML = D.tips[S.lang].map(function (x) { return '<li style="margin:6px 0">' + esc(x) + '</li>'; }).join('');
    $('#check').innerHTML = D.checklist[S.lang].map(function (x, i) { return '<label class="check"><input type="checkbox" data-ck="' + i + '"' + (S.checks.indexOf(i) > -1 ? ' checked' : '') + '><span>' + esc(x) + '</span></label>'; }).join('');
  }

  function isSaved(id) { return S.saved.indexOf(id) > -1; }
  function saveBtn(id) { return '<button class="save" data-save="' + id + '" aria-pressed="' + isSaved(id) + '">' + (isSaved(id) ? t().saved : t().save) + '</button>'; }

  function renderColleges() {
    var tt = t();
    opts($('#ct'), tt.types, S.ct); opts($('#cs'), tt.streams, S.cs);
    var q = S.cq.trim().toLowerCase();
    var list = D.colleges.filter(function (c) {
      if (S.ct !== 'all' && c.type !== S.ct) return false;
      if (S.cs !== 'all' && c.streams.indexOf(S.cs) < 0) return false;
      if (!q) return true;
      return [c.en.n, c.en.a, c.en.c, c.en.place, c.hi.n, c.hi.a, c.hi.c, c.hi.place].join(' ').toLowerCase().indexOf(q) > -1;
    });
    $('#cCount').textContent = tt.showing(list.length, D.colleges.length);
    $('#cList').innerHTML = list.length ? list.map(function (c) {
      var l = L(c);
      return '<article class="card"><div class="top"><span class="tag">' + esc(tt.types[c.type]) + (c.women ? ' · ' + esc(tt.women) : '') + '</span>' + saveBtn('c:' + c.id) + '</div>' +
        '<h3 style="margin-top:8px">' + esc(l.n) + '</h3><p class="meta">📍 ' + esc(l.place) + ' · ' + esc(l.a) + '</p><p style="margin:6px 0">' + esc(l.c) + '</p>' +
        '<p class="meta">' + c.streams.map(function (s) { return esc(tt.streams[s]); }).join(' · ') + '</p>' + link(c.url, esc(tt.visit)) + '</article>';
    }).join('') : '<div class="card empty">' + esc(tt.none) + '<div style="margin-top:10px"><button class="btn s" id="cClear">' + esc(tt.clear) + '</button></div></div>';
  }

  function schemeMatch(s) {
    if (S.sl !== 'all' && s.levels.indexOf(S.sl) < 0) return false;
    if (S.sg === 'm' && s.gender === 'f') return false;
    if (S.sc !== 'all' && s.cats.indexOf(S.sc) < 0) {
      // Civil Seva: women of every category qualify
      if (!(s.womenAnyCat && S.sg === 'f')) return false;
    }
    return true;
  }

  function renderSchemes() {
    var tt = t();
    opts($('#sl'), tt.stages, S.sl); opts($('#sc'), tt.cats, S.sc); opts($('#sg'), tt.genders, S.sg);
    var list = D.schemes.filter(schemeMatch);
    $('#sCount').textContent = list.length ? tt.matched(list.length) : '';
    $('#sList').innerHTML = list.length ? list.map(function (s) {
      var l = L(s);
      return '<article class="card"><div class="top"><h3><span aria-hidden="true">' + s.icon + '</span> ' + esc(l.t) + '</h3>' + saveBtn('s:' + s.id) + '</div>' +
        '<div class="amt">' + esc(l.amt) + '</div><p style="margin:4px 0">' + esc(l.d) + '</p>' +
        '<p class="meta"><b>' + esc(tt.how) + ':</b> ' + esc(l.how) + '</p>' + link(s.url, esc(tt.apply), 'btn g') + '</article>';
    }).join('') : '<div class="card empty">' + esc(tt.noScheme) + '</div>';
  }

  function renderHeritage() {
    var tt = t(), n = D.heritage.length, r = S.read.filter(function (id) { return D.heritage.some(function (h) { return h.id === id; }); }).length;
    var pct = Math.round(100 * r / n);
    $('#hPct').textContent = pct + '% (' + r + '/' + n + ')'; $('#hBar').style.width = pct + '%';
    var open = {}; document.querySelectorAll('#hList details[open]').forEach(function (d) { open[d.dataset.id] = 1; });
    $('#hList').innerHTML = D.heritage.map(function (h) {
      var l = L(h), done = S.read.indexOf(h.id) > -1;
      return '<details data-id="' + h.id + '"' + (open[h.id] ? ' open' : '') + '><summary><span aria-hidden="true" style="font-size:22px">' + h.icon + '</span><span>' + esc(l.t) + (done ? '<span class="done">' + esc(tt.read) + '</span>' : '') + '</span></summary>' +
        '<div class="body"><span class="tag">' + esc(l.tag) + '</span><p style="margin:8px 0">' + esc(l.s) + '</p><ul class="f">' + l.f.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        '<div class="row" style="margin-top:12px"><button class="btn ' + (done ? 's' : 'g') + '" data-read="' + h.id + '">' + esc(done ? tt.unmark : tt.markRead) + '</button>' + link(h.src, esc(tt.source), 'btn s') + '</div></div></details>';
    }).join('');
  }

  // ---------- quiz ----------
  function newRound() {
    var idx = D.quiz.map(function (_, i) { return i; });
    for (var i = idx.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = idx[i]; idx[i] = idx[j]; idx[j] = x; }
    S.quiz = { qs: idx.slice(0, 10).map(function (qi) {
      var q = D.quiz[qi], ord = [0, 1, 2, 3];
      for (var k = 3; k > 0; k--) { var m = Math.floor(Math.random() * (k + 1)); var y = ord[k]; ord[k] = ord[m]; ord[m] = y; }
      return { qi: qi, ord: ord };
    }), i: 0, score: 0, picked: null };
  }
  function renderQuiz() {
    var tt = t(); if (!S.quiz) newRound();
    var Z = S.quiz, n = Z.qs.length, box = $('#quiz');
    if (Z.i >= n) {
      if (Z.score > S.best) { S.best = Z.score; store.set('best', S.best); }
      box.innerHTML = '<div class="big">' + Z.score + ' / ' + n + '</div><p style="text-align:center;font-weight:700">' + esc(tt.verdict(Z.score, n)) + '</p>' +
        '<p class="meta" style="text-align:center">' + esc(tt.best) + ': ' + S.best + ' / ' + n + '</p>' +
        '<div class="row" style="justify-content:center"><button class="btn g" id="qAgain">' + esc(tt.again) + '</button><button class="btn s" id="qShare">' + esc(tt.share) + '</button></div>';
      return;
    }
    var cur = Z.qs[Z.i], q = D.quiz[cur.qi], l = L(q);
    var html = '<div class="top"><span class="meta">' + esc(tt.qOf(Z.i + 1, n)) + '</span><span class="tag">' + esc(tt.score) + ': ' + Z.score + '</span></div>' +
      '<div class="prog" style="margin:8px 0"><i style="width:' + (100 * Z.i / n) + '%"></i></div><p class="q">' + esc(l.q) + '</p>';
    html += cur.ord.map(function (oi) {
      var cls = '';
      if (Z.picked !== null) { if (oi === q.a) cls = ' ok'; else if (oi === Z.picked) cls = ' no'; }
      return '<button class="opt' + cls + '" data-opt="' + oi + '"' + (Z.picked !== null ? ' disabled' : '') + '>' + esc(l.o[oi]) + '</button>';
    }).join('');
    if (Z.picked !== null) {
      var ok = Z.picked === q.a;
      html += '<div class="fb ' + (ok ? 'ok' : 'no') + '" role="status">' + esc(ok ? tt.right : tt.wrong(l.o[q.a])) + '</div>' +
        '<button class="btn g" id="qNext">' + esc(Z.i === n - 1 ? tt.finish : tt.next) + '</button>';
    }
    box.innerHTML = html;
  }

  // ---------- saved list ----------
  function findSaved(key) {
    var p = key.split(':'), arr = p[0] === 'c' ? D.colleges : D.schemes, it = arr.filter(function (x) { return x.id === p[1]; })[0];
    if (!it) return null; var l = L(it); return { name: l.n || l.t, url: it.url };
  }
  function renderSaved() {
    var tt = t(); $('#savedN').textContent = S.saved.length;
    var items = S.saved.map(function (k) { var f = findSaved(k); return f ? '<div class="si"><div>' + link(f.url, esc(f.name)) + '</div><button class="save" data-unsave="' + k + '">' + esc(tt.remove) + '</button></div>' : ''; }).join('');
    $('#savedBody').innerHTML = items ? items + '<div style="margin-top:12px"><button class="btn s" id="clearSaved">' + esc(tt.clearAll) + '</button></div>' : '<p class="empty">' + esc(tt.emptyList) + '</p>';
  }
  function toggleSave(k) {
    var i = S.saved.indexOf(k);
    if (i > -1) { S.saved.splice(i, 1); toast(t().removedT); } else { S.saved.push(k); toast(t().addedT); }
    store.set('saved', S.saved); renderSaved();
    document.querySelectorAll('[data-save="' + k + '"]').forEach(function (b) { b.setAttribute('aria-pressed', isSaved(k)); b.textContent = isSaved(k) ? t().saved : t().save; });
  }

  function show(tab, focus) {
    S.tab = tab;
    TABS.forEach(function (k) { $('#v-' + k).hidden = k !== tab; var b = $('#tab-' + k); if (b) b.setAttribute('aria-selected', k === tab); });
    var b = $('#tab-' + tab); if (b && b.scrollIntoView) b.scrollIntoView({ block: 'nearest', inline: 'center' });
    if (focus !== false) window.scrollTo(0, 0);
    try { if (location.hash.slice(1) !== tab) history.replaceState(null, '', '#' + tab); } catch (e) {}
  }
  function renderAll() { renderStatic(); renderHome(); renderExams(); renderColleges(); renderSchemes(); renderHeritage(); renderQuiz(); renderSaved(); show(S.tab, false); }
  function applyTheme() { document.documentElement.setAttribute('data-theme', S.theme); $('#theme').textContent = S.theme === 'dark' ? '☀️' : '🌙'; }
  function wa(text) { var u = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text); var w = window.open(u, '_blank', 'noopener'); if (!w) location.href = u; }

  // ---------- events (one delegated listener) ----------
  document.addEventListener('click', function (e) {
    var el = e.target.closest('button, [data-tab]'); if (!el) return;
    var d = el.dataset;
    if (d.tab) return show(d.tab);
    if (d.go) return show(d.go);
    if (d.board) { S.board = d.board; return renderExams(); }
    if (d.save) return toggleSave(d.save);
    if (d.unsave) { toggleSave(d.unsave); return; }
    if (d.read) { var i = S.read.indexOf(d.read); if (i > -1) S.read.splice(i, 1); else S.read.push(d.read); store.set('read', S.read); return renderHeritage(); }
    if (d.opt !== undefined && S.quiz && S.quiz.picked === null) { var Z = S.quiz, q = D.quiz[Z.qs[Z.i].qi]; Z.picked = +d.opt; if (Z.picked === q.a) Z.score++; renderQuiz(); var nb = $('#qNext'); if (nb) nb.focus(); return; }
    switch (el.id) {
      case 'lang': S.lang = S.lang === 'en' ? 'hi' : 'en'; store.set('lang', S.lang); renderAll(); break;
      case 'theme': S.theme = S.theme === 'dark' ? 'light' : 'dark'; store.set('theme', S.theme); applyTheme(); break;
      case 'savedBtn': renderSaved(); if ($('#savedDlg').showModal) $('#savedDlg').showModal(); else $('#savedDlg').setAttribute('open', ''); break;
      case 'closeDlg': $('#savedDlg').close ? $('#savedDlg').close() : $('#savedDlg').removeAttribute('open'); break;
      case 'clearSaved': S.saved = []; store.set('saved', S.saved); renderSaved(); renderColleges(); renderSchemes(); break;
      case 'cClear': S.cq = ''; S.ct = 'all'; S.cs = 'all'; $('#cq').value = ''; renderColleges(); break;
      case 'qNext': S.quiz.i++; S.quiz.picked = null; renderQuiz(); var o = document.querySelector('.opt'); if (o) o.focus(); break;
      case 'qAgain': newRound(); renderQuiz(); break;
      case 'qShare': wa(t().shareScore(S.quiz.score, S.quiz.qs.length) + URL_); break;
      case 'share': wa(t().shareMsg + URL_); break;
    }
  });
  document.addEventListener('change', function (e) {
    var id = e.target.id;
    if (id === 'ct' || id === 'cs') { S[id] = e.target.value; renderColleges(); }
    else if (id === 'sl' || id === 'sc' || id === 'sg') { S[id] = e.target.value; renderSchemes(); }
    else if (e.target.dataset.ck !== undefined) { var i = +e.target.dataset.ck, p = S.checks.indexOf(i); if (p > -1) S.checks.splice(p, 1); else S.checks.push(i); store.set('checks', S.checks); }
  });
  $('#cq').addEventListener('input', function (e) { S.cq = e.target.value; renderColleges(); });
  $('#tabs').addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var i = TABS.indexOf(S.tab) + (e.key === 'ArrowRight' ? 1 : -1); i = (i + TABS.length) % TABS.length; show(TABS[i]); $('#tab-' + TABS[i]).focus();
  });
  $('#savedDlg').addEventListener('click', function (e) { if (e.target === this && this.close) this.close(); });
  window.addEventListener('hashchange', function () { var h = location.hash.slice(1); if (TABS.indexOf(h) > -1 && h !== S.tab) show(h); });

  var h0 = location.hash.slice(1); if (TABS.indexOf(h0) > -1) S.tab = h0;
  applyTheme(); renderAll();

  // Offline support when served over https (GitHub Pages). Silently skipped elsewhere.
  try {
    if ('serviceWorker' in navigator && location.protocol === 'https:') {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    }
  } catch (e) {}
})();
