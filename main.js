// Client

// event when window loads
window.onload = () => {
  const transition = document.querySelector('.transition');
  const mechanics = document.querySelector('.game-mechanics-sec');
  const playButton = document.querySelector('.playButton');
  const mainContainer = document.querySelector('.main-container');
  const readyButton = document.querySelector('.readyButton');
  const timer = document.querySelector('.timer');
  const deck = document.querySelector('#card-deck');
  const players = document.querySelector('.players');
  const playerDescriptionBox = document.querySelector('.card-description-box');

  setTimeout(() => {
    transition.classList.remove('is-active');
    mechanics.classList.remove('hidden');
  }, 1500);
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 3000);

  const playGame = () => {
    mechanics.classList.add('hidden');
    mainContainer.classList.remove('hidden');
    readyButton.classList.remove('hidden');
    timer.classList.remove('hidden');
    deck.classList.remove('hidden');
    players.classList.remove('hidden');
    playerDescriptionBox.classList.remove('hidden');
  }
  playButton.addEventListener('click', playGame);
}

// Set user Player UI
const socket = io();
socket.on('setPlayer', (playerId) => {
  window.playerCard = {
    player: playerId
  };
  const levitateAnimation = document.querySelector(`.${playerId}-avatar`);
  const showCardDescription = document.querySelector(`.${playerId}-card-info`);
  const showCardDescriptionBox = document.querySelector(`.${playerId}-card-info-bg`);

  levitateAnimation.classList.add("avatar-levitate");
  showCardDescription.classList.remove("hidden");
  showCardDescriptionBox.classList.remove("hidden");
});
// Deal Card to each player and hides enemy card
socket.on("getDealtCards", cards => { // receive request
  window.playerCard.cards = cards;
  cards.forEach((card, index) => {
    const img = document.getElementById(`${playerCard.player}-card-${index + 1}`);
    img.src = getCardUrl(card.tier); // replace card background depending on object card tier
    const flipImage = document.querySelector(`.${playerCard.player}-flip-card-${index + 1} .flip-card-inner`);
    flipImage.classList.add("flip-my-card");
  });
  console.log(cards);
});
// Start/End Turn Timer
socket.on('startTurn', time => {
  console.log("it's my turn");
  removeBattleButton();
  socket.emit('drawCard');

  const turnCount = document.querySelector('.timerCount');
  setCountDown();
  window.turnTimer = setInterval( () => {
    setCountDown(parseInt(turnCount.innerText) -1);
  }, 1000);
  window.turnTimeout = setTimeout(() => {
    resetTimer();
    console.log('end turn');
    socket.emit('playerAction');
  }, time)
});
socket.on('sendMessage', (message) => {
  const playerAction = document.querySelector('.player-action');
  playerAction.innerText = message;
})
// Apply Damage
socket.on('setHp', (hpStats) => {
  for([key, value] of Object.entries(hpStats)) {
    const hpValue = document.getElementById(`${key}Hp`);
    hpValue.style.width = value + '%';
    if(value <= 80 ) {
      hpValue.style.background = 'linear-gradient(180deg,rgb(89, 219, 100), rgb(3, 2, 0))';
    }
    if(value <= 60 ) {
      hpValue.style.background = 'linear-gradient(180deg,rgb(177, 132, 48), rgb(3, 2, 0))';
    }
    if(value <= 40 ) {
      hpValue.style.background = 'linear-gradient(180deg,rgb(235, 23, 23), rgb(54, 5, 5))';
    }
    if(value <= 20 ) {
      hpValue.style.background = 'linear-gradient(180deg,rgb(250, 113, 113), rgb(0, 0, 0))';
    }
    hpValue.innerText = value ; // updates inner html text
  }
})
// End Game
socket.on('endGame', (playerId) => {
  const player1wins = document.querySelector(".player1-victory");
  const player1lose = document.querySelector(".player1-defeat");
  const player2wins = document.querySelector(".player2-victory");
  const player2lose = document.querySelector(".player2-defeat");
  if(playerId === 'player1') {
    player1wins.classList.remove("hidden");
    player2lose.classList.remove("hidden");
  }
  if(playerId === 'player2') {
    player2wins.classList.remove("hidden");
    player1lose.classList.remove("hidden");
  }
});

socket.on('ready', (playerId) => {
  const readyPlayer1 = document.querySelector(`.${playerId}-ready img`);
  readyPlayer1.classList.add('pop');
});

