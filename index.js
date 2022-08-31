// Server

// Create web socket
const express = require('express'); // node library
const app = express(); // node library
const http = require('http').Server(app); // node library
const io = require('socket.io')(http); // node library
const port = process.env.PORT || 3000; // port no.

// after loading files, it will render index.html
// everytime it will render index.html
app.get('/', function(req, res){ // request , response
  res.sendFile(__dirname + '/index.html'); // _dirname is current directory
});
app.use("/", express.static(__dirname + "/../src/")); //it will load assets

// Tier 1 Attack/Magic Attack
const tierOneCardList = [{

  tier: 'one',
  name: 'Quick Hit',
  type: 'attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Strike',
  type: 'attack',
  damage: 2,
  message: "Quick attack of sword"
},{
  tier: 'one',
  name: 'Slash',
  type: 'attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Cut',
  type: 'attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Stab',
  type: 'attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Swipe',
  type: 'attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Stun',
  type: 'attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Charge Attack',
  type: 'attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Head Butt',
  type: 'attack',
  damage: 2,
  message: "Quick attack of sword"
},  {
  tier: 'one',
  name: 'Napalm Beat',
  type: 'magic attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Fire',
  type: 'magic attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Blizzard',
  type: 'magic attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Poison',
  type: 'magic attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Light',
  type: 'magic attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Dark',
  type: 'magic attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Charm',
  type: 'magic attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Thunder',
  type: 'magic attack',
  damage: 2,
  message: "Quick attack of sword"
}, {
  tier: 'one',
  name: 'Earth',
  type: 'magic attack',
  damage: 2,
  message: "Quick attack of sword"
}]

// Tier 2 Attack/Magic Attack
const tierTwoCardList = [{

  tier: 'two',
  name: 'Double Strafe',
  type: 'attack',
  damage: 4,
  message: "Quick attack of sword"
}, {
  tier: 'two',
  name: 'Magnum Break',
  type: 'attack',
  damage: 4,
  message: "Quick attack of sword"
}, {
  tier: 'two',
  name: 'Bash',
  type: 'attack',
  damage: 4,
  message: "Quick attack of sword"
}, {
  tier: 'two',
  name: 'Fury Swipe',
  type: 'attack',
  damage: 4,
  message: "Quick attack of sword"
}, {
  tier: 'two',
  name: 'Fury Slash',
  type: 'attack',
  damage: 4,
  message: "Quick attack of sword"
}, {
  tier: 'two',
  name: 'Napalm Vulcan',
  type: 'magic attack',
  damage: 4,
  message: "Quick attack of sword"
}, {
  tier: 'two',
  name: 'Fira',
  type: 'magic attack',
  damage: 4,
  message: "Quick attack of sword"
}, {
  tier: 'two',
  name: 'Blizzara',
  type: 'magic attack',
  damage: 4,
  message: "Quick attack of sword"
}, {
  tier: 'two',
  name: 'Thundara',
  type: 'magic attack',
  damage: 4,
  message: "Quick attack of sword"
}, {
  tier: 'two',
  name: 'Earth Spike',
  type: 'magic attack',
  damage: 4,
  message: "Quick attack of sword"
}]

// Tier 3 Attack/Magic Attack
const tierThreeCardList = [{

  tier: 'three',
  name: 'Bowling Bash',
  type: 'attack',
  damage: 6,
  message: "Quick attack of sword"
}, {
  tier: 'three',
  name: 'Pierce',
  type: 'attack',
  damage: 6,
  message: "Quick attack of sword"
}, {
  tier: 'three',
  name: 'Sonic Blow',
  type: 'attack',
  damage: 6,
  message: "Quick attack of sword"
}, {
  tier: 'three',
  name: 'Hammer Fall',
  type: 'attack',
  damage: 6,
  message: "Quick attack of sword"
}, {
  tier: 'three',
  name: 'Firaga',
  type: 'magic attack',
  damage: 6,
  message: "Quick attack of sword"
}, {
  tier: 'three',
  name: 'Blizzaga',
  type: 'magic attack',
  damage: 6,
  message: "Quick attack of sword"
}, {
  tier: 'three',
  name: 'Thundaga',
  type: 'magic attack',
  damage: 6,
  message: "Quick attack of sword"
}, {
  tier: 'three',
  name: 'Earth Quake',
  type: 'magic attack',
  damage: 6,
  message: "Quick attack of sword"
}]

