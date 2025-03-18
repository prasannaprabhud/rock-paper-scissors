
        // variables 
        let round = 0;
        // const totalRound = 5;    
        let humanScore = 0;
        let computerScore = 0;  
        const choices = ['rock', 'paper', 'scissors'];

        // console designs and output
        console.log(`Round : ${round}`);
        console.log('----SCORE----');
        console.log(`Computer : ${computerScore}`);
        console.log(`Human : ${humanScore}`);
        console.log('----------------------');
        // ui designs
        const scoreBoard = document.querySelector('p');
        scoreBoard.innerHTML = `Round : ${round} <br> 
        ----SCORE---- <br> 
        Computer : ${computerScore} <br> 
        Human : ${humanScore}  <br> 
        ----------------------`;
        const output = document.querySelector('h4')


        // random number generator
        function getRandom(){
            let randomNumber =  Math.floor(Math.random() * 3);
            return randomNumber;
        }

        // human choice
        function getHumanChoice(){
            const user = prompt(`Round ${round} : Enter your choices `, 'rock'); // 'rock paper scissors'
            console.log('----------------------');
            console.log(`user : ${user}`);
            return user.toLowerCase();
        }

        // computer choice
        function getComputerChoice(){
            let computerChoice = choices[getRandom()];
            return computerChoice;
        }

        // humanChoice, computerChoice
        // logic
        function playRound(humanChoice, comp){
            
            if( ( humanChoice === comp ) == true ){
                console.log(`Round ${round} : Match draws, ${humanChoice} equals ${comp}.  `);
            } else if ( humanChoice === 'rock' && comp === 'scissors' || 
                        humanChoice === 'paper' && comp === 'rock'    || 
                        humanChoice === 'scissors' && comp === 'paper'){
                console.log(`Round ${round} : You won, ${humanChoice} beats ${comp}. `);
                return humanScore++;
            }else if (humanChoice === 'scissors' && comp === 'rock' ||
                      humanChoice === 'rock' && comp === 'paper'    ||
                      humanChoice === 'paper' && comp === 'scissors'){
                 console.log(`Round ${round} : AI won, ${comp} beats ${humanChoice}. `);
                 return computerScore++;
            }else{
                console.log(`try next time`);   
            } 
           
        }
        
        // match round, score hoster
        function play(){
            round++;
            console.log(`Round : ${round}`);
            console.log(`Computer : ${computerScore}`);
            console.log(`Human : ${humanScore}`);
            scoreBoard.innerHTML = `Round : ${round} <br> 
            ----SCORE---- <br> 
            Computer : ${computerScore} <br> 
            Human : ${humanScore}  <br> 
            ----------------------`;
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            console.log('----------------------');
        }


        // looping the round
        function playGround(){
            play();
            play();
            play();
            play();
            play();

            if(humanScore > computerScore){
                console.log(`----*CONGRATULATIONS!!!----`);
                console.log(`Computer : ${computerScore}`);
                console.log(`Human : ${humanScore}`);
                console.log(`You Won, Score is : ${humanScore}`);
                output.innerHTML = `----*CONGRATULATIONS!!!---- <br> You Won, Score is : ${humanScore} `
                output.style.color = 'green';
            }else if(computerScore > humanScore){
                console.log(`Computer : ${computerScore}`);
                console.log(`Human : ${humanScore}`);
                console.log(`ai Won, Score is : ${computerScore}`);
                output.innerHTML = `----Better Luck Next Time---- <br> Computer Won, Score is : ${computerScore}`;
                output.style.color = 'red';
            }else{
                console.log('Match Draws');
                output.innerHTML = 'Match Draws';
                output.style.color = 'grey';
            }
        }

        // click to start the game
        const btn = document.querySelector('#btn');
        btn.addEventListener('click',() => playGround());