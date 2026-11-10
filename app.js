// Deutsch Sprint: A2.1 crash app. All state in localStorage.
const KEY = "deutsch-sprint-v1";
const NEW_PER_DAY = 15, REVIEW_CAP = 25;
const BOX_DAYS = {1:1, 2:2, 3:4, 4:8, 5:30};

const $ = (s, el = document) => el.querySelector(s);
const app = $("#app"), sheet = $("#sheet");

// ---------- dates ----------
const pad = n => String(n).padStart(2, "0");
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => iso(new Date());
const addDays = (s, n) => { const d = new Date(s + "T12:00:00"); d.setDate(d.getDate() + n); return iso(d); };
const daysBetween = (a, b) => Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 864e5);

// ---------- state ----------
let S = load();
function load() {
  try { return Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY)) || {}); } catch { return fresh(); }
}
function fresh() { return { xp: 0, dates: [], vocab: {}, days: {}, missed: [], newToday: { date: "", n: 0 } }; }
function save() { localStorage.setItem(KEY, JSON.stringify(S)); }

function streak() {
  const set = new Set(S.dates); let d = today(), n = 0;
  if (!set.has(d)) d = addDays(d, -1);
  while (set.has(d)) { n++; d = addDays(d, -1); }
  return n;
}
function markActive() { const t = today(); if (!S.dates.includes(t)) S.dates.push(t); }

// ---------- content ----------
const WORDS = [];
for (const [theme, list] of Object.entries(VOCAB)) for (const row of list) {
  const [art, word, pl, en] = row.split("|");
  WORDS.push({ id: (art ? art + " " : "") + word, art, word, pl, en, theme });
}
const ITEMS = {};
for (const [topic, list] of Object.entries(G)) list.forEach((it, i) => ITEMS[`${topic}:${i}`] = { ...it, id: `${topic}:${i}`, topic });