// Tier 4 Attack/Magic Attack
const tierFourCardList = [{

  tier: 'four',
  name: 'Mega Slash',
  type: 'attack',
  damage: 8,
  message: "Quick attack of sword"
}, {
  tier: 'four',
  name: 'Mega Pierce',
  type: 'attack',
  damage: 8,
  message: "Quick attack of sword"
}, {
  tier: 'four',
  name: 'Mega Flare',
  type: 'magic attack',
  damage: 8,
  message: "magic attack"
}, {
  tier: 'four',
  name: 'Mega Bolt',
  type: 'magic attack',
  damage: 8,
  message: "magic attack"
}]

// Special Tier Attack/Magic Attack
const specialCardList = [{
  tier: 'magic spell',
  name: 'Eliminate',
  type: 'magic spell',
  damage: 0,
  message: "Replace All Enemy Cards"
}, {
  tier: 'magic spell',
  name: 'Heal',
  type: 'magic spell',
  damage: -12,
  message: "Heals 12 hp"
}, {
  tier: 'magic spell',
  name: 'Third Eye',
  type: 'magic spell',
  damage: 0,
  message: "Reveal 1 Random Enemy Card"
}, {
  tier: 'magic spell',
  name: 'Draw',
  type: 'magic spell',
  damage: 0,
  message: "Draw 2 Cards"
}, {
  tier: 'magic spell',
  name: 'Manipulate',
  type: 'magic spell',
  damage: 0,
  message: "Replace own 4 cards"
}, {
  tier: 'defense',
  name: 'Reflect Normal',
  type: 'defense',
  damage: 0,
  message: "Reflect Enemy Normal Attack"
}, {
  tier: 'defense',
  name: 'Reflect Magic Damage',
  type: 'defense',
  damage: 0,
  message: "Reflect Enemy Magic Attack"
}, {
  tier: 'defense',
  name: 'Dodge',
  type: 'defense',
  damage: 0,
  message: "Dodge Enemy Normal attack"
}, {
  tier: 'defense',
  name: 'Negate Magic Attack',
  type: 'defense',
  damage: 0,
  message: "Dodge Enemy Magic attack"
}, {
  tier: 'defense',
  name: 'Shield',
  type: 'defense',
  damage: 0,
  message: "Half Enemy Normal attack"
}, {
  tier: 'defense',
  name: 'Magic Shield',
  type: 'defense',
  damage: 0,
  message: "Half Enemy Magic attack"
}];

// Add all array 42 unique card, 84 total cards
const allTier = [
  ...tierOneCardList,
  ...tierTwoCardList,
  ...tierThreeCardList,
  ...tierFourCardList,
  ...specialCardList,
  ...tierOneCardList,
  ...tierTwoCardList,
  ...tierThreeCardList,
  ...tierFourCardList,
  ...specialCardList
];

const MAX_CARD_COUNT = 4;
// Deck class
class Deck {
  constructor(deck) {
    this.rawDeck = [...deck];
    this.deck = [...deck]; // will create a duplicate copy of the original deck for manipulating purposes
  }
  shuffle() { //this will randomize the duplicated deck
    this.deck = this.rawDeck.sort(() => Math.random() - Math.random());
  }
  dealCard() { // this method is for dealing cards to every player and removing it from the array
    if(this.length === 0) {
      this.shuffle();
    }
    return this.deck.pop();
  }
  dealSet(count = MAX_CARD_COUNT) { // initialize each players card
    return Array(count).fill("").map(() => this.dealCard());
  }
  resetDeck() {
    shuffle();
  }
}

