import './GameOver.css';

const GameOver = ({retry, score}) => {
    return (
        <div>
            <h1>GAME OVER</h1>
            <h2>
                Your points are: <span>{score}</span>
            </h2>
            <button onClick={retry}>Retry Game</button>
        </div>
    );
}

export default GameOver;