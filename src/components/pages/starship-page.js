import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StarshipList, StarshipDetails } from "../sw-components";
import Row from "../row";

function StarshipsPage() {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <Row
      left={
        <StarshipList
          onItemSelected={(starshipId) => nav(`/starships/${starshipId}`)}
        />
      }
      right={<StarshipDetails itemId={id} />}
    />
  );
}

export default StarshipsPage;