const MIN_HP = 0;
const MAX_HP = 100;
// Player class
class Player {
  constructor(playerId, socket) {
    this.playerId = playerId;
    this.socket = socket;
    this.socketId = socket.id;
    this.isReady = false;
    this.hp = 100;
    this.activeDefense = null;
    this.activeMagicDefense = null;
    this.cards = [];
    this.status = true;
  }
  dealCards(cards) {
    this.cards = cards;
  }
  incurDamage(damage) {
    // for testing purposes this.hp = 80;
    this.hp = Math.max(this.hp - damage, MIN_HP); // shorthand version of this.hp = this.hp - damage
  }
  heal(additionalHp) {
    this.hp = Math.min(this.hp + additionalHp, MAX_HP);
  }
  resetDefense() {
    this.activeDefense = null;
    this.activeMagicDefense = null;
  }
}

// Gameplay class
class Gameplay {
  constructor(deck, player1, player2) {
    this.deck = deck;
    this.roundNumber = 0;
    this.winner = null;
    this.loser = null;
    this.activePlayer = player1;
    this.nextPlayer = player2;
    this.drawnCard = null;
  }

  isEndGame() {
    return this.activePlayer.hp <= 0 || this.nextPlayer.hp <= 0;
  }

  getWinner() {
    if(this.activePlayer.hp <= 0 ) {
      return this.nextPlayer;
    }
    return this.activePlayer;
  }

  chooseNextPlayer() {
    console.log(`BEFORE: ${gameplay.activePlayer.playerId} against ${gameplay.nextPlayer.playerId}`);
    console.log(`BEFORE: ${gameplay.activePlayer.socketId} against ${gameplay.nextPlayer.socketId}`);
    const temp = this.activePlayer;
    this.activePlayer = this.nextPlayer;
    this.nextPlayer = temp;
    console.log(`AFTER: ${gameplay.activePlayer.playerId} against ${gameplay.nextPlayer.playerId}`);
    console.log(`AFTER: ${gameplay.activePlayer.socketId} against ${gameplay.nextPlayer.socketId}`);

  }
  computeAttackDamage(damage) {
    const nextPlayerDefense = this.nextPlayer.activeDefense;
    console.log(nextPlayerDefense);
    if(nextPlayerDefense) {
      console.log("attack damage: " + nextPlayerDefense.name);
      if(["Reflect Normal", "Dodge"].includes(nextPlayerDefense.name)) {
        return 0;
      }
      if(nextPlayerDefense.name === "Shield") {
        return damage/2;
      }
    }
    return damage;
  }
  computeMagicAttackDamage(damage) {
    const nextPlayerDefense = this.nextPlayer.activeMagicDefense;
    console.log(nextPlayerDefense);
    if(nextPlayerDefense) {
      console.log("magic attack damage: "+ nextPlayerDefense.name);
      if(["Reflect Magic Damage", "Negate Magic Attack"].includes(nextPlayerDefense.name)) {
        return 0;
      }
      if(nextPlayerDefense.name === "Magic Shield") {
        return damage/2;
      }
    }
    return damage;
  }
  computeDamage(cardType, damage) {
    const isAttack = cardType === "attack";
    return isAttack ? this.computeAttackDamage(damage) : this.computeMagicAttackDamage(damage);
  }
  computeActivePlayerDamage(cardType, damage) {
    console.log("ACTIVE PLAYER DAMAGE: " + cardType + " " + damage);
    console.log(this.nextPlayer.activeDefense);
    console.log(this.nextPlayer.activeMagicDefense);
    if(this.nextPlayer.activeDefense && cardType === "attack" && this.nextPlayer.activeDefense.name === "Reflect Normal") {
      return damage;
    }
    if(this.nextPlayer.activeMagicDefense && cardType === "magic attack" && this.nextPlayer.activeMagicDefense.name === "Reflect Magic Damage") {
      return damage;
    }
    return 0;
  }
  incurPlayerDamage(activeCard) {
    const nextPlayerDamage = this.computeDamage(activeCard.type, activeCard.damage);
    const activePlayerDamage = this.computeActivePlayerDamage(activeCard.type, activeCard.damage);
    console.log(`incurred ${nextPlayerDamage} to ${this.nextPlayer.playerId}`);
    console.log(`incurred ${activePlayerDamage} to ${this.activePlayer.playerId}`);
    this.nextPlayer.incurDamage(nextPlayerDamage);
    this.activePlayer.incurDamage(activePlayerDamage);
  }
  healPlayer(activeCard) {
    this.activePlayer.heal(activeCard.damage * -1);
  }
  getHpStats() {
    return { //create object
      [this.activePlayer.playerId]: this.activePlayer.hp, //key, value on setHp
      [this.nextPlayer.playerId]: this.nextPlayer.hp
    }
  }
  dealPlayerCards(player) {
    const cards = this.deck.dealSet();  //dealset is a function of deck class
    player.dealCards(cards); // dealcard is function of player class
  }
  drawPlayerCard() {
    this.drawnCard = this.deck.dealCard();
  }
  resetDrawnCard() {
    this.drawnCard = null;
  }
  addDefense(activeCard) {
    if(["Reflect Normal", "Dodge", "Shield"].includes(activeCard.name)) {
      gameplay.activePlayer.activeDefense = activeCard;
    } else {
      gameplay.activePlayer.activeMagicDefense = activeCard;
    }
  }
}

