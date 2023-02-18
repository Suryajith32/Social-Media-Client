import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    isDrawerOpen: false,

}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialValue
    },
    reducers: {

        DrawerOpen: (state, action) => {
            state.value.isDrawerOpen = action.payload;
        },
      
    }
})

export const {
    DrawerOpen,
   
} = userSlice.actions;
export default userSlice.reducer;