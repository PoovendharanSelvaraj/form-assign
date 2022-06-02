import React from 'react';
import { useState } from 'react';
import styles from "./Form.module.css";

const Form = () => {
    const [form,setForm]=useState({
        name:"",
        age:0,
        city:"",
        state:"",
        department:"",
        salary:0,
        martialState:""
      })
   const handleChange=(e)=>{
     e.preventDefault();
   
    const {type, name, value, checked}=e.target;
    if(type==="checkbox"){
      
        setForm({
            ...form,
            [name]:checked,});
    }
  
    else{
        setForm({...form,[name]:value})
    }
   }
   
   const handleForm=(e)=>{
    e.preventDefault();

     const details=form
     console.log(details)
   }
 
 
 
 
   return (
     <div>
       <div >
       <h1>Employee Form</h1>
         <form className={styles.form_container} onSubmit={handleForm} action="">
           <div>
             <label htmlFor="">Name: </label>
             <input value={form.name} type="text" name="name" onChange={handleChange} placeholder="Enter Name"   />
           </div>
           <div>
             <label htmlFor="">Age:</label>
             <input value={form.age} type="number" name="age" id="" onChange={handleChange} placeholder="Enter Age"/>
           </div>
           <div>
             <label htmlFor="">Address:</label>
              <div>
                <label htmlFor="">City:</label>
                <input value={form.city} type="text" name="city" onChange={handleChange} placeholder="Enter City"/>
                <label htmlFor="">State</label>
                <input value={form.state} type="text" name='state' onChange={handleChange} placeholder="Enter State"/>
              </div>
           </div>
           <div>
             <label htmlFor="">Department:</label>
             <select value={form.department} onChange={handleChange} name="department" id="">
               <option value="">Select</option>
               <option value="civil">Civil</option>
               <option value="mechanical">Mechanical</option>
               <option value="process">Process</option>
               <option value="electrical">Electrical</option>
               <option value="E&I">E&I</option>
             </select>
           </div>
           <div>
             <label htmlFor="">Salary:</label>
             <input value={form.salary}  type="number" onChange={handleChange} name="salary" id="" placeholder="Enter INR"/>
           </div>
            <div>
              <input type="radio"  value="married"  onChange={handleChange}   name="marriagestatus" id="married"/>
             <label for="married">Married</label>

              <input type="radio"  value="unmarried" onChange={handleChange} name="marriagestatus" id="unmarried"/>
             <label for="unmarried">Unmarried</label>
             
             </div>
           
 
           <div>
             <label htmlFor="">Photo:</label>
             <input type="file" onChange={handleChange} name="photo" id=""/>
           </div>
           <input type="submit" value="submit" />
         </form>
       </div>
     </div>
   );
}

export default Form