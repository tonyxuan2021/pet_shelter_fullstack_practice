import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import SwiperEffect from "../components/SwiperEffect";
import FooterNav from "../components/FooterNav";

const HomePage = () => {
  const [name, setName] = useState("");
  const [newPetList, setNewPetList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get("http://localhost:8080/api/getpets");
      setNewPetList(fetchedData.data);
    };
    fetchData();
  }, []);

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleSearch = () => {
    const newPet = newPetList.filter((pet) => {
      return pet.Name.toLowerCase().includes(name.toLowerCase());
    });

    setNewPetList(newPet);
  };

  if (newPetList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <div className="hero">
        <img src="/human_animal.jpg" className="hero_img" />
      </div>
      <div className="pet_search">
        <h1>Search For a Pet</h1>
        <div className="pet_search_wrapper">
          <input
            className="pet_input"
            type="text"
            placeholder="Search"
            onChange={handleInput}
          ></input>
          <button className="pet_search_btn" onClick={handleSearch}>
            <SearchIcon />
          </button>
        </div>
      </div>
      <SwiperEffect newPetList={newPetList} />
      <FooterNav />
    </div>
  );
};

export default HomePage;
