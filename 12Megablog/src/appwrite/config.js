import conf from "../conf/conf.js";
import { Client, ID,TablesDB   , Storage , Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title , slug , content , featuredImage , status , userId }){
        try {
            return await this.tablesDB.createRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
            
        } catch (error) {
            console.log("Appwrite service :: createpost :: error" , error);
            
        }
    }
    
    async updatePost(slug,{title  , content , featuredImage , status , userId}){
        try {
            return await this.tablesDB.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug ,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            


        
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error",error);

        }
    }

    async deletePost(slug){
        try {
            await this.TablesDB.deleteRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )
            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error" , error);
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.TablesDB.getRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

            
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error",error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await 
            
        } catch (error) {
            console.log("appwrite service :: deleteFile :: error" , error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.TablesDB.listRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    queries
                ]
            )
            
        } catch (error) {
            console.log("Appwrite service :: getposts :: error ", error);
            
        }

    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("appwrite service :: uploadFile :: error",error);
            
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )

            return true;
            
        } catch (error) {
            console.log("appwrite service  :: deletingfile :: error " , error);
            
            
        }

    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}
const service = new Service()
export default service