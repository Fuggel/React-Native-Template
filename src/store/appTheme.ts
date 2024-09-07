import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface IAppThemeState {
    theme: "light" | "dark";
}

const initialAppThemeState: IAppThemeState = {
    theme: "light",
};

const appThemeSlice = createSlice({
    name: "appTheme",
    initialState: initialAppThemeState,
    reducers: {
        appTheme(state, action: PayloadAction<"light" | "dark">) {
            state.theme = action.payload;
        },
    },
});

export const appThemeSelectors = {
    appTheme: (state: RootState): "light" | "dark" => state.appTheme.theme,
};

export const appThemeActions = appThemeSlice.actions;
export default appThemeSlice.reducer;
