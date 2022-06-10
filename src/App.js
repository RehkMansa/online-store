import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import Header from './components/Header';
import HeroSection from './components/homepage/Herosection';

const RoutesContainer = styledComponents.main`

`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <HeroSection/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
