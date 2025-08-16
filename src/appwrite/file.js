import { Client, Databases, ID, Query,Storage } from 'appwrite';
import conf from '../conf/conf';

export class upLoadService{
      client=new Client
    databases;
    bucket;

    constructor(){
           this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
               this.databases=new Databases(this.client)
               this.bucket=new Storage(this.client)
    }

    async upLoadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwritebucketId,
                ID.unique(),
                file
            )
        } catch (error) {
           console.log("Appwrite service::fileupload::error",error); 
           return false
        }
    }


     async upLoadFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwritebucketId,
                fileId
                
            )
           return true
        } catch (error) {
           console.log("Appwrite service::filedelete::error",error); 
           return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwritebucketId,
            fileId
        )
    }
}

const uploadservice=new upLoadService()
export default uploadservice