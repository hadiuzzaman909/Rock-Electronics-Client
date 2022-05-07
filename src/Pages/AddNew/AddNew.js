import React from 'react';
import './AddNew.css'
import { useForm } from "react-hook-form";
const AddNew = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mx-auto w-50'>
            <h2>Add New Items</h2>
        <form className='d-flex flex-column'  onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <input type="submit" />
        </form>
      </div>
    );
};

export default AddNew;
