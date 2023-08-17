import React, { useEffect, useState } from 'react'
import RetrieveData from './retrieveData';

const Postdata = () => {
  const url = `abc`

  const [allData, setAllData] = useState(['a']);

  const datastyle = {
    filter: null,
    order: 1
  }


  useEffect(() => {
    console.log(allData);

    // return () => {
    //   second
    // }
  }, [])

  function handleDatastyle(datastyle) {
    console.log(datastyle);
  }

  function handledelete(id){
    console.log(id);
  }


  return (
    <div>
      <h1>Post your data</h1>
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          let obj = {
            name: event.target.name.value,
            email: event.target.email.value,
            destination: event.target.destination.value,
            no_of_travelers: event.target.travelers.value,
            Budget_Per_Person: event.target.budget.value
          };
          console.log(obj, url);

        }}>
          <label htmlFor="name">Name</label> <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label> <input type="text" name="email" id="email" />
          <label htmlFor="destination">Destination</label> <select name="destination" id="destination">
            <option value="">Select your Destination</option>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select>
          <label htmlFor="travelers">No of Travelers</label> <input type="text" name="travelers" id="travelers" />
          <label htmlFor="budget">Budget Per Person </label> <input type="text" name="budget" id="budget" />
          <input type="submit" value="Post Data" />

        </form>
      </div>
      <br /><br />
      <div>
        <button onClick={() => {
          datastyle.order = (-1 * datastyle.order);
          handleDatastyle(datastyle);

        }}>Sort by Budget Per Person</button>
        <label htmlFor="">Filter by Destination</label> <select onChange={(event) => {
          console.log(event.target.value);
          datastyle.filter = event.target.value;
          handleDatastyle(datastyle);

        }}>
          <option value="">Select the Destination</option>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
        </select>
      </div>
      <RetrieveData alldata={allData} handledelete={handledelete}/>
    
     

    </div>
  )
}

export default Postdata