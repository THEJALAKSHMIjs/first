import React from 'react';
import { useEffect, useRef } from 'react';
import photo from '../assets/cat2.png';

const PromoAd = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDVcebLwykjItm9yGA8-8Hhk-JBH2pIhns`;
    script.onload = () => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Change this to your desired location
        zoom: 10,
      });

      const markers = [
        { lat: 37.7749, lng: -122.4194 },
        // Add more markers as needed
      ];

      markers.forEach((location) => {
        new google.maps.Marker({
          position: location,
          map: map,
        });
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'left', padding: '20px', fontFamily: 'Arial, sans-serif', margin: '20px', marginLeft: '0px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '0px' }}>
        <div style={{ color: 'orange', alignItems: 'center' }}>
          <span style={{ marginRight: '60px' }}>Menu</span>
          <span>Country</span>
          <span style={{ fontSize: '1.5em', padding: '8px', verticalAlign: 'sub' }}>{'>'}</span>
        </div>
        <button style={{ color: 'orange', backgroundColor: 'rgba(255, 166, 0, 0.42)', border: '1px solid orange', padding: '4px 35px', cursor: 'pointer', marginRight: '20px' }}>Sign in</button>
      </div>
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ textAlign: 'left', lineHeight: '1.5', letterSpacing: '0.3em' }}>
          <h1 style={{ fontSize: '3.5em', margin: '50px', fontWeight: 'bold', fontFamily: '"Vollkorn", serif', marginLeft: '30px' }}>
            <span style={{ position: 'relative', zIndex: '1' }}>
              Unlock the <br /> Ultimate <br /> Deals Near You - <br /> Your Jackpot <br /> Awaits!
              <span style={{ position: 'absolute', left: '60%', transform: 'translateX(-50%) translateY(-90%)', width: '300px', height: '300px', background: 'radial-gradient(circle at 50% 50%, rgba(255, 166, 0, 0.42), rgba(91, 65, 17, 0.42), transparent)', borderRadius: '40%', zIndex: '-1', opacity: '0.8' }}></span>
            </span>
          </h1>
        </div>
        <img src={photo} alt="" style={{ width: '400px', height: '400px' }} />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div style={{ marginTop: '0px', padding: '20px', display: 'inline-block' }}>
            <div style={{ margin: '0', padding: '5px', border: '2px dashed', borderColor: 'orange', borderImage: 'linear-gradient(to bottom, rgba(91, 65, 17, 0.42),  rgba(228, 170, 61, 0.75)) 1' }}>
              <div style={{ padding: '3px', border: '2px dotted', borderColor: 'orange', borderImage: 'linear-gradient(to bottom,rgba(255, 166, 0, 0.42), rgba(250, 195, 92, 0.75)) 1' }}>
                <p style={{ margin: '0', fontStyle: 'inherit', fontSize: '13px' }}>Coin prize</p>
              </div>
            </div>
            <div style={{ marginTop: '-10px', padding: '5px', border: '2px dashed', borderColor: 'orange', borderImage: 'linear-gradient(to bottom, rgba(91, 65, 17, 0.42),  rgba(250, 195, 92, 0.75)) 1' }}>
              <div style={{ padding: '3px', border: '2px dashed', borderColor: 'orange', borderImage: 'linear-gradient(to bottom, rgba(91, 65, 17, 0.42),  rgba(250, 195, 92, 0.75)) 1' }}>
                <p style={{ margin: '0', fontStyle: 'inherit', fontSize: '13px' }}>1 sat = 0.01$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="container mt-4">
          <div id="map" className="map-container" ref={mapRef} style={{ height: '500px', position: 'relative' }}>
          <div className="marker" style={{ top: '50%', left: '50%', width: '20px', height: '20px', backgroundColor: 'orange', borderRadius: '50%', position: 'absolute', transform: 'translate(-50%, -50%)' }}></div>
            <h3 className="text-center" style={{ color: 'white', marginBottom:'-100px'}}>The best deals are just a step away!</h3>
          
              
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default PromoAd;