const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const norm = s => s.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
  .replace(/\.\.\.|…/g, " ").replace(/[.,!?;:"]/g, "").replace(/\s+/g, " ").trim();

function planIndex() {
  const t = today();
  const i = PLAN.findIndex(p => p.d === t);
  if (i >= 0) return i;
  if (t < PLAN[0].d) return 0;
  // after the plan or a gap: first day not yet done, else last
  const firstOpen = PLAN.findIndex(p => !S.days[p.d]);
  return firstOpen >= 0 ? firstOpen : PLAN.length - 1;
}

// ---------- vocab queue ----------
function vocabQueue() {
  const t = today();
  const due = shuffle(WORDS.filter(w => S.vocab[w.id] && S.vocab[w.id].due <= t && S.vocab[w.id].box < 5)).slice(0, REVIEW_CAP);
  if (S.newToday.date !== t) S.newToday = { date: t, n: 0 };
  const room = Math.max(0, NEW_PER_DAY - S.newToday.n);
  const fresh = WORDS.filter(w => !S.vocab[w.id]).slice(0, room);
  return shuffle([...due, ...fresh]);
}
function gradeWord(w, right) {
  const v = S.vocab[w.id] || { box: 1, seen: 0, correct: 0, due: today() };
  if (!S.vocab[w.id] ) S.newToday.n++;
  v.seen++;
  if (right) { v.correct++; v.box = Math.min(5, v.box + 1); } else v.box = 1;
  v.due = addDays(today(), BOX_DAYS[v.box]);
  S.vocab[w.id] = v;
}

// ---------- grammar queue ----------
function grammarQueue(p) {
  const pool = shuffle(p.topics.flatMap(t => G[t].map((_, i) => `${t}:${i}`)));
  const picked = pool.slice(0, p.n);
  const review = S.missed.filter(id => ITEMS[id] && !picked.includes(id)).slice(0, 4);
  return [...review, ...picked].map(id => ITEMS[id]);
}

// ---------- session ----------
let R = null; // running session
function startSession(mode, idx) {
  const p = PLAN[idx];
  const steps = [];
  if (mode === "full" || mode === "vocab") vocabQueue().forEach(w => steps.push({ kind: "vocab", w, dir: !S.vocab[w.id] || Math.random() < .5 ? "de" : "en" }));
  if (mode === "full") grammarQueue(p).forEach(it => steps.push({ kind: "gram", it }));
  if (mode === "full" || mode === "talk") steps.push({ kind: "talk" });
  if (!steps.length) return alert("Heute nichts fällig. Morgen weiter!");
  R = { mode, p, steps, i: 0, combo: 0, vr: 0, vt: 0, gr: 0, gt: 0, misses: [], talked: false, start: Date.now() };
  renderStep();
}

function header() {
  const pct = Math.round(100 * R.i / R.steps.length);
  return `<div class="top" style="gap:10px"><button class="x" onclick="quit()">✕</button>
    <div class="bar"><i style="width:${pct}%"></i></div>
    <span class="chip">${R.combo >= 3 ? `<span class="combo">🔥${R.combo}</span>` : `⭐ ${S.xp}`}</span></div>`;
}
function quit() { if (confirm("Abbrechen? Fortschritt bei Vokabeln bleibt gespeichert.")) { save(); R = null; home(); } }

function renderStep() {
  hideSheet();
  if (R.i >= R.steps.length) return finish();
  const st = R.steps[R.i];
  if (st.kind === "vocab") return vocabStep(st);
  if (st.kind === "gram") return st.it.t === "o" ? orderStep(st.it) : fillStep(st.it);
  return talkStep();
}

function result(right, title, body, extra) {
  if (right) { R.combo++; S.xp += 10; } else { R.combo = 0; navigator.vibrate && navigator.vibrate(120); const c = $(".card"); c && c.classList.add("shake"); }
  save();
  sheet.className = "sheet show " + (right ? "ok" : "bad");
  sheet.firstElementChild.innerHTML = `<h3>${title}</h3>${body}<div style="height:14px"></div>
    <button class="btn ${right ? "ok" : "bad"}" id="next">Weiter</button>`;
  $("#next").onclick = () => { R.i++; renderStep(); };
  extra && extra();
}
function hideSheet() { sheet.className = "sheet"; }

// vocab card
function vocabStep(st) {
  const w = st.w, isNoun = !!w.art;
  const same = WORDS.filter(x => x.id !== w.id && !!x.art === isNoun);
  const sameTheme = same.filter(x => x.theme === w.theme);
  const distract = shuffle(sameTheme.length >= 3 ? sameTheme : same).slice(0, 3);
  const isNew = !S.vocab[w.id];
  let artPick = null;

  const finishCard = (right, why) => {
    R.vt++; if (right) R.vr++;
    gradeWord(w, right);
    const full = `<span class="${w.art ? "tag-" + w.art : ""}">${w.id}</span>`;
    result(right, right ? "Richtig! ✅" : "Nicht ganz ❌",
      `<div class="word" style="font-size:26px">${full}</div><div>${w.en}${w.pl && w.pl !== "-" ? ` · Plural: die ${w.pl}` : ""}</div>${why ? `<p><b>${why}</b></p>` : ""}`);
  };

  if (st.dir === "de") {
    const opts = shuffle([w, ...distract]);
    app.innerHTML = header() + `<div class="card"><div class="label">${isNew ? "🆕 Neues Wort · " : ""}Was heißt das?</div>
      <div class="word"><span class="${w.art ? "tag-" + w.art : ""}">${w.id}</span></div><div class="muted">${w.theme}</div>
      <div class="opts">${opts.map(o => `<button class="opt" data-id="${o.id}">${o.en}</button>`).join("")}</div></div>`;
    app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const right = b.dataset.id === w.id;
      b.classList.add(right ? "right" : "wrong");
      app.querySelector(`.opt[data-id="${CSS.escape(w.id)}"]`).classList.add("right");
      finishCard(right);
    });
    return;
  }
  // en -> de
  const drawWordChoice = () => {
    const opts = shuffle([w, ...distract]);
    $("#stage").innerHTML = `<div class="opts">${opts.map(o => `<button class="opt" data-id="${o.id}">${o.word}</button>`).join("")}</div>`;
    app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const wordRight = b.dataset.id === w.id;
      const artRight = !isNoun || artPick === w.art;
      b.classList.add(wordRight ? "right" : "wrong");
      finishCard(wordRight && artRight, wordRight && !artRight ? `Artikel! Es ist ${w.art}, nicht ${artPick}.` : "");
    });
  };
  app.innerHTML = header() + `<div class="card"><div class="label">${isNew ? "🆕 Neues Wort · " : ""}Auf Deutsch?</div>
    <div class="word">${w.en}</div><div class="muted">${w.theme}</div><div id="stage"></div></div>`;
  if (isNoun) {
    $("#stage").innerHTML = `<div class="label" style="margin-top:14px">Erst der Artikel</div>
      <div class="arts">${["der", "die", "das"].map(a => `<button class="art ${a}" data-a="${a}">${a}</button>`).join("")}</div>`;
    app.querySelectorAll(".art").forEach(b => b.onclick = () => { artPick = b.dataset.a; drawWordChoice(); });
  } else drawWordChoice();
}

