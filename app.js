// Minimal SPA logic for ticket booking demo
const DEFAULT_LAYOUT = [6,8,10,10,12,12,12,10,8,6];

const EVENTS = [
  createEvent({
    id: 'materialists',
    title: 'Materialists',
    date: 'Nov 18, 2025',
    dateKey: '2025-11-18',
    genre: 'Drama',
    runtime: 116,
    poster: 'https://image.tmdb.org/t/p/w500/1kmWUMfGBH0HZs7h7DLMWRnPdgQ.jpg',
    description: 'An ambitious NYC matchmaker balances a pristine client list with imperfect feelings.',
    vipPrice: 30,
    standardPrice: 18,
    cinemas: [
      { brand: 'GSC', name: 'GSC Pavilion KL', city: 'Kuala Lumpur', detail: 'Hall 6 • Dolby Atmos', times: ['11:00 AM', '2:30 PM', '6:15 PM', '9:20 PM'] },
      { brand: 'TGV', name: 'TGV KLCC', city: 'Kuala Lumpur', detail: 'Afternoon lounge seats', times: ['12:45 PM', '4:10 PM', '8:40 PM'] }
    ]
  }),
  createEvent({
    id: 'wicked',
    title: 'Wicked: For Good',
    date: 'Nov 19, 2025',
    genre: 'Fantasy',
    dateKey: '2025-11-19',
    runtime: 138,
    poster: 'https://images.justwatch.com/poster/331748555/s718/wicked-parte-dois.jpg',
    description: 'The untold friendship behind Oz\'s most misunderstood witches arrives in a soaring musical spectacle.',
    vipPrice: 34,
    standardPrice: 20,
    cinemas: [
      { brand: 'Aurum', name: 'Aurum Theatre, TRX', city: 'Kuala Lumpur', detail: 'Gourmet lounge • Hall Aurora', times: ['1:00 PM', '4:45 PM', '8:30 PM'] },
      { brand: 'GSC', name: 'GSC Paradigm Mall JB', city: 'Johor Bahru', detail: 'Dolby 7.1 • Hall 2', times: ['10:45 AM', '3:15 PM', '7:50 PM'] }
    ]
  }),
  createEvent({
    id: 'dreams',
    title: 'In Your Dreams',
    date: 'Nov 20, 2025',
    dateKey: '2025-11-20',
    genre: 'Family',
    runtime: 90,
    poster: 'https://resizing.flixster.com/7L_BPWNG2tZ4geg2k0-dEJT4KKE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JlNGZjNDFjLTJiMDctNDQ1MS1iNTQ0LWQ0NGI3NTc1OWRjYy5qcGc=',
    description: 'Stevie and Elliot journey into the absurd landscape of their dreams to beg the Sandman for a perfect future.',
    vipPrice: 26,
    standardPrice: 16,
    cinemas: [
      { brand: 'Dadi', name: 'Dadi Pavilion KL', city: 'Kuala Lumpur', detail: 'Starmax • Couples pods', times: ['11:30 AM', '2:15 PM', '5:00 PM', '8:40 PM'] },
      { brand: 'TGV', name: 'TGV 1 Utama', city: 'Selangor', detail: 'Beanie hall • Hall 11', times: ['12:00 PM', '4:20 PM', '9:10 PM'] }
    ]
  }),
  createEvent({
    id: 'weapons',
    title: 'Weapons',
    date: 'Nov 21, 2025',
    genre: 'Thriller',
    runtime: '2 hours 8',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTBhNWJjZWItYzY3NS00M2NkLThmOWYtYTlmNzBmN2UxZWFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpghttps://preview.redd.it/official-poster-for-zach-creggers-weapons-v0-mqb9dknxwrxe1.jpeg?width=1080&crop=smart&auto=webp&s=0f66ff2caf7f953a46e3354994e9512fa2a9bc20',
    description: 'When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance.',
    vipPrice: 32,
    standardPrice: 19,
    cinemas: [
      { brand: 'TGV', name: 'TGV Sunway Pyramid', city: 'Selangor', detail: 'IMAX Laser • Hall 2', times: ['1:15 PM', '4:00 PM', '7:30 PM', '10:30 PM'] },
      { brand: 'GSC', name: 'GSC Setia City Mall', city: 'Shah Alam', detail: 'Dolby 7.1 • Hall 8', times: ['12:20 PM', '3:50 PM', '9:00 PM'] }
    ]
  }),
  createEvent({
    id: 'xmastale',
    title: 'A Merry Little Ex-Mas',
    date: 'Nov 22, 2025',
    genre: 'Comedy',
    runtime: '1 hour 31',
    poster: 'https://m.media-amazon.com/images/M/MV5BNjBlMTdiN2EtNzQ5MS00ODQ0LWI3NWUtYjdmMDU2N2Y4YWQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    description: 'A separated couple tries celebrating one last Christmas together with their kids before their divorce. However, the husband new girlfriend joins the festivities, causing tension and chaos during the holidays.',
    vipPrice: 24,
    standardPrice: 14,
    cinemas: [
      { brand: 'GSC', name: 'GSC Queensbay Mall', city: 'Penang', detail: 'Family hall • Hall 5', times: ['10:15 AM', '1:00 PM', '4:45 PM', '8:20 PM'] },
      { brand: 'mmCineplexes', name: 'mmCineplexes eCurve', city: 'Petaling Jaya', detail: 'Recliner zone', times: ['11:40 AM', '3:10 PM', '6:40 PM'] }
    ]
  }),
  createEvent({
    id: 'nowyouseeme',
    title: 'Now You See Me: Now You Don\'t',
    date: 'Nov 23, 2025',
    genre: 'Thriller',
    runtime: '1 hour 53',
    poster: 'https://m.media-amazon.com/images/M/MV5BODFmMmZlN2EtZDlhYi00MzgzLWFhY2ItNzcyODFjMjdkNjNlXkEyXkFqcGc@._V1_.jpg',
    description: 'A diamond heist reunites retired Horsemen illusionists with new performers Greenblatt, Smith and Sessa as they target dangerous criminals.',
    vipPrice: 33,
    standardPrice: 19,
    cinemas: [
      { brand: 'TGV', name: 'TGV Toppen JB', city: 'Johor Bahru', detail: '4DX • Hall 4', times: ['1:00 PM', '4:45 PM', '8:20 PM'] },
      { brand: 'GSC', name: 'GSC The Mall, Mid Valley Southkey', city: 'Johor Bahru', detail: 'BIG Screen', times: ['12:30 PM', '3:30 PM', '7:15 PM', '10:10 PM'] }
    ]
  }),
  createEvent({
    id: 'runningman',
    title: 'The Running Man',
    date: 'Nov 24, 2025',
    genre: 'Action',
    runtime: '2 hours 13',
    poster: 'https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/241290/TRM_Online_Payoff_Digital-Key-Art_Cast_Collage_06_FIN9.jpg',
    description: 'A man joins a game show in which contestants, allowed to go anywhere in the world, are pursued by "hunters" hired to kill them.',
    vipPrice: 31,
    standardPrice: 18,
    cinemas: [
      { brand: 'LFS', name: 'LFS City Square', city: 'Johor Bahru', detail: 'Hall 3 • 4K laser', times: ['11:20 AM', '2:00 PM', '5:40 PM', '9:25 PM'] },
      { brand: 'GSC', name: 'GSC IOI City Mall', city: 'Putrajaya', detail: 'D-Box • Hall 2', times: ['12:35 PM', '4:10 PM', '7:55 PM'] }
    ]
  }),
  createEvent({
    id: 'frankenstein',
    title: 'Frankenstein (2025)',
    date: 'Nov 25, 2025',
    genre: 'Horror',
    runtime: '2 hours 29',
    poster: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/243/2025/10/15084433/5fqmZYw3o22VoJpXx9bjQuc7ZPV.jpg',
    description: 'Dr. Victor Frankenstein, a brilliant but egotistical scientist, brings a creature to life in a monstrous experiment that ultimately leads to the undoing of both the creator and his tragic creation.',
    vipPrice: 30,
    standardPrice: 17,
    cinemas: [
      { brand: 'GSC', name: 'GSC Tropicana Gardens', city: 'Petaling Jaya', detail: 'Atmos • Hall 9', times: ['9:45 PM', '11:55 PM'] },
      { brand: 'TGV', name: 'TGV Bukit Raja', city: 'Klang', detail: 'XL hall • Vibrating seats', times: ['10:30 AM', '1:50 PM', '5:20 PM', '8:45 PM'] }
    ]
  }),
  createEvent({
    id: 'diemylove',
    title: 'Die My Love',
    date: 'Nov 26, 2025',
    genre: 'Thriller',
    runtime: '1 hour 59',
    poster: 'https://m.media-amazon.com/images/M/MV5BYjc5OWZlZmYtMTg3Yy00YzFmLTg0YTgtNjVjN2M2ZWJjOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    description: 'Grace, a writer and young mother, is slowly slipping into madness. Locked away in an old house in and around Montana, we see her acting increasingly agitated and erratic, leaving her companion, Jackson, increasingly worried and helpless.',
    vipPrice: 27,
    standardPrice: 15,
    cinemas: [
      { brand: 'mmCineplexes', name: 'mmCineplexes Mahkota Parade', city: 'Melaka', detail: 'Hall 1 • THX', times: ['1:40 PM', '5:10 PM', '8:40 PM'] },
      { brand: 'GSC', name: 'GSC Melawati Mall', city: 'Ampang', detail: 'Snuggle seats', times: ['12:00 PM', '3:30 PM', '7:00 PM'] }
    ]
  }),
  createEvent({
    id: 'goodfortune',
    title: 'Good Fortune',
    date: 'Nov 27, 2025',
    genre: 'Comedy',
    runtime: '1 hour 37',
    poster: 'https://m.media-amazon.com/images/M/MV5BYjk3ZTgwZmUtOTVlMy00ODExLTkzMTUtYzRhM2FjNGYyMzZkXkEyXkFqcGc@._V1_.jpg',
    description: 'A well-meaning but rather inept angel named Gabriel meddles in the lives of a struggling gig worker and a wealthy venture capitalist.',
    vipPrice: 22,
    standardPrice: 13,
    cinemas: [
      { brand: 'GSC', name: 'GSC The Starling', city: 'Petaling Jaya', detail: 'PlayPlus • Family pods', times: ['10:00 AM', '12:30 PM', '3:00 PM', '6:30 PM'] },
      { brand: 'MBO', name: 'MBO Falim Ipoh', city: 'Ipoh', detail: 'Premier seats', times: ['11:15 AM', '2:45 PM', '5:30 PM', '9:00 PM'] }
    ]
  })
];

