import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Border = styled.div`
  border: 5px solid yellow;

`

export const Foot = styled.nav`
  background-image: linear-gradient(260deg,  rgb(42,244,152,255) 0%, #3498db 100%); 
  height: 35px;
  justify-content: space-between;
  padding: 0.0rem calc((128vw - 1000px) / 2);
`;
  
export const FootLink = styled(Link)`
color: black;
font-family: 'blowbrush';
font-size: 20px;
text-decoration: none;
 
&:hover {
    color: white;
    transition: 200ms ease-in;
}
display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
  
export const FootMenu = styled.div`
  display: flex;

  
  }
`;