import styled  from 'styled-components'

export const Body = styled.div`
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(174.48deg, #9DC2FF 15.79%, #281AC8 116.76%);
`

export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 35px;
  width: 1100px;
  margin: auto;
  padding: 50px;
  margin-bottom: 50px;
  margin-top: 30px;
`

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 1000px;
  margin: auto;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .remove {
    width: 10px;
  }

  .update {
    width: 20px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #9DC2FF;
  }
`
