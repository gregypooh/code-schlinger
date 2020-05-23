import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"

const appearDuration = 300
const transitionClass = "hover"

const ExhibitA = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <CSSTransition
      in={isHovered}
      timeout={appearDuration}
      classNames={transitionClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledText>Hover me to change opacity</StyledText>
    </CSSTransition>
  )
}

export default ExhibitA

const StyledText = styled.span`
  opacity: 0.5;
  &.${transitionClass}-enter-done {
    opacity: 1;
  }
  transition: opacity ${appearDuration}ms ease;
`
