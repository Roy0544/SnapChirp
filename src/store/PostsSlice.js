import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    status:false,
    selectedPostId:""


}

const PostSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        getPosts:(state,action)=>{
            state.status=true;
            const{posts,postId}=action.payload
        },

        selectPost(state, action) {
      state.selectedPostId = action.payload; // $id
    }

    }

})

export default PostSlice.reducer