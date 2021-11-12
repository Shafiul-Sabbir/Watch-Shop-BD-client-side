import React from 'react';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
      fetch("http://localhost:5000/makeAdmin", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      console.log(data);
    };



    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
           
        <br />
        <input
          className="input-field mt-2 w-50"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
       
       <br />
       
        

        <input
          className="submit-btn btn btn-danger mt-3 "
          type="submit"
          value="Make as Admin"
        />
      </form> 
        </div>
    );
};

export default MakeAdmin;