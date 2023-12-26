# Rock paper Scissors
The code uses basic HTML, CSS, and JavaScript to create a functional Rock Paper Scissors game that can be played in a browser.
The logic for checking a winner or a tie is implemented, and the game state is updated dynamically.

Getting Started
Prerequisites
Python 3.x
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Shakeerg/Rock-Paper-Scissors.git
cd rock-paper-scissors
Run the game:

bash
Copy code
python rps_game.py
How to Play
Enter your choice when prompted: Rock, Paper, or Scissors.
The computer will randomly choose its move.
The winner is determined based on the game rules, and the result is displayed.
Optionally, choose to play again.
Functions
get_user_choice
python
Copy code
def get_user_choice():
    """Get user's choice of Rock, Paper, or Scissors."""
Prompts the user to enter their choice and validates the input.

get_computer_choice
python
Copy code
def get_computer_choice():
    """Generate a random choice for the computer."""
Generates a random choice (Rock, Paper, or Scissors) for the computer.

determine_winner
python
Copy code
def determine_winner(user_choice, computer_choice):
    """Determine the winner of the game."""
Compares the user's choice and the computer's choice to determine the winner.

play_game
python
Copy code
def play_game():
    """Play Rock, Paper, Scissors."""
Handles the main game loop, calling other functions to get choices and determine the winner.
  
