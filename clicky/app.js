

const Cards = ['','','','',''];
const numCardsToMatch = 2;

class MemoryGame extends React.Component{
  constructor(){
		super();
		this.shuffle = this.shuffleCards.bind(this);
    this.pick = this.pickCard.bind(this);
    this.addWin = this.addWin.bind(this);
   
    
    this.ignoreCardClicks = false;
    
		this.state = { 
      cards : [],
      gamesWon: 0,
      selectedCards: [],
      gameOver: 1
    };

	}
  
  