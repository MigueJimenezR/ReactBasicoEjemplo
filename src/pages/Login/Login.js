import axios from "axios";
import React, { useState} from "react";
import Label from "./Label/Label";
import './Login.css';
import Cookies from 'universal-cookie';
import Input from "./Input/Input";
import Title from "./Title/Title";

const loginUrl="http://localhost:3001/api/auth/signin";
const cookie = new Cookies();

//login sin hook

// class Login extends Component{
//     state={
//         form:{
//             email: '',
//             password:''
//         }
//     }
//     handleChange= async e=>{
//         await this.setState({
//             form:{
//                 ...this.state.form,
//                 [e.target.name]: e.target.value
//             }
//         });
//         console.log(this.state.form)
//     }
//     iniciarSesion= async()=>{
//         await axios.post(loginUrl,  {email: this.state.form.email, password: this.state.form.password})
//         .then(res =>{
//             return res.data;
//         })
//         .then(res => {
//         console.log(res)
//             if(res.token !== undefined){
//                 var token = res.token;
//                 cookie.set('token', token,{path:"/"});
//                 window.location.href="/";
//             }else{
//                 alert('El usuario o la contraseña no son correctos.');
//             }
//         }).catch(err => {
//             console.log(err)
//         })
//     }
//     componentDidMount() {
//         if(cookie.get('token')){
//             window.location.href='/';
//         }
//     }
//     render() {
//         return(
//         <div className="containerPrincipal">
//         <div className="containerSecundario">
//           <div className="form-group">
//             <Label text="Email" />
//             <br />
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               onChange={this.handleChange}
//             />
//             <Label text="Password" />
//             <br />
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               onChange={this.handleChange}
//             />
//             <br />
//             <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
//             </div>
//         </div>
//       </div>
//         )
//     }
// };

// Login con hook
const Login = () => {
    if(cookie.get('token')){
        window.location.href='/';
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleChange(name,value){
        if(name ==='email'){
            setEmail(value)
            console.log(email)
        } else{
            setPassword(value)
        }
    }
    
    async function iniciarSesion (){
            let account = {email, password}
            await axios.post(loginUrl,  {email: account.email, password: account.password})
        .then(res =>{
            return res.data;
        })
        .then(res => {
            console.log(res)
            if(res.token !== undefined){
                var token = res.token;
                cookie.set('token', token,{path:"/"});
                window.location.href="/";
            }else{
                alert('El usuario o la contraseña no son correctos.');
            }
        }).catch(err => {
            console.log(err)
        })

    }
    
    return(
        <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="form-group">
                <Title text='Login' />
                <Label text='Email' />
                <Input
                attribute={{ 
                    id:'email',
                    name: 'email',
                    type: 'email',
                    placeholder: 'Ingrese el email'
                }}
                handleChange={handleChange}
                />
                <Label text='Password' />
                <Input
                attribute={{ 
                    id:'password',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Ingrese el password'
                }}
                handleChange={handleChange}
                />
                <div className="">
                    <button className="btn btn-primary" onClick={()=> iniciarSesion()}>Iniciar Sesión</button>
                </div>
                </div>
            </div>
        </div>

    )
};

export default Login;