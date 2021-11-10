import styled from 'styled-components';
function Button({ disabled, children }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: var(--button-font-size, 1rem);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 30px 60px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #00b6d6);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #fff669);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #fff669);
  }
`;

export default Button;
