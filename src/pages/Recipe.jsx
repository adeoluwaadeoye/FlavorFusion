import {useEffect, useState, useCallback} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = useCallback(async () => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const detailData = await data.json();
      setDetails(detailData);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, e.g., show error message to the user
    }
  }, [params.name]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <DetailWrapper className="wrapper">
      {details && (
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt={details.title} />
        </div>
      )}

      <Info className="info">
        <div className="row">
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </div>

        {activeTab === "instructions" && details && (
          <div className="wrapper">
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}

        {activeTab === "ingredients" && details && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  img {
    width: 25rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 0;
`;

export default Recipe;
