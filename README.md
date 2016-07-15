#Technologies unsolved
HTML, CSS, and Javascript/jQuery library were used for this assignment.  

#My Approach
I started off with basic HTML layout for the game board and then on javascript first.  I hardcoded one player to feel out the functions and scoring.  I ended up using a chain of functions set off by an event listener (click).  A click on the game board applied a class to the DOM element designating which player clicked, then a function would check for a winner, and if it didn't find one it would switch ownership of the board to player 2.  Eventually the function would find a winner or call a tie and reset the game board.  

#Installation instructions
Visit my Github at https://github.com/maggiemccain/ and fork the "p1-TicTacToe" repo to install.  It is also available on at 

#Unsolved problems, etc.

- CSS- I need to do more planning before I begin touch the css file.  It was hard to backtrack after I'd done initial styling.  I also didn't consider scalability early in the process, which became problematic when I attempted to make the layout responsive.  I wish I'd styled it in a more simple fashion.  
- Javascript- When I was thinking through the steps of the game and the logic behind it, I quickly realized my plan of attack was not the most straightforward option, but couldn't fully grasp the alternative paths so I chose to move forward with my original plan.  
- Because of the way I chose to write the logic, its not DRY.
- HTML- I should have used more divs from the beginning for ease of styling.
