import React from 'react';
import photo from '../assets/cat.png';

const PromoAd = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%', flexWrap: 'wrap' }}>
        <div style={{ color: 'orange', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span>Menu</span>
          <span>Country</span>
          <span style={{ fontSize: '1.5em', padding: '8px', verticalAlign: 'sub' }}>{'>'}</span>
        </div>
        <button style={{ color: 'orange', backgroundColor: 'rgba(255, 166, 0, 0.42)', border: '1px solid orange', padding: '4px 35px', cursor: 'pointer' }}>Sign in</button>
      </div>
      <div style={{ marginTop: '50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'left', lineHeight: '1.5', letterSpacing: '0.3rem', maxWidth: '600px', padding: '20px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', fontFamily: 'Vollkorn, serif', position: 'relative', zIndex: '1' }}>
            Unlock the <br /> Ultimate <br /> Deals Near You - <br /> Your Jackpot <br /> Awaits!
            <span style={{ position: 'absolute', left: '35%', transform: 'translateX(-50%) translateY(-50%)', width: '500px', height: '400px', background: 'radial-gradient(circle at 50% 50%,rgba(248, 141, 0, 0.73),rgba(39, 23, 2, 0.22), transparent)', borderRadius: '50%', zIndex: '-1', opacity: '.5',marginTop:'-90px' }}></span>
          </h1>
        </div>
        <img src={photo} alt="Promo" style={{ width: '100%', maxWidth: '600px', height: 'auto',marginTop:'-20px' }} />
      </div>
      <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  marginTop: '10px', 
  flexWrap: 'wrap' 
}}>
  <div style={{ padding: '20px', display: 'inline-block' }}>
    <div style={{ padding: '5px', border: '2px dashed orange' }}>
      <div style={{ padding: '3px', border: '2px dashed orange' }}>
        <p style={{ margin: '0', fontSize: '13px' }}>Coin prize</p>
      </div>
    </div>
    <div style={{ marginTop: '10px', padding: '5px', border: '2px dashed orange' }}>
      <div style={{ padding: '3px', border: '2px dashed orange' }}>
        <p style={{ margin: '0', fontSize: '13px'}}>1 sat = 0.01$</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default PromoAd;
