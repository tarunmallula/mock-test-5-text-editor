import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: center;
`
export const Card = styled.div`
  background-color: #1b1c22;
  width: 70%;
  display: flex;
  padding: 20px;
`
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`
export const Image = styled.img`
  width: 300px;
  height: 300px;
  align-self: center;
  margin-top: 100px;
  margin-bottom: 100px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  margin-left: 10px;
  border: 1px solid #334155;
  border-radius: 18px;
  width: 50%;
`

export const UnOrderedList = styled.ul`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #334155;
  width: 100%;
  padding: 20px;
  list-style-type: none;
  padding-left: opx;
`

export const ListItem = styled.li`
  margin-right: 5px;
  margin-left: 5px;
`

export const Button1 = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.condition ? '#faff00' : '#f1f5f9')};
`

export const Button2 = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.condition ? '#faff00' : '#f1f5f9')};
`

export const Button3 = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.condition ? '#faff00' : '#f1f5f9')};
`

export const Text = styled.textarea`
  outline: none;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding-top: 20px;
  padding-left: 20px;
  rows: 10;
  columns: 10;
  background-color: transparent;
  color: #cbd5e1;
  font-family: 'Roboto';
  font-style: ${props => (props.condition2 ? 'italic' : 'normal')};
  font-size: 16px;
  font-weight: ${props => (props.condition1 ? 'bold' : 'normal')};
  text-decoration: ${props => (props.condition3 ? 'underline' : 'normal')};
`
