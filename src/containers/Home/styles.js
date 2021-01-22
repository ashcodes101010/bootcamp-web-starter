import styled  from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  margin: auto;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: linear-gradient(174.48deg, #9DC2FF 15.79%, #281AC8 116.76%);
`
export const Row = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`

export const Button = styled.button`
  border-radius: 4px;
  height: 40px;
  width: 50px;
  font-size: 10px;
  transition: background-color 0.2s, color  0.2s;
  margin-right: 10px;
&:hover {
  color:#000000;
  background-color: #FFFFFF;
  }
`

export const Search = styled.input`
    border: 1px solid grey;
    border-radius: 5px;
    width: 50%;
    padding: 2px 23px 2px 30px;
    outline: 0;
    background-color: #f5f5f5;
`