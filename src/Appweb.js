import Header from "../src/page/Header";
import Main from "../src/page/Main";

function Appweb() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Main />
    </div>
  );
}

export default Appweb;
