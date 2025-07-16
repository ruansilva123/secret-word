// css
import './Game.css';
// react
import { useState, useRef } from 'react';

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) => {
    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");

        letterInputRef.current.focus();
    }

    return (
        <div className='game'>
            <p className='points'>
                <span>Points: {score}</span>
            </p>
            <h1>Guess the word:</h1>
            <h3 className='tip'>
                Tip about the word: <span>{pickedCategory}</span>
            </h3>
            <p>You have {guesses} attemp(s).</p>
            <div className='wordContainer'>
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className='letter'>
                            {letter}
                        </span>
                    ) : (
                        <span key={i} className='blankSquare'></span>
                    )
                ))}
            </div>
            <div className='letterContainer'>
                <p>Try guess the letter of secret word</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='letter'
                        maxLength='1'
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Play!</button>
                </form>
            </div>
            <div>
                <p>
                    Letters already tried:
                    {wrongLetters.map((letter, i) => (
                        <span key={i}> {letter},</span>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default Game;