// ============================================================
// La PorraVKC — partidos.js
// Calendario real Mundial 2026
// ============================================================

const FLAGS = {
  'México': '🇲🇽', 'Sudáfrica': '🇿🇦', 'Corea del Sur': '🇰🇷', 'Chequia': '🇨🇿',
  'Canadá': '🇨🇦', 'Bosnia y Herzegovina': '🇧🇦', 'Qatar': '🇶🇦', 'Suiza': '🇨🇭',
  'Brasil': '🇧🇷', 'Marruecos': '🇲🇦', 'Haití': '🇭🇹', 'Escocia': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'Países Bajos': '🇳🇱', 'Japón': '🇯🇵', 'Suecia': '🇸🇪', 'Túnez': '🇹🇳',
  'España': '🇪🇸', 'Cabo Verde': '🇨🇻', 'Bélgica': '🇧🇪', 'Egipto': '🇪🇬',
  'Arabia Saudí': '🇸🇦', 'Uruguay': '🇺🇾', 'Irán': '🇮🇷', 'Nueva Zelanda': '🇳🇿',
  'Francia': '🇫🇷', 'Senegal': '🇸🇳', 'Irak': '🇮🇶', 'Noruega': '🇳🇴',
  'Argentina': '🇦🇷', 'Argelia': '🇩🇿', 'Austria': '🇦🇹', 'Jordania': '🇯🇴',
  'Ecuador': '🇪🇨', 'Costa de Marfil': '🇨🇮', 'Alemania': '🇩🇪', 'Curazao': '🇨🇼',
  'Turquía': '🇹🇷', 'Australia': '🇦🇺', 'Paraguay': '🇵🇾', 'Estados Unidos': '🇺🇸',
  'Nueva Zelanda ': '🇳🇿', 'Uzbekistán': '🇺🇿', 'Colombia': '🇨🇴',
  'Portugal': '🇵🇹', 'RD Congo': '🇨🇩', 'Inglaterra': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Croacia': '🇭🇷',
  'Ghana': '🇬🇭', 'Panamá': '🇵🇦',
};

function flag(name) {
  return FLAGS[name] || '🏳️';
}

