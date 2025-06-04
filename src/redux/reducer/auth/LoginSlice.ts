import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiLogin from "../../../service/apiLogin";
import { initialLoginType } from "../../../utils/Constans";

const initialState: initialLoginType = {
    email: '',
    password: '',
    status: "idle",
    error: null
}

export const loginUser = createAsyncThunk(
    "login/loginUser",
    async (userData: initialLoginType, GetThunkAPI) => {
        try {
            const response = await apiLogin(userData);
            return response;
        }
        catch (err: any) {
            console.log(err.message);
            return GetThunkAPI.rejectWithValue(err.message || "Bir xeta var")
        }
    }
)

export const LoginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        login: (state: initialLoginType, actions: PayloadAction<Partial<initialLoginType>>) => {
            return { ...state, ...actions.payload };
            // state=actions.payload; <==Bu cür de yazmaq olar
            // return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "pending";
                console.log(`Fetch yüklenir...`);
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log("Giris basarili: ", action.payload);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                let errorMessage = action.payload;
                console.log(errorMessage);
                state.error = errorMessage;
                console.error("Giris Olmadi: ", errorMessage);
            })
    }
})

export const { login } = LoginSlice.actions