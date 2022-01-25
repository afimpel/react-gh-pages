import React, { useEffect, useState } from "react";
import { GlobalContext } from "../GlobalMode";
import Clock from "react-clock";
import "./ClockApp.css";

export default function ClockApp(props) {
	function addZero(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
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
	} else {
		if (forceModeLight) {
			colorMode.forceModeLight();
			setForceModeLight(false);
			setForceModeDark(true);
		}
	}
	if (!props.digital) {
		return <Clock size="64" value={value} />;
	} else {
		let h = addZero(value.getHours());
		let m = addZero(value.getMinutes());
		let s = addZero(value.getSeconds());
		let time = h + ":" + m + ":" + s;
		return <b>{time}</b>;
	}
}
ClockApp.defaultProps = { digital: false };
