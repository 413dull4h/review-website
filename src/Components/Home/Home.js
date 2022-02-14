
import { useEffect } from "react";
import { useState } from "react";
import usePrograms from "../../Hooks/programs";
import home from "../../img/home.PNG";
import './Home.css'

const Home = () => {
    const [programs, setPrograms] = usePrograms();

    return (

        <div>
            < div >
                <img className="home" src={home} alt="" />
            </div >
            <h1>Our Services</h1>
            <div className='Programs'>

                {
                    programs.map((program) =>
                        <div className='Program'>
                            <div className='ProgramPic'>
                                <img src={program.img} alt="" />
                            </div>
                            <div>
                                <h3>
                                    Name of Course: {program.name}
                                </h3>
                                <h4>
                                    Origin of the Course:{program.origin}
                                </h4>
                            </div>
                        </div>
                    )
                }

            </div>
            <h2>Go to service for details</h2>
        </div>

    );
};

export default Home;