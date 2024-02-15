import React, {useState} from "react";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}
const FormStyle = styled.form`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    flex-wrap: wrap;
    flex: 1 0 8rem;
  }

  input {
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    color: white;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
