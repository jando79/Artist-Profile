import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 10px 10px;
  background-image: linear-gradient(260deg,  rgb(42,244,152,255) 0%, #3498db 100%); 
  border: 5px solid yellow;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const Link = styled.a`
  color: black;
  font-family: 'blowbrush';
  margin-bottom: 3px;
  font-size: 15px;
  text-decoration: none;
   
  &:hover {
      color: white;
      transition: 200ms ease-in;
  }
`;

   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 5px;
  font-weight: bold;
`;