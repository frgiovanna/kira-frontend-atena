import * as React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const NavigationItem = styled(BottomNavigationAction)`
  span {
    font-size: 8px;
  }
`;
export default function SimpleBottomNavigation() {
  const { push } = useRouter();

  const handleRedirect = () => {
    push("/");
  };
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        width: 400,
        bottom: 0,
        position: "fixed",
        ".MuiBottomNavigation-root": { backgroundColor: "white" },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <NavigationItem label="calendário" icon={<CalendarMonthIcon />} />
        <NavigationItem
          sx={{ width: 400, fontSize: "4px" }}
          label="conteúdo"
          icon={<LibraryBooksIcon />}
        />
        <NavigationItem onClick={handleRedirect} icon={<HomeRoundedIcon />} />
        <NavigationItem label="chama a Kira" icon={<ForumRoundedIcon />} />
        <NavigationItem label="shopping" icon={<ShoppingCartRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
}
