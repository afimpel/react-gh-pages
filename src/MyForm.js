import React, { Fragment } from "react";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import ButtonClick from "./Componets/ButtonClick";
import MyNotifications from "./Componets/MyNotifications";
import ToggleBtn from "./Componets/ToggleBtn";
import ClockApp from "./Componets/ClockApp";

export default function MyForm(props) {
	return (
		<Fragment>
			<ToggleBtn />
			<MyNotifications
				text="Bienvenido... afimpel.com | 🇦🇷"
				variant="success"
				onStart={true}
			>
				<ButtonClick
					color="success"
					icons={true}
					to="//github.com/afimpel"
					target="_blank"
				>
					<GitHubIcon />
				</ButtonClick>
			</MyNotifications>
			<ButtonClick
				color="success"
				icons={true}
				to="//github.com/afimpel"
				target="_blank"
			>
				<GitHubIcon />
			</ButtonClick>

			<ButtonClick
				color="success"
				to="//afimpel.com"
				target="_blank"
				startIcon={<WebIcon />}
				variant="contained"
				icons={false}
			>
				afimpel.com
			</ButtonClick>
			<ClockApp />
		</Fragment>
	);
}