// fill-in grammar
function fillStep(it) {
  const s = it.s.replace(/___/g, '<span class="blank">?</span>');
  const blanks = (it.s.match(/___/g) || []).length;
  app.innerHTML = header() + `<div class="card"><div class="label">${R.p.title}${S.missed.includes(it.id) ? " · 🔁 Wiederholung" : ""}</div>
    <div class="prompt">${s}</div><span class="hint">${it.h}</span>
    <input class="answer" id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${blanks > 1 ? "beide Lücken, z.B. bin gegangen" : "Antwort"}">
    <div class="uml">${["ä", "ö", "ü", "ß"].map(c => `<button data-c="${c}">${c}</button>`).join("")}</div>
    <button class="btn" id="check">Prüfen</button></div>`;
  const inp = $("#ans");
  setTimeout(() => inp.focus(), 50);
  app.querySelectorAll(".uml button").forEach(b => b.onclick = () => { inp.value += b.dataset.c; inp.focus(); });
  const check = () => {
    if (!inp.value.trim()) return;
    const right = it.a.some(a => norm(a) === norm(inp.value));
    gramResult(it, right, inp.value);
  };
  $("#check").onclick = check;
  inp.onkeydown = e => { if (e.key === "Enter") check(); };
}

// word order tiles
function orderStep(it) {
  const pool = shuffle(it.w.map((t, i) => ({ t, i })));
  let picked = [];
  const draw = () => {
    $("#built").innerHTML = picked.map((p, k) => `<button class="tile" data-k="${k}">${p.t}</button>`).join("");
    $("#pool").innerHTML = pool.map(p => `<button class="tile ${picked.includes(p) ? "used" : ""}" data-i="${p.i}">${p.t}</button>`).join("");
    app.querySelectorAll("#built .tile").forEach(b => b.onclick = () => { picked.splice(+b.dataset.k, 1); draw(); });
    app.querySelectorAll("#pool .tile").forEach(b => b.onclick = () => { const p = pool.find(x => x.i === +b.dataset.i); if (!picked.includes(p)) picked.push(p); draw(); });
    $("#check").disabled = picked.length !== pool.length;
  };
  app.innerHTML = header() + `<div class="card"><div class="label">${R.p.title} · Satzbau${S.missed.includes(it.id) ? " · 🔁" : ""}</div>
    <div class="prompt">${it.lead} …</div><div class="muted">${it.en}</div>
    <div class="tiles" id="built"></div><div class="tiles pool" id="pool"></div>
    <div style="height:10px"></div><button class="btn" id="check">Prüfen</button></div>`;
  draw();
  $("#check").onclick = () => { const ans = picked.map(p => p.t).join(" "); gramResult(it, norm(ans) === norm(it.a), ans); };
}

