import React from "react";
import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 0.5rem;
  text-decoration: none;
  background: linear-gradient(35deg, #111, #121212);
  height: 6rem;
  width: 6rem;
  padding: 30px;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 1rem;
  }

  svg {
    color: white;
    font-size: 1.7rem;
    height: 4rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: black;
    }
    h4 {
      color: black;
    }
  }
`;

export default Category;
