import Sale from "../models/sale.js"
export default class SellingService{
    
    constructor(){
        this.sales=[]
    }
   
    sell(user,game){

        if(game.minAge>user.age){
            
            console.log(user.name+"'in "+game.name+" oyununu alabilmesi için yasinin uygun olmasi gerekiyor")

        }else{
            let sale=new Sale(user,game)
            this.sales.push(sale)
            console.log(user.name+" "+game.name+" oyununu alabilir.")

        }

    }

    listSales(){
       
        for (let i = 0; i < this.sales.length; i++) {
            console.log((this.sales[i].user).name+" adlı kullanıcı "+(this.sales[i].game).name+" oyununu satın aldı.")
        }
    }
}