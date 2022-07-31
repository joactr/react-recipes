import Axios from "axios";
import {useEffect,useState} from "react";
import styled from "styled-components";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular(){
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true&number=10`;

  const[popular,setPopular] = useState([])

  useEffect(()=>{
    getRecipes()
  },[])


  async function getRecipes(){
    var result = await Axios.get(url);
    setPopular(result.data.recipes)
  }

  return(
    <Wrapper>
      <h3>Popular Recipes</h3>
      <Splide options={{
          perPage:2,
          pagination: false,
          drag: "free",
          gap: "5rem",
          breakpoints: {
            640: {
              perPage: 1,
            },
          }
        }}>
      {popular.map((recipe)=> {
        return(
          <SplideSlide >
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image}/>
            </Card>
          </SplideSlide>
        )
      })}
      </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0 rem;
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow:hidden;

  img{
    border-radius: 3rem;
  }
`


export default Popular;
