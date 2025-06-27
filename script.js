const players = [
  { name: 'KL Rahul', role: 'Batsman', strikeRate: '88.4', matches: '150', jersey: '1', best: '112 vs WI' , image:'https://documents.bcci.tv/resizedimageskirti/1125_compress.png'},
  { name: 'Hardik Pandya', role: 'All-Rounder', strikeRate: '142.8', matches: '90', jersey: '33', best: '4/38 & 63* vs ENG' , image:'https://documents.bcci.tv/resizedimageskirti/2740_compress.png'},
  { name: 'Jasprit Bumrah', role: 'Bowler', strikeRate: 'NA', matches: '100', jersey: '93', best: '6/19 vs ENG', image:'https://documents.bcci.tv/resizedimageskirti/1124_compress.png' },
  { name: 'Surya Kumar Yadav', role: 'Batsman', strikeRate: '169.5', matches: '70', jersey: '63', best: '117 vs ENG' , image:'https://documents.bcci.tv/resizedimageskirti/1212_compress.png' },
  { name: 'Shubman Gill (Vice Captain)', role: 'Batsman', strikeRate: '105.2', matches: '45', jersey: '77', best: '208 vs NZ' , image:'https://documents.bcci.tv/resizedimageskirti/3761_compress.png' },
  { name: 'Arshdeep Singh', role: 'Bowler', strikeRate: 'NA', matches: '25', jersey: '2', best: '3/12 vs SA' , image:'https://documents.bcci.tv/resizedimageskirti/65_compress.png' },
  { name: 'Rishabh Pant (WK)', role: 'Wicketkeeper', strikeRate: '135.7', matches: '65', jersey: '17', best: '128* vs ENG' , image:'https://documents.bcci.tv/resizedimageskirti/2972_compress.png'},
  { name: 'Abhishek Sharma', role: 'All-Rounder', strikeRate: '145.2', matches: '12', jersey: '99', best: '75 vs ZIM' , image:'https://documents.bcci.tv/resizedimageskirti/11099_compress.png'},
  { name: 'Bhuvneshwar Kumar', role: 'Bowler', strikeRate: '87.3', matches: '121', jersey: '15', best: '5/24 vs SA' , image:'images/bhuvi.jpeg' },
  { name: 'Rohit Sharma (Captain)', role: 'Batsman', strikeRate: '139.5', matches: '250', jersey: '45', best: '264 vs SL' , image:'https://documents.bcci.tv/resizedimageskirti/107_compress.png' },
  { name: 'Jasprit Bumrah', role: 'Bowler', strikeRate: 'NA', matches: '100', jersey: '93', best: '6/19 vs ENG', image:'https://documents.bcci.tv/resizedimageskirti/1124_compress.png' },
  { name: 'Krunal Pandya', role: 'All-Rounder', strikeRate: '112.4', matches: '35', jersey: '24', best: '3/18 vs ENG', image:'images/krunal.jpeg' },
];

const grid = document.getElementById('playerGrid');

players.forEach(player => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${player.image}" alt="${player.name}">

    <h3>${player.name}</h3>
    <p>${player.role}</p>
  `;
  card.onclick = () => openModal(player.name, player.strikeRate, player.matches, player.jersey, player.best);
  grid.appendChild(card);
});

function openModal(name, rate, matches, jersey, best) {
  const role =
    name.includes('Captain') ? 'Captain' :
    name.includes('Vice Captain') ? 'Vice Captain' :
    name.includes('WK') ? 'Wicketkeeper' : '';
  document.getElementById('playerName').textContent = name;
  document.getElementById('playerRole').textContent = role;
  document.getElementById('strikeRate').textContent = rate;
  document.getElementById('matches').textContent = matches;
  document.getElementById('jersey').textContent = jersey;
  document.getElementById('best').textContent = best;
  document.getElementById('playerModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('playerModal').style.display = 'none';
}
