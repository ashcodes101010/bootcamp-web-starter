import styled  from 'styled-components'

export const Container = styled.div`
  min-height: 150vh;
  min-width: 100vw;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: linear-gradient(174.48deg, #9DC2FF 15.79%, #281AC8 116.76%);
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 50px;
  margin: auto;
  text-align: center;
  
`

export const Row = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 30px;
`

export const ItemContainer = styled.div`
  background: #FFFFFF;
  border-radius: 35px;
  width: 350px;
  padding: 40px;
  margin-left: 20px;
  margin-bottom: 20px;
  img {
    border-radius: 35px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  flex-wrap: wrap;
  padding-left: 30px;
`

export const Button = styled.button`
  background-color: #575757;
  border-radius: 15px;
  height: 50px;
  min-width: 150px;
  font-size: 15px;
  padding: 10px;
  color: #FFFFFF;
  transition: background-color 0.2s;
  margin-left: 10px;

  &:hover {
    background-color: #757575;
  }
`

export const AddCartButton = styled.button`
  background-color: #575757;
  border-radius: 15px;
  height: 40px;
  min-width: 150px;
  font-size: 15px;
  padding: 5px;
  color: #FFFFFF;
  transition: background-color 0.2s;

  &:hover {
    background-color: #757575;
  }
`

export const SearchInput = styled.input`
  background-color: #FFFFFF;
  border: 1px solid #D1D1D1;
  box-sizing: border-box;
  border-radius: 15px;
  height: 50px;
  width: 500px;
  text-align: left;
  padding: 15px;
  margin-bottom: 10px;
  outline-width: 0;
`

