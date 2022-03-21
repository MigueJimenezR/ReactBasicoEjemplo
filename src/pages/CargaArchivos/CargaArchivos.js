import React, { useState} from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const cookie = new Cookies();
const urlFileInsert = 'http://localhost:3001/api/products/uploadFile';

const CargaArchivos = ()=> {

        if(!cookie.get('token')){
            window.location.href='/Login';
        }
    
        const [archivos, setArchivos] = useState(null);
        const subirArchivos = e => {
            setArchivos(e);
        }
        const insertarArchivos =async()=>{
            const files = new FormData();
            if(archivos){
            for(let index = 0; index < archivos.length; index++){
                files.append("file", archivos[index]);
            }
            await axios.post(urlFileInsert,files)
            .then(response => {
                alert('archivo se subio: ',response);
            }).catch(err => {
                console.log(err)
            })
            } else {alert('agrege un archivo')}
        }
        return(
        <div className="App">
            <br></br>
            <h1 className="text-center">Subir Archivos</h1>
            <div className="text-center">
                <label>Solo armite archivos xml dentro de rar o zip.</label>
                <br></br>
                <input type='file' name="file" onChange={(e)=>subirArchivos(e.target.files)} />     
                <br></br>
                <button className="btn btn-primary " onClick={()=> insertarArchivos()}>Subir Archivo</button>
            </div>
        </div>
        )
    
};

export default CargaArchivos;