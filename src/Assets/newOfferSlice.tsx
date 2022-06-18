import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: Order = {
    id: 0,
    deadline: "Your deadline time",
    title: "Title of your order",
    description: "Here you will see a description of your order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam, officiis molestiae recusandae cum nihil aliquid, ipsum magnam quibusdam iure tenetur deleniti, repellendus eligendi sapiente possimus voluptate ea reiciendis culpa.",
    category: {
        name: "Category of your order",
        iconURL: "https://cdn-icons-png.flaticon.com/512/1420/1420979.png"
    },
    price: "0",
    date: new Date().toLocaleDateString()
}


export interface Order {
    title: string,
    description: string,
    deadline: string,
    date: string,
    price: string,
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

        updateTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        updateDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        updateDeadline: (state, action: PayloadAction<string>) => {
            state.deadline = action.payload
        },
        updateCategory: (state, action: PayloadAction<string>) => {
            state.category.name = action.payload
        },
        updateIcon: (state, action: PayloadAction<string>) => {
            state.category.iconURL = action.payload
        },
        updatePrice: (state, action: PayloadAction<string>) => {
            state.price = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateTitle, updateDeadline, updateDescription, updateCategory, updatePrice, updateIcon } = newOfferSlice.actions

export default newOfferSlice.reducer