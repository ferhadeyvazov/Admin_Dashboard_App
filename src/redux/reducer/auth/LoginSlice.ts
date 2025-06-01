import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialLoginType } from "../../../utils/Constans";
import apiLogin from "../../../service/apiLogin";

const initialState: initialLoginType = {
    email: '',
    password: '',
    status: "idle"
}

export const loginUser = createAsyncThunk(
    "login/loginUser",
    async (userData: initialLoginType, thunkAPI) => {
        try {
            const response = await apiLogin(userData);
            return response;
        }
        catch (err: any) {
            console.error(`TRY-da yaradilan error Budur=>: `, err);
            return thunkAPI.rejectWithValue(err.response?.data || "Bir xeta var")
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
                console.log(`Fetch yüklenir...`);
                state.status="pending";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status="succeeded";
                console.log("Giris basarili: ", action.payload);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status="failed";
                console.error("Giris Olmadi: ", action.payload);
            })
    }
})

export const { login } = LoginSlice.actions