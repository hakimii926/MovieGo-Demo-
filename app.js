// Minimal SPA logic for ticket booking demo
// Simple 10x10-style layout: 10 rows, 10 seats each for easy viewing
const DEFAULT_LAYOUT = [10,10,10,10,10,10,10,10,10,10];

const EVENTS = [
  createEvent({
    id: 'materialists',
    title: 'Materialists',
    venue: 'GSC Pavilion Elite',
    date: 'Nov 18, 2025',
    dateValue: '2025-11-18',
    genre: 'Drama',
    runtime: '1 hour 56 mins',
    poster: 'https://image.tmdb.org/t/p/original/1kmWUMfGBH0HZs7h7DLMWRnPdgQ.jpg',
    description: 'An ambitious young New York City matchmaker finds herself torn between the perfect match and her imperfect ex.',
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
    venue: 'Istana Budaya Cinema',
    date: 'Nov 19, 2025',
    dateValue: '2025-11-19',
    genre: 'Fantasy',
    runtime: '2 hours 18 mins',
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
    venue: 'Dadi Pavilion Bukit Bintang',
    date: 'Nov 20, 2025',
    dateValue: '2025-11-20',
    genre: 'Family',
    runtime: '1 hour 30 mins',
    poster: 'https://resizing.flixster.com/7L_BPWNG2tZ4geg2k0-dEJT4KKE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JlNGZjNDFjLTJiMDctNDQ1MS1iNTQ0LWQ0NGI3NTc1OWRjYy5qcGc=',
    description: 'Stevie and her little brother Elliot journey into the wildly absurd landscape of their own dreams to ask the Sandman to grant them the perfect family.',
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
    venue: 'TGV Sunway Pyramid',
    date: 'Nov 21, 2025',
    dateValue: '2025-11-21',
    genre: 'Thriller',
    runtime: '2 hours 8 mins',
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
    venue: 'GSC Queensbay Mall',
    date: 'Nov 22, 2025',
    dateValue: '2025-11-22',
    genre: 'Comedy',
    runtime: '1 hour 31 mins',
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
    venue: 'TGV Toppen',
    date: 'Nov 23, 2025',
    dateValue: '2025-11-23',
    genre: 'Thriller',
    runtime: '1 hour 53 mins',
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
    venue: 'LFS City Square',
    date: 'Nov 24, 2025',
    dateValue: '2025-11-24',
    genre: 'Action',
    runtime: '2 hours 13 mins',
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
    id: 'jurassicworld',
    title: 'Jurassic World: Rebirth',
    venue: 'TGV Toppen',
    date: 'Nov 25, 2025',
    dateValue: '2025-11-25',
    genre: 'Action',
    runtime: '2 hours 13 mins',
    poster: 'https://lh5.googleusercontent.com/proxy/3LVXasBR6aoc_WGSyCJreDanLjX9BkxvHQmw3Dx9XMD1x2NblK08KH2RSaqWOpnojelzhj3DM1lM65nZbWP3tjsLj-rnwPEaDY0P_xqfm-fKysCjzPP53g',
    description: 'Five years post-Jurassic World: Dominion (2022), an expedition braves isolated equatorial regions to extract DNA from three massive prehistoric creatures for a groundbreaking medical breakthrough.',
    vipPrice: 25,
    standardPrice: 15,
    cinemas: [
      { brand: 'GSC', name: 'GSC Tropicana Gardens', city: 'Petaling Jaya', detail: 'Atmos • Hall 9', times: ['9:45 PM', '11:55 PM'] },
      { brand: 'TGV', name: 'TGV Bukit Raja', city: 'Klang', detail: 'XL hall • Vibrating seats', times: ['10:30 AM', '1:50 PM', '5:20 PM', '8:45 PM'] }
    ]
  }),
  createEvent({
    id: 'frankenstein',
    title: 'Frankenstein (2025)',
    venue: 'GSC Tropicana Gardens',
    date: 'Nov 26, 2025',
    dateValue: '2025-11-26',
    genre: 'Horror',
    runtime: '2 hours 59 mins',
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
    venue: 'mmCineplexes Mahkota Parade',
    date: 'Nov 27, 2025',
    dateValue: '2025-11-27',
    genre: 'Thriller',
    runtime: '1 hour 59 mins',
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
    id: 'thefantasyfour',
    title: 'The Fantastic Four: First Steps',
    venue: 'LFS City Square',
    date: 'Nov 28, 2025',
    dateValue: '2025-11-28',
    genre: 'Action',
    runtime: '1 hours 55 mins',
    poster: 'https://lh4.googleusercontent.com/proxy/dt2QU8xonJQGH4k3YRJP2ayREndA3ueMxeEFG_g6k_PupqSkuevFwOTnbBRcKaOR14OdqYfjx1mjvAhKysdygj-Sqts3jfKWHnmd2JYDZjn1',
    description: 'Forced to balance their roles as heroes with the strength of their family bond, the Fantastic Four must defend Earth from a ravenous space god called Galactus and his enigmatic herald, the Silver Surfer.',
    vipPrice: 28,
    standardPrice: 18,
    cinemas: [
      { brand: 'LFS', name: 'LFS City Square', city: 'Johor Bahru', detail: 'Hall 3 • 4K laser', times: ['11:20 AM', '2:00 PM', '5:40 PM', '9:25 PM'] },
      { brand: 'GSC', name: 'GSC IOI City Mall', city: 'Putrajaya', detail: 'D-Box • Hall 2', times: ['12:35 PM', '4:10 PM', '7:55 PM'] }
    ]
  }),
  createEvent({
    id: 'goodfortune',
    title: 'Good Fortune',
    venue: 'GSC The Starling',
    date: 'Nov 29, 2025',
    dateValue: '2025-11-29',
    genre: 'Comedy',
    runtime: '1 hour 37 mins',
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
  const { id, title, venue, date, dateValue, genre, runtime=120, poster, description, layout=DEFAULT_LAYOUT, vipPrice=30, standardPrice=15, cinemas=[] } = config;
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
  return { id, title, venue, date, dateValue, genre, runtime, poster, description, layout, rows, cols, priceMap, cinemas };
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

// --- Simple SPA wiring for homepage + schedule view ---
const appState = {
  selectedEvent: null,
  selectedGenre: 'all',
  filterCinema: 'all',
  selectedCinema: null,
  selectedTime: null,
  selectedSeats: [],
};

function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => {
    if (v.id === viewId) {
      v.classList.remove('hidden');
    } else {
      v.classList.add('hidden');
    }
  });
}

function getFilteredEvents(){
  return EVENTS.filter(ev => {
    if (appState.selectedGenre !== 'all' && ev.genre !== appState.selectedGenre) {
      return false;
    }
    if (appState.filterCinema !== 'all') {
      const hasCinema = ev.cinemas.some(
        c => c.city === 'Kuala Lumpur' && c.name === appState.filterCinema
      );
      if (!hasCinema) return false;
    }
    return true;
  });
}

function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  const resultsCount = document.getElementById('resultsCount');
  if (!grid) return;

  grid.innerHTML = '';

  const data = getFilteredEvents();

  data.forEach(event => {
    const card = document.createElement('article');
    card.className = 'event-card';
    const primaryCinema = event.cinemas[0];
    const sampleTimes = primaryCinema ? primaryCinema.times.slice(0, 3) : [];

    card.innerHTML = `
      <div class="event-hero">
        <img src="${event.poster}" alt="${event.title} poster">
        <span class="badge">${event.genre}</span>
      </div>
      <div class="event-info">
        <h3>${event.title}</h3>
        <div class="event-meta">
          <span>${event.date}</span>
          <span>${event.venue}</span>
          <span class="meta-chip">${event.runtime}</span>
        </div>
        <p class="muted">${event.description}</p>
        ${sampleTimes.length ? `
        <div class="showtime-tags">
          ${sampleTimes.map(t => `<span>${t}</span>`).join('')}
        </div>` : ''}
        <div class="event-actions">
          <button type="button" class="selectShowtimeBtn" data-event-id="${event.id}">
            Booking the seat
          </button>
        </div>
      </div>
    `;

    const btn = card.querySelector('.selectShowtimeBtn');
    if (btn) {
      btn.addEventListener('click', () => openSchedule(event.id));
    }

    grid.appendChild(card);
  });

  if (resultsCount) {
    resultsCount.textContent = `${data.length} titles`;
  }
}

