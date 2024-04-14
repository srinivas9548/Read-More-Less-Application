import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`
export const ReadMoreLessContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #1e293b;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const TagName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ReactHooksImage = styled.img`
  width: 100%;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 550px;
    margin-top: 36px;
  }
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    width: 550px;
  }
`

export const ReadLessButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
  background-color: #1f81ff;
  align-self: flex-start;
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  margin-top: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    align-self: center;
  }
`
