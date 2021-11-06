import React from "react";
import styled, { keyframes } from "styled-components";
import GoogleMapReact from "google-map-react";

const keyBounce = keyframes`

  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }

`;

const MapStyled = styled.div`
  width: 100%;
  height: 100%;

  .pin {
    display: flex;
    align-items: center;
    width: 180px;
    color: var(--main-blue);
    animation: ${keyBounce} 0.5s infinite alternate;
  }
`;

const LocationPin = () => (
  <div className="pin">
    <img
      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
      className="pin-icon"
      alt=""
    />
  </div>
);

const MapGoogle = () => {
  const location = {
    lat: 23.761226,
    lng: 90.420766,
  };

  return (
    <>
      <MapStyled>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyBmGmeot5jcjdaJTvfCmQPfzeoG_pABeWo` }}
          defaultCenter={location}
          defaultZoom={12}
          className="h-100 w-100"
        >
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </MapStyled>
    </>
  );
};

export default MapGoogle;
