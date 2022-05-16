/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Nav from "../Navbar/Nav";
import Video from "./Video";
import Overlay from "./Overlay";
import Info from "./Info";

const Main = ({ user }) => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <Nav user={user} />
    <Info />
    <Video />
  </section>
);

const styles = css`
  width: 100%;
  height: 100vh;
`;

export default Main;
