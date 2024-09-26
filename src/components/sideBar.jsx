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
        <div >
            <div className="h-screen hidden lg:flex lg:flex-col  bg-[#b34be4] text-black w-48 p-4">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <NavLink
                                to="home"
                                className='hover:bg-white p-2 flex gap-3 rounded '
                            >
                                <HomeIcon /> Home
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink
                                to="/risk-evaluation"
                                className='hover:bg-white p-2 flex gap-3 rounded'

                            >
                                <ChartNoAxesCombinedIcon /> Risk Evaluation
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

         {/* mobile view navbar */}
         <div className="flex lg:hidden items-end ml-3  bg-slate-900 fixed rounded-lg z-40">
       
         

        {/** onClick to open nav drawer */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-15" onClick={() => setIsOpen(!isOpen)} >
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
