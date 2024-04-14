import {useState} from 'react'

import {
  MainContainer,
  ReadMoreLessContainer,
  Heading,
  TagName,
  ReactHooksImage,
  Description,
  ReadLessButton,
} from './styledComponents'

const ReadMore = props => {
  const [isExpand, setIsExpand] = useState(false)
  const {reactHooksDescription} = props

  const shortenedText =
    reactHooksDescription.length > 170
      ? reactHooksDescription.slice(0, 170)
      : null

  const buttonText = isExpand ? 'Less' : 'More'

  const onClickButton = () => {
    setIsExpand(prevState => !prevState)
  }

  return (
    <MainContainer>
      <ReadMoreLessContainer>
        <Heading>React Hooks</Heading>
        <TagName>Hooks are a new addition to React</TagName>
        <ReactHooksImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        {isExpand ? (
          <Description>{reactHooksDescription}</Description>
        ) : (
          <Description>{shortenedText}</Description>
        )}
        <ReadLessButton type="button" onClick={onClickButton}>
          Read {buttonText}
        </ReadLessButton>
      </ReadMoreLessContainer>
    </MainContainer>
  )
}

export default ReadMore
