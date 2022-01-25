import React, { useCallback, Fragment } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";

export default function MyNotifications(props) {
	const { text, variant, actions, onStart } = props;
	let actionsDATA = props.children ? props.children : actions;
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const handleClickWithAction = useCallback(
		(text, variant, actions) => {
			enqueueSnackbar(text, {
				variant: variant,
				preventDuplicate: true,
				action: (key) => (
					<Fragment>
						{actions}
						<IconButton color="inherit" onClick={() => closeSnackbar(key)}>
							<CloseIcon />
						</IconButton>
					</Fragment>
				),
			});
		},
		[enqueueSnackbar, closeSnackbar]
	);
	if (onStart) {
		handleClickWithAction(text, variant, actionsDATA);
	}
	return (
		<Fragment>
			<IconButton
				color="inherit"
				onClick={() => handleClickWithAction(text, variant, actionsDATA)}
			>
				<NotificationsIcon />
			</IconButton>
		</Fragment>
	);
}
