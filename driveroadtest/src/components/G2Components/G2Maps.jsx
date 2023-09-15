import React from 'react';
// import GoogleMapReact from 'google-map-react';

const G2Maps = () =>{

    // const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };

return(
    <div>
        <section id="G2Maps">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>We are working on this section and will be up and running shortly.</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.80857816365!2d-79.51814416495607!3d43.71840381269127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1679207436254!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        {/* // Important! Always set the container height explicitly */}
    {/* <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <h5
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div> */}
    
                    </div>
                </div>
            </div>
        </section>
    </div>
)

}

export default G2Maps