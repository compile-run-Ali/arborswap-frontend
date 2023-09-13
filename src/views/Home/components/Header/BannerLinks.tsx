import React from "react";
/* BannerLinks */

const BannerLinks = () => {
    return (
      <div className="banner-links">
        <div className="link-buttons" >
          <div className="link-row">
            <div className="lb1">
                <a href="https://protocol.arborswap.org/airdropper/airdrops">Airdrop</a>
            </div>
            <div className="lb2">
                <a href="https://protocol.arborswap.org/locked-assets">Launchpad</a>
            </div>
          </div> 
          <div className="link-row">
            <div className="lb3">
                <a href="/swap">Swap</a>
            </div>
            <div className="lb4">
                <a href="/pools">Stake</a>
            </div>
          </div> 
        </div>
      </div>
    );
  };
  
  export default BannerLinks;