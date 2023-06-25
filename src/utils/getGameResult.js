const choice = {
    paper: 'paper',
    scissers: 'scissers',
    rock: 'rock'
}

const getGameResult = (playChoice, computerChoice) => {
    if(playChoice === computerChoice){
        return 'Draw'
    }
    switch (playChoice) {
        case choice.paper:
            if(computerChoice === choice.rock){
                return 'You Win'
            }else{
                return 'You lose'
            }
        case choice.scissers:
            if(computerChoice === choice.paper){
                return 'You Win'
            }else{
                return 'You lose'
            }
        case choice.rock:
            if(computerChoice === choice.scissers){
                return 'You Win'
            }else{
                return 'You lose'
            }
        default:
            throw new Error("Wrong choices...")
    }
}

export default getGameResult