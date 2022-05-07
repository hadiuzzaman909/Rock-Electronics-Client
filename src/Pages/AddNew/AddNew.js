import React from 'react';
import './AddNew.css'
import { useForm } from "react-hook-form";
const AddNew = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        const proceed = window.confirm('Are you sure?');
        console.log(data);
        if (proceed) {
            const url = 'http://localhost:5000/items';
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => { })

        }

    }
    return (
        <div className='mx-auto w-50 addnew-main'>
            <h2 className='text-center'>Add New Items</h2>
            <div className='addNew'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3 inputField' placeholder=' Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-3 inputField-des'placeholder='Description'{...register("description")} />
                    <input className='mb-3 inputField'placeholder=' Price' type="number" {...register("price")} />
                    <input className='mb-3 inputField'placeholder=' Quantity' type="number" {...register("quantity")} />
                    <input className='mb-3 inputField'placeholder=' Supplier' {...register("Supplier_name")} />
                    <input className='mb-3 inputField'placeholder=' Photo URL' type='text' {...register("img")} />
                    <input className='submit-addItem mx-auto mt-3' type="submit" value='Add Item' />
                </form>

            </div>

        </div>
    );
};
export default AddNew;
