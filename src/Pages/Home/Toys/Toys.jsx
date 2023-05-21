import React, { useEffect, useState } from 'react';
import CategoryWiseToy from './CategoryWiseToy/CategoryWiseToy';
import { Spinner } from 'react-bootstrap';

const Toys = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Disney Princes");
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        setTimeout(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
        }, 1000);
    }, [activeTab])
     // spinner show when data is loading
     if (isLoading) {
        return <div className='d-flex justify-content-center align-items-center'><Spinner animation="border" variant="danger" className='mx-auto'/></div>;
      }
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <div>
            <h1 className="title text-center p-2">Category Wise Toys</h1>
            <div className="text-center">
                <div className="text-center w-100 mx-auto">
                    <div className="d-flex justify-content-center align-items-center">
                        <div onClick={() => handleTabClick("Disney Princes")}
                            className={` btn btn-outline-danger ${activeTab == "Disney Princes" ? " bg-danger text-white" : ""
                                }`}>Disney Princes</div>
                        <div onClick={() => handleTabClick("Frozen Dolls")}
                            className={` btn btn-outline-danger ${activeTab == "Frozen Dolls" ? " bg-danger text-white" : ""
                                }`}>Frozen Dolls</div>
                        <div onClick={() => handleTabClick("Animation Characters")}
                            className={` btn btn-outline-danger ${activeTab == "Animation Characters" ? " bg-danger text-white" : ""
                                }`}>Animation Characters</div>
                        <div onClick={() => handleTabClick("Donald Duck")}
                            className={` btn btn-outline-danger ${activeTab == "Donald Duck" ? " bg-danger text-white" : ""
                                }`}>Donald Duck</div>
                    </div>
                </div>
                <hr className='mt-0 border border-2 border-danger'/>
            </div>
            <div className='w-75 mx-auto'>
            <div className='card card-group' style={{backgroundColor:"lightblue"}}>
            {
                toys.map((toy,index) => <CategoryWiseToy key={index} toy={toy}></CategoryWiseToy>)
            }
            </div>
            </div>

        </div>
    );
};

export default Toys;