function renderGenreFilters(){
  const container = document.getElementById('genreFilterList');
  if (!container) return;

  const genres = Array.from(new Set(EVENTS.map(e => e.genre)));
  container.innerHTML = '';

  const allBtn = document.createElement('button');
  allBtn.type = 'button';
  allBtn.className = 'genre-pill' + (appState.selectedGenre === 'all' ? ' active' : '');
  allBtn.textContent = 'All';
  allBtn.addEventListener('click', () => {
    appState.selectedGenre = 'all';
    renderGenreFilters();
    renderEvents();
  });
  container.appendChild(allBtn);

  genres.forEach(genre => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'genre-pill' + (appState.selectedGenre === genre ? ' active' : '');
    btn.textContent = genre;
    btn.addEventListener('click', () => {
      appState.selectedGenre = genre;
      renderGenreFilters();
      renderEvents();
    });
    container.appendChild(btn);
  });
}

function renderCinemaFilter(){
  const select = document.getElementById('filterCinema');
  if (!select) return;

  // Collect unique KL cinema names
  const klNames = new Set();
  EVENTS.forEach(ev => {
    ev.cinemas.forEach(c => {
      if (c.city === 'Kuala Lumpur') {
        klNames.add(c.name);
      }
    });
  });

  const names = Array.from(klNames);
  select.innerHTML = '';

  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = names.length ? 'All KL cinemas' : 'No KL cinemas in demo';
  select.appendChild(allOption);

  names.forEach(name => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  });

  select.value = appState.filterCinema;

  select.addEventListener('change', () => {
    appState.filterCinema = select.value;
    renderEvents();
  });
}

