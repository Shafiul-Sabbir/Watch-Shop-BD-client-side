import {useState,useEffect}  from 'react';
import useAuth from "../../hooks/useAuth";
const ReviweShow = () => {
    const [reviwe,setReviwe]=useState([]);
    const { user } = useAuth();

    useEffect(()=>{
        fetch(`https://intense-escarpment-25423.herokuapp.com/addSReview`)
        .then(res=>res.json())
        .then(data=>setReviwe(data))
        
        
            },[])
            
    return (
        <div >
           <div className="mt-5">
           <h1>Review Coustomer</h1>
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