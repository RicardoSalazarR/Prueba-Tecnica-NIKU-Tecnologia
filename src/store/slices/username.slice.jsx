import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
    name: 'name',
    initialState: '',
    reducers: {
        changeName: (state, action) => {
            const userName = action.payload;
            return userName;
        }
    }
})

export const { changeName } = usernameSlice.actions;

export default usernameSlice.reducer;