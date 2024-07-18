import { ProductSchema } from '@/components/ProductForm/schema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Product = {
    productName: string;
    category: {
        label: string;
        value: string
    },
    productType: string;
    productPrice: string
    productDescription: string;
    sellerName: string;
    sellerEmail: string;
    sellerPhoneNumber: string;
    location: string;
}

const product: Product = {
    productName: "",
    category: {
        label: "",
        value: ""
    },
    productType: "",
    productPrice: "",
    productDescription: "",
    sellerName: "",
    sellerEmail: "",
    sellerPhoneNumber: "",
    location: "",


}
const initialState = {
    product,
    productURL: []

}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        saveProduct: (state, action: PayloadAction<Product>) => {

            state.product = action.payload;
        },
        addUrl: (state, action) => {
            state.productURL.push(action.payload)
        },
        deleteUrl: (state, action) => {
            state.productURL = action.payload
        }
    }
})
export const productReducer = productSlice.reducer;
export const { saveProduct, addUrl, deleteUrl } = productSlice.actions;