import {useState,useEffect}  from 'react';
import useAuth from "../../hooks/useAuth";
const ReviweShow = () => {
    const [reviwe,setReviwe]=useState([]);
    const { user } = useAuth();

    useEffect(()=>{
        fetch(`http://localhost:5000/addSReview`)
        .then(res=>res.json())
        .then(data=>setReviwe(data))
        
        
            },[])
            
    return (
        <div >
           <div className="mt-5">
           <h1>Reviwe Coustomer</h1>
           {
            reviwe.map(reviwes=><div>
                <h5>Email : {reviwes.email}</h5>
                <br />
               <h6>Reviwe :  {reviwes.Comments}</h6>
                <br /><br /><br />
            </div>)   
           }
           </div>
        </div>
    );
};

export default ReviweShow;