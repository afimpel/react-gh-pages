import React, { useEffect, useState } from "react";
import { GlobalContext } from "../GlobalMode";
import Clock from "react-clock";
import "./ClockApp.css";

export default function ClockApp() {
	const colorMode = React.useContext(GlobalContext);
	const [value, setValue] = useState(new Date());
	const [forceModeDark, setForceModeDark] = useState(true);
	const [forceModeLight, setForceModeLight] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => setValue(new Date()), 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);
	if (value.getHours() >= 20 || value.getHours() < 7) {
		if (forceModeDark) {
			colorMode.forceModeDark();
			setForceModeDark(false);
			setForceModeLight(true);
		}
	} else if (value.getHours() >= 7) {
		if (forceModeLight) {
			colorMode.forceModeLight();
			setForceModeLight(false);
			setForceModeDark(true);
		}
	}

	return <Clock size="64" value={value} />;
}
