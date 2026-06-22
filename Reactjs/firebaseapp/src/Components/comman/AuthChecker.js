import { collection, deleteDoc, getDoc, getDocs, query, where,doc } from "firebase/firestore";
import db from "../../firebase/db";

export const checkAuth =async()=>{
try {
        let loggedUser = localStorage.getItem('loggedUser');
    loggedUser = JSON.parse(loggedUser)
    console.log(loggedUser);
      let q = query(collection(db,'user_token'),where('uid',"==",loggedUser.uid),where('token',"==",loggedUser.token));

        let queryDoc = await getDocs(q);
        queryDoc.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            if(doc.id){
                return true;
            }
            else{
                return false;
            }
        });
     

} catch (error) {
    return false
    console.log(error);
    
}


    
}

export const logout = async ()=>{

     try {
        let loggedUser = localStorage.getItem('loggedUser');
    loggedUser = JSON.parse(loggedUser)
        let q = query(collection(db,'user_token'),where('uid',"==",loggedUser.uid),where('token',"==",loggedUser.token));

      
        let queryDoc = await getDocs(q);
        queryDoc.forEach(async(doc1) => {
            console.log(doc1.id);
             await deleteDoc(doc(db, "user_token", doc1.id));
            
        });
        localStorage.removeItem('loggedUser')

     } catch (error) {
        console.log(error);
        
     }
}