function createEvent(config){
  const rows = layout.length;
  const cols = Math.max(...layout);
  const priceMap = {};
  for(let r=0;r<rows;r++){
    const seatsInRow = layout[r];
    for(let c=0;c<seatsInRow;c++){
      const key = `${r}-${c}`;
      priceMap[key] = (r<2) ? vipPrice : standardPrice;
    }
  }
}

const soldSeatsSeed = {
  materialists: ['0-1','1-4','3-2'],
  wicked: ['0-3','5-5'],
  dreams: ['2-6','4-1'],
  weapons: ['1-1','1-2','2-2'],
  xmastale: ['0-0','3-5'],
  nowyouseeme: ['2-3','2-4','3-4'],
  runningman: ['4-6','5-2'],
  frankenstein: ['0-5','1-5','4-4'],
  diemylove: ['3-1'],
  goodfortune: ['2-0','2-1']
};

const soldSeats = EVENTS.reduce((acc,event)=>{
  acc[event.id] = new Set(soldSeatsSeed[event.id] || []);
  return acc;
}, {});

const STATE = {
  events: EVENTS,
  currentEvent: EVENTS[0],
  selected: [],
  filters: { genres: new Set(), date:'all', cinema:'all' },
  selectedCinema: null,
  selectedTime: null
};

