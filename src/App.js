import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>FlavorFusion</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
        <Footer>
          <p>&copy; 2024 FlavorFusion. All rights reserved.</p>
          <p>Developed by <a href="https://wa.me/+2348140898790" target="_blank" rel="noreferrer" className="footer-link">ADEOLUWA</a></p>
        </Footer>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0.5rem;
  gap: 20px;
    @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  a{
  color: white;
}
}
`;


export default App;
