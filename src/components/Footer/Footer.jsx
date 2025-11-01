import React, { Component , useState} from "react";
import { Container } from "../Container/Container";
import style from "./Footer.module.scss";

import check from "../../images/check.svg";
import logo from "../../images/logo.svg";
import insta from "../../images/instagram.svg";
import fb from "../../images/facebook.svg";
import twitt from "../../images/twitter.svg";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";


export const Footer = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [followOpen, setFollowOpen] = useState(false);

  return (
    <footer className={style.footer}>
      <div className={style.topFooter}>
        <Container>
          <ul className={style.topFooterList}>
            <li className={style.topFooterItem}>
              <img className={style.topFooterSvg} src={check} alt="check" />
              <p className={style.topFooterText}>Duties and Taxes Guaranteed</p>
            </li>
            <li className={style.topFooterItem}>
              <img className={style.topFooterSvg} src={check} alt="check" />
              <p className={style.topFooterText}>Free Express Shipping</p>
            </li>
            <li className={style.topFooterItem}>
              <img className={style.topFooterSvg} src={check} alt="check" />
              <p className={style.topFooterText}>Customer Love</p>
            </li>
            <li className={style.topFooterItem}>
              <img className={style.topFooterSvg} src={check} alt="check" />
              <p className={style.topFooterText}>Easy Returns</p>
            </li>
            <li className={style.topFooterItem}>
              <img className={style.topFooterSvg} src={check} alt="check" />
              <p className={style.topFooterText}>Secure Payment</p>
            </li>
          </ul>
        </Container>
      </div>

      <div className={style.mainFooter}>
        <Container>
          <ul className={style.mainFooterList}>
            <li className={style.mainFooterItem}>
              <div className={style.mainFooterLogo}>
                <img src={logo} className={style.mainFooterSvg} alt="logo" />
              </div>
            </li>

            <li className={`${style.mainFooterItem} ${featuresOpen ? style.open : ""}`}>
              <div className={style.footerTitleCenter}>
                <h3 className={style.mainFooterItemTitle}>features</h3>
                <button
                  className={style.footerFunctunalButton}
                  onClick={() => setFeaturesOpen((open) => !open)}
                  aria-expanded={featuresOpen}
                >
                  <img
                    src={featuresOpen ? minus : plus}
                    alt={featuresOpen ? "collapse" : "expand"}
                    className={style.footerFunctunalSvg}
                  />
                </button>
              </div>
              <ul className={`${style.footerFeaturesList} ${style.footerList}`}>
                <li className={style.footerFeaturesItem}>
                  <a href="#" className={style.footerFeaturesItemLink}>men</a>
                </li>
                <li className={style.footerFeaturesItem}>
                  <a href="#" className={style.footerFeaturesItemLink}>women</a>
                </li>
                <li className={style.footerFeaturesItem}>
                  <a href="#" className={style.footerFeaturesItemLink}>boys</a>
                </li>
                <li className={style.footerFeaturesItem}>
                  <a href="#" className={style.footerFeaturesItemLink}>girls</a>
                </li>
                <li className={style.footerFeaturesItem}>
                  <a href="#" className={style.footerFeaturesItemLink}>new arrivals</a>
                </li>
                <li className={style.footerFeaturesItem}>
                  <a href="#" className={style.footerFeaturesItemLink}>shoes</a>
                </li>
                <li className={style.footerFeaturesItem}>
                  <a href="#" className={style.footerFeaturesItemLink}>clothes</a>
                </li>
                <li className={style.footerFeaturesItem}>
                  <a href="#" className={style.footerFeaturesItemLink}>accessories</a>
                </li>
              </ul>
            </li>

            <li className={`${style.mainFooterItem} ${menuOpen ? style.open : ""}`}>
              <div className={style.footerTitleCenter}>
                <h3 className={style.mainFooterItemTitle}>Menu</h3>
                <button
                  className={style.footerFunctunalButton}
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-expanded={menuOpen}
                >
                  <img
                    src={menuOpen ? minus : plus}
                    alt={menuOpen ? "collapse" : "expand"}
                    className={style.footerFunctunalSvg}
                  />
                </button>
              </div>
              <ul className={`${style.footerMenuList} ${style.footerList}`}>
                <li className={style.footerMenuItem}>
                  <a href="#" className={style.footerMenuItemLink}>About us</a>
                </li>
                <li className={style.footerMenuItem}>
                  <a href="#" className={style.footerMenuItemLink}>contact us</a>
                </li>
                <li className={style.footerMenuItem}>
                  <a href="#" className={style.footerMenuItemLink}>my account</a>
                </li>
                <li className={style.footerMenuItem}>
                  <a href="#" className={style.footerMenuItemLink}>orders history</a>
                </li>
                <li className={style.footerMenuItem}>
                  <a href="#" className={style.footerMenuItemLink}>my wishlist</a>
                </li>
                <li className={style.footerMenuItem}>
                  <a href="#" className={style.footerMenuItemLink}>blog</a>
                </li>
                <li className={style.footerMenuItem}>
                  <a href="#" className={style.footerMenuItemLink}>login</a>
                </li>
              </ul>
            </li>

            <li className={`${style.mainFooterItem} ${contactOpen ? style.open : ""}`}>
              <div className={style.footerTitleCenter}>
                <h3 className={style.mainFooterItemTitle}>contact us</h3>
                <button
                  className={style.footerFunctunalButton}
                  onClick={() => setContactOpen((open) => !open)}
                  aria-expanded={contactOpen}
                >
                  <img
                    src={contactOpen ? minus : plus}
                    alt={contactOpen ? "collapse" : "expand"}
                    className={style.footerFunctunalSvg}
                  />
                </button>
              </div>
              <ul className={`${style.footerContactUsList} ${style.footerList}`}>
                <li className={style.footerContactUsItem}>
                  <h4 className={style.mainFooterItemSubtitle}>Address:</h4>
                  <a href="#" className={style.mainFooterItemContacts}>123 STREET NAME, CITY, ENGLAND</a>
                </li>
                <li className={style.footerContactUsItem}>
                  <h4 className={style.mainFooterItemSubtitle}>Phone:</h4>
                  <a href="#" className={style.mainFooterItemContacts}>(123) 456-7890</a>
                </li>
                <li className={style.footerContactUsItem}>
                  <h4 className={style.mainFooterItemSubtitle}>Email:</h4>
                  <a href="#" className={style.mainFooterItemContacts}>MAIL@EXAMPLE.COM</a>
                </li>
                <li className={style.footerContactUsItem}>
                  <h4 className={style.mainFooterItemSubtitle}>working days/hours</h4>
                  <a href="#" className={style.mainFooterItemContacts}>MON - SUN / 9:00AM - 8:00PM</a>
                </li>
              </ul>
            </li>

            <li className={`${style.mainFooterItem} ${followOpen ? style.open : ""}`}>
              <div className={style.footerTitleCenter}>
                <h3 className={style.mainFooterItemTitle}>follow us</h3>
                <button
                  className={style.footerFunctunalButton}
                  onClick={() => setFollowOpen((open) => !open)}
                  aria-expanded={followOpen}
                >
                  <img
                    src={followOpen ? minus : plus}
                    alt={followOpen ? "collapse" : "expand"}
                    className={style.footerFunctunalSvg}
                  />
                </button>
              </div>
              <ul className={`${style.footerFollowUsList} ${style.footerList}`}>
                <li className={style.footerFollowUsItem}>
                  <img src={fb} alt="facebook" className={style.footerFollowUsIcon} />
                  <a href="#" className={style.footerFollowUsSocialMedia}>FACEBOOK</a>
                </li>
                <li className={style.footerFollowUsItem}>
                  <img src={twitt} alt="twitter" className={style.footerFollowUsIcon} />
                  <a href="#" className={style.footerFollowUsSocialMedia}>TWITTER</a>
                </li>
                <li className={style.footerFollowUsItem}>
                  <img src={insta} alt="instagram" className={style.footerFollowUsIcon} />
                  <a href="#" className={style.footerFollowUsSocialMedia}>INSTAGRAM</a>
                </li>
              </ul>
            </li>

            <li className={style.mainFooterItem}>
              <div className={style.mainFooterSubscribe}>
                <h3 className={style.mainFooterItemTitle}>join us</h3>
                <a href="#" className={style.mainFooterSubscribeText}>
                  Subscribe to our newsletters
                </a>
                <input
                  type="email"
                  className={style.mainFooterSubscribeInput}
                  placeholder="Email address"
                />
                <button className={style.mainFooterSubscribeButton}>
                  Subscribe!
                </button>
              </div>
            </li>
          </ul>

          <div className={style.footerBottom}>
            <hr className={style.footerBottomHr} />
            <p className={style.footerBottomText}>
              © 2019. Crisp theme Developed by Belvg
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};