// Deck shuffle
let deck = new Deck(allTier);
deck.shuffle();

// variable that will store the instances
let player1 = null;
let player2 = null;
let currentPlayer;
let gameplay = null;

const getPlayer = (socketId) => {
  if(player1 && socketId === player1.socketId) {
    return player1;
  }
  return player2;
}

// player 1 player 2 assignment
const assignPlayer = (socket) => {
  if (player1 === null) { // if first player has logged in
    console.log("Player 1 joined the game.");
    currentPlayer = player1 = new Player("player1", socket);
  } else if(player2 === null) { // if second player has logged in
    console.log("Player 2 joined the game.");
    currentPlayer = player2 = new Player("player2", socket);
  } else {
    console.log("Too many players.")
  }
}

// initiate game
const TIMER = 30000;
const initializeGameplay = () => {
  console.log(player1.isReady + ' ' + player2.isReady);
  if(player1 && player1.isReady && player2 && player2.isReady) {
    gameplay = new Gameplay(deck, player1, player2);
    startGame();
  }
}

const startGame = () => {
  if(gameplay !== null) {
    dealCards(player1);
    dealCards(player2);
    const activePlayer = gameplay.activePlayer;
    console.log('hello');
    io.emit('startGame');
    console.log("START");
    activePlayer.socket.emit('startTurn', TIMER);
  }
}

const replaceUsedCard = (cardIndex) => {
  if (cardIndex !== 4) {
    gameplay.activePlayer.cards[cardIndex] = gameplay.drawnCard;
    gameplay.resetDrawnCard();
  }
  io.emit('updateDeck', deck.deck.length);
}

// apply card 
const useCard = (activeCard) => {
  if (["attack", "magic attack"].includes(activeCard.type)) {
    gameplay.incurPlayerDamage(activeCard);
    io.emit('receiveAttack', gameplay.nextPlayer.playerId);
  } else if(activeCard.type === "magic spell") {
    if (activeCard.name === "Heal") {
      gameplay.healPlayer(activeCard);
      io.emit('receiveHeal', gameplay.activePlayer.playerId);
    } else if(activeCard.name === "Eliminate") {
      dealCards(gameplay.nextPlayer);
    } else if(activeCard.name === "Manipulate") {
      dealCards(gameplay.activePlayer);
    } else if(activeCard.name === "Third Eye") {
      revealNextPlayerCard();
    }
  } else if(activeCard.type === "defense") {
    gameplay.addDefense(activeCard);
  }
  updateHpStats();
}

const revealNextPlayerCard = () => {
  const randomCardIndex = Math.floor(Math.random() * MAX_CARD_COUNT);
  gameplay.activePlayer.socket.emit('reveal', {
    index: randomCardIndex,
    playerId: gameplay.nextPlayer.playerId,
    card: gameplay.nextPlayer.cards[randomCardIndex]
  });
}

