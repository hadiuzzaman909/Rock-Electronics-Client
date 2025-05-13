import React from 'react';
import './AddNew.css'
import { useForm } from "react-hook-form";
const AddNew = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        const proceed = window.confirm('Are you sure?');
        console.log(data);
        if (proceed) {
            const url = 'https://intense-citadel-86628.herokuapp.com/items';
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
            
            <div className='addNew'>
            <h2 className='text-center'>Add New Item</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3 inputField' placeholder=' Name' {...register("name", { required: true, maxLength: 20 })} />
                    
                    <input className='mb-3 inputField'placeholder=' Price' type="number" {...register("price")} />
                    <input className='mb-3 inputField'placeholder=' Quantity' type="number" {...register("quantity")} />
                    <input className='mb-3 inputField'placeholder=' Supplier' {...register("Supplier_name")} />
                    <input className='mb-3 inputField'placeholder=' Photo URL' type='text' {...register("img")} />
                    <textarea className='mb-3 inputField-des'placeholder='Description'{...register("description")} />
                    <input className='submit-addItem mx-auto mt-3' type="submit" value='Add Item' />
                </form>

            </div>

        </div>
    );
};
export default AddNew;
