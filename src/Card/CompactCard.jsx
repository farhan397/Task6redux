import React,{useState} from 'react'

const CompactCard=(Props)=>{
   
      // console.log(Props )
      // console.log("getdata",Props.data)
      // console.log("item",Props.param)
      // console.log("title",Props.param.title)
      const [namerover, setnamerover] = useState("");
      const [dateearth, setdateearth] = useState("");
      const [count, setcount] = useState(0);
      const [status, setstatus] = useState(count);
      
      
        return (
            <>
            <div className="fullcard"> 
          <div
             className="CompactCard"
            style={{
              position:'relative'
    
            }} >
           
             <img src={Props.param.image} alt="Imgcard"/>   
              <div className="radialbar"
              style={{
                position:'absolute'
      
              }}
              >
                <div className="roverclass">
                
              </div>
             
              
              
              </div>
              
              
            </div>
            <div>
            <span>{Props.param.title}</span><br></br>
              <button 
               onClick={
                ()=>{Props.addToCartHandler({id:Props.param.id,title:Props.param.title,image:Props.param.image})}
                }
              style={{
                width:'150px',
                height:'30px',
                backgroundColor:'rgb(73, 214, 160)'
              }}>Save </button>
              </div>
              </div>
    
          </>
        );
      }

export default CompactCard
