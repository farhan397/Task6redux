import React,{useState} from 'react'
import HomeContainer from '../containers/HomeContainer';
// import { motion} from "framer-motion";
// import { BiMessageSquareX} from "react-icons/bi";
import "./Card.css"


const Card = ({item}) => {
    const [expanded, setExpanded] = useState(false);
  // const img=  props.img_src;

    
  return (
   <>
      {/* {expanded ? (
        
         <ExpandedCard param={item} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={item} setExpanded={() => setExpanded(true)} />
      )} */}

<HomeContainer param={item}  setExpanded={() => setExpanded(true)} />
   
   </>
  )
}


    
  

export default Card

