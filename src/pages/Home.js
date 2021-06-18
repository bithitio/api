import React, { useEffect } from 'react';


import Bitcommunity from "../components/Bitcommunity";


const HomePage = () => {
    useEffect(() => {
        document.title = "BITHIT | DEFI AUCTION";
    }, []);

    return(
        <div>
            <div data-aos="fade-up">
                <div class="container">
                    
                </div>

                
            </div>

            
            <div data-aos="fade-up"><Bitcommunity /></div>
            
            
            
           
        </div>
    )
};

export default HomePage;
