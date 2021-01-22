import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 25px;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(178.18deg, #9DC2FF -13.56%, #281AC8 158.3%);

  background-size: cover;
  @media (max-width: 600px) {
    background-image: none;
    background-color: #28265e;
  }
`

export const LoginContainer = styled.div`
    padding: 40px 20px;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: auto;
    border-radius: 5px;
    width: 50%;
    border-radius: 30px;
`

export const Input = styled.input`
    border-radius: 3px;
    margin: auto;
    height: 4em;
    padding: 0.5em 1em;
    margin-top: 2em;
    margin-bottom: 2em;
    width: 50%;
    border: 1px solid #D1D1D1;
    box-sizing: border-box;
    display: flex;
`
export const Label = styled.div`
    display: flex;
    font-family: sans-serif;
    font-size: 1em;
    margin-bottom: 0.1em;
    margin-top: 0.5em;
    align-self: flex-start;
    margin-left: 10em;
`

export const Button = styled.button`
    background: linear-gradient(178.18deg, #9DC2FF -13.56%, #281AC8 158.3%);
    border-radius: 100px;
    border: none;
    padding: 1em;
    margin-bottom: 2em;
    cursor: pointer;

    &:hover {
        color: whitesmoke;
    }
`
export const Title = styled.div`
    /* color: linear-gradient(178.18deg, #9DC2FF -13.56%, #281AC8 158.3%);

    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px; */
    font-family: Tahoma;
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 0.5em;
    background: -webkit-linear-gradient(178.18deg, #9DC2FF -13.56%, #281AC8 158.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Text = styled.a`
    font-size: 2.5em;
    margin-top: 1em;
    align-self: center;
    font-family: Tahoma;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */
    color: #2F2F2F;
`
