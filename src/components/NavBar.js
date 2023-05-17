// import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

// const Bar = styled.nav`
//   font-size: 18px;
//   background-color: yellow;
//   font-weight: 600;
//   padding-bottom: 5px;
//   @media (min-width: 768px) {
//     display: flex;
//     justify-content: space-between;
//     padding-bottom: 0;
//     height: 40px;
//     align-items: center;
//   }
// `;
// const MainNav = styled.ul`
//   list-style-type: none;
//   display: ${ props => props.display };
//   flex-direction: column;
//   @media (min-width: 768px) {
//     display: flex !important;
//     margin-right: 30px;
//     flex-direction: row;
//     justify-content: flex-end;
//   }
// `;
// const NavLi = styled.li`
//   text-align: center;
//   margin: 15px auto;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   font-family: blowbrush;
//   &:hover {
//     color: white;
//     transition: 200ms ease-in;
// `;

// const Logo  = NavLink.extend`
//   display: inline-block;
//   font-size: 22px;
//   margin-top: 10px;
//   margin-left: 20px;
// `
// const NavBarToggle = styled.span`
//   position: absolute;
//   top: 10px;
//   right: 20px;
//   cursor: pointer; 
//   color: rgba(255,255,255,0.8);
//   font-size: 24px;
// `
// class Navbar extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {displayNav: (props.displayNav ? 'flex' : 'none')};
//   }
//   toggleNavBar() {
//     this.setState((prevState, props) => {
//       switch(prevState.displayNav) {
//         case 'none':
//           return { displayNav: 'flex'};          
//         case 'flex':
//         default:
//           return { displayNav: 'none'}          
//       }
//     })
//   }
//   render() {
//     return (
//     <Bar>
//       <NavBarToggle onClick={() => this.toggleNavBar()}>
//         <Home />
//       </NavBarToggle>
//       <Logo href="#">logo</Logo>
//       <MainNav display={this.state.displayNav}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/paintings">Paintings</Link>
//           </li>
//           <li>
//             <Link to="/collages">Collage</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/sign-in">Sign In</Link>
//           </li>
//       </ul>
//       </MainNav>
//             <NavLi>
//               <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
//             </NavLi>
//             <NavLi>
//               <Link to="/paintings">Paintings</Link>
//               {/* <span style={{ marginLeft: "10px" }}></span> */}
//             </NavLi>
//             <NavLi>
//               <Link to="/collages">Collage</Link>
//               <span style={{ marginLeft: "10px" }}></span>
//             </NavLi>
//             <NavLi>
//               <Link to="/about" >About</Link>
//           </NavLi>
         
      
//     </Bar>
//   )}
// }

// Navbar.propTypes = {
//   // decides if we initially display the navbar open or not
//   displayNav: PropTypes.bool,
// }

// export default Navbar;
