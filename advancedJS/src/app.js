import Game from "./models/game.js"
import GameServices from "./services/gameServices.js"
import User from "./models/user.js"
import UserServices from "./services/userServices.js"
import SellingService from "./services/sellingService.js"

let gameServices= new GameServices();

let userServices=new UserServices();
let sellingService=new SellingService();

let game1=new Game(1,"GTA",500,20)

let game2=new Game(2,"sims",600,15)

let user1=new User(1,"Helin",14)
let user2=new User(2,"Alper",28)


user1.name="Helin"
user1.id=1
user2.id=2
user2.name="Alper"

game1.name="GTA"

game1.id=1
game1.unitPrice=500
game2.name="sims"
game2.id=2

gameServices.addGame(game1);
gameServices.addGame(game2);

userServices.addUser(user1)
userServices.addUser(user2)

gameServices.removeGame(game2)
userServices.removeUser(user2)



console.log(gameServices.listGame())

console.log(userServices.listUser())

sellingService.sell(user1,game1)
sellingService.sell(user1,game2)
sellingService.sell(user2,game1)
sellingService.sell(user2,game2)
sellingService.listSales()




