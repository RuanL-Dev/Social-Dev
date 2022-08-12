import styled from 'styled-components'

const WiDTH_BREAK = '700px'

const StyledFlex = styled.div`
  display: flex;
`

const StyledImage = styled.div`
  background-image: url('${props => props.image}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100vh;

  @media (max-width: ${WiDTH_BREAK}) {
    display: none;
  }
`

const StyledContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 30px 50px;
  
  @media (min-width: ${WiDTH_BREAK}) {
    min-width: calc(${WiDTH_BREAK} - 100px);
  }
  @media (max-width: ${WiDTH_BREAK}) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  

  height: calc(100vh - 60px);
  overflow-y: auto;

  &:before, &:after {
    content: '';
    margin: auto;
  }
`


 function ImageWithSpace ({ children, image }) {
  return (
    <StyledFlex>
      <StyledImage image={image} />
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledFlex>
  )
}

ImageWithSpace.defaultProps = {
  image: '/coffee-background.jpg'
}

export default ImageWithSpace