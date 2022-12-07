import React,{useEffect, useState}from 'react';
import axios from 'axios';
import movies from './movies.gif'
import {setGlobalState,useGlobalState} from './state'


function Films() {
   
    const[FilmDetail,setFilmDetail] = useState(
        [{
        title:"",
        episode_id:0,
        director:"",
        release_date:""
    }
    ]);
    
    const FetchFilms = () => {
        axios.get("https://swapi.dev/api/films")
            .then((response) => {
                console.log("Responmse", response);
                setFilmDetail(response.data.results); 
                // setGlobalState("id",response.results.id)
                console.log(response.results.episode_id)
            })
    }
    
    useEffect(() => {
        FetchFilms()
      },[]);
  
    return (
        <>
         <p>Star War Films</p>
        <div className='main'>
           
             <img src={movies}/><br/><br/>
        <table border="1px solid black">
            <tr>
                <th>Sr.No.</th>
                <th>Film Name</th>
                <th>Episode number</th>
                <th>Release Date</th>
                <th>Director</th>
            </tr>
           
            {(FilmDetail ||[]).map
            ((detail,id) => 
                <tr>
                    <td>{id+1}</td>
                  <td>{detail.title}</td>
                  <td>{detail.episode_id}</td>
                  <td>{detail.release_date}</td>
                  <td>{detail.director}</td>
                  <td><button onClick={FilmDetails}>View Details</button></td>
                </tr>
                
            )
            }
        </table><br/>
       

        </div>
        </>
    )
}
export default Films;