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
  `

const LoadingProject = () => {
    return (
        <LoadingContainer>
            <iframe src="https://giphy.com/embed/L05HgB2h6qICDs5Sms" width="100" height="100" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </LoadingContainer>
    )
}

export default LoadingProject
