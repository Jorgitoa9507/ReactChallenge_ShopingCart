import { Box, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import { BsTelephoneFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrLinkedinOption,
  GrYoutube,
} from "react-icons/gr";
import { LogoBox } from "./Header";
import { styled } from "@mui/material/styles";
import FooterLinksMenu from "../components/FooterLinksMenu";
import { ReactComponent as AmericanFlag } from "../assets/icons/american-flag.svg";
import { ElementType } from "react";

const SocialIconBox = styled(Box)(({ theme }) => ({
  height: "30px",
  width: "30px",
  borderRadius: "50%",
  backgroundColor: theme.palette.dark["04"],
  color: theme.palette.white.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SocialIcons = [
  <GrFacebookOption fontSize={22} />,
  <GrTwitter />,
  <GrInstagram />,
  <GrLinkedinOption />,
  <GrYoutube />,
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        backgroundColor: theme.palette.dark["10"],
        padding: "80px 92px 0px",
      })}>
      <Grid
        container
        spacing={"200px"}
        paddingBottom="40px !important"
        columns={25}>
        <Grid item xs={7}>
          <Stack spacing={3}>
            <LogoBox>LOGO</LogoBox>
            <Typography
              sx={(theme) => ({
                fontSize: 15,
                color: theme.palette.dark["05"],
                fontWeight: theme.typography.fontWeightRegular,
              })}>
              We sell custom products for all your needs. Packs and bulk
              products that you will enjoy.
            </Typography>
            <Box alignItems="center" display="flex">
              <BsTelephoneFill />
              <Typography
                sx={(theme) => ({
                  fontSize: 15,
                  color: theme.palette.dark["01"],
                  fontWeight: theme.typography.fontWeightBold,
                  paddingLeft: "8px",
                  display: "inline",
                })}>
                +1-202-555-0129
              </Typography>
            </Box>
            <Stack spacing={1} direction="row" marginTop="40px !important">
              {SocialIcons.map((icon, index) => (
                <SocialIconBox key={index}>{icon}</SocialIconBox>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item paddingLeft="100px !important">
          <FooterLinksMenu
            title="Our Company"
            linksName={[
              "About us",
              "FAQ",
              "Partnership",
              "Sustainability",
              "Blog",
            ]}
          />
        </Grid>
        <Grid item>
          <FooterLinksMenu
            title="How can we help"
            linksName={["Place a ticket", "Track your order", "Help center"]}
          />
        </Grid>
        <Grid item>
          <FooterLinksMenu
            title="Information"
            linksName={["Contact us", "Live chat", "Privacy", "Terms of use"]}
          />
        </Grid>
      </Grid>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          padding: "80px 0px 76px 0px",
        }}>
        <Typography
          sx={(theme) => ({
            fontSize: 15,
            color: theme.palette.dark["05"],
            fontWeight: theme.typography.fontWeightRegular,
          })}>
          © 2022 Customer Products. All rights reserved.
        </Typography>
        <Stack direction="row" spacing="36px">
          <Box
            component="span"
            sx={(theme) => ({
              fontSize: "14px",
              fontWeight: theme.typography.fontWeightRegular,
              color: theme.palette.dark["01"],
              display: "flex",
              alignItems: "center",
            })}>
            <Box
              component="span"
              color={(theme) => theme.palette.dark["04"]}
              paddingRight="8px">
              Region:
            </Box>
            <AmericanFlag fontSize={20} />
            <Box
              paddingLeft="4px"
              paddingRight="4px"
              fontWeight={(theme) => theme.typography.fontWeightMedium}>
              United States
            </Box>
            <MdKeyboardArrowDown />
          </Box>
          <Box
            component="span"
            sx={(theme) => ({
              fontSize: "14px",
              fontWeight: theme.typography.fontWeightRegular,
              color: theme.palette.dark["01"],
              display: "flex",
              alignItems: "center",
            })}>
            <Box
              component="span"
              color={(theme) => theme.palette.dark["04"]}
              paddingRight="8px">
              Languaje:
            </Box>
            <Box
              paddingLeft="4px"
              paddingRight="4px"
              fontWeight={(theme) => theme.typography.fontWeightMedium}>
              English
            </Box>
            <MdKeyboardArrowDown />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
