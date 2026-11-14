/* ============================================================
   EDIT HERE — the only two lists the site owner needs to touch.
   ============================================================ */

// Upcoming concerts. Replace the placeholders with real dates; add or remove rows freely.
// `tickets` empty = the row shows "Tickets: link pending" instead of a button.
const CONCERTS = [
  { date: '[DATE]', venue: '[VENUE]', city: '[CITY, COUNTRY]', programme: '[PROGRAMME]', tickets: '' },
  { date: '[DATE]', venue: '[VENUE]', city: '[CITY, COUNTRY]', programme: '[PROGRAMME]', tickets: '' },
  { date: '[DATE]', venue: '[VENUE]', city: '[CITY, COUNTRY]', programme: '[PROGRAMME]', tickets: '' },
];

// Ticker on the home page. These come from the confirmed biography (studies, residency,
// festival, prizes) — replace with the real list of cities where he has performed.
const CITIES = ['Geneva', 'Verbier', 'Waterloo', 'Saint-Jean-de-Luz', 'Campos do Jordão'];

/* ============================================================ */

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
};

// Agenda: <ol data-agenda> on agenda.html (all rows), <ol data-agenda="3"> on the home page (first 3).
document.querySelectorAll('[data-agenda]').forEach(list => {
  const limit = Number(list.dataset.agenda) || CONCERTS.length;
  list.replaceChildren(...CONCERTS.slice(0, limit).map(c => {
    const li = el('li');
    const info = el('div');
    info.append(el('p', 'where', `${c.venue}, ${c.city}`), el('p', 'what', c.programme));
    let ticket;
    if (c.tickets) {
      ticket = el('a', 'btn', 'Buy tickets');
      ticket.href = c.tickets;
      ticket.target = '_blank';
      ticket.rel = 'noopener';
    } else {
      ticket = el('span', 'btn is-pending', 'Tickets: link pending');
    }
    li.append(el('p', 'when', c.date), info, ticket);
    return li;
  }));
});

// Ticker: the list is rendered twice so the -50% CSS loop is seamless.
const ticker = document.querySelector('[data-ticker]');
if (ticker) {
  const row = [...CITIES, ...CITIES, ...CITIES];
  ticker.append(...[...row, ...row].map((c, i) => {
    const li = el('li', '', c);
    if (i >= row.length) li.setAttribute('aria-hidden', 'true');
    return li;
  }));
}

// Mobile menu.
const head = document.querySelector('.site-head');
const menuBtn = document.querySelector('.menu-btn');
menuBtn?.addEventListener('click', () => {
  const open = head.classList.toggle('nav-open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.textContent = open ? 'Close' : 'Menu';
  document.body.style.overflow = open ? 'hidden' : '';
});

// Hero loop respects reduced motion (the still frame underneath stays visible).
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelector('.hero video')?.remove();
}

// Booking form.
// ponytail: opens the visitor's own email app with the enquiry prefilled — no backend, no account.
// Swap for Formspree/Netlify Forms if enquiries need to be captured without an email client.
document.querySelector('[data-booking-form]')?.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = [
    `Name: ${f.get('name')}`,
    `Organisation: ${f.get('organisation')}`,
    `Reply to: ${f.get('email')}`,
    `Dates / venue: ${f.get('dates')}`,
    '',
    f.get('message'),
  ].join('\n');
  location.href = `mailto:natanaelviola@gmail.com?subject=${encodeURIComponent(`${f.get('type')} enquiry: ${f.get('organisation') || f.get('name')}`)}&body=${encodeURIComponent(body)}`;
});