function openSchedule(eventId) {
  const event = EVENTS.find(e => e.id === eventId);
  if (!event) return;
  appState.selectedEvent = event;
  appState.selectedCinema = null;
  appState.selectedTime = null;
  appState.selectedSeats = [];

  const poster = document.getElementById('schedulePoster');
  const genre = document.getElementById('scheduleGenre');
  const title = document.getElementById('scheduleTitle');
  const detail = document.getElementById('scheduleDetail');
  const cinemaList = document.getElementById('cinemaList');

  if (poster) poster.src = event.poster;
  if (genre) genre.textContent = event.genre;
  if (title) title.textContent = event.title;
  if (detail) {
    detail.textContent = `${event.date} • ${event.venue} • ${event.runtime}`;
  }

  if (cinemaList) {
    cinemaList.innerHTML = '';

    // Show only Kuala Lumpur cinemas for this demo; if none, show a friendly message
    const klCinemas = event.cinemas.filter(c => c.city === 'Kuala Lumpur');
    if (!klCinemas.length) {
      const emptyMsg = document.createElement('p');
      emptyMsg.className = 'muted subtle';
      emptyMsg.textContent = 'No Kuala Lumpur cinemas available for this title in this demo.';
      cinemaList.appendChild(emptyMsg);
      return;
    }

    klCinemas.forEach(cinema => {
      const card = document.createElement('article');
      card.className = 'cinema-card';
      card.innerHTML = `
        <header>
          <div>
            <span class="cinema-badge">${cinema.brand}</span>
            <h3>${cinema.name}</h3>
            <p>${cinema.city}</p>
            <p class="muted subtle">${cinema.detail}</p>
          </div>
        </header>
        <div class="showtimes">
          ${cinema.times.map(t => `<button type="button" class="showtime-btn" data-cinema="${cinema.name}" data-time="${t}">${t}</button>`).join('')}
        </div>
      `;

      const btns = card.querySelectorAll('.showtime-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const time = e.currentTarget.getAttribute('data-time');
          const cinemaName = e.currentTarget.getAttribute('data-cinema');
          appState.selectedCinema = cinemaName;
          appState.selectedTime = time;

          // remove active from all buttons in this list
          card.querySelectorAll('.showtime-btn').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');

          const goToSeats = document.getElementById('goToSeats');
          if (goToSeats) {
            goToSeats.disabled = false;
          }
        });
      });

      cinemaList.appendChild(card);
    });
  }

  showView('scheduleView');
}

