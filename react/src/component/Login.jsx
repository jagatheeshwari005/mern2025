// import React, { useState } from 'react';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     alert(`Email: ${email}\nPassword: ${password}`);
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
//       <form onSubmit={handleLogin} style={{ padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
//         <h2>Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ display: 'block', margin: '10px 0', padding: 8, width: '100%' }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{ display: 'block', margin: '10px 0', padding: 8, width: '100%' }}
//         />
//         <button type="submit" style={{ padding: 8, width: '100%', backgroundColor: '#007bff', color: 'white' }}>
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
import React, { useState } from 'react'

const Login= () => {
  const[formData,setFormData]=useState({
    email:'',
    password:''

  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
    setFormData({
      email:"",
      password:""
    })
  }

const handleChange=(e)=>{
  setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
}

  return (
    <>
    <div>
      <form className ="form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>Email:</label>
      <input type="email" name='email' value={formData.email} onChange={handleChange}/>
      <label>Password:</label>
      <input type="password" name='password' value={formData.password} onChange={handleChange}/>
      
      <button type="submit">Login</button>
    </form>
    </div>
    </>
  )
}

export default Login
