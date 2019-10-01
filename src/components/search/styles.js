import React from "react"
import styled, { css } from "styled-components"
import { Algolia } from "styled-icons/fa-brands/Algolia"

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

const focus = css`
  background: white;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 5em;
`

const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`

const expand = css`
  background: ${props => props.theme.veryLightGray};
  width: 8em;
  margin-left: -1.6em;
  padding-left: 1.6em;
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  z-index: 305;
  background: transparent;
  transition: ${props => props.theme.shortTrans};
  border-radius: ${props => props.theme.smallBorderRadius};
  {hightlight-next-line}
  ${props => (props.collapse ? collapse : expand)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  z-index: 303;
  align-items: center;
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};

  max-height: 70vh;
  overflow: scroll;
  z-index: 302;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: calc(100% - 5em);
  width: 100vw;
  max-width: 30em;
  min-width: 16em;
  box-shadow: 0 0px 2px 0px;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${props => props.theme.lightGray};
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
    list-style: none;
  }
`

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)
