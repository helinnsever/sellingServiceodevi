
export default class GameServices{

    constructor(){
        this.games=[]
    }

    addGame(game){

        if(typeof(game)=="object"){

            this.games.push(game);
            console.log("oyun eklendi")
        }
    }

    listGame(){

        return this.games;
    }

    removeGame(game){

       
        for(let i=0; i<this.games.length; i++){
            
            if(this.games[i].id===game.id){
                this.games.splice(i,1)

            }
                
            

        }
    }

        
    
}