function qs(sel){return document.querySelector(sel)}
function qsa(sel){return Array.from(document.querySelectorAll(sel))}

// theme
const themeToggle = qs('#themeToggle');
const root = document.documentElement;
let theme = localStorage.getItem('tb_theme') || 'light';
function applyTheme(){
  if(theme==='dark'){root.setAttribute('data-theme','dark'); themeToggle.textContent='Light'}
  else {root.removeAttribute('data-theme'); themeToggle.textContent='Dark'}
}
themeToggle?.addEventListener('click',()=>{ theme = theme==='dark'?'light':'dark'; localStorage.setItem('tb_theme',theme); applyTheme();});
applyTheme();

// ui refs
const seatPoster = qs('#seatPoster');
const seatTag = qs('#seatTag');
const seatTitle = qs('#seatTitle');
const seatDetail = qs('#seatDetail');
const seatSchedule = qs('#seatSchedule');
const summaryEvent = qs('#summaryEvent');
const summarySchedule = qs('#summarySchedule');
const schedulePoster = qs('#schedulePoster');
const scheduleGenre = qs('#scheduleGenre');
const scheduleTitle = qs('#scheduleTitle');
const scheduleDetail = qs('#scheduleDetail');
const eventsGrid = qs('#eventsGrid');
const scheduleView = qs('#scheduleView');
const cinemaList = qs('#cinemaList');
const goToSeatsBtn = qs('#goToSeats');
const filterDate = qs('#filterDate');
const filterCinema = qs('#filterCinema');
const genreFilterList = qs('#genreFilterList');
const resultsCount = qs('#resultsCount');
const selectedSeatsList = qs('#selectedSeatsList');
const selectionNotice = qs('#selectionNotice');
const resetFiltersBtn = qs('#resetFilters');
const clearDateBtn = qs('#clearDate');
const scrollTopBtn = qs('#scrollTopBtn');
const backPageBtn = qs('#backPageBtn');

