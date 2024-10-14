import PropTypes from "prop-types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";

const CustomModal = ({
  open,
  onClose,
  title,
  content,
  primaryActionText,
  onPrimaryAction,
  secondaryActionText,
  onSecondaryAction,
  maxWidth = "sm",
  fullWidth = false,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      PaperProps={{
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {typeof content === "string" ? (
          <Typography variant="body1">{content}</Typography>
        ) : (
          content
        )}
      </DialogContent>
      <DialogActions>
        {secondaryActionText && (
          <Button onClick={onSecondaryAction} color="default">
            {secondaryActionText}
          </Button>
        )}
        <Button onClick={onPrimaryAction} color="primary">
          {primaryActionText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  primaryActionText: PropTypes.string.isRequired,
  onPrimaryAction: PropTypes.func.isRequired,
  secondaryActionText: PropTypes.string,
  onSecondaryAction: PropTypes.func,
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  fullWidth: PropTypes.bool,
};

export default CustomModal;
