import { useNavigate } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Box from "@material-ui/core/Box/Box";
import { TitleMenu } from "../Text/Title";
import { MenuContainer } from "../Container/ContainerMenu";
import { CgPokemon } from "react-icons/cg";

export default function MenuAppBar() {
  let navigate = useNavigate();

  const onClickHome = (event: any) => {
    event.preventDefault();
    navigate("/");
  };

  const onClickHistory = (event: any) => {
    event.preventDefault();
    navigate("/history");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <MenuContainer>
          <CgPokemon color="white" size={30} style={{ marginRight: "5px" }} />
          <TitleMenu onClick={onClickHome}>Pokemon Trader</TitleMenu>
          <TitleMenu onClick={onClickHistory}>Historico</TitleMenu>
        </MenuContainer>
      </AppBar>
    </Box>
  );
}
