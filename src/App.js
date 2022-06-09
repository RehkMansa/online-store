import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import Header from './components/Header';

const RoutesContainer = styledComponents.main`

`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <RoutesContainer>
        <h1>Routes go in here</h1>
      </RoutesContainer>
      <Footer />
    </div>
  );
}

export default App;
