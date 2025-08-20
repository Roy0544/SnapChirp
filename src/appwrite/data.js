import { Client, Databases, ID, Query,Storage } from 'appwrite';
import conf from '../conf/conf';

export class Service{
    client=new Client()
    databases;
    bucket;

    constructor(){
          this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
               this.databases=new Databases(this.client)
               this.bucket=new Storage(this.client)
    }

    async createPost({slug,content,featuredImage,status,userId,username,reply, phonenumber,location,bio,links,
            profilepic}){
try {
    console.log("data reached here with",slug);
    
    return await this.databases.createDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug,
        {
            slug,
            username,
            content,
            featuredImage,
            status,
            userId,
            reply,
            phonenumber,
            location,
            bio,
            links,
            profilepic
        }
    )
} catch (error) {
    console.log("Appwrite service::Createpost ::error",error);
}
    }
    async deletePost(slug){

        try {
            await this.databases.deleteDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service::deletepost::error",error);
        return false    
        }


    }
    async getposts(queries=[Query.equal("status","published")]){
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service::getposts::error",error);
            return false
        }
    }
    async updateProfile({slug, userId,username,phonenumber,location,profilepic,links,bio}){
        try {
            console.log("data reache dherr ",bio);
            
            return await this.databases.updateDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    slug,
                    userId,
                    username,
                    phonenumber,
                    location,
                    profilepic,
                    links,
                    bio
                  
                }
                    

                   
                  
              

            )
        } catch (error) {
            console.log("error in updating profile",error);
            
            
        }
    }
    async getPostsByUserId(userId) {
    try {
        return await this.databases.listDocuments(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            [Query.equal("userId", userId)]
        );
    } catch (error) {
        console.log("Appwrite service::getPostsByUserId::error", error);
        return false;
    }
}
}   

const service=new  Service()
export default service