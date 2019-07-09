import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Content, { Inner } from "../shared/content"
import { Divider, DividerMiddle } from "../shared/divider"

const Experience = ({children, offset}) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
    </Divider>
  </>
)

export default Experience

Experience.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}