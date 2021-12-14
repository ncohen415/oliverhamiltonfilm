import React from 'react'
import styled from "styled-components"
import { media } from '../mq'

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 27vh;
  margin: 0 0 1rem 0;
  ${media.small`margin-bottom: 2rem;`}
  ${media.smallMedium`margin-bottom: 0;`}
  ${media.medium`margin-bottom: 2rem;`}
  h1{
    font-family: "Mrs Eaves All Caps";
    font-size: 50px;
  }
  `

const LoadingProject = () => {
    return (
        <LoadingContainer>
            <h1>Loading...</h1>
        </LoadingContainer>
    )
}

export default LoadingProject
