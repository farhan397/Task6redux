import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Card/Card';


import HomeContainer from '../containers/HomeContainer';
import Searchbar from '../Header/Searchbar';
import HeaderContainer from '../containers/HeaderContainer';
const RecipeList = () => {
    const [data, setData] = useState([]);
    const [filterarray, setfilterarray] = useState(data);

  useEffect(() => {

    // axios.get('https://api.spoonacular.com/recipes/complexSearch?number=200&apiKey=b7d39b3568634b9d8d25e54da15d5dfe')
    axios.get('https://api.spoonacular.com/recipes/complexSearch?number=200&apiKey=2f9b03d8174241c79727ee0a734df1c0')
    
      .then(response => setData(response.data.results))
      .catch(error => console.log(error));
  }, []);

  const setfilter=(props)=>{
    const filteredUser = data.filter((item) => {
        return (
          item.title === props
          
        );
      });
      setfilterarray(filteredUser);
  }
  return (
    <>
    {/* <HeaderContainer/> */}
    

    <div
        className="parentContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "1px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       {
       data.map((card, index) => <Card item={card} key={index} />)}
       {/* <HomeContainer/> */}
  </div>
  </>
  )
}

export default RecipeList