// ============================================================
// PARTIDOS — calendario real extraído de las capturas
// ============================================================
const PARTIDOS = [
  // ---- GRUPO A ----
  { id:1,  fase:'Grupo A', faseCorta:'GRUPO A', local:'México',         visitante:'Sudáfrica',           fecha:'2026-06-11T21:00', elim:false },
  { id:2,  fase:'Grupo A', faseCorta:'GRUPO A', local:'Corea del Sur',  visitante:'Chequia',             fecha:'2026-06-12T04:00', elim:false },
  { id:3,  fase:'Grupo A', faseCorta:'GRUPO A', local:'Chequia',        visitante:'Sudáfrica',           fecha:'2026-06-18T18:00', elim:false },
  { id:4,  fase:'Grupo A', faseCorta:'GRUPO A', local:'México',         visitante:'Corea del Sur',       fecha:'2026-06-19T03:00', elim:false },
  { id:5,  fase:'Grupo A', faseCorta:'GRUPO A', local:'Chequia',        visitante:'México',              fecha:'2026-06-25T03:00', elim:false },
  { id:6,  fase:'Grupo A', faseCorta:'GRUPO A', local:'Sudáfrica',      visitante:'Corea del Sur',       fecha:'2026-06-25T03:00', elim:false },

  // ---- GRUPO B ----
  { id:7,  fase:'Grupo B', faseCorta:'GRUPO B', local:'Canadá',         visitante:'Bosnia y Herzegovina',fecha:'2026-06-12T21:00', elim:false },
  { id:8,  fase:'Grupo B', faseCorta:'GRUPO B', local:'Qatar',          visitante:'Suiza',               fecha:'2026-06-13T03:00', elim:false },
  { id:9,  fase:'Grupo B', faseCorta:'GRUPO B', local:'Suiza',          visitante:'Bosnia y Herzegovina',fecha:'2026-06-19T21:00', elim:false },
  { id:10, fase:'Grupo B', faseCorta:'GRUPO B', local:'Canadá',         visitante:'Qatar',               fecha:'2026-06-20T00:00', elim:false },
  { id:11, fase:'Grupo B', faseCorta:'GRUPO B', local:'Bosnia y Herzegovina', visitante:'Canadá',        fecha:'2026-06-26T22:00', elim:false },
  { id:12, fase:'Grupo B', faseCorta:'GRUPO B', local:'Suiza',          visitante:'Qatar',               fecha:'2026-06-26T22:00', elim:false },

  // ---- GRUPO C ----
  { id:13, fase:'Grupo C', faseCorta:'GRUPO C', local:'Brasil',         visitante:'Marruecos',           fecha:'2026-06-14T00:00', elim:false },
  { id:14, fase:'Grupo C', faseCorta:'GRUPO C', local:'Haití',          visitante:'Escocia',             fecha:'2026-06-14T03:00', elim:false },
  { id:15, fase:'Grupo C', faseCorta:'GRUPO C', local:'Escocia',        visitante:'Marruecos',           fecha:'2026-06-21T00:00', elim:false },
  { id:16, fase:'Grupo C', faseCorta:'GRUPO C', local:'Brasil',         visitante:'Haití',               fecha:'2026-06-21T02:30', elim:false },
  { id:17, fase:'Grupo C', faseCorta:'GRUPO C', local:'Marruecos',      visitante:'Haití',               fecha:'2026-06-26T22:00', elim:false },
  { id:18, fase:'Grupo C', faseCorta:'GRUPO C', local:'Escocia',        visitante:'Brasil',              fecha:'2026-06-26T22:00', elim:false },

  // ---- GRUPO D ----
  { id:19, fase:'Grupo D', faseCorta:'GRUPO D', local:'Estados Unidos', visitante:'Paraguay',            fecha:'2026-06-13T03:00', elim:false },
  { id:20, fase:'Grupo D', faseCorta:'GRUPO D', local:'Turquía',        visitante:'Australia',           fecha:'2026-06-17T20:00', elim:false },
  { id:21, fase:'Grupo D', faseCorta:'GRUPO D', local:'Estados Unidos', visitante:'Australia',           fecha:'2026-06-20T21:00', elim:false },
  { id:22, fase:'Grupo D', faseCorta:'GRUPO D', local:'Turquía',        visitante:'Paraguay',            fecha:'2026-06-21T05:00', elim:false },
  { id:23, fase:'Grupo D', faseCorta:'GRUPO D', local:'Paraguay',       visitante:'Australia',           fecha:'2026-06-27T01:00', elim:false },
  { id:24, fase:'Grupo D', faseCorta:'GRUPO D', local:'Turquía',        visitante:'Estados Unidos',      fecha:'2026-06-27T01:00', elim:false },

  // ---- GRUPO E ----
  { id:25, fase:'Grupo E', faseCorta:'GRUPO E', local:'Alemania',       visitante:'Curazao',             fecha:'2026-06-17T22:00', elim:false },
  { id:26, fase:'Grupo E', faseCorta:'GRUPO E', local:'Ecuador',        visitante:'Costa de Marfil',     fecha:'2026-06-18T01:00', elim:false },
  { id:27, fase:'Grupo E', faseCorta:'GRUPO E', local:'Alemania',       visitante:'Ecuador',             fecha:'2026-06-23T21:00', elim:false },
  { id:28, fase:'Grupo E', faseCorta:'GRUPO E', local:'Costa de Marfil',visitante:'Curazao',             fecha:'2026-06-24T00:00', elim:false },
  { id:29, fase:'Grupo E', faseCorta:'GRUPO E', local:'Curazao',        visitante:'Ecuador',             fecha:'2026-06-27T22:00', elim:false },
  { id:30, fase:'Grupo E', faseCorta:'GRUPO E', local:'Costa de Marfil',visitante:'Alemania',            fecha:'2026-06-27T22:00', elim:false },

  // ---- GRUPO F ----
  { id:31, fase:'Grupo F', faseCorta:'GRUPO F', local:'Suecia',         visitante:'Túnez',               fecha:'2026-06-15T04:00', elim:false },
  { id:32, fase:'Grupo F', faseCorta:'GRUPO F', local:'Países Bajos',   visitante:'Japón',               fecha:'2026-06-14T22:00', elim:false },
  { id:33, fase:'Grupo F', faseCorta:'GRUPO F', local:'Japón',          visitante:'Suecia',              fecha:'2026-06-26T01:00', elim:false },
  { id:34, fase:'Grupo F', faseCorta:'GRUPO F', local:'Túnez',          visitante:'Países Bajos',        fecha:'2026-06-26T02:00', elim:false },
  { id:35, fase:'Grupo F', faseCorta:'GRUPO F', local:'Países Bajos',   visitante:'Suecia',              fecha:'2026-06-20T19:00', elim:false },
  { id:36, fase:'Grupo F', faseCorta:'GRUPO F', local:'Túnez',          visitante:'Japón',               fecha:'2026-06-21T06:00', elim:false },

  // ---- GRUPO G ----
  { id:37, fase:'Grupo G', faseCorta:'GRUPO G', local:'Bélgica',        visitante:'Egipto',              fecha:'2026-06-15T21:00', elim:false },
  { id:38, fase:'Grupo G', faseCorta:'GRUPO G', local:'Irán',           visitante:'Nueva Zelanda',       fecha:'2026-06-16T03:00', elim:false },
  { id:39, fase:'Grupo G', faseCorta:'GRUPO G', local:'Bélgica',        visitante:'Irán',                fecha:'2026-06-21T21:00', elim:false },
  { id:40, fase:'Grupo G', faseCorta:'GRUPO G', local:'Nueva Zelanda',  visitante:'Egipto',              fecha:'2026-06-22T03:00', elim:false },
  { id:41, fase:'Grupo G', faseCorta:'GRUPO G', local:'Nueva Zelanda',  visitante:'Bélgica',             fecha:'2026-06-27T05:00', elim:false },
  { id:42, fase:'Grupo G', faseCorta:'GRUPO G', local:'Egipto',         visitante:'Irán',                fecha:'2026-06-27T05:00', elim:false },

  // ---- GRUPO H ----
  { id:43, fase:'Grupo H', faseCorta:'GRUPO H', local:'España',         visitante:'Cabo Verde',          fecha:'2026-06-15T18:00', elim:false },
  { id:44, fase:'Grupo H', faseCorta:'GRUPO H', local:'Arabia Saudí',   visitante:'Uruguay',             fecha:'2026-06-16T00:00', elim:false },
  { id:45, fase:'Grupo H', faseCorta:'GRUPO H', local:'España',         visitante:'Arabia Saudí',        fecha:'2026-06-21T18:00', elim:false },
  { id:46, fase:'Grupo H', faseCorta:'GRUPO H', local:'Uruguay',        visitante:'Cabo Verde',          fecha:'2026-06-22T00:00', elim:false },
  { id:47, fase:'Grupo H', faseCorta:'GRUPO H', local:'Cabo Verde',     visitante:'Arabia Saudí',        fecha:'2026-06-27T02:00', elim:false },
  { id:48, fase:'Grupo H', faseCorta:'GRUPO H', local:'Uruguay',        visitante:'España',              fecha:'2026-06-27T02:00', elim:false },

  // ---- GRUPO I ----
  { id:49, fase:'Grupo I', faseCorta:'GRUPO I', local:'Francia',        visitante:'Senegal',             fecha:'2026-06-16T21:00', elim:false },
  { id:50, fase:'Grupo I', faseCorta:'GRUPO I', local:'Irak',           visitante:'Noruega',             fecha:'2026-06-17T00:00', elim:false },
  { id:51, fase:'Grupo I', faseCorta:'GRUPO I', local:'Francia',        visitante:'Irak',                fecha:'2026-06-22T23:00', elim:false },
  { id:52, fase:'Grupo I', faseCorta:'GRUPO I', local:'Noruega',        visitante:'Senegal',             fecha:'2026-06-23T02:00', elim:false },
  { id:53, fase:'Grupo I', faseCorta:'GRUPO I', local:'Noruega',        visitante:'Francia',             fecha:'2026-06-26T21:00', elim:false },
  { id:54, fase:'Grupo I', faseCorta:'GRUPO I', local:'Senegal',        visitante:'Irak',                fecha:'2026-06-26T21:00', elim:false },

  // ---- GRUPO J ----
  { id:55, fase:'Grupo J', faseCorta:'GRUPO J', local:'Argentina',      visitante:'Argelia',             fecha:'2026-06-17T03:00', elim:false },
  { id:56, fase:'Grupo J', faseCorta:'GRUPO J', local:'Austria',        visitante:'Jordania',            fecha:'2026-06-17T06:00', elim:false },
  { id:57, fase:'Grupo J', faseCorta:'GRUPO J', local:'Argentina',      visitante:'Austria',             fecha:'2026-06-22T19:00', elim:false },
  { id:58, fase:'Grupo J', faseCorta:'GRUPO J', local:'Jordania',       visitante:'Argelia',             fecha:'2026-06-23T05:00', elim:false },
  { id:59, fase:'Grupo J', faseCorta:'GRUPO J', local:'Argelia',        visitante:'Austria',             fecha:'2026-06-28T04:00', elim:false },
  { id:60, fase:'Grupo J', faseCorta:'GRUPO J', local:'Jordania',       visitante:'Argentina',           fecha:'2026-06-28T04:00', elim:false },

  // ---- GRUPO K ----
  { id:61, fase:'Grupo K', faseCorta:'GRUPO K', local:'Uzbekistán',     visitante:'Colombia',            fecha:'2026-06-19T04:00', elim:false },
  { id:62, fase:'Grupo K', faseCorta:'GRUPO K', local:'Portugal',       visitante:'RD Congo',            fecha:'2026-06-18T19:00', elim:false },
  { id:63, fase:'Grupo K', faseCorta:'GRUPO K', local:'Colombia',       visitante:'Portugal',            fecha:'2026-06-25T00:30', elim:false },
  { id:64, fase:'Grupo K', faseCorta:'GRUPO K', local:'RD Congo',       visitante:'Uzbekistán',          fecha:'2026-06-25T00:30', elim:false },
  { id:65, fase:'Grupo K', faseCorta:'GRUPO K', local:'Portugal',       visitante:'Uzbekistán',          fecha:'2026-06-28T22:00', elim:false },
  { id:66, fase:'Grupo K', faseCorta:'GRUPO K', local:'RD Congo',       visitante:'Colombia',            fecha:'2026-06-28T22:00', elim:false },

  // ---- GRUPO L ----
  { id:67, fase:'Grupo L', faseCorta:'GRUPO L', local:'Inglaterra',     visitante:'Croacia',             fecha:'2026-06-18T22:00', elim:false },
  { id:68, fase:'Grupo L', faseCorta:'GRUPO L', local:'Ghana',          visitante:'Panamá',              fecha:'2026-06-19T01:00', elim:false },
  { id:69, fase:'Grupo L', faseCorta:'GRUPO L', local:'Panamá',         visitante:'Inglaterra',          fecha:'2026-06-24T22:00', elim:false },
  { id:70, fase:'Grupo L', faseCorta:'GRUPO L', local:'Croacia',        visitante:'Ghana',               fecha:'2026-06-24T22:00', elim:false },
  { id:71, fase:'Grupo L', faseCorta:'GRUPO L', local:'Inglaterra',     visitante:'Ghana',               fecha:'2026-06-28T22:00', elim:false },
  { id:72, fase:'Grupo L', faseCorta:'GRUPO L', local:'Croacia',        visitante:'Panamá',              fecha:'2026-06-28T22:00', elim:false },

  // ---- DIECISEISAVOS ----
  { id:73,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo E',  visitante:'3º Grupo',  fecha:'2026-06-28T22:00', elim:true },
  { id:74,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo F',  visitante:'2º Grupo C',fecha:'2026-06-29T01:00', elim:true },
  { id:75,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo E',  visitante:'2º Grupo F',fecha:'2026-06-29T22:00', elim:true },
  { id:76,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo I',  visitante:'3º Grupo',  fecha:'2026-06-30T01:00', elim:true },
  { id:77,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'2º Grupo E',  visitante:'2º Grupo I',fecha:'2026-06-30T22:00', elim:true },
  { id:78,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo A',  visitante:'3º Grupo',  fecha:'2026-07-01T01:00', elim:true },
  { id:79,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo L',  visitante:'3º Grupo',  fecha:'2026-07-01T22:00', elim:true },
  { id:80,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo G',  visitante:'3º Grupo',  fecha:'2026-07-01T22:00', elim:true },
  { id:81,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo D',  visitante:'3º Grupo',  fecha:'2026-07-02T01:00', elim:true },
  { id:82,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo H',  visitante:'2º Grupo K',fecha:'2026-07-02T01:00', elim:true },
  { id:83,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo C',  visitante:'3º Grupo',  fecha:'2026-07-02T22:00', elim:true },
  { id:84,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'2º Grupo G',  visitante:'2º Grupo H',fecha:'2026-07-03T01:00', elim:true },
  { id:85,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo B',  visitante:'3º Grupo',  fecha:'2026-07-03T22:00', elim:true },
  { id:86,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo K',  visitante:'2º Grupo L',fecha:'2026-07-03T22:00', elim:true },
  { id:87,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'1º Grupo J',  visitante:'3º Grupo',  fecha:'2026-07-04T01:00', elim:true },
  { id:88,  fase:'DIECISEISAVOS', faseCorta:'DIECISEISAVOS', local:'2º Grupo A',  visitante:'2º Grupo B',fecha:'2026-07-04T01:00', elim:true },

  // ---- OCTAVOS ----
  { id:89,  fase:'OCTAVOS', faseCorta:'OCTAVOS', local:'Ganador P73', visitante:'Ganador P74', fecha:'2026-07-04T22:00', elim:true },
  { id:90,  fase:'OCTAVOS', faseCorta:'OCTAVOS', local:'Ganador P75', visitante:'Ganador P76', fecha:'2026-07-05T01:00', elim:true },
  { id:91,  fase:'OCTAVOS', faseCorta:'OCTAVOS', local:'Ganador P77', visitante:'Ganador P78', fecha:'2026-07-05T22:00', elim:true },
  { id:92,  fase:'OCTAVOS', faseCorta:'OCTAVOS', local:'Ganador P79', visitante:'Ganador P80', fecha:'2026-07-06T01:00', elim:true },
  { id:93,  fase:'OCTAVOS', faseCorta:'OCTAVOS', local:'Ganador P81', visitante:'Ganador P82', fecha:'2026-07-06T22:00', elim:true },
  { id:94,  fase:'OCTAVOS', faseCorta:'OCTAVOS', local:'Ganador P83', visitante:'Ganador P84', fecha:'2026-07-07T01:00', elim:true },
  { id:95,  fase:'OCTAVOS', faseCorta:'OCTAVOS', local:'Ganador P85', visitante:'Ganador P86', fecha:'2026-07-07T22:00', elim:true },
  { id:96,  fase:'OCTAVOS', faseCorta:'OCTAVOS', local:'Ganador P87', visitante:'Ganador P88', fecha:'2026-07-08T01:00', elim:true },

  // ---- CUARTOS ----
  { id:97,  fase:'CUARTOS', faseCorta:'CUARTOS', local:'Ganador P89', visitante:'Ganador P90', fecha:'2026-07-10T01:00', elim:true },
  { id:98,  fase:'CUARTOS', faseCorta:'CUARTOS', local:'Ganador P91', visitante:'Ganador P92', fecha:'2026-07-10T22:00', elim:true },
  { id:99,  fase:'CUARTOS', faseCorta:'CUARTOS', local:'Ganador P93', visitante:'Ganador P94', fecha:'2026-07-11T01:00', elim:true },
  { id:100, fase:'CUARTOS', faseCorta:'CUARTOS', local:'Ganador P95', visitante:'Ganador P96', fecha:'2026-07-11T22:00', elim:true },

  // ---- SEMIFINAL ----
  { id:101, fase:'SEMIFINAL', faseCorta:'SEMIFINAL', local:'Ganador P97', visitante:'Ganador P98',   fecha:'2026-07-15T00:00', elim:true },
  { id:102, fase:'SEMIFINAL', faseCorta:'SEMIFINAL', local:'Ganador P99', visitante:'Ganador P100',  fecha:'2026-07-16T00:00', elim:true },

  // ---- 3ER PUESTO ----
  { id:103, fase:'3ER PUESTO', faseCorta:'3ER PUESTO', local:'Perdedor SF1', visitante:'Perdedor SF2', fecha:'2026-07-18T22:00', elim:true },

  // ---- FINAL ----
  { id:104, fase:'FINAL', faseCorta:'FINAL', local:'Ganador P101', visitante:'Ganador P102', fecha:'2026-07-19T23:00', elim:true },
];

const ORDEN_FASES = [
  'Grupo A','Grupo B','Grupo C','Grupo D','Grupo E','Grupo F',
  'Grupo G','Grupo H','Grupo I','Grupo J','Grupo K','Grupo L',
  'DIECISEISAVOS','OCTAVOS','CUARTOS','SEMIFINAL','3ER PUESTO','FINAL'
];

// ---- Sistema de puntos ----
function multiplicador(fase) {
  if (fase === 'DIECISEISAVOS') return 2;
  if (fase === 'OCTAVOS') return 3;
  if (['CUARTOS','SEMIFINAL','3ER PUESTO','FINAL'].includes(fase)) return 4;
  return 1;
}

function calcPuntos(pred, real, fase) {
  if (!pred || !real) return 0;
  const mult = multiplicador(fase);
  if (pred.l === real.l && pred.v === real.v) return 8 * mult;
  const resP = pred.l > pred.v ? 1 : pred.l < pred.v ? -1 : 0;
  const resR = real.l > real.v ? 1 : real.l < real.v ? -1 : 0;
  return resP === resR ? 3 * mult : 0;
}

function recalcPuntos(sala) {
  sala.participantes.forEach(p => {
    let total = 0;
    const preds = sala.predicciones?.[p.nombre] || {};
    PARTIDOS.forEach(partido => {
      const real = sala.resultados?.[partido.id];
      const pred = preds[partido.id];
      if (real && pred) total += calcPuntos(pred, real, partido.faseCorta);
    });
    p.puntos = total;
    p.nPorras = Object.keys(preds).length;
  });
  return sala;
}

// ---- localStorage helpers ----
function getSala(id) {
  const raw = localStorage.getItem(`sala_${id}`);
  return raw ? JSON.parse(raw) : null;
}
function saveSala(sala) {
  localStorage.setItem(`sala_${sala.id}`, JSON.stringify(sala));
}
function getMiNombre(id) {
  return localStorage.getItem(`miNombre_${id}`) || null;
}
function setMiNombre(id, nombre) {
  localStorage.setItem(`miNombre_${id}`, nombre);
}

// ---- UI helpers ----
function toast(msg, duration = 2500) {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), duration);
}

function formatFecha(isoStr) {
  const d = new Date(isoStr);
  return d.toLocaleDateString('es-ES', { weekday:'short', day:'numeric', month:'short' })
    + ' · ' + d.toLocaleTimeString('es-ES', { hour:'2-digit', minute:'2-digit' }) + 'h';
}

function formatBote(bote) {
  return (!bote || bote === 0) ? 'Gratis' : bote + '€ p.p.';
}

function generarId() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}
