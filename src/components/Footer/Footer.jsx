import React from "react";
import styled from "styled-components";
import CurrentTrack from "../CurrentTracks/CurrentTrack";

import PlayerControls from "../PlayerControls/PlayerControls";
import Volume from "../Volume/Volume";
export default function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #F7EEEE;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
