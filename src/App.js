import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';

const RoutesContainer = styledComponents.main`

`

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <RoutesContainer>
        <h1>Routes go in here</h1>
      </RoutesContainer>
      <Footer />
    </div>
  );
}

export default App;
