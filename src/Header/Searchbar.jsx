import React, { useState } from 'react'
import "./Searchbar.css"



const Searchbar = (props) => {
    const [dropdownvalue, setdropdownvalue] = useState(0);
    console.log("searchbar", props.data)
    console.log("searchbar", dropdownvalue)


//     const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
    return (
        <>
            <div class="input-group">
                <div class="form-outline">
                    <input id="search-focus" type="search" class="form-control" />
                    <label class="form-label" for="form1">Search</label>
                </div>
                <button type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                </button>
            </div>

            <div
                class="dropdownitems"

            >

                <div class="select1">


                    <select name="format" id="format"  onChange={(e) => {
                        setdropdownvalue(e.target.value);
                    }}>
                        <option selected>Enter value...</option>
                        <option value={1}>Add To Favourite</option>
                        <option value={2}>Add New List</option>

                    </select>
                </div>
            
            </div>
            <div>
                {/* {dropdownvalue===1 && */}
                {
                 
                    props.data.map(item => (
                        <tr key={item.id}>
                           
                            <td>{item.cardData.id}</td>
                            <td>{item.cardData.title}</td>
                        </tr>
                    ))
                    
                }
                
                </div>

        </>
    )
}

export default Searchbar
