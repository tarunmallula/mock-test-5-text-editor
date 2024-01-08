import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  Card,
  ImgContainer,
  Image,
  Heading,
  TextContainer,
  UnOrderedList,
  ListItem,
  Button1,
  Button2,
  Button3,
  Text,
} from './components/styledComponents'

import './App.css'

class App extends Component {
  state = {
    bold: false,
    italic: false,
    outline: false,
  }

  button1 = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  button2 = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  button3 = () => {
    this.setState(prevState => ({
      outline: !prevState.outline,
    }))
  }

  render() {
    const {bold, italic, outline} = this.state
    return (
      <BgContainer>
        <Card>
          <ImgContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImgContainer>
          <TextContainer>
            <UnOrderedList>
              <ListItem>
                <Button1
                  as="button"
                  data-testid="bold"
                  condition={bold}
                  onClick={this.button1}
                >
                  <VscBold size={25} />
                </Button1>
              </ListItem>
              <ListItem>
                <Button2
                  as="button"
                  data-testid="italic"
                  condition={italic}
                  onClick={this.button2}
                >
                  <GoItalic size={25} />
                </Button2>
              </ListItem>
              <ListItem>
                <Button3
                  as="button"
                  data-testid="underline"
                  condition={outline}
                  onClick={this.button3}
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </ListItem>
            </UnOrderedList>
            <Text condition1={bold} condition2={italic} condition3={outline} />
          </TextContainer>
        </Card>
      </BgContainer>
    )
  }
}
export default App
