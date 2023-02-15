import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import {
  TwitterShareButton,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";
import { Email, Facebook, Linkedin, Twitter } from "@forkfacts/icons";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SharedSocialMediaProps } from "@forkfacts/models";

const SharedSocialMedia: React.FC<SharedSocialMediaProps> = ({
  isSharedMediaOpen,
  setIsSharedMediaOpen,
  link,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [copied, setIsCopied] = useState(false);

  const handleClose = () => {
    setIsSharedMediaOpen(false);
    setIsCopied(false);
  };

  return (
    <Box
      boxShadow={1}
      sx={{
        maxWidth: mobile ? "100%" : "742px",
        width: "100%",
        background: theme.palette.background.paper,
        p: mobile ? theme.spacing(1.5) : theme.spacing(3),
        position: "absolute",
        zIndex: theme.zIndex.appBar,
        display: isSharedMediaOpen ? "block" : "none",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Share this food</Typography>
        <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(2),
          mt: theme.spacing(4),
        }}
      >
        <EmailShareButton url={"youremail@example.com"} title={"Check out this website!"}>
          <Email style={{ width: "44px", height: "44px" }} />
        </EmailShareButton>
        <FacebookShareButton url={"https://www.facebook.com/"} title={"Check out this website!"}>
          <Facebook style={{ width: "44px", height: "44px" }} />
        </FacebookShareButton>
        <TwitterShareButton url={"https://twitter.com/ "} title={"Check out this website!"}>
          <Twitter style={{ width: "44px", height: "44px" }} />
        </TwitterShareButton>
        <LinkedinShareButton url={"https://www.linkedin.com/"} title={"Check out this website!"}>
          <Linkedin style={{ width: "44px", height: "44px" }} />
        </LinkedinShareButton>
      </Box>
      <Typography
        sx={{
          mt: theme.spacing(4),
          fontWeight: theme.typography.fontWeightBold,
          fontSize: theme.typography.subtitle2.fontSize,
          color: theme.palette.customGray.textDark,
        }}
      >
        or copy the url
      </Typography>
      <Box
        sx={{
          mt: theme.spacing(1),
          width: "100%",
          display: "flex",
        }}
      >
        <TextField
          size="small"
          id="standard-basic"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon />
              </InputAdornment>
            ),
          }}
          sx={{ borderRadius: theme.spacing(8), width: mobile ? "100%" : "60%" }}
          value={link}
          aria-readonly
        />
        <CopyToClipboard
          text={link}
          onCopy={(_, result) => {
            setIsCopied(result);
          }}
        >
          <Button
            color="primary"
            variant="contained"
            sx={{
              ml: theme.spacing(2),
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {copied ? "Copied" : "Copy link"}
          </Button>
        </CopyToClipboard>
      </Box>
    </Box>
  );
};

export default SharedSocialMedia;
