import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SnackbarProvider } from "notistack";
import { Collapse } from "@mui/material";
import MyForm from "./MyForm";

export const GlobalContext = React.createContext();

export default function GlobalMode() {
	const [mode, setMode] = React.useState("light");
	const providerMode = {
		toggleColorMode: () => {
			setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
		},
		forceModeDark: () => {
			setMode("dark");
		},
		forceModeLight: () => {
			setMode("light");
		},
	};
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<GlobalContext.Provider value={providerMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SnackbarProvider
					preventDuplicate
					dense={true}
					maxSnack={9}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
					TransitionComponent={Collapse}
				>
					<MyForm />
				</SnackbarProvider>
			</ThemeProvider>
		</GlobalContext.Provider>
	);
}
