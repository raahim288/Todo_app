import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { addDoc,collection, deleteDoc, doc, getDoc,getDocs,setDoc, updateDoc } from 'firebase/firestore'
import db from '../components/Config/firebase'
const Todo = () => {


    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

const [userdata,setUserdata]=useState([]);
    const handlegetvalues=async ()=>{
        console.log(name,email,password)

const objusers={
    name,
    email,
    password,
}

        try {
            const users = await addDoc(collection(db, "users"),objusers);
            console.log("Users ", users);
          } catch (e) {
            console.error("Error ", e);
          }


    }



    // get data

    useEffect(() => {
        getData();
      },);
    
      //   Data get from firebase Firestore Database
    
      const getData = async () => {
       try{
          const arr = [];
          const getData = await getDocs(collection(db, "users"));
    
       
          getData.forEach((doc) => {
            arr.push({...doc.data(),id:doc.id});
          });
   setUserdata(arr)
      
}
catch(e){
    console.log(e)
}
        }

 


        const editdata=async (id)=>{
            const editdata=prompt("Enter the updated Task Name");
            const editdescription=prompt('Enter your updated description')
            const editstatus=prompt('Enter your updated status')
            
console.log('id',id)

let updateddoc={
    name:editdata,
    email:editdescription,
    password:editdata
}

const updateData=await updateDoc(doc(db, "users", id),updateddoc)
console.log("updateData", updateData);
        }



        const Deletedata= async(id)=>{
            const deleteUser = await deleteDoc(doc(db, "users", id))
        }
  return (
    <div>
      

<Paper sx={{width:'50%',margin:'auto',marginTop:'3rem',padding:'2rem'}}>
  <h1 style={{textAlign:'center',backgroundColor:'black',color:'white'}}> 
    TODO APP WITH CRUD OPERATION:
  </h1>
<br />

  <TextField label='Title' fullWidth onChange={(e)=>setName(e.target.value)}/>
  <br />
  <br />
  <TextField label='Description' fullWidth onChange={(e)=>setEmail(e.target.value)}/>

    <br />
    <br />
  <TextField label='Status' type='text' fullWidth onChange={(e)=>setPassword(e.target.value)}/>
    
    <br />
    <br /> 

    <Button onClick={handlegetvalues} variant='contained'>Submit</Button>
    <h1>
        Previous All TODOS:
    </h1>
    <hr />
{
    userdata.map((e,i)=>{
        return(
<Box key={i}>

            <h1><span style={{color:'white',backgroundColor:'black'}}>Task Name: </span> {e.name}</h1>
            <h2> <span style={{color:'white',backgroundColor:'black'}}>Task Description: </span> {e.email}</h2>
            <h2><span style={{color:'white',backgroundColor:'black'}}>Task Status: </span> {e.password}</h2>
            <Button onClick={()=>editdata(e.id)} variant='contained' >Update</Button>
            <Button onClick={()=>Deletedata(e.id)} variant='contained' sx={{marginLeft:'2rem'}}>Delete</Button>
            <hr />
</Box>
        )
    })
}

    
</Paper>

    </div>
  )
}

export default Todo
