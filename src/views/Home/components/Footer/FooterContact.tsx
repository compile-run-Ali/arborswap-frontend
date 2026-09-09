import React from "react";
import './footerContact.css'

/* FooterContact */
const FooterContact = () => {
    return (
        <div className="footerContact">
            <div className="footerContactInner">
                <div className="contactLogo">
                    <div className="roburnalogo">
                        <img src="images/home/imgnew/roburna.svg" alt="" />
                    </div>
                </div>
                <div className="footerSocial">
                    <div className="socials">
                        <div className="social-title">Our Community</div>
                        <div className="social-icons">
                            <ul>
                                <li>
                                    <a href="https://t.me/arborswap">
                                        <img src="images/home/imgnew/telegram.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/arborswap_defi">
                                        <img src="images/home/imgnew/twitter.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/arborswapofficial">
                                        <img src="images/home/imgnew/instagram.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/home/imgnew/dribbble.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  };
  
  export default FooterContact;