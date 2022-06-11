import styledComponents from 'styled-components';
import Card from './Card';
import FeaturedSection from './Featured';
import HeroSection from './Herosection';
const HomeWrapper = styledComponents.div``;
const Homepage = () => {
  return (
    <HomeWrapper>
      <HeroSection />
      <FeaturedSection /> 
    </HomeWrapper>
  );
};

export default Homepage;
