import styled from 'styled-components';
function Button({ disabled, children }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  z-index: 3;
  top: 45%;
  left: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: var(--button-font-size, 1rem);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 13px 20px);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background: var(--button-bg-color, #ffffff);
  color: var(--button-color, #4d4d4d);
  transition: all 0.4s;
  position: absolute;
  &:active,
  &:hover,
  &:focus {
    color: var(--button-color, #000000);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &::after {
    display: block;
    content: '';
    border: 2px solid #4d4d4d;
    width: 40px;
    heigth: 2px;
    top: 10;
    background: #4d4d4d;
    margin-top: 10px;
  }
`;

export default Button;
