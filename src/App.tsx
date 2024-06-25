import { Container } from "@mui/material";

import Search from "@components/Search";
import ContentBlock from "@components/ContentBlock";
import CustomSnackbar from "@components/CustomSnackbar/CustomSnackbar";

function App() {
  return (
    <>
      <Container sx={{ background: "#dbdbd9" }}>
        <Search />
        <ContentBlock />
      </Container>
      <CustomSnackbar />
    </>
  );
}

export default App;
