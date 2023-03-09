import React, { useState } from "react";
import "../components/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const [{}, dispatch] = useStateValue();
  const navigation = useNavigate();
  const search = (event) => {
    event.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigation("/search");
  };
  return (
    <form>
      <div className="search">
        <div className="search__input">
          <SearchIcon className="search__inputIcon" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <MicIcon className="search__inputIcon" />
        </div>

        {!hideButtons ? (
          <div className="search__buttons">
            <Button type="submit" variant="outlined" onClick={search}>
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="search__buttons">
            <Button
              className="search__hiddenButtons"
              type="submit"
              variant="outlined"
              onClick={search}
            >
              Google Search
            </Button>
            <Button className="search__hiddenButtons" variant="outlined">
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default Search;
