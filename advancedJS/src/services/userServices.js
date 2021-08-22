export default class UserServices{

    constructor(){
        this.users=[]
    }

    addUser(user){

        if(typeof(user)=="object"){
            this.users.push(user)
        }


    }

   removeUser(user){
       for(let i=0; i<this.users.length; i++){
           if(this.users[i].id===user.id){
            this.users.splice(i,1)
           }
           
       }
   }

    listUser(){
        return this.users;
    }
}