import React, { useState, useEffect } from "react";
import { useGlobalState } from "./state";
import axios from "axios";


function Viewlist(props) {
    
   
    const [Dlist, setDlist] = useState(
        [{
            title: "",
            episode_id: 0,
            director: "",
            release_date: "",
            created:"",
            producer:"",
            edited:""
        }
        ]);
   
    const Vlist = () => {
        axios.get(`https://swapi.dev/api/films/1/`)
            .then((response) => {
                console.log("Responmse", response);
                setDlist(response);
            })
    }
    useEffect(() => {
        Vlist()
    }, []);
    return (
        <>
            {(Dlist || []).map((list) =>
                    <div>

                        <p>{list.title}</p><br />
                        <p>{list.episode_id}</p><br/>
                        <p>{list.release_date}</p><br/>
                        <p>{list.director}</p><br/>
                        <p>{list.producer}</p><br/>
                        <p>{list.edited}</p><br/>
                        <p>{list.created}</p>
                    </div>

                )
            }
        </>
    )
}
export default Viewlist;