import GlobalStyles from './components/styles/Global';
import styledComponents from 'styled-components';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

const RoutesContainer = styledComponents.main`

`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<div>Hello</div>} />
      </Routes>
    </div>
  );
}

export default App;