function getRowLabel(index){
  // 0 -> A, 1 -> B, etc.
  return String.fromCharCode(65 + index);
}

function updateSelectionSummary(){
  const event = appState.selectedEvent;
  const listEl = document.getElementById('selectedSeatsList');
  const countEl = document.getElementById('selectedCount');
  const totalEl = document.getElementById('totalPrice');
  const noticeEl = document.getElementById('selectionNotice');
  const proceedBtn = document.getElementById('proceedBtn');

  if (!event) return;

  const selections = appState.selectedSeats || [];
  if (listEl) {
    listEl.innerHTML = '';
    selections.forEach(key => {
      const [r, c] = key.split('-').map(Number);
      const chip = document.createElement('span');
      chip.className = 'seat-chip';
      chip.textContent = `${getRowLabel(r)}${c + 1}`;
      listEl.appendChild(chip);
    });
  }

  const count = selections.length;
  const total = selections.reduce((sum, key) => sum + (event.priceMap[key] || 0), 0);

  if (countEl) countEl.textContent = String(count);
  if (totalEl) totalEl.textContent = String(total);
  if (noticeEl) {
    noticeEl.textContent = count
      ? 'Great choice — you can adjust seats before checkout.'
      : 'Pick any seat to begin.';
  }
  if (proceedBtn) {
    proceedBtn.disabled = count === 0;
  }
}

function renderSeatMap(){
  const event = appState.selectedEvent;
  const map = document.getElementById('seatMap');
  if (!event || !map) return;

  map.innerHTML = '';
  appState.selectedSeats = [];

  const soldSet = new Set(soldSeatsSeed[event.id] || []);

  for (let r = 0; r < event.rows; r++) {
    const rowEl = document.createElement('div');
    rowEl.className = 'seat-row';

    const labelEl = document.createElement('div');
    labelEl.className = 'seat-row-label';
    labelEl.textContent = getRowLabel(r);

    const seatsContainer = document.createElement('div');
    seatsContainer.className = 'seat-row-seats';

    const seatsInRow = event.layout[r];
    for (let c = 0; c < seatsInRow; c++) {
      const key = `${r}-${c}`;
      const seatEl = document.createElement('div');
      seatEl.className = 'seat';
      seatEl.textContent = String(c + 1);

      if (soldSet.has(key)) {
        seatEl.classList.add('sold');
      } else {
        seatEl.classList.add('available');
        seatEl.addEventListener('click', () => {
          if (seatEl.classList.contains('sold')) return;

          const idx = appState.selectedSeats.indexOf(key);
          if (idx >= 0) {
            appState.selectedSeats.splice(idx, 1);
            seatEl.classList.remove('selected');
          } else {
            appState.selectedSeats.push(key);
            seatEl.classList.add('selected');
          }
          updateSelectionSummary();
        });
      }

      seatsContainer.appendChild(seatEl);
    }

    rowEl.appendChild(labelEl);
    rowEl.appendChild(seatsContainer);
    map.appendChild(rowEl);
  }

  updateSelectionSummary();
}

