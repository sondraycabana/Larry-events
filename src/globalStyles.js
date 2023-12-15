import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Source Sans pro',sans-serif; 
}
`
export const Container = styled.div`
 z-index: 1;
 width: 100%;
 max-width: 1300px;
 margin-right: auto;
 margin-left: auto;
 padding-right: 50px;
 padding-left: 50px;


 @media screen and (max-width:991px){
    padding-right: 30px;
    padding-left: 30px;
   
 }
`
export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? 'red' : 'red')};
white-space: nowrap;
padding: ${({big})=> (big ? '12px 24px' : '12px 20px')};
margin-bottom:15px;
color: #fff;
font-size: ${({ fontBig})=> (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;


&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#EE4B2B' : '#EE4B2B')};

    @media screen and (max-width: 960px){
      width: 100%;
    }
}
`
export default GlobalStyle