import React from "react";
import { MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

export default function MenuItemClick(props) {
	const { children, to, target, ...rest } = props;

	const renderLink = React.useMemo(
		() =>
			React.forwardRef((itemProps, ref) => (
				<RouterLink to={to} target={target} ref={ref} {...itemProps} />
			)),
		[to, target]
	);
	return (
		<MenuItem {...rest} component={renderLink}>
			{children}
		</MenuItem>
	);
}

MenuItemClick.defaultProps = { icons: false, target: "_self" };
MenuItemClick.propTypes = {
	to: PropTypes.string.isRequired,
};
///<FolderSharedIcon />
