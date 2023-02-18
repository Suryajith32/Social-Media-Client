import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    isPostModalOpen: false,
    isSnackBarOpen: false,
    isCommentModalOpen: false,
    isPostDeleteModalOpen:false,
    isEditPostModalOpen:false,
    isReportPostModal:false,
    isDeleteCommentModalOpen:false,
    isEditProfileModalOpen:false,
    isFollowingFollowersListModalOpen:false,
    isChatOpen:false,
    isOtpModalOpen:false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialValue
    },
    reducers: {

        PostModalOpen: (state, action) => {
            state.value.isPostModalOpen = action.payload;
        },
        SnackBarOpen: (state, action) => {
            state.value.isSnackBarOpen = action.payload;
        },
        CommentModalOpen: (state, action) => {
            state.value.isCommentModalOpen = action.payload;
        },
        PostDeleteModalOpen: (state, action) => {
            state.value.isPostDeleteModalOpen  = action.payload;
        },
        EditPostModalOpen: (state, action) => {
            state.value.isEditPostModalOpen = action.payload;
        },
        ReportPostModalOpen: (state, action) => {
            state.value.isReportPostModal = action.payload;
        },
        DeleteCommentModalOpen: (state, action) => {
            state.value.isDeleteCommentModalOpen = action.payload
        },
        EditProfileModalOpen: (state, action) =>{
            state.value.isEditProfileModalOpen = action.payload
        },
        FollowFollowingModalOpen: (state, action) => {
            state.value.isFollowingFollowersListModalOpen = action.payload
        },
        ChatBoxOpen: (state, action) => {
            state.value.isChatOpen = action.payload
        },
        OtpModalOpen: (state, action) => {
            state.value.isOtpModalOpen = action.payload
        }
    }
})

export const {
    PostModalOpen,
    SnackBarOpen,
    CommentModalOpen,
    PostDeleteModalOpen,
    EditPostModalOpen,
    ReportPostModalOpen,
    DeleteCommentModalOpen,
    EditProfileModalOpen,
    FollowFollowingModalOpen,
    ChatBoxOpen,
    OtpModalOpen
} = userSlice.actions;
export default userSlice.reducer;