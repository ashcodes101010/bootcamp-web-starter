import styled  from 'styled-components'

export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 35px;
  width: 400px;
  margin: auto;
  padding: 30px;
  margin-bottom: 50px;
  margin-top: 30px;
`

export const StyledInput = styled.input`
  background-color: #FFFFFF;
  border: 1px solid #D1D1D1;
  box-sizing: border-box;
  border-radius: 15px;
  height: 30px;
  width: 200px;
  text-align: left;
  padding: 15px;
  margin-bottom: 10px;
  outline-width: 0;
`

export const Tag = styled.div`
  background-color: #9DC2FF;
  border: 1px solid #D1D1D1;
  box-sizing: border-box;
  border-radius: 15px;
  height: 40px;
  padding: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
  outline-width: 0;
  margin-right: 5px;
`

export const Delete = styled.button`
    width: 15px;
    height: 15px;
    font-size: 15px;
    text-align: center;
    color: black;
    opacity: 0.5;
    border: none;
    background-color: transparent;
    margin-left: 10px;
    transition: color 0.25s, opacity 0.25s;
    transition-delay: 0.05s;
    outline-width: 0;
   
    &:hover {
        opacity: 1;
        color: crimson;
    }
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: auto;
  flex-wrap: wrap;
`

export const StyledButton = styled.button`
  background-color: #575757;
  border-radius: 4px;
  height: 40px;
  min-width: 150px;
  font-size: 15px;
  padding: 10px;
  color: #FFFFFF;
  transition: background-color 0.2s;
  margin-top: 10px;

  &:hover {
    background-color: #757575;
  }
`