function gramResult(it, right, given) {
  R.gt++; if (right) R.gr++;
  const correct = it.t === "o" ? `${it.lead} ${it.a}.` : it.s.replace(/___/g, () => "<b>___</b>").replace(/<b>___<\/b>/g, "%%");
  let shown = correct;
  if (it.t !== "o") {
    const parts = it.a[0].split(" ");
    if (it.s.startsWith("___")) parts[0] = parts[0][0].toUpperCase() + parts[0].slice(1);
    let k = 0; shown = correct.replace(/%%/g, () => `<b>${parts[k++] || ""}</b>`);
  }
  if (right) S.missed = S.missed.filter(x => x !== it.id);
  else { if (!S.missed.includes(it.id)) S.missed.push(it.id); R.misses.push(`${it.t === "o" ? it.lead + " " + given : given} → ${it.t === "o" ? it.a : it.a[0]} (${it.r})`); }
  result(right, right ? "Richtig! ✅" : "Nicht ganz ❌",
    `<div style="font-size:20px;margin:6px 0">${shown}</div><div class="muted">${it.en}</div>${right ? "" : `<p><b>Regel:</b> ${it.r}</p>`}`);
}

// speaking handoff
function talkPrompt(p) {
  return `If a German state doc is attached to this project, read it first.

You are my German tutor. I finished A2.1, I'm rusty, and I start an A2.2 intensive on 23 Nov. Today is "${p.title}". Talk with me in simple, slow A2 German about ${p.talk}

Rules: one question at a time. Don't correct me mid-flow. After every 3 or 4 of my answers, list what I said and the corrected version, with a one-line rule in English. If I get stuck, give me only the first two words. After about 10 minutes, end with this block:
### ${today()}, speaking, ${p.title}
- Misses: <what I said> → <correct> (<rule>)
- Next: <one thing>`;
}
function talkStep() {
  const p = R.p;
  app.innerHTML = header() + `<div class="card hero"><div class="big">🗣️</div><h1>Sprechen</h1>
    <p>10 Minuten mit Claude im Sprachmodus. Thema: <b>${p.talk}</b></p></div>
    <div class="card"><p class="muted" style="margin-top:0">Tippen kopiert den Prompt. Im Chat einfügen, dann das Mikrofon antippen.</p>
    <div class="row"><button class="btn" id="claude">Claude</button><button class="btn ghost" id="gpt">ChatGPT</button></div>
    <div style="height:12px"></div><button class="btn ok" id="done">Fertig gesprochen ✓</button>
    <div style="height:10px"></div><button class="btn ghost" id="skip">Heute überspringen</button></div>`;
  const go = url => { navigator.clipboard && navigator.clipboard.writeText(talkPrompt(p)).catch(() => {}); setTimeout(() => location.href = url, 150); };
  $("#claude").onclick = () => go("https://claude.ai/new");
  $("#gpt").onclick = () => go("https://chatgpt.com/");
  $("#done").onclick = () => { R.talked = true; S.xp += 30; save(); R.i++; renderStep(); };
  $("#skip").onclick = () => { R.i++; renderStep(); };
}

