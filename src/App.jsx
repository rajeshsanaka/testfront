import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [data,setData] = useState([]);


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    console.log(email,name);
    const user={name,email};
    try{
      await axios.post("https://testpro-ten.vercel.app/add-user",user);
      alert("user added")
     

    }catch(err){
      alert("error")
      console.log(err);
    }
  }

  useEffect(()=>{
      const fetchData = async () => {
        const res = await axios.get("https://testpro-ten.vercel.app/users");
        setData(res.data);
      };
      fetchData();
    },[])
  return (
    <>

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='name' name='name' required/>
      <input type="email" placeholder='email' name='email' required/>
      <button>Submit</button>
    </form>

    {
      data.map((item)=>{
        return <p key={item._id}>{item.name} : {item.email}</p>
      })

      
    }

    </>
  )
}

export default App
