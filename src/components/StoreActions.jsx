import { FiHeart, FiShoppingCart, FiAlignJustify } from 'react-icons/fi';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap:20px;

  svg{
    cursor:pointer;
  }
`;

const StoreAction = () => {
  return (
    <Wrapper>
      <FiHeart />
      <FiShoppingCart />
      <FiAlignJustify />
    </Wrapper>
  );
};

export default StoreAction;
