import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ width: 400 , bottom: 0, position: 'fixed'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="calendário"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction sx={{ width: 400, fontSize: "4px" }}label="conteúdo" icon={<LibraryBooksIcon />} />
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction label="chama a Kira" icon={<ForumIcon />} />
        <BottomNavigationAction label="shopping" icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </Box>
  );
}
