import React, { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    setIsSharedMediaOpen(false);
    setIsCopied(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsSharedMediaOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Box
      sx={{
        maxWidth: "100%",
        width: "100%",
        height: "100vh",
        background: "rgba(0,0,0,0.2)",
        position: "fixed",
        zIndex: theme.zIndex.modal,
        display: isSharedMediaOpen ? "flex" : "none",
        justifyContent: mobile ? "normal" : "center",
        alignItems: mobile ? "normal" : "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Box
        ref={mobile ? null : ref}
        boxShadow={1}
        sx={{
          maxWidth: mobile ? "100%" : "742px",
          width: "100%",
          background: theme.palette.background.paper,
          p: mobile ? theme.spacing(1.5) : theme.spacing(3),
          zIndex: theme.zIndex.modal,
          position: mobile ? "absolute" : "static",
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: theme.spacing(1),
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="titleMedium" sx={{ fontWeight: theme.typography.fontWeightRegular }}>
            Share this food
          </Typography>
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
        <Box
          sx={{
            mt: mobile ? theme.spacing(3) : theme.spacing(5),
            mb: mobile ? theme.spacing(1) : theme.spacing(3),
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.customGray.textDark,
          }}
        >
          <Typography
            variant="labelLarge"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.customGray.textDark,
            }}
          >
            or copy the url
          </Typography>
        </Box>
        <Box
          sx={{
            mt: theme.spacing(1),
            mb: theme.spacing(3),
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
            onCopy={(_: any, result: boolean) => {
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
    </Box>
  );
};

export default SharedSocialMedia;