socket.on('startGame', () => {
  addActionEvents();
  addCardEvents();
  addHoverEvents();
});

socket.on('updateDeck', (deckCount) => {
  const deckCounter = document.querySelector('#card-deck-count');
  deckCounter.innerText = deckCount;
});

socket.on('reveal', (playerCard) => {
  const img = document.getElementById(`${playerCard.playerId}-card-${playerCard.index + 1}`);
  img.src = getCardUrl(playerCard.card.tier); // replace card background depending on object card tier
  const flipImage = document.querySelector(`.${playerCard.playerId}-flip-card-${playerCard.index + 1} .flip-card-inner`);
  flipImage.classList.add("flip-my-card");
});

socket.on('hideEnemyCards', (playerId) => {
  hideEnemyCards(playerId);
})

const card = {};
// emit sending, on receiving
//socket.emit("attack", card);
socket.on("receiveAttack", playerId => {
  const imgAvatar = document.querySelector(`img.${playerId}-avatar`);
  imgAvatar.src = `assets/${playerId}ReceiveDamage.gif`;
  imgAvatar.classList.add('avatar-shake');
  setTimeout(() => {
    imgAvatar.src = `assets/${playerId}.png`;
    imgAvatar.classList.remove('avatar-shake');
  }, 500);
});

socket.on("receiveHeal", playerId => {

});

socket.on('cardDrawn', (drawnCard) => {
  drawnCardImg.src = getCardUrl(drawnCard.card.tier);
  window.drawnCard = drawnCard;
});

const hideEnemyCards = (playerId) => {
  const cardImages = document.querySelectorAll(`[id^="${playerId}-card-"]`);
  console.log(cardImages);
  cardImages.forEach((cardImage, index) => {
    cardImage.src = "assets/backCardBackground.png"; // replace card background depending on object card tier
    const flipImage = document.querySelector(`.${playerId}-flip-card-${index + 1} .flip-card-inner`);
    flipImage.classList.remove("flip-my-card");
  });
};

// Gets card background depends on object card tier
const getCardUrl = (cardTier) => {
  if(cardTier === "one") {
    return "assets/tierCardList/tier1.png";
  }
  if(cardTier === "two") {
    return "assets/tierCardList/tier2.png";
  }
  if(cardTier === "three") {
    return "assets/tierCardList/tier3.png";
  }
  if(cardTier === "four") {
    return "assets/tierCardList/tier4.png";
  }
  if(cardTier === "defense") {
    return "assets/tierCardList/defense.png";
  }
  if(cardTier === "magic spell") {
    return "assets/tierCardList/magicSpell.png";
  }
}

const setCountDown = (time = 30) => {
  const turnCount = document.querySelector('.timerCount');
  turnCount.innerText = time;
}

const resetTimer = () => {
  clearInterval(window.turnTimer);
  setCountDown();
}

// pops attack cards
const attackCardHighlight = (event) => {
  resetHighlight();
  window.playerCard.cards.forEach((card, index) => {
    if(card.type !== "attack") {
      const lowlight = document.querySelector(`.${window.playerCard.player}-flip-card-${index + 1} .flip-card-inner`);
      lowlight.classList.add("un-pop");
    }
  })
}

// pops magic attack cards
const magicCardHighlight = (event) => {
  resetHighlight();
  window.playerCard.cards.forEach((card, index) => {
    if(card.type !== "magic attack") {
      const lowlight = document.querySelector(`.${window.playerCard.player}-flip-card-${index + 1} .flip-card-inner`);
      lowlight.classList.add("un-pop");
    }
  })
}

// pops defensive special type of cards
const defensiveCardHighlight = (event) => {
  resetHighlight();
  window.playerCard.cards.forEach((card,index) => {
    if(card.type !== "defense") {
      const lowlight = document.querySelector(`.${window.playerCard.player}-flip-card-${index + 1} .flip-card-inner`);
      lowlight.classList.add("un-pop");
    }
  })
}

// pops magic spell special type of cards
const magicSpellCardHighlight = (event) => {
  resetHighlight();
  window.playerCard.cards.forEach((card, index) => {
    if(card.type !== "magic spell") {
      const lowlight = document.querySelector(`.${window.playerCard.player}-flip-card-${index + 1} .flip-card-inner`);
      lowlight.classList.add("un-pop");
    }
  })
}

