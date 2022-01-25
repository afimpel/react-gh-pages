import React from "react";
import { Button, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

export default function ButtonClick(props) {
  const { children, to, target, ...rest } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} target={target} ref={ref} {...itemProps} />
      )),
    [to, target]
  );
  if (props.icons) {
    return (
      <IconButton {...rest} component={renderLink}>
        {children}
      </IconButton>
    );
  } else {
    return (
      <Button {...rest} component={renderLink}>
        {children}
      </Button>
    );
  }
}

ButtonClick.defaultProps = { icons: false, target: "_self" };
ButtonClick.propTypes = {
  to: PropTypes.string.isRequired,
};
///<FolderSharedIcon />