//  export class Footer extends Component {
//   state = {
//     featuresOpen: false,
//     menuOpen:     false,
//     contactOpen:  false,
//     followOpen:   false,
//   };

//   toggleSection = (key) => () => {
//     this.setState((prev) => ({ [key]: !prev[key] }));
//   };

//   render() {
//     const { featuresOpen, menuOpen, contactOpen, followOpen } = this.state;

//     return (
//       <footer className={style.footer}>
       
//         <div className={style.topFooter}>
//           <Container>
//             <ul className={style.topFooterList}>
//               <li className={style.topFooterItem}>
//                 <img className={style.topFooterSvg} src={check} alt="" />
//                 <p className={style.topFooterText}>
//                   Duties and Taxes Guaranteed
//                 </p>
//               </li>
//               <li className={style.topFooterItem}>
//                 <img className={style.topFooterSvg} src={check} alt="" />
//                 <p className={style.topFooterText}>Free Express Shipping</p>
//               </li>
//               <li className={style.topFooterItem}>
//                 <img className={style.topFooterSvg} src={check} alt="" />
//                 <p className={style.topFooterText}>Customer Love</p>
//               </li>
//               <li className={style.topFooterItem}>
//                 <img className={style.topFooterSvg} src={check} alt="" />
//                 <p className={style.topFooterText}>Easy Returns</p>
//               </li>
//               <li className={style.topFooterItem}>
//                 <img className={style.topFooterSvg} src={check} alt="" />
//                 <p className={style.topFooterText}>Secure Payment</p>
//               </li>
//             </ul>
//           </Container>
//         </div>

      
//         <div className={style.mainFooter}>
//           <Container>
//             <ul className={style.mainFooterList}>
              
          
//               <li className={style.mainFooterItem}>
//                 <div className={style.mainFooterLogo}>
//                   <img
//                     src={logo}
//                     className={style.mainFooterSvg}
//                     alt="logo"
//                   />
//                 </div>
//               </li>

           
//               <li
//                 className={`${style.mainFooterItem} ${
//                   featuresOpen ? style.open : ""
//                 }`}
//               >
//                 <div className={style.footerTitleCenter}>
//                   <h3 className={style.mainFooterItemTitle}>features</h3>
//                   <button
//                     className={style.footerFunctunalButton}
//                     onClick={this.toggleSection("featuresOpen")}
//                     aria-expanded={featuresOpen}
//                   >
//                     <img
//                       src={featuresOpen ? minus : plus}
//                       alt={featuresOpen ? "collapse" : "expand"}
//                       className={style.footerFunctunalSvg}
//                     />
//                   </button>
//                 </div>
//                 <ul
//                   className={`${style.footerFeaturesList} ${style.footerList}`}
//                 >
//                   <li className={style.footerFeaturesItem}>
//                     <a
//                       href="#"
//                       className={style.footerFeaturesItemLink}
//                     >
//                       men
//                     </a>
//                   </li>
//                   <li className={style.footerFeaturesItem}>
//                     <a
//                       href="#"
//                       className={style.footerFeaturesItemLink}
//                     >
//                       women
//                     </a>
//                   </li>
//                   <li className={style.footerFeaturesItem}>
//                     <a
//                       href="#"
//                       className={style.footerFeaturesItemLink}
//                     >
//                       boys
//                     </a>
//                   </li>
//                   <li className={style.footerFeaturesItem}>
//                     <a
//                       href="#"
//                       className={style.footerFeaturesItemLink}
//                     >
//                       girls
//                     </a>
//                   </li>
//                   <li className={style.footerFeaturesItem}>
//                     <a
//                       href="#"
//                       className={style.footerFeaturesItemLink}
//                     >
//                       new arrivals
//                     </a>
//                   </li>
//                   <li className={style.footerFeaturesItem}>
//                     <a
//                       href="#"
//                       className={style.footerFeaturesItemLink}
//                     >
//                       shoes
//                     </a>
//                   </li>
//                   <li className={style.footerFeaturesItem}>
//                     <a
//                       href="#"
//                       className={style.footerFeaturesItemLink}
//                     >
//                       clothes
//                     </a>
//                   </li>
//                   <li className={style.footerFeaturesItem}>
//                     <a
//                       href="#"
//                       className={style.footerFeaturesItemLink}
//                     >
//                       accessories
//                     </a>
//                   </li>
//                 </ul>
//               </li>

            
//               <li
//                 className={`${style.mainFooterItem} ${
//                   menuOpen ? style.open : ""
//                 }`}
//               >
//                 <div className={style.footerTitleCenter}>
//                   <h3 className={style.mainFooterItemTitle}>Menu</h3>
//                   <button
//                     className={style.footerFunctunalButton}
//                     onClick={this.toggleSection("menuOpen")}
//                     aria-expanded={menuOpen}
//                   >
//                     <img
//                       src={menuOpen ? minus : plus}
//                       alt={menuOpen ? "collapse" : "expand"}
//                       className={style.footerFunctunalSvg}
//                     />
//                   </button>
//                 </div>
//                 <ul className={`${style.footerMenuList} ${style.footerList}`}>
//                   <li className={style.footerMenuItem}>
//                     <a
//                       href="#"
//                       className={style.footerMenuItemLink}
//                     >
//                       About us
//                     </a>
//                   </li>
//                   <li className={style.footerMenuItem}>
//                     <a
//                       href="#"
//                       className={style.footerMenuItemLink}
//                     >
//                       contact us
//                     </a>
//                   </li>
//                   <li className={style.footerMenuItem}>
//                     <a
//                       href="#"
//                       className={style.footerMenuItemLink}
//                     >
//                       my account
//                     </a>
//                   </li>
//                   <li className={style.footerMenuItem}>
//                     <a
//                       href="#"
//                       className={style.footerMenuItemLink}
//                     >
//                       orders history
//                     </a>
//                   </li>
//                   <li className={style.footerMenuItem}>
//                     <a
//                       href="#"
//                       className={style.footerMenuItemLink}
//                     >
//                       my wishlist
//                     </a>
//                   </li>
//                   <li className={style.footerMenuItem}>
//                     <a
//                       href="#"
//                       className={style.footerMenuItemLink}
//                     >
//                       blog
//                     </a>
//                   </li>
//                   <li className={style.footerMenuItem}>
//                     <a
//                       href="#"
//                       className={style.footerMenuItemLink}
//                     >
//                       login
//                     </a>
//                   </li>
//                 </ul>
//               </li>

             
//               <li
//                 className={`${style.mainFooterItem} ${
//                   contactOpen ? style.open : ""
//                 }`}
//               >
//                 <div className={style.footerTitleCenter}>
//                   <h3 className={style.mainFooterItemTitle}>contact us</h3>
//                   <button
//                     className={style.footerFunctunalButton}
//                     onClick={this.toggleSection("contactOpen")}
//                     aria-expanded={contactOpen}
//                   >
//                     <img
//                       src={contactOpen ? minus : plus}
//                       alt={contactOpen ? "collapse" : "expand"}
//                       className={style.footerFunctunalSvg}
//                     />
//                   </button>
//                 </div>
//                 <ul
//                   className={`${style.footerContactUsList} ${style.footerList}`}
//                 >
//                   <li className={style.footerContactUsItem}>
//                     <h4 className={style.mainFooterItemSubtitle}>
//                       Address:
//                     </h4>
//                     <a
//                       href="#"
//                       className={style.mainFooterItemContacts}
//                     >
//                       123 STREET NAME, CITY, ENGLAND
//                     </a>
//                   </li>
//                   <li className={style.footerContactUsItem}>
//                     <h4 className={style.mainFooterItemSubtitle}>
//                       Phone:
//                     </h4>
//                     <a
//                       href="#"
//                       className={style.mainFooterItemContacts}
//                     >
//                       (123) 456-7890
//                     </a>
//                   </li>
//                   <li className={style.footerContactUsItem}>
//                     <h4 className={style.mainFooterItemSubtitle}>
//                       Email:
//                     </h4>
//                     <a
//                       href="#"
//                       className={style.mainFooterItemContacts}
//                     >
//                       MAIL@EXAMPLE.COM
//                     </a>
//                   </li>
//                   <li className={style.footerContactUsItem}>
//                     <h4 className={style.mainFooterItemSubtitle}>
//                       working days/hours
//                     </h4>
//                     <a
//                       href="#"
//                       className={style.mainFooterItemContacts}
//                     >
//                       MON - SUN / 9:00AM - 8:00PM
//                     </a>
//                   </li>
//                 </ul>
//               </li>

