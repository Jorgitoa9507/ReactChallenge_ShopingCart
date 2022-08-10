import { Stack, Typography } from "@mui/material";
import { LinkItem } from "./LinksMenu";

export interface FooterLinksMenuProps {
  title: string;
  linksName: string[];
}

const FooterLinksMenu: React.FC<FooterLinksMenuProps> = ({
  title,
  linksName,
}) => {
  return (
    <Stack spacing={1} alignItems="start">
      <Typography
        variant="subtitle2"
        sx={(theme) => ({
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.dark["01"],
        })}>
        {title}
      </Typography>
      {linksName.map((link) => (
        <LinkItem
          sx={{
            alignSelf: "start",
            padding: "4px 4px 4px 0px",
          }} /* color={(theme) => theme.palette.dark["03"]} */
        >
          {link}
        </LinkItem>
      ))}
    </Stack>
  );
};

export default FooterLinksMenu;
