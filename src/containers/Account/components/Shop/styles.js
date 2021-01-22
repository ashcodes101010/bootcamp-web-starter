import styled  from 'styled-components'

export const Delete = styled.button`
    width: 23px;
    height: 23px;
    font-size: 20px;
    text-align: center;
    color: black;
    opacity: 0.5;
    border: none;
    background-color: transparent;
    margin-left: 10px;
    transition: color 0.25s, opacity 0.25s, font-size 0.25s, width 0.25s, height 0.25s;
    transition-delay: 0.05s;
    outline-width: 0;
   
    &:hover {
        width: 23.5px;
        height: 23.5px;
        opacity: 1;
        color: crimson;
        font-size: 25px;
    }
`

export const Update = styled.button`
  background-color: #575757;
  border-radius: 4px;
  height: 30px;
  width: 80px;
  font-size: 15px;
  color: #FFFFFF;
  transition: background-color 0.2s;

  &:hover {
    background-color: #757575;
  }
`

export const Add = styled.button`
  background-color: #575757;
  border-radius: 4px;
  height: 40px;
  width: 110px;
  font-size: 17px;
  color: #FFFFFF;
  transition: background-color 0.2s;
  margin-top: 5px;
  margin-right: 890px;

  &:hover {
    background-color: #757575;
  }
`

export const StyledButton = styled.button`
  background: transparent;
  border-radius: 4px;
  height: 40px;
  width: 50px;
  font-size: 10px;
  transition: background-color 0.2s, color  0.2s;
  margin-right: 10px;
  &:hover {
    background-color: #757575;
    color: white;
  }
`