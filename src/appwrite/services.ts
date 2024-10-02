import { ID,Account,Client} from "appwrite";
import Config from "react-native-config";
import Snackbar from "react-native-snackbar";

const appwriteClient = new Client()

const APPWRITE_ENDPOINT : string = Config.APPWRITE_ENDPOINT !
const APPWRITE_PROJECT_ID : string = Config.APPWRITE_PROJECT_ID !

type CreateAccount ={
    email : string,
    password : string,
    name : string
}

type LoginAccount={
    email : string,
    password : string,
}

class AppwriteService {
    account;
    constructor(){
        appwriteClient.setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)
        this.account = new Account(appwriteClient)  
    }
    async CreateUserAccount({email,password,name}:CreateAccount) {
        try {
            const UserAccount = await this.account.create(ID.unique(),email,password,name)

            if (UserAccount){
             return this.login({email,password})
            }else{
                return UserAccount
            }
            
        } catch (error) {
            Snackbar.show({
                text : String(error),
                duration : Snackbar.LENGTH_LONG
        })
        console.log("Create account login error : " + error)
        }
    }

    async login({email,password}: LoginAccount ){

        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            Snackbar.show({
                text : String(error),
                duration : Snackbar.LENGTH_LONG
        })
        console.log("Login error : " + error)
        }

    }

    async getCurrentUser (){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Fetch error : " + error)
        }
    }
    
    async logout () {
        try {
            return await this.account.deleteSession('current') //.get will give you session id which can be used as a parameter here
        } catch (error) {
            console.log("Logout error :" + error)
        }
    }
}

export default AppwriteService

