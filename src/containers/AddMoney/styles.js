import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: #575757;
  border-radius: 4px;
  height: 40px;
  width: 150px;
  font-size: 15px;
  padding: 10px;
  color: #FFFFFF;
  transition: background-color 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: #757575;
  }
`
export const Body = styled.div`
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(174.48deg, #9DC2FF 15.79%, #281AC8 116.76%);
`
export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 35px;
  margin: auto;
  width: 500px;
  padding: 30px;
  margin-bottom: 50px;
  margin-top: 100px;
`

export const InputContainer = styled.div`
  background-color: #F1F1F1;
  border-radius: 8px;
  width: 300px;
  height: 50px;
  text-align: center;
  margin: auto;
  font-size: 20px;
  padding-top: 20px;
  margin-top: 30px;

  input {
    background: transparent;
    border: none;
    text-align: center;
    font-size: 20px;
    outline-width: 0;
  }
`