import React from "react";
import {
  Border,
  Foot,
  FootLink,
  FootMenu,
} from './FooterStyles';
  
const Footer = () => {
  return (
    <>
      <Border>
        <Foot>
          <FootMenu>
            <FootLink to='/sign-in' activeStyle>
              Admin
            </FootLink>
            {/* <FootLink to='/paintings' activeStyle>
              Paintings
            </FootLink>
            <FootLink activeStyle>
              Collage
            </FootLink> */}
            <FootLink to='https://www.instagram.com/recogoods/' activeStyle>
              Instagram
            </FootLink>
          </FootMenu>
        </Foot>
      </Border>
    </>
  );
};
  
export default Footer;
// import React from "react";
// import {
//   Box,
//   Container,
//   Row,
//   Column,
//   Link,
// } from "./FooterStyles";

  
// const Footer = () => {
//   return (
//     <Box>

//       <Container>
//         <Row>
//           <Column>
           
//             <Link to="/sign-in">Admin Login</Link>
//           </Column>
          
//           <Column>
            
//             <Link href="djandronart@gmail.com">Email the Artist</Link>
            
//           </Column>
//           <Column>
            
//             <Link href="https://www.instagram.com/recogoods/">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>
//                   Instagram
//                 </span>
//               </i>
//             </Link>
           
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;