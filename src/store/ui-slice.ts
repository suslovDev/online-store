import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUislice } from "./types/ui-slice";


const initialState: IUislice = {
    currentCare: null
}
const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setCurrent(state, action: PayloadAction<number | null>) {
            state.currentCare = action.payload;
        }
    }
});

export const { setCurrent } = uiSlice.actions;
export default uiSlice.reducer;