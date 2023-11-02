import { Paper } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import "./CardArray.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
} from "@mui/material";
import Card from "./Cards";
import axios from "axios";

const cardArr = [
  {
    type: `lizard`,
    url: "https://storage.googleapis.com/rudy_general_assembly_seif/assets/lizard.gif",
  },
  {
    type: `elf`,
    url: "https://storage.googleapis.com/rudy_general_assembly_seif/assets/elf.gif",
  },
  {
    type: `demon`,
    url: "https://storage.googleapis.com/rudy_general_assembly_seif/assets/demon.gif",
  },
  {
    type: `human`,
    url: "https://storage.googleapis.com/rudy_general_assembly_seif/assets/human.gif",
  },
  {
    type: `wizard`,
    url: "https://storage.googleapis.com/rudy_general_assembly_seif/assets/wizard.gif",
  },
  {
    type: `warlock`,
    url: "https://storage.googleapis.com/rudy_general_assembly_seif/assets/warlock.gif",
  },
];

const shuffleCards = (array) => {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};

// const cardArr = cards.map((e)=>{
//     return <Paper
//      elevation="4"
//      style={{width:"15vh" ,height:'15vh',backgroundImage:`url(${e.url})`, backgroundSize:'cover'}}>
//      </Paper>
// });

const CardArray = (refs) => {
  const [cards, setCards] = useState(() =>
    shuffleCards(cardArr.concat(cardArr))
  );
  const [sequence, setSequence] = useState([]);
  const [clearSequence, setClearSequence] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const jsonData = (bool) => {
    return {
      user_id: 12345671,
      moves_to_win: moves,
      sequence: sequence.toString(),
      clear_sequence: clearSequence.toString(),
      complete: bool,
      username: refs.refs.refs.username.current.value
    };
  };

  const userJsonData = () => {
    return {
      username: refs.refs.refs.username.current.value,
      email: refs.refs.refs.email.current.value,
      age: refs.refs.refs.age.current.value,
      gender: refs.refs.refs.gender.current.value,
      location: refs.refs.refs.location.current.value,
    }
  }

  const writeBigQuery = (bool) => {
    axios
      .post("http://localhost:8000/plays", jsonData(bool))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const writeBigQueryUser = () => {
    axios
      .post("http://localhost:8000/plays/user", userJsonData())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === cardArr.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
      writeBigQuery(true);
      writeBigQueryUser();
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      setClearSequence((prev) => [...prev, 1]);
      return;
    } else {
      setClearSequence((prev) => [...prev, 0]);
    }

    //flip cards after 0.5s
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setSequence((prev) => [...prev, index]);
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setSequence((prev) => [...prev, index]);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setSequence([]);
    setClearSequence([]);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(cardArr.concat(cardArr)));
    writeBigQuery(false);
    writeBigQueryUser();
  };

  const handleRestartNoWrite = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setSequence([]);
    setClearSequence([]);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(cardArr.concat(cardArr)));
  };

  return (
    <div className="App">
      <header>
        <h3>Card Game</h3>
        <div>Match two of the same cards!</div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <footer>
        <div className="score">
          <div className="moves">
            <span className="bold">Moves:</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span className="bold">Best Score:</span> {bestScore}
            </div>
          )}
        </div>
        <div className="restart">
          <Button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </Button>
        </div>
        <div className="sequence"> Sequence: {sequence} </div>
        <div className="clearsequence"> Clear Sequence: {clearSequence} </div>
        <div className="refs"> username: {refs.refs.refs.age.current.value} </div>
      </footer>
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hurray!!! You completed the challenge
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestartNoWrite} color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CardArray;
