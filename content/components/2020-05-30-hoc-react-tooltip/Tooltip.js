import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"

const transitionClass = "tooltip"
const appearDuration = 300

const Tooltip = ({ content, className, enabled = true, children }) => {
  const [isHovered, setIsHovered] = useState(false)

  const onMouseEnter = () => {
    if (enabled) {
      setIsHovered(true)
    }
  }
  const onMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <StyledTooltip className={className}>
      <CSSTransition
        in={isHovered}
        timeout={appearDuration}
        unmountOnExit={true}
        classNames={transitionClass}
      >
        <StyledTooltipContentContainer>
          <StyledTooltipContent>{content}</StyledTooltipContent>
        </StyledTooltipContentContainer>
      </CSSTransition>
      <StyledChildren onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </StyledChildren>
    </StyledTooltip>
  )
}

export default Tooltip

const StyledTooltipContentContainer = styled.div`
  width: 250px;
  background-color: #202224;
  color: #fff;
  padding: 0.875rem;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  opacity: 0;
  &.${transitionClass}-enter {
    opacity: 0.01;
  }

  &.${transitionClass}-enter-done {
    opacity: 1;
  }

  transition: opacity ${appearDuration}ms ease;
`

const StyledTooltipContent = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
`

const StyledChildren = styled.div``

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;
`
