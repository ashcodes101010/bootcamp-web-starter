import styled from 'styled-components'

export const Body = styled.div`
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(174.48deg, #9DC2FF 15.79%, #281AC8 116.76%);
`
export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 35px;
  width: 350px;
  padding: 30px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 50px;
  margin-top: 40px;
  img {
    border-radius: 35px;
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1500px;
`

export const StyledButton = styled.button`
  background: linear-gradient(180deg, #15185C 0%, #494C92 100%);
  border-radius: 10px;
  height: 60px;
  width: 180px;
  font-size: 15px;
  padding: 10px;
  color: #FFFFFF;
  transition: height 0.2s, width 0.2s;
  margin-top: 10px;
  margin-bottom: 100px;

  &:hover {
    background: linear-gradient(180deg, #15185C 0%, #494C92 60%);
    height: 63px;
    width: 189px;
  }
`
export const Remove = styled.button`
  background-color: #575757;
  border-radius: 4px;
  height: 40px;
  width: 150px;
  font-size: 15px;
  padding: 10px;
  color: #FFFFFF;
  transition: background-color 0.2s;
  margin-top: 10px;

  &:hover {
    background-color: #757575;
  }
`