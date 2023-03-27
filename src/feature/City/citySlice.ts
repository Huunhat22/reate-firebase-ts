
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import getCiti from "../../api/cityApi";
import { cityType } from "../../interface";

type initial = {
    cities : cityType[]
}

const initialState:initial = {
    cities:[]
}

export const city = createAsyncThunk('city', async() =>{
    const data = await getCiti()
    return data
})

export const citySlice =  createSlice({
    name:'city',
    initialState,
    reducers:{},
    extraReducers:(builder) =>
    builder
     .addCase(
        city.fulfilled,
        (state, action: PayloadAction<cityType[]>) => {
          state.cities = action.payload;
        }
      )
})

const {actions, reducer} = citySlice
export default reducer