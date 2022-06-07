import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: Order = {
    id: 0,
    deadline: "Your deadline time",
    title: "Title of your order",
    description: "Here you will see a description of your order",
    category: {
        name: "Category of your order",
        iconURL: "https://cdn-icons-png.flaticon.com/512/3159/3159310.png"
    },
    price: 0,
    date: new Date().toLocaleDateString()
}


export interface Order {
    title: string,
    description: string,
    deadline: string,
    date: string,
    price: number,
    id: number,
    category: {
        name: string,
        iconURL: string
    }
}



export const newOfferSlice = createSlice({
    name: 'New Offer',
    initialState,
    reducers: {
        updateInfo: (state, action: PayloadAction<string>) => {
            state.title = action.payload
            state.description = action.payload
            state.deadline = action.payload
        },
        updateCategory: (state, action: PayloadAction<string>) => {
            state.category.name = action.payload
        },
        updatePrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateInfo, updateCategory, updatePrice } = newOfferSlice.actions

export default newOfferSlice.reducer