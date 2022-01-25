import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { GlobalContext } from "../GlobalMode";
import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";

export default function ToggleBtn(props) {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const theme = useTheme();

	const handleClickWithAction = React.useCallback(
		(variant, mode) => {
			enqueueSnackbar("Modo: " + (mode === "dark" ? "Claro" : "Oscuro"), {
				variant: variant,
				preventDuplicate: true,
				action: (key) => (
					<>
						{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
						<IconButton color="inherit" onClick={() => closeSnackbar(key)}>
							<CloseIcon />
						</IconButton>
					</>
				),
			});
		},
		[enqueueSnackbar, closeSnackbar]
	);

	const colorMode = React.useContext(GlobalContext);
	let text = "Modo:" + (theme.palette.mode === "dark" ? " Claro" : " Oscuro");
	if (props.menu) {
		return (
			<MenuItem
				title={text}
				onClick={() => {
					colorMode.toggleColorMode();
					handleClickWithAction("primary", theme.palette.mode);
				}}
				color="inherit"
			>
				{theme.palette.mode === "dark" ? (
					<Brightness7Icon sx={{ marginRight: 2 }} />
				) : (
					<Brightness4Icon sx={{ marginRight: 2 }} />
				)}
				Modo: {theme.palette.mode === "dark" ? " Claro" : " Oscuro"}
			</MenuItem>
		);
	} else {
		return (
			<IconButton
				title={text}
				sx={{ m: 0 }}
				onClick={() => {
					colorMode.toggleColorMode();
					handleClickWithAction("primary", theme.palette.mode);
				}}
				color="inherit"
			>
				{theme.palette.mode === "dark" ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		);
	}
}
ToggleBtn.defaultProps = { menu: false };
