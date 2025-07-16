import './StartScreen.css';

const StartScreen = ({startGame}) => {
    return (
        <div className='start'>
            <img src='secret-word-logo.png' alt="Secret Word" />
            <button onClick={startGame}>Start game</button>
        </div>
    );
}

export default StartScreen;