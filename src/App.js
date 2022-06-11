import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import Header from './components/Header';
import Homepage from './components/homepage';
import StorePage from './components/store';

const RoutesContainer = styledComponents.main`

`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Homepage />
      <StorePage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