// pops all cards on hand
const showCards = (event) => {
  resetHighlight();
  window.playerCard.cards.forEach((card, index) => {
    const lowlight = document.querySelector(`.${window.playerCard.player}-flip-card-${index + 1} .flip-card-inner`);
      lowlight.classList.remove("un-pop");
  })
}

// reset pop
const resetHighlight = () => {
  const cardsToReset = document.querySelectorAll(`.${window.playerCard.player}-hand .flip-card-inner`)
  cardsToReset.forEach((cardToReset) => {
    cardToReset.classList.remove("un-pop");
  })
}

/* remove battle/ready buttons */
const removeBattleButton = () => {
  const hidePlayer1ReadyButton = document.querySelector(`.player1-ready`);
  const hidePlayer2ReadyButton = document.querySelector(`.player2-ready`);
  hidePlayer1ReadyButton.classList.add("hidden");
  hidePlayer2ReadyButton.classList.add("hidden");
}

const addActionEvents = () => {

// Event Listeners
  const attackButton = document.querySelector(`.${window.playerCard.player}-attack-button`);
  const magicButton = document.querySelector(`.${window.playerCard.player}-magic-button`);
  const defendButton = document.querySelector(`.${window.playerCard.player}-defend-button`);
  const magicSpellButton = document.querySelector(`.${window.playerCard.player}-magic-spell-button`);
  const clickAvatarToShowAllCards = document.querySelector(`.${window.playerCard.player}-avatar`);

  attackButton.addEventListener('click', attackCardHighlight); // event handler with callback attackCardHighlight
  magicButton.addEventListener('click', magicCardHighlight);
  defendButton.addEventListener('click', defensiveCardHighlight);
  magicSpellButton.addEventListener('click', magicSpellCardHighlight);
  clickAvatarToShowAllCards.addEventListener('click', showCards);
}

// Remove timer and click after choosing a card to avoid cheating or multiple damage
const addCardEvents = () => {
  const cardList = document.querySelectorAll(`.${window.playerCard.player}-hand .flip-card-back`)
  cardList.forEach((card, index) => {
    card.addEventListener('click', (event) => {
      const currentCard = window.playerCard.cards[index] || {};
      console.log(currentCard);
      if(!window.drawnCard || !window.drawnCard.isDiscard) {
        resetDrawnCard();
        event.stopPropagation();
        console.log("ACTION" + index);
        console.log('end turn');
        if(currentCard.name !== "Draw") {
          clearTimeout(window.turnTimeout); // removes timeout after choosing a card
          resetTimer();
        }
        socket.emit('playerAction', index);
      } else {
        resetDrawnCard();
        clearTimeout(window.turnTimeout); // removes timeout after choosing a card
        resetTimer();
        socket.emit('discard', index);
      }
    });
  });
}

const addHoverEvents = () => {
  const cardList = document.querySelectorAll(`.${window.playerCard.player}-hand .flip-card-back`)
  cardList.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
      const currentCard = window.playerCard.cards[index] || {};
      console.log(currentCard);
      const cardName = document.querySelector(`.${window.playerCard.player}-card-info h2`);
      const cardDescription = document.querySelector(`.${window.playerCard.player}-card-info p`);
      if (["attack", "magic attack"].includes(currentCard.type)) {
        cardName.innerText = currentCard.name;
        cardDescription.innerText = currentCard.damage;
      }
      if (["defense", "magic spell"].includes(currentCard.type)) {
        cardName.innerText = currentCard.name;
        cardDescription.innerText =  currentCard.message;
      }
    });
  });
}

const startBattle = (event) => {
  event.target.classList.add('pop');
  socket.emit("ready");
}


const readyPlayer1 = document.querySelector('.player1-ready img');
readyPlayer1.addEventListener('click', startBattle);
const readyPlayer2 = document.querySelector('.player2-ready img');
readyPlayer2.addEventListener('click', startBattle);

const drawCard = () => {
  if(!window.drawnCard) {
    socket.emit('drawCard');
  } else if(window.drawnCard.isDiscard) {
    socket.emit('discard', window.playerCard.cards.length);
  } else {
    resetDrawnCard();
  }
}

const resetDrawnCard = () => {
  drawnCardImg.src = "assets/backCardBackground.png";
  window.drawnCard = null;
}

const drawnCardImg = document.querySelector('#card-deck div img');
drawnCardImg.addEventListener('click', drawCard);