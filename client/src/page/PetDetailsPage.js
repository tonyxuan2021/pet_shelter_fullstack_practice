import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PetDetailsPage = () => {
  const { id } = useParams();
  const [petInfo, setPetInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get(
        `http://localhost:8080/api/pets/${id}`
      );

      setPetInfo(fetchedData);
    };

    fetchData();
  }, []);

  if (!petInfo) {
    return <p>Loading...</p>;
  }

  const petData = petInfo.data[0];
  const { Breed } = petData;

  return <div>{Breed}</div>;
};

export default PetDetailsPage;
