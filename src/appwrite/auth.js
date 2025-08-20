import conf from '../conf/conf'
import {Account,ID, Client} from "appwrite"

export class AuthService{

    client=new Client()
    account

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
        
        
        try {
          const userAccount=  await this.account.create(ID.unique(),email,password,name)
        //   galti ho sakta h yha
          if(userAccount) {
             
              return this.login({email,password})
          }
          return userAccount
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        //   console.log('Login called with:', {email, password});

        try {
          
          return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
             console.log("login error",error.code,error.message);
            throw error
        }
    }

    async getCurrentUser(){
        try {
                return this.account.get();    
        } catch (error) {
            console.log("Appwrite service::getcurrentuser::error",error);
            
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service::getcurrentuser::error",error);
        }
    }
    

}


const authservice =new AuthService()

export default authservice