//               <li
//                 className={`${style.mainFooterItem} ${
//                   followOpen ? style.open : ""
//                 }`}
//               >
//                 <div className={style.footerTitleCenter}>
//                   <h3 className={style.mainFooterItemTitle}>follow us</h3>
//                   <button
//                     className={style.footerFunctunalButton}
//                     onClick={this.toggleSection("followOpen")}
//                     aria-expanded={followOpen}
//                   >
//                     <img
//                       src={followOpen ? minus : plus}
//                       alt={followOpen ? "collapse" : "expand"}
//                       className={style.footerFunctunalSvg}
//                     />
//                   </button>
//                 </div>
//                 <ul
//                   className={`${style.footerFollowUsList} ${style.footerList}`}
//                 >
//                   <li className={style.footerFollowUsItem}>
//                     <img
//                       src={fb}
//                       alt="facebook"
//                       className={style.footerFollowUsIcon}
//                     />
//                     <a
//                       href="#"
//                       className={style.footerFollowUsSocialMedia}
//                     >
//                       FACEBOOK
//                     </a>
//                   </li>
//                   <li className={style.footerFollowUsItem}>
//                     <img
//                       src={twitt}
//                       alt="twitter"
//                       className={style.footerFollowUsIcon}
//                     />
//                     <a
//                       href="#"
//                       className={style.footerFollowUsSocialMedia}
//                     >
//                       TWITTER
//                     </a>
//                   </li>
//                   <li className={style.footerFollowUsItem}>
//                     <img
//                       src={insta}
//                       alt="instagram"
//                       className={style.footerFollowUsIcon}
//                     />
//                     <a
//                       href="#"
//                       className={style.footerFollowUsSocialMedia}
//                     >
//                       INSTAGRAM
//                     </a>
//                   </li>
//                 </ul>
//               </li>

         
//               <li className={style.mainFooterItem}>
//                 <div className={style.mainFooterSubscribe}>
//                   <h3 className={style.mainFooterItemTitle}>join us</h3>
//                   <a
//                     href="#"
//                     className={style.mainFooterSubscribeText}
//                   >
//                     Subscribe to our newsletters
//                   </a>
//                   <input
//                     type="email"
//                     className={style.mainFooterSubscribeInput}
//                     placeholder="Email address"
//                   />
//                   <button
//                     className={style.mainFooterSubscribeButton}
//                   >
//                     Subscribe!
//                   </button>
//                 </div>
//               </li>
             
//             </ul>

          
//             <div className={style.footerBottom}>
//               <hr className={style.footerBottomHr} />
//               <p className={style.footerBottomText}>
//                 © 2019. Crisp theme Developed by Belvg
//               </p>
//             </div>
//           </Container>
//         </div>
//       </footer>
//     );
//   }
// }