const updateHpStats = () => {
  const hpStats = gameplay.getHpStats();
  console.log(hpStats);
  io.emit('setHp', hpStats); // io.emit sends to both client
}

const endGame = () => {
  if(gameplay.isEndGame ()){
    const winner = gameplay.getWinner();
    io.emit('endGame', winner.playerId);
  }
}

const dealCards = (currPlayer) => {
  gameplay.dealPlayerCards(currPlayer);
  currPlayer.socket.emit('getDealtCards', currPlayer.cards);
  io.emit('updateDeck', deck.deck.length);
};

const setupNextPlayer = () => {
  console.log(gameplay.activePlayer.playerId);
  gameplay.chooseNextPlayer();
  gameplay.activePlayer.resetDefense();
  gameplay.activePlayer.socket.emit('hideEnemyCards', gameplay.nextPlayer.playerId);
  gameplay.activePlayer.socket.emit('startTurn', TIMER);
};

const drawCard = (socket, isDiscard) => {
  gameplay.drawPlayerCard();
  console.log('card', gameplay.drawnCard);
  socket.emit('cardDrawn', {
    isDiscard,
    card: gameplay.drawnCard
  });
}

const sendActionMessage = (activeCard) => {
  const player1Id = gameplay.activePlayer.playerId;

  if (["attack", "magic attack"].includes(activeCard.type)) {
    const message = `${player1Id} \n used Tier ${activeCard.tier} ${activeCard.name} \n with an attack type of ${activeCard.type} \n and dealt ${activeCard.damage} damage`; 
    io.emit('sendMessage', message);
  } 
  if (["Heal"].includes(activeCard.name)) {
    const message = `${player1Id} \n used a ${activeCard.name} card \n that ${activeCard.message}`; 
  }
}

// listener or midman 
io.on('connection', function(socket){ // initializer
  console.log("New player");
  assignPlayer(socket);
  socket.emit('setPlayer', currentPlayer.playerId);
  socket.on('playerAction', (cardIndex) => { 
    if(!gameplay) return;

    const activePlayer = gameplay.activePlayer;
    const nextPlayer = gameplay.nextPlayer;
    if (activePlayer.socketId !== socket.id) return;

    const cards = activePlayer.cards.concat([gameplay.drawnCard || {}]);
    const activeCard = cardIndex > -1 ? cards[cardIndex] : {}; // get player card from active player

    useCard(activeCard);
    sendActionMessage(activeCard);
    replaceUsedCard(cardIndex); // end turn trigger
    socket.emit('getDealtCards', gameplay.activePlayer.cards);
    if(gameplay.isEndGame ()){ // end game checker
      const winner = gameplay.getWinner();
      io.emit('endGame', winner.playerId);
      return;
    }
    if(activeCard.name !== "Draw") {
      setupNextPlayer();
    } else {
      console.log('DRAW CARD');
      const isDiscard = true;
      drawCard(socket, isDiscard);
    }
  });

  //   setupNextPlayer();
  // });
  socket.on('ready', () => {
    const readyPlayer = getPlayer(socket.id);
    readyPlayer.isReady = true;
    
    io.emit('ready', readyPlayer.playerId);
    initializeGameplay(readyPlayer.playerId);
  });
  socket.on('drawCard', () => {
    console.log('start next player turn');
    const activePlayer = gameplay.activePlayer;
    if (activePlayer.socketId !== socket.id) return;

    drawCard(socket);
  });
  socket.on('discard', (cardIndex) => {
    const activePlayer = gameplay.activePlayer;
    if (activePlayer.socketId !== socket.id) return;

    const cardLength = activePlayer.cards.length;
    if (cardIndex < cardLength) {
      replaceUsedCard(cardIndex);
      socket.emit('getDealtCards', activePlayer.cards);
    }
    setupNextPlayer();
  });
});

http.listen(port, '0.0.0.0', function(){ // onlines web socket
  console.log('listening on *:' + port); 
});