// ---------- finish ----------
function finish() {
  markActive();
  const p = R.p, total = R.gt, score = R.gr;
  if (R.mode === "full" && total) {
    const prev = S.days[p.d];
    if (!prev || score / total >= prev.score / prev.total) S.days[p.d] = { score, total, date: today() };
  }
  save();
  const log = `### ${today()}, Deutsch Sprint, ${p.title}
- Grammar: ${score}/${total}${R.vt ? ` · Vocab: ${R.vr}/${R.vt}` : ""}${R.talked ? " · Speaking: done" : ""}
- Misses: ${R.misses.length ? R.misses.join("; ") : "none"}
- Next: ${R.misses.length ? "repeat today's misses (the app brings them back tomorrow)" : (PLAN[PLAN.indexOf(p) + 1] || {}).title || "A2.2 class"}`;
  confetti();
  app.innerHTML = `<div class="card hero" style="margin-top:24px;text-align:center"><div class="big">🎉</div><h1>Geschafft!</h1>
    <p>${streak()} Tage Streak 🔥</p></div>
    <div class="stats"><div><b>${total ? score + "/" + total : "–"}</b>Grammatik</div><div><b>${R.vt ? R.vr + "/" + R.vt : "–"}</b>Vokabeln</div><div><b>${S.xp}</b>XP</div></div>
    <div class="card"><div class="label">Log fürs Google Doc</div><pre class="log" id="log">${log}</pre>
    <button class="btn" id="copy">Log kopieren</button></div>
    <button class="btn ghost" onclick="R=null;home()">Zurück</button>`;
  $("#copy").onclick = () => navigator.clipboard.writeText(log).then(() => $("#copy").textContent = "Kopiert ✓");
}
function confetti() {
  const colors = ["#FFB800", "#FF7A00", "#3B82F6", "#F0465A", "#22B573"];
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = 1.6 + Math.random() * 1.6 + "s";
    c.style.animationDelay = Math.random() * .4 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// ---------- home ----------
function home() {
  hideSheet();
  const idx = planIndex(), p = PLAN[idx], t = today();
  const daysLeft = daysBetween(t, COURSE_START);
  const learned = Object.values(S.vocab).filter(v => v.box >= 3).length;
  const dueN = WORDS.filter(w => S.vocab[w.id] && S.vocab[w.id].due <= t && S.vocab[w.id].box < 5).length;
  const stars = d => { const r = S.days[d]; if (!r) return ""; const q = r.score / r.total; return "★".repeat(q >= .9 ? 3 : q >= .7 ? 2 : 1); };
  const preStart = t < PLAN[0].d;
  app.innerHTML = `<div class="top"><span class="chip">🔥 ${streak()}</span><span class="chip">⭐ ${S.xp}</span>
    <span class="chip">🎓 ${daysLeft > 0 ? daysLeft + " Tage" : "A2.2 läuft"}</span></div>
    <div class="card hero"><div class="label" style="color:#7A4A00">${preStart ? "Morgen geht's los · Tag 1" : `Tag ${idx + 1} von 12`}</div>
      <div style="display:flex;align-items:center;gap:12px"><div class="big">${p.icon}</div><div><h1 style="margin:0">${p.title}</h1><div>${p.sub}</div></div></div>
      <div style="height:14px"></div><button class="btn" onclick="startSession('full',${idx})">${S.days[p.d] ? "Nochmal üben" : "Los geht's"}</button>
      <div class="muted" style="color:#7A4A00;margin-top:8px;font-size:14px">Vokabeln → Grammatik → Sprechen · ca. 30 Min</div></div>
    <div class="row"><button class="btn ghost" onclick="startSession('vocab',${idx})">📇 Vokabeln${dueN ? ` (${dueN})` : ""}</button>
      <button class="btn ghost" onclick="startSession('talk',${idx})">🗣️ Sprechen</button></div>
    <div class="card"><div class="label">Dein Weg bis 23.11.</div><div class="path">
      ${PLAN.map((q, i) => `<div class="node ${S.days[q.d] ? "done" : ""} ${i === idx ? "today" : ""}" onclick="startSession('full',${i})">
        <div class="dot">${q.icon}</div><div><b>${q.title}</b><small>${new Date(q.d + "T12:00").toLocaleDateString("de-DE", { weekday: "short", day: "numeric", month: "numeric" })} · ${q.sub}</small>
        <div class="stars">${stars(q.d)}</div></div></div>`).join("")}
    </div></div>
    <div class="stats"><div><b>${learned}</b>Wörter sicher</div><div><b>${Object.keys(S.vocab).length}/${WORDS.length}</b>gesehen</div><div><b>${S.missed.length}</b>Fehler offen</div></div>`;
}

if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js");
home();