function goToCheckout(){
  const event = appState.selectedEvent;
  const seats = appState.selectedSeats || [];
  if (!event || !seats.length) return;

  const summaryEvent = document.getElementById('summaryEvent');
  const summarySeats = document.getElementById('summarySeats');
  const summaryTotal = document.getElementById('summaryTotal');
  const summarySchedule = document.getElementById('summarySchedule');

  const total = seats.reduce((sum, key) => sum + (event.priceMap[key] || 0), 0);

  if (summaryEvent) summaryEvent.textContent = event.title;
  if (summarySeats) summarySeats.textContent = String(seats.length);
  if (summaryTotal) summaryTotal.textContent = String(total);
  if (summarySchedule) {
    const when = appState.selectedTime ? ` • ${appState.selectedTime}` : '';
    const where = appState.selectedCinema || event.venue;
    summarySchedule.textContent = `${where}${when}`;
  }

  showView('checkoutView');
}

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle (optional nicety)
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
      themeToggle.textContent = isDark ? 'Dark' : 'Light';
    });
  }

  // Back buttons between views
  document.querySelectorAll('.backBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const backTo = target.getAttribute('data-back');
      if (backTo === 'events') showView('eventsView');
      if (backTo === 'schedule') showView('scheduleView');
      if (backTo === 'seats') showView('seatsView');
    });
  });

  // "Continue to seats" button: show seat map once cinema & time chosen
  const goToSeatsBtn = document.getElementById('goToSeats');
  if (goToSeatsBtn) {
    goToSeatsBtn.addEventListener('click', () => {
      if (!appState.selectedEvent || !appState.selectedCinema || !appState.selectedTime) return;

      const seatPoster = document.getElementById('seatPoster');
      const seatTag = document.getElementById('seatTag');
      const seatTitle = document.getElementById('seatTitle');
      const seatDetail = document.getElementById('seatDetail');
      const seatSchedule = document.getElementById('seatSchedule');

      if (seatPoster) seatPoster.src = appState.selectedEvent.poster;
      if (seatTag) seatTag.textContent = appState.selectedEvent.genre;
      if (seatTitle) seatTitle.textContent = appState.selectedEvent.title;
      if (seatDetail) seatDetail.textContent = `${appState.selectedEvent.date} • ${appState.selectedEvent.venue}`;
      if (seatSchedule) seatSchedule.textContent = `${appState.selectedCinema} • ${appState.selectedTime}`;

      showView('seatsView');
      renderSeatMap();
    });
  }

  // Proceed to checkout: simple demo flow
  const proceedBtn = document.getElementById('proceedBtn');
  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      goToCheckout();
    });
  }

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = checkoutForm.querySelector('input[name="name"]');
      const name = nameInput && nameInput.value ? nameInput.value : 'Guest';

      const confirmMessage = document.getElementById('confirmMessage');
      const event = appState.selectedEvent;
      const cinema = appState.selectedCinema || (event && event.venue) || 'selected cinema';
      const time = appState.selectedTime || 'selected time';

      if (confirmMessage && event) {
        confirmMessage.textContent = `Your booking for "${event.title}" at ${cinema} (${time}) is confirmed. Enjoy the show, ${name}!`;
      }

      showView('confirmView');
    });
  }

  const doneBtn = document.getElementById('doneBtn');
  if (doneBtn) {
    doneBtn.addEventListener('click', () => {
      // Reset minimal state and go back to events
      appState.selectedEvent = null;
      appState.selectedCinema = null;
      appState.selectedTime = null;
      appState.selectedSeats = [];
      showView('eventsView');
    });
  }

  // Initial view + filters + events
  showView('eventsView');
  renderGenreFilters();
  renderCinemaFilter();
  renderEvents();
});
