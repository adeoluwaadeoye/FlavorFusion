import styled from "styled-components";
import hero from "./assets/hero.jpg";

const LandingPage = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <h1>Welcome to My Recipes</h1>
          <p>Discover delicious recipes for every occasion!</p>
        </HeroContent>
        <HeroImage src={hero} alt="Hero Image" />
      </HeroSection>
      <Footer>
        <p>&copy; 2024 My Recipes. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 50px;
`;

export default LandingPage;
