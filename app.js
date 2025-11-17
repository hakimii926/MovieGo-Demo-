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
  // ... Rest unchanged ...
];

// -- function unchanged --
function createEvent(config){
  // Correction here: Assign all config values and add priceMap/venue/layout
  const { id, title, date, genre, runtime, poster, description, vipPrice, standardPrice, cinemas, dateKey } = config;
  const layout = DEFAULT_LAYOUT;
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
  // Determine a "venue" to use if needed
  let venue = cinemas && cinemas.length > 0 ? cinemas[0].name : "";
  return { id, title, date, genre, runtime, poster, description, vipPrice, standardPrice, cinemas, dateKey, priceMap, layout, venue };
}

// -- Everything else unchanged except initial render section at bottom --

// Existing ... (all functions except: renderEvents, matchesFilters, renderEvents removed here for brevity)
// These are not needed since we're using renderEventsGrid only

// For filter reset: ensure grid shown (replace renderEvents with renderEventsGrid)
resetFiltersBtn?.addEventListener('click', ()=>{
  STATE.filters.genres.clear();
  STATE.filters.date = 'all';
  STATE.filters.cinema = 'all';
  if(filterDate) filterDate.value = '';
  if(filterCinema) filterCinema.value = 'all';
  renderEventsGrid();
});

// DOMContentLoaded and initial render:
document.addEventListener('DOMContentLoaded', function() {
  setCurrentEvent(STATE.currentEvent?.id || EVENTS[0]?.id);
  renderEventsGrid();
  showView(eventsView);
});

// EXPOSE for debug if you want
window.TB = { STATE, soldSeats };
