import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Button} from '../../globalStyles'
import {
    InfoSec,
    InfoRow, 
    InfoColumn, 
    TextWrapper,
     TopLine,
     Heading,
     Subtitle,
     ImgWrapper,
     Img
    } from './InfoSection.element';

 const InfoSection = ({
     primary,
     lightBg, 
     imgStart, 
     lightTopLine, 
     lightTextDesc, 
     buttonLabel, 
     description, 
     description2,
     description3,
     headline, 
     lightText,
     topLine ,
        img,
        alt,
        start

    }) => {
    return (
        <>
        <InfoSec lightBg={lightBg}>
            <Container>
            <InfoRow imgStart={imgStart}>
            <InfoColumn>

            <TextWrapper>
        
             <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
             <Heading lightText={lightText}>{headline}</Heading>
             <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
             <Subtitle lightTextDesc={lightTextDesc}>{description2}</Subtitle>
             <Subtitle lightTextDesc={lightTextDesc}>{description3}</Subtitle>
             <Link to='/contact'>
             <Button big fontBig primary={primary}>
             {buttonLabel}
             </Button>
             </Link>
            </TextWrapper>

            </InfoColumn>
            <InfoColumn>
                <ImgWrapper start={start}>
                <Img src={img} alt={alt}/>
                
                </ImgWrapper>
            </InfoColumn>
            </InfoRow>
            </Container>
        </InfoSec>
        </>
    )
}
export default InfoSection
