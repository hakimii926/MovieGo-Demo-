// Minimal SPA logic for ticket booking demo
const DEFAULT_LAYOUT = [6,8,10,10,12,12,12,10,8,6];

const EVENTS = [
  createEvent({
    id: 'materialists',
    title: 'Materialists',
    venue: 'GSC Pavilion Elite',
    date: 'Nov 18, 2025',
    dateValue: '2025-11-18',
    genre: 'Drama',
    runtime: '1 hour 56',
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
    runtime: '2 hours 18',
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
    runtime: '1 hour 30',
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
    venue: 'GSC Queensbay Mall',
    date: 'Nov 22, 2025',
    dateValue: '2025-11-22',
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
    venue: 'TGV Toppen',
    date: 'Nov 23, 2025',
    dateValue: '2025-11-23',
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
    venue: 'LFS City Square',
    date: 'Nov 24, 2025',
    dateValue: '2025-11-24',
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
    venue: 'GSC Tropicana Gardens',
    date: 'Nov 25, 2025',
    dateValue: '2025-11-25',
    genre: 'Horror',
    runtime: '2 hours 59',
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
    date: 'Nov 26, 2025',
    dateValue: '2025-11-26',
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
    venue: 'GSC The Starling',
    date: 'Nov 27, 2025',
    dateValue: '2025-11-27',
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

// Simple rendering of the events into the homepage
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('eventsGrid');
  const resultsCount = document.getElementById('resultsCount');

  if (!grid) return;

  grid.innerHTML = ''; // clear just in case
  EVENTS.forEach(event => {
    const card = document.createElement('article');
    card.className = 'event-card';
    card.innerHTML = `
      <img src="${event.poster}" alt="${event.title} poster" class="event-poster">
      <div class="event-body">
        <p class="event-genre">${event.genre}</p>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-meta">${event.date} • ${event.venue}</p>
        <p class="event-runtime">${event.runtime}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  if (resultsCount) {
    resultsCount.textContent = `${EVENTS.length} titles`;
  }
});
