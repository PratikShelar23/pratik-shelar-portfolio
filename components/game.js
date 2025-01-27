import React, { useState, useEffect } from 'react';

const GuessWordGame = ({ onClose }) => {
  const targetWord = 'HIRE'; // Target word to guess
  const maxAttempts = 5;

  const [guesses, setGuesses] = useState(Array(maxAttempts).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [success, setSuccess] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  // Handle showing instructions
  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const input = e.target.value.toUpperCase();

    // Check if the input is a valid letter (A-Z) and limit to 4 characters
    if (/^[A-Z]*$/.test(input) && input.length <= 4) {
      setCurrentGuess(input);
    }
  };

  // Handle manual submission of guess
  const handleSubmitGuess = () => {
    if (currentGuess.length === 4) {
      const updatedGuesses = [...guesses];
      updatedGuesses[currentRow] = currentGuess;
      setGuesses(updatedGuesses);

      if (currentGuess === targetWord) {
        setSuccess(true);
      } else if (currentRow < maxAttempts - 1) {
        setCurrentRow(currentRow + 1);
      }

      if (currentRow === maxAttempts - 1 && currentGuess !== targetWord) {
        setGameOver(true); // Set game over when max attempts are reached
      }

      setCurrentGuess('');
    }
  };

  // Determine cell styles dynamically
  const getCellStyle = (rowIndex, colIndex) => {
    const guess = guesses[rowIndex];
    const letter = guess[colIndex];

    if (!letter) return 'bg-gray-200';
    if (letter === targetWord[colIndex]) return 'bg-green-500 text-white';
    if (targetWord.includes(letter)) return 'bg-yellow-500 text-black';
    return 'bg-gray-800 text-white';
  };

  // Redirect to resume
  const redirectToResume = () => {
    window.open('/PratikShelar_Resume.pdf', '_blank')
  };

  // Reset the game
  const resetGame = () => {
    setGuesses(Array(maxAttempts).fill(''));
    setCurrentGuess('');
    setCurrentRow(0);
    setSuccess(false);
    setGameOver(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg w-96 relative">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 text-3xl font-bold hover:text-red-700"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-4 text-center font-mono text-white">
          GUESS THE WORD
        </h2>

        {/* Instructions Icon */}
      <div
        className="absolute top-4 left-3 cursor-pointer"
        onClick={toggleInstructions}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7" // Adjust the size as needed
        >
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path>
        </svg>
      </div>


        {/* Instructions Modal */}
        {showInstructions && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-bold mb-4">How to Play</h3>
              <p>Guess the hidden word in 5 tries.</p>
              <p>Each guess must be a valid 4-letter word, you cannot enter random letters. Hit the enter button to submit the guess.</p>
              <p>After your submission, the color of the tiles will change as in the examples below:</p>

              <div className="mt-4">
                <div className="text-green-500 mb-2">
                  <strong>Example:</strong> The letter G is in the word and in the correct spot.
                </div>
                <div className="text-yellow-500 mb-2">
                  <strong>Example:</strong> The letter O is in the word but in the wrong spot.
                </div>
                <div className="text-gray-800 mb-2">
                  <strong>Example:</strong> The letter C is not in the word in any spot.
                </div>
              </div>

              <button
                onClick={toggleInstructions}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {success ? (
          <div className="text-center">
            <p className="text-white font-bold text-xl mb-4">
              Congratulations! You guessed the word... <span className=" text-amber-300 font-bold text-2xl font-Montserrat_medium">{targetWord}</span>
              <br /> Here's your gift.
            </p>

      
        <button
          className="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
          onClick={redirectToResume}
        >
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>

          </div>
        ) : gameOver ? (
          <div className="text-center">
            <p className="text-red-500 font-bold text-lg mb-4">
              Thank you for playing! We will get back to you soon, try again.
            </p>
            <button
              onClick={resetGame}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-rows-5 gap-2 mb-4">
              {guesses.map((guess, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-4 gap-2 justify-center"
                >
                  {Array.from({ length: 4 }).map((_, colIndex) => (
                    <div
                      key={colIndex}
                      className={`h-12 w-12 flex items-center justify-center font-bold text-lg rounded ${getCellStyle(
                        rowIndex,
                        colIndex
                      )}`}
                    >
                      {rowIndex <= currentRow ? guesses[rowIndex][colIndex] || '' : ''}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <input
              type="text"
              value={currentGuess}
              onChange={handleInputChange}
              maxLength={4}
              className="border-2 border-gray-300 rounded w-full p-2 mb-4"
              placeholder="Enter your guess"
            />
            <button
              onClick={handleSubmitGuess}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Submit Guess
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GuessWordGame;
