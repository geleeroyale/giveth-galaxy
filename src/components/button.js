import styled, { css } from 'styled-components'

const Button = styled.button`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.13em;

  background: none;
  color: #6900ff;

  border: 2px solid #6900ff;
  box-sizing: border-box; /* Button Shadow 1 */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  outline: none;
  cursor: pointer;

  padding: 8px 20px;

  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  a {
    color: white;
  }

  :hover {
    background-color: #6900ff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }

  ${props =>
    props.primary &&
    css`
      font-size: 26px;
      text-transform: uppercase;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 15px;
    `};

  ${props =>
    props.light &&
    css`
      border-color: white;
      color: white;
    `};
`
export default Button
