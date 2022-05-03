/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./App.css";

import { styled, alpha } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import InputBase from "@mui/material/InputBase";

import BoxDetails from "./BoxDetails";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 20, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [detailsItem, setDetailsItem] = useState({});

  const handleClose = () => setShowDetails(false);

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDetails = (item) => {
    setShowDetails(true);
    setDetailsItem(item);
    console.log(item.data);
  };

  useEffect(() => {
    fetch("https://data.latelier.co/training/tennis_stats/headtohead.json")
      .then((res) => res.json())
      .then((d) => {
        setData(d.players);
      });
  });

  const itemFetched = data.filter((itemTosearch) => {
    return (
      itemTosearch.firstname
        .toString()
        .toLowerCase()
        .indexOf(searchTerm.toString().toLowerCase()) !== -1
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="List-players">
          <BoxDetails detailsItem={detailsItem} showDetails={showDetails} handleClose={handleClose} />
          {!showDetails ? (
            <>
              <Search
                style={{ width: "35%", marginTop: "5%", marginBottom: "3%" }}
              >
                <StyledInputBase
                  placeholder="Rechercher un joueur"
                  onChange={handleChangeSearch}
                />
              </Search>
              <List sx={{ width: "100%" }}>
                {itemFetched.map((item, index) => (
                  <ListItemButton
                    onClick={() => handleDetails(item)}
                    key={index}
                    sx={{
                      width: "150%",
                      maxWidth: 500,
                      bgcolor: "background.paper",
                      marginBottom: "2%",
                      boxShadow: `0px 0px 13px 2px rgba(0,0,0,0.4)`,
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          width: 180,
                          height: 180,
                          marginBottom: "-12%",
                          bgcolor: "transparent",
                        }}
                        variant="rounded"
                      >
                        <img
                          src={item.picture}
                          alt=""
                          style={{ width: 350, height: 350, marginTop: "110%" }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <div style={{ display: "bloc" }}>
                      <p style={{ color: "#F2753B", marginBottom: "30%" }}>
                        <b>{`${item.firstname} ${item.lastname}`}</b>
                      </p>
                      <div className="wrapper">
                        <h6 className="boxTitles">RANK</h6>
                        <h6 className="boxTitles">POINTS</h6>
                        <h6 className="boxTitles">COUNTRY</h6>
                        <h6 className="boxInfos">{`#${item.data.rank}`}</h6>
                        <h6 className="boxInfos">{item.data.points}</h6>
                        <h6 className="boxInfos">{item.country.code}</h6>
                      </div>
                    </div>
                  </ListItemButton>
                ))}
              </List>
            </>
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
