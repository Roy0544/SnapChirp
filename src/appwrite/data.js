import { Client, Databases, ID, Query, Storage } from 'appwrite';
import conf from '../conf/conf';

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ slug, content, featuredImage, status, userId, username, reply, phonenumber, location, bio, links,
        profilepic, likescount }) {
        try {
           

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
                    profilepic,
                    likescount
                }
            )
        } catch (error) {
            console.log("Appwrite service::Createpost ::error", error);
        }
    }
    async deletePost(slug) {

        try {
            await this.databases.deleteDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service::deletepost::error", error);
            return false
        }


    }
    async getposts(queries = [Query.equal("status", "published")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service::getposts::error", error);
            return false
        }
    }
    async updateProfile({ slug, userId, username, phonenumber, location, profilepic, links, bio }) {
        try {
          

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
            console.log("error in updating profile", error);


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
    async likePost(postId, userId) {
        try {
            await this.databases.createDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionIdlikes, // Replace with your likes collection ID
                ID.unique(),
                {
                    postId,
                    userId
                }


            );

            // update likes count

            const newCount = await this.updateLikesCount(postId, 1);
            return newCount;
        } catch (error) {
            console.log("Error liking post:", error);
            return false;
        }
    }
    async unlikePost(postId, userId) {
        try {
            // Find the like to delete
            const likes = await this.databases.listDocuments(
                conf.appwritedatabaseId,
                conf.appwritecollectionIdlikes,
                [
                    Query.equal("postId", postId),
                    Query.equal("userId", userId)
                ]
            );

            // Delete it if found
            if (likes.documents.length > 0) {
                await this.databases.deleteDocument(
                    conf.appwritedatabaseId,
                    conf.appwritecollectionIdlikes,
                    likes.documents[0].$id
                );
                // Update likes count
            const newCount = await this.updateLikesCount(postId, -1);
            return newCount;
            }
            return true;
        } catch (error) {
            console.log("Error unliking post:", error);
            return false;
        }
    }
   async checkIfLiked(postId, userId) {
    try {
        // Check if user liked the post
        const likes = await this.databases.listDocuments(
            conf.appwritedatabaseId,
            conf.appwritecollectionIdlikes,
            [
                Query.equal("postId", postId),
                Query.equal("userId", userId)
            ]
        );

        const isLiked = likes.documents.length > 0;

        // Get current post to get like count
        const post = await this.databases.getDocument(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            postId
        );

        const likeCount = post.likescount || 0;

        // Return both values as an object
        return {
            isLiked: isLiked,
           likeCount: likeCount  
        };

    } catch (error) {
        console.log("Error checking like:", error);
        return {
            isLiked: false,
            likesCount: 0
        };
    }
}

   async updateLikesCount(postId, increment) {
    try {
        // Get current post
        const post = await this.databases.getDocument(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            postId
        );

        // Calculate new count safely
        const currentCount = post.likescount || 0;
        const newCount = Math.max(0, currentCount + increment); // Prevent negative values

        // Update likes count
        await this.databases.updateDocument(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            postId,
            {
                likescount: newCount
            }
        );

        return newCount; // Return the actual new count
    } catch (error) {
        console.log("Error updating likes count:", error);
        throw error;
    }
}



}


const service = new Service()
export default service