import styledComponents from 'styled-components';
import Navbar from './Navbar';
import StoreAction from './StoreActions';

const HeaderWrapper = styledComponents.header`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 5%;
  align-items:center;
  max-height: 75px;
  height: 75px;
  overflow:hidden;

`;
const HeaderTop = styledComponents.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  width:100%;

  &>*{
    flex: 0.33
    width:33%;
  }
`;
const LogoWrapper = styledComponents.div`
  img{
    width:100%;
    object-fit:contain;
  }`;
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTop>
        <LogoWrapper>
          <img src="images/logo.svg" alt="logo" />
        </LogoWrapper>
        <Navbar />
        <StoreAction />
      </HeaderTop>
    </HeaderWrapper>
  );
};

export default Header;
