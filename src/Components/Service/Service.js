import React from 'react';
import usePrograms from "../../Hooks/programs";
import './Service.css'
const Service = () => {
    const [programs, setPrograms] = usePrograms();
    return (
        <div>
            <h1> These are the things we serve </h1>
            <div className='ser'>
                {
                    programs.map((program) =>
                        <div className='Program2'>
                            <div className='ProgramPic'>
                                <img src={program.img} alt="" />
                            </div>
                            <div className='Program3'>
                                <h3>
                                    Name of Course: {program.name}
                                </h3>
                                <h4>
                                    Origin of the Course:{program.origin}
                                </h4>
                                <h4>
                                    Cost:BDT {program.cost}
                                </h4>
                                <h4>
                                    Duration:{program.duration}
                                </h4>
                                <h4>
                                    Controled by:{program.Host}
                                </h4>
                                <h4>
                                    Controled by:{program.Host}
                                </h4>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Service;