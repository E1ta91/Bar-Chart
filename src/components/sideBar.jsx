import { ChartNoAxesCombinedIcon, HomeIcon } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import Drawer from './drawer';
import DrawNav from './drawnav';
import React from 'react';

const SideBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <div>
            <div className="h-screen hidden lg:flex lg:flex-col  2xl-custom:w-[15vw] space-y-4 bg-[#9b74aa] text-black w-48 ">
                <h2 className="text-2xl 2xl-custom:text-4xl font-bold pt-5  ">Dashboard</h2>
                <nav>
                    <ul className='2xl-custom:text-3xl'>
                        <li className="mb-4 ">
                            <NavLink
                                to="home"
                                className='hover:bg-white p-2 flex gap-3 rounded '
                            >
                                <HomeIcon className="w-6 h-6 2xl-custom:w-10 2xl-custom:h-10" /> Home
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink
                                to="/risk-evaluation"
                                className='hover:bg-white p-2 flex gap-3 rounded'
                            >
                                <ChartNoAxesCombinedIcon className="w-6 h-6 2xl-custom:w-10 2xl-custom:h-10" /> Risk Evaluation
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile view navbar */}
            <div className="flex lg:hidden justify-between items-center p-2  w-screen overflow-x-hidden bg-[#6b6868] fixed  z-40">
                
                    <h1 className='text-white font-semibold '>NexaLith</h1>
                

                {/** onClick to open nav drawer */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12  h-15" onClick={() => setIsOpen(!isOpen)} >
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 
          .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"
                    />
                </svg>

                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                    <DrawNav path={"home"} label={"Home"} setIsOpen={setIsOpen} />
                    <DrawNav path={"risk-evaluation"} label={"Risk Evaluation"} setIsOpen={setIsOpen} />
                </Drawer>
            </div>
        </div>
    );
};

export default SideBar;