// views
const eventsView = qs('#eventsView');
const scheduleViewRef = scheduleView;
const seatsView = qs('#seatsView');
const checkoutView = qs('#checkoutView');
const confirmView = qs('#confirmView');

function showView(v){ [eventsView,scheduleViewRef,seatsView,checkoutView,confirmView].forEach(s=>s.classList.add('hidden')); v.classList.remove('hidden'); }

// Remove all filter logic and always show all movies
function renderEventsGrid() {
  if (!eventsGrid) return;
  eventsGrid.innerHTML = '';
  STATE.events.forEach(evt => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <img src="${evt.poster}" alt="${evt.title} poster" class="event-poster" loading="lazy" style="width:100%;max-width:180px;border-radius:10px;">
      <h3>${evt.title}</h3>
      <p class="muted">${evt.genre} • ${evt.date}</p>
      <p>${evt.description}</p>
      <button class="selectSeatsBtn" data-id="${evt.id}">Select Seats</button>
    `;
    eventsGrid.appendChild(card);
  });
  // Update results count
  if (resultsCount) resultsCount.textContent = `${STATE.events.length} titles`;
  // Add click handlers
  eventsGrid.querySelectorAll('.selectSeatsBtn').forEach(btn => {
    btn.addEventListener('click', e => {
      setCurrentEvent(btn.dataset.id);
      showView(scheduleViewRef);
    });
  });
}

function setCurrentEvent(eventId){
  const next = STATE.events.find(evt=> evt.id === eventId) || STATE.currentEvent;
  STATE.currentEvent = next;
  STATE.selected = [];
  updateEventDetails();
  renderSeats();
}

function updateEventDetails(){
  const event = STATE.currentEvent;
  if(!event) return;
  const meta = `${event.venue} • ${event.date}`;
  const scheduleText = getScheduleText();
  if(seatPoster){
    seatPoster.src = event.poster;
    seatPoster.alt = `${event.title} poster`;
  }
  if(schedulePoster){
    schedulePoster.src = event.poster;
    schedulePoster.alt = `${event.title} poster`;
  }
  const genreLine = `${event.genre} • ${event.runtime} min`;
  if(seatTag) seatTag.textContent = genreLine;
  if(scheduleGenre) scheduleGenre.textContent = genreLine;
  if(scheduleTitle) scheduleTitle.textContent = `${event.title}`;
  if(seatTitle) seatTitle.textContent = `${event.title}`;
  if(seatDetail) seatDetail.textContent = meta;
  if(scheduleDetail) scheduleDetail.textContent = meta;
  if(summaryEvent) summaryEvent.textContent = event.title;
  if(seatSchedule) seatSchedule.textContent = scheduleText;
  if(summarySchedule) summarySchedule.textContent = scheduleText;
}

function getScheduleText(){
  return (STATE.selectedCinema && STATE.selectedTime)
    ? `${STATE.selectedCinema.name} • ${STATE.selectedTime}`
    : 'Select cinema & showtime to continue';
}

function seatLabelFromKey(key){
  const [row,col] = key.split('-').map(Number);
  const rowLabel = String.fromCharCode(65 + row);
  return `${rowLabel}${col+1}`;
}

function renderSelectedSeatChips(){
  if(!selectedSeatsList) return;
  if(!STATE.selected.length){
    selectedSeatsList.innerHTML = '';
    if(selectionNotice) selectionNotice.textContent = 'Pick any seat to begin.';
    return;
  }
  const labels = STATE.selected.slice().sort((a,b)=> a.localeCompare(b)).map(seatLabelFromKey);
  selectedSeatsList.innerHTML = labels.map(label=> `<span class="seat-chip">${label}</span>`).join('');
  if(selectionNotice) selectionNotice.textContent = 'Great picks! Continue to checkout when ready.';
}

// events rendering & filters
function matchesFilters(event){
  const { genres, date, cinema } = STATE.filters;
  if(genres.size && !genres.has(event.genre)) return false;
  if(cinema !== 'all' && !event.cinemas.some(c=> c.name === cinema)) return false;
  return true;
}

function renderEvents(){
  if(!eventsGrid) return;
  eventsGrid.innerHTML = '';
  const filtered = STATE.events.filter(matchesFilters);
  updateResultsCount(filtered.length);
  if(!filtered.length){
    eventsGrid.innerHTML = `<div class="no-results">No shows match the selected filters.</div>`;
    return;
  }
  filtered.forEach(event=>{
    const card = document.createElement('article');
    card.className = 'event-card';
    card.dataset.event = event.id;
    const highlightTimes = event.cinemas.flatMap(c=> c.times).slice(0,3);
    const tags = highlightTimes.length ? highlightTimes : ['More times available'];
    card.innerHTML = `
      <div class="event-hero">
        <img src="${event.poster}" alt="${event.title} poster" loading="lazy">
        <span class="badge">${event.genre}</span>
      </div>
      <div class="event-info">
        <h3>${event.title}</h3>
        <div class="event-meta">
          <span class="meta-chip">${event.runtime} min</span>
          <span>${event.venue}</span>
          <span>${event.date}</span>
        </div>
        <p class="muted">${event.description}</p>
        <div class="showtime-tags">
          ${tags.map(t=> `<span>${t}</span>`).join('')}
        </div>
        <div class="event-actions">
          <button class="selectSeatsBtn">Plan session</button>
        </div>
      </div>
    `;
    eventsGrid.appendChild(card);
  });
}

function updateResultsCount(count){
  if(resultsCount){
    const label = count === 1 ? 'title' : 'titles';
    resultsCount.textContent = `${count} ${label}`;
  }
}

function populateFilterOptions(){
  const genreValues = Array.from(new Set(STATE.events.map(evt=> evt.genre))).sort();
  if(genreFilterList){
    const pills = ['all', ...genreValues];
    genreFilterList.innerHTML = pills.map(genre=>{
      const isActive = genre === 'all' ? STATE.filters.genres.size===0 : STATE.filters.genres.has(genre);
      return `<button type="button" class="genre-pill ${isActive?'active':''}" data-genre="${genre}">${genre==='all'?'All genres':genre}</button>`;
    }).join('');
  }
  if(filterDate){
    filterDate.value = STATE.filters.date === 'all' ? '' : STATE.filters.date;
  }
  if(filterCinema){
    const cinemaValues = Array.from(new Set(STATE.events.flatMap(evt=> evt.cinemas.map(c=> c.name)))).sort();
    filterCinema.innerHTML = ['all', ...cinemaValues].map(c=> `<option value="${c}">${c==='all'?'All cinemas':c}</option>`).join('');
    filterCinema.value = STATE.filters.cinema;
  }
}

eventsGrid?.addEventListener('click', e=>{
  const btn = e.target.closest('.selectSeatsBtn');
  if(!btn) return;
  const card = btn.closest('.event-card');
  if(!card) return;
  openSchedule(card.dataset.event);
});

genreFilterList?.addEventListener('click', e=>{
  const pill = e.target.closest('.genre-pill');
  if(!pill) return;
  const genre = pill.dataset.genre;
  if(genre === 'all'){
    STATE.filters.genres.clear();
  } else {
    if(STATE.filters.genres.has(genre)) STATE.filters.genres.delete(genre);
    else STATE.filters.genres.add(genre);
  }
  renderEvents();
  populateFilterOptions();
});

filterDate?.addEventListener('change', e=>{
  STATE.filters.date = e.target.value || 'all';
  renderEvents();
});

clearDateBtn?.addEventListener('click', ()=>{
  STATE.filters.date = 'all';
  if(filterDate) filterDate.value = '';
  renderEvents();
});

filterCinema?.addEventListener('change', e=>{
  STATE.filters.cinema = e.target.value;
  renderEvents();
});

resetFiltersBtn?.addEventListener('click', ()=>{
  STATE.filters.genres.clear();
  STATE.filters.date = 'all';
  STATE.filters.cinema = 'all';
  if(filterDate) filterDate.value = '';
  if(filterCinema) filterCinema.value = 'all';
  renderEvents();
  populateFilterOptions();
  renderEventsGrid();
});

function openSchedule(eventId){
  setCurrentEvent(eventId);
  STATE.selected = [];
  STATE.selectedCinema = null;
  STATE.selectedTime = null;
  updateEventDetails();
  renderCinemaOptions();
  renderSeats();
  updateSummary();
  showView(scheduleViewRef);
}

function renderCinemaOptions(){
  const event = STATE.currentEvent;
  if(!event || !cinemaList) return;
  cinemaList.innerHTML = '';
  if(!event.cinemas.length){
    cinemaList.innerHTML = `<p class="muted no-results">No Malaysian cinemas scheduled yet.</p>`;
    if(goToSeatsBtn) goToSeatsBtn.disabled = true;
    return;
  }
  event.cinemas.forEach(cinema=>{
    const card = document.createElement('article');
    card.className = 'cinema-card';
    const badge = `<span class="cinema-badge">${cinema.brand}</span>`;
    const buttons = cinema.times.map(time=>{
      const active = STATE.selectedCinema?.name === cinema.name && STATE.selectedTime === time;
      return `<button class="showtime-btn ${active?'active':''}" data-cinema="${cinema.name}" data-time="${time}">${time}</button>`;
    }).join('');
    card.innerHTML = `
      <header>
        <div>
          <h3>${cinema.name}</h3>
          <p>${cinema.city} • ${cinema.detail}</p>
        </div>
        ${badge}
      </header>
      <div class="showtimes">${buttons}</div>
    `;
    cinemaList.appendChild(card);
  });
  if(goToSeatsBtn){
    goToSeatsBtn.disabled = !(STATE.selectedCinema && STATE.selectedTime);
  }
}

cinemaList?.addEventListener('click', e=>{
  const btn = e.target.closest('.showtime-btn');
  if(!btn) return;
  selectShowtime(btn.dataset.cinema, btn.dataset.time);
});

function selectShowtime(cinemaName,time){
  const event = STATE.currentEvent;
  if(!event) return;
  const cinema = event.cinemas.find(c=> c.name === cinemaName);
  if(!cinema) return;
  STATE.selectedCinema = cinema;
  STATE.selectedTime = time;
  STATE.selected = [];
  renderCinemaOptions();
  renderSeats();
  updateSummary();
  updateEventDetails();
}

goToSeatsBtn?.addEventListener('click', ()=>{
  if(!(STATE.selectedCinema && STATE.selectedTime)) return;
  renderSeats();
  updateSummary();
  showView(seatsView);
});

qsa('.backBtn').forEach(btn=> btn.addEventListener('click',()=>{
  const target = btn.dataset.back;
  if(target === 'schedule'){
    renderCinemaOptions();
    showView(scheduleViewRef);
  } else if(target === 'seats'){
    showView(seatsView);
  } else {
    showView(eventsView);
  }
}));

function currentVisibleView(){
  if(!eventsView.classList.contains('hidden')) return 'events';
  if(!scheduleViewRef.classList.contains('hidden')) return 'schedule';
  if(!seatsView.classList.contains('hidden')) return 'seats';
  if(!checkoutView.classList.contains('hidden')) return 'checkout';
  if(!confirmView.classList.contains('hidden')) return 'confirm';
  return 'events';
}

backPageBtn?.addEventListener('click', ()=>{
  const view = currentVisibleView();
  if(view === 'schedule') showView(eventsView);
  else if(view === 'seats') showView(scheduleViewRef);
  else if(view === 'checkout') showView(seatsView);
  else if(view === 'confirm') showView(eventsView);
  else if(history.length > 1) history.back();
});

scrollTopBtn?.addEventListener('click', ()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function handleScrollTopButton(){
  if(!scrollTopBtn) return;
  if(window.scrollY > 400) scrollTopBtn.classList.add('visible');
  else scrollTopBtn.classList.remove('visible');
}

window.addEventListener('scroll', handleScrollTopButton);
handleScrollTopButton();

// seat rendering
function renderSeats(){
  const event = STATE.currentEvent;
  if(!event) return;
  const map = qs('#seatMap'); 
  map.innerHTML='';
  const layout = event.layout || DEFAULT_LAYOUT;
  const eventSold = soldSeats[event.id] || (soldSeats[event.id] = new Set());
  layout.forEach((seatCount,r)=>{
    const rowEl = document.createElement('div');
    rowEl.className = 'seat-row';
    const label = document.createElement('div');
    label.className = 'seat-row-label';
    label.textContent = (r+1);
    rowEl.appendChild(label);

    const seatsWrap = document.createElement('div');
    seatsWrap.className = 'seat-row-seats';

    for(let c=0;c<seatCount;c++){
      const key = `${r}-${c}`;
      const seat = document.createElement('div'); 
      seat.className='seat'; 
      seat.dataset.key=key; 
      seat.title=`Row ${r+1} Seat ${c+1} — $${event.priceMap[key]||0}`;
      if(eventSold.has(key)) {
        seat.classList.add('sold');
      } else {
        seat.classList.add('available');
        if(STATE.selected.includes(key)) seat.classList.add('selected');
        seat.addEventListener('click', ()=> onSeatClick(seat));
      }
      seat.textContent = (c+1);
      seatsWrap.appendChild(seat);
    }
    rowEl.appendChild(seatsWrap);
    map.appendChild(rowEl);
  });
  updateSummary();
}

function onSeatClick(el){
  const key = el.dataset.key;
  if(el.classList.contains('sold')) return;
  if(el.classList.contains('selected')){
    el.classList.remove('selected');
    STATE.selected = STATE.selected.filter(s=>s!==key);
  } else {
    el.classList.add('selected');
    STATE.selected.push(key);
  }
  updateSummary();
}

function updateSummary(){
  const event = STATE.currentEvent;
  if(!event) return;
  const count = STATE.selected.length;
  const total = STATE.selected.reduce((sum,k)=> sum + (event.priceMap[k]||0), 0);
  qs('#selectedCount').textContent = count;
  qs('#totalPrice').textContent = total;
  qs('#proceedBtn').disabled = count===0;
  if(summaryEvent) summaryEvent.textContent = event.title;
  qs('#summarySeats').textContent = count;
  qs('#summaryTotal').textContent = total;
  if(summarySchedule) summarySchedule.textContent = getScheduleText();
  renderSelectedSeatChips();
}

qs('#proceedBtn')?.addEventListener('click', ()=>{
  updateSummary();
  showView(checkoutView);
});

// checkout
qs('#checkoutForm')?.addEventListener('submit', e=>{
  e.preventDefault();
  const f = e.target; 
  const name = f.name.value.trim(); 
  const email = f.email.value.trim();
  const event = STATE.currentEvent;
  if(!event || !STATE.selectedCinema || !STATE.selectedTime) return;
  const selectedSeats = STATE.selected.slice();
  const total = selectedSeats.reduce((s,k)=> s+event.priceMap[k],0);
  const booking = { 
    id: Date.now(), 
    name, 
    email, 
    seats: selectedSeats, 
    total,
    eventId: event.id,
    eventTitle: event.title,
    date: event.date,
    cinema: STATE.selectedCinema.name,
    time: STATE.selectedTime
  };
  // save booking
  const bookings = JSON.parse(localStorage.getItem('tb_bookings')||'[]'); bookings.push(booking); localStorage.setItem('tb_bookings', JSON.stringify(bookings));
  // mark seats as sold
  const eventSold = soldSeats[event.id] || (soldSeats[event.id] = new Set());
  selectedSeats.forEach(k=> eventSold.add(k));
  // clear selection
  STATE.selected = [];
  renderSeats();
  qs('#confirmMessage').textContent = `Thanks ${name}! ${selectedSeats.length} seats for ${event.title} at ${STATE.selectedCinema.name} on ${event.date} (${STATE.selectedTime}) are reserved.`;
  showView(confirmView);
});

qs('#doneBtn')?.addEventListener('click', ()=> showView(eventsView));

// initial render
populateFilterOptions();
renderEvents();
setCurrentEvent(STATE.currentEvent?.id || EVENTS[0]?.id);
showView(eventsView);

// expose for debug
window.TB = { STATE, soldSeats };

document.addEventListener('DOMContentLoaded', function() {
  renderEventsGrid();
  showView(eventsView);
});
