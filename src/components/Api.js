import React, { useEffect } from "react";

function Api() {

     useEffect(() => {
          fetchItems()
     }) /* Empty brackets means it will only run  once component mounts */
     let url = "https://api.twitch.tv/helix/streams?game_id=33214";

     const fetchItems = async () => {
          const data = await fetch(
               url
          );
          console.log(data)
     }

     return (
          <div>
               <div className="container">
                    <div className="option">
                         <h2 className="title">Petsmart API</h2>

                    </div>
               </div>
          </div>
     )
}


export default Api;
