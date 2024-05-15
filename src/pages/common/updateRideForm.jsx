import React, { useEffect, useNavigate, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

function UpdateRideForm() {
    const { id } = useParams();
    const [name, setname] = useState("");
    const [start, setStart] = useState("");
    const [destination, setDestination] = useState("");
    const [route, setRoute] = useState("");
    const [time, setTime] = useState("");

    // //   const navigate = useNavigate() pats ref

    useEffect(() => {
        axios.get(`http://localhost:4002/user/ride/${id}`)
            .then(result => {
                console.log(result);
                setname(result.data.name);
                setStart(result.data.start);
                setDestination(result.data.destination);
                setRoute(result.data.route);
                setTime(result.data.startTime);
            })
            .catch(err => console.log("error occured", err))
    }, [])

    const UpdateRide =(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:4002/user/rideUpdate/${id}`, {name,start,destination,route,time})
        .then(result => {
            console.log(result);
            // navigate('/adminDashboard') pats ref
        })
        .catch(err => console.log("error occured", err))
    }

    return (
        <div>
            <h2>Edit Ride</h2>
            <form style={{ width: '40%', marginLeft: '20rem' }}
             onSubmit={UpdateRide}
             >
                <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Author Name</label>
                    <input type="text" class="form-control" id="exampleInputName1"
                        value={name} onChange={(e) =>{setname(e.target.value);
                        }}
                    />
                </div>
                <div class="mb-3">
                    <label for="startLocation" class="form-label">start</label>
                    <input type="text" class="form-control" id="startLocation" aria-describedby="emailHelp" 
                    
                    value={start} onChange={(e) =>{setStart(e.target.value);
                        }}
                    />
                </div>
                <div class="mb-3">
                    <label for="destination" class="form-label">destination</label>
                    <input type="text" class="form-control" id="destination"
                     value={destination}
                       
                       onChange={(e) =>{setDestination(e.target.value);
                        }}
                    />
                </div>
                <div class="mb-3">
                    <label for="route" class="form-label">route</label>
                    <input type="text" class="form-control" id="route"
                     value={route}
                       
                       onChange={(e) =>{setRoute(e.target.value);
                        }}
                    />
                </div>
                <div class="mb-3">
                    <label for="time" class="form-label">start time</label>
                    <input type="text" class="form-control" id="time"
                     value={time}
                       
                       onChange={(e) =>{setTime(e.target.value);
                        }}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UpdateRideForm