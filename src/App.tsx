import { Container } from "@mui/material";

import Search from "@components/Search";
import ContentBlock from "@components/ContentBlock";

function App() {
  return (
    <Container sx={{ background: "#dbdbd9" }}>
      <Search />
      <ContentBlock />
    </Container>
  );
}

export default App;
