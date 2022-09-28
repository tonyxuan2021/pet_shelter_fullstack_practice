import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Divider, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { theme } from "../theme/theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
  console.log(petData);
  const { Breed, Image, Name, Sex, Age, Colour, Species, Description, Size } =
    petData;

  const trimmedDesc = Description.substr(0, 200) + " ...";

  return (
    <div className="pet_detail_wrapper">
      <div className="pet_detail_hero">
        <div className="pet_back_btn">
          <Link to="/">
            <ArrowBackIcon
              fontSize="large"
              sx={{ fill: theme.palette.secondary.main, fontSize: 50 }}
            />
          </Link>
        </div>
        <img className="pet_detail_img" src={`/adoptr/${Image}`}></img>
      </div>
      <div className="pet_detail_info_wrapper">
        <div className="pet_info_1">
          <h2>{Breed}</h2>
          <p>{Species}</p>
        </div>
        <div className="pet_info_2">
          <p>{Sex === "F" ? "FEMALE" : "MALE"}</p>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ borderColor: "black", height: "15px", width: "5px" }}
          />
          <p>{Age} Years Old</p>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ borderColor: "black", height: "15px", width: "5px" }}
          />
          <p>{Size}</p>
        </div>
        <div>
          <h3 style={{ marginBottom: "15px" }}>Summary</h3>
          <p>{trimmedDesc}</p>
        </div>
        <div className="pet_detail_btns">
          <button className="pet_btn_adoption">
            <Typography variant="h5">Adoption</Typography>
          </button>
          <div className="pet_btn_heart">
            <FavoriteBorderIcon
              fontSize="large"
              sx={{ fill: theme.palette.secondary.main }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;
