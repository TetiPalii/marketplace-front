import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface OrderList{
    id: number;
    count: number;
    totalPrice:number
}
export interface User{
    id: number;
    phoneNumber: string;
    firstName: string;
    favorite_id: [];
    order_list: OrderList;
    token: string;

}
interface UserState{
    user: User | null;
    isLoggedin: boolean;
    loading: boolean,
    error: string | null,
  
}

const initialState:UserState = {
    user: null,
    isLoggedin:false,
    loading: false,
    error: null,
}
export const fetchUser = createAsyncThunk('user/fetchUser',
    async (token: string, { rejectWithValue }) => {
        
        try {
            const response = await fetch(`https://marketplace-5ihn.onrender.com/api/v1/my-profile/info`, {
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (!response.ok) {
                throw new Error
            }
            const data: User = await response.json();
            console.log('data', data)
            return { ...data, token }
        }
        catch (err) {
            rejectWithValue(err.message)
        }
    }
);

export const logoutOperation = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    console.log(baseUrl)
    try {
        const response:Response = await fetch(
            `${baseUrl}/v1/auth/logout`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        if (!response.ok) {

            throw new Error(response.statusText);
        }
        return
    } catch (err) {
        rejectWithValue(err.message)
    }}
)


const userProfileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchUser.pending, (state) => {
                
                state.loading = true;
                state.error = null;
            }
        ).addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
            // console.log('state.user:', state.user)
            // console.log('action.payload:',action.payload)
            state.user = action.payload;
            state.loading = false;
            state.isLoggedin = true;
            
            
            
        }).addCase(fetchUser.rejected, (state, action) => {
            state.isLoggedin = false;
            state.loading = false;
            state.error = action.error.message || 'Неможливо отримати дані'
        }).addCase(logoutOperation.pending, (state) => {
            state.loading = true;
            state.error = '';
        }).addCase(logoutOperation.fulfilled, (state) => {
            console.log('fullfiled')
            state.isLoggedin = false;
            state.loading = false;
        }

        ).addCase(logoutOperation.rejected, (state) => {
            state.error = "Помилка. Спробуйте ще раз."
        })
    }
});

export const userProfileReduser = userProfileSlice.reducer;