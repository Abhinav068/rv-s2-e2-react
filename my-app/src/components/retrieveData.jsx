import React from 'react'

const RetrieveData = ({ alldata, handledelete }) => {
    return (
        <div id='container'>
            {
                alldata.map(el => (
                    <div>

                        <p>Name: {el.name}</p>
                        <p>Email: {el.email}</p>
                        <p>Destination : {el.destination}</p>
                        <p>No of Travellers : {el.no_of_travelers}</p>
                        <p>Budget_Per_Person : {el.Budget_Per_Person}</p>
                        <button onClick={() => {
                            handledelete(el._id)
                        }}>Delete</button>
                    </div>
                ))
            }
        </div>

    )
}

export default RetrieveData