import React, { useEffect, useState } from 'react'
import RetrieveData from './retrieveData';

const Postdata = () => {
  const url = `https://drab-pink-dibbler-vest.cyclic.cloud`
  // const url = `http://localhost:8000`

  const [allData, setAllData] = useState(['a']);
  const [datastyle, setDatastyle] = useState({
    filter: null,
    order: 1
  })

  function fetchAllData() {
    fetch(`${url}/api/travel`).then(response => response.json()).then(data => {
      console.log(data.data);
      setAllData([...data.data]);
    });
  }

  useEffect(() => {
    handleDatastyle()
  }, [datastyle])


  function handleDatastyle() {
    // console.log(datastyle);
    fetch(`${url}/api/travel?dest=${datastyle.filter ? datastyle.filter : ''}&order=${datastyle.order}`).then(response => response.json()).then(data => {
      console.log(data.data);
      setAllData([...data.data])
    });
  }

  function handledelete(id) {
    console.log(id);
    fetch(`${url}/api/travel/${id}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
      console.log(data);
      alert(`${id} has been deleted.`)
      fetchAllData();
    });
  }


  return (
    <div>
      <h1>Post your data</h1>
      <div>
        <form onSubmit={(event) => {
          // event.preventDefault();
          let obj = {
            name: event.target.name.value,
            email: event.target.email.value,
            destination: event.target.destination.value,
            no_of_travelers: event.target.travelers.value,
            Budget_Per_Person: event.target.budget.value
          };
          console.log(obj, url);

          fetch(`${url}/api/travel`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
          }).then(response => response.json()).then(data => {
            console.log('response', data);
            
            fetchAllData();
            
          });
        }}>
          <label htmlFor="name">Name</label> <input type="text" name="name" id="name" /> <br />
          <label htmlFor="email">Email</label> <input type="text" name="email" id="email" /> <br />
          <label htmlFor="destination">Destination</label> <select name="destination" id="destination"> <br />
            <option value="">Select your Destination</option>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select> <br />
          <label htmlFor="travelers">No of Travelers</label> <input type="text" name="travelers" id="travelers" /> <br />
          <label htmlFor="budget">Budget Per Person </label> <input type="text" name="budget" id="budget" /> <br />
          <input type="submit" value="Post Data" /> <br />

        </form>
      </div>
      <br /><br />
      <div>
        <button onClick={() => {
          setDatastyle({ ...datastyle, order: -1 * datastyle.order })
          

        }}>Sort by Budget Per Person</button>
        <label htmlFor="">Filter by Destination</label> <select onChange={(event) => {
          console.log(event.target.value);
          
          setDatastyle({ ...datastyle, filter: event.target.value })
          

        }}>
          <option value="">Select the Destination</option>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
        </select>
      </div>
      <RetrieveData alldata={allData} handledelete={handledelete} />

    </div>
  )
}

export default Postdata