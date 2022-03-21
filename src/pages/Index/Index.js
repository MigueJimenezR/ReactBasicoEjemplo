import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookie = new Cookies();

class Index extends Component{
    componentDidMount() {
        if(!cookie.get('token')){
            window.location.href='/Login';
        }
    }
    render() {
        return(
        <div className="containerPrincipal-index">
        <div className="containerSecundario-index">
          <div className="form-group-index">
            <label>Pagina index</label>     
            </div>
        </div>
      </div>
        )
    }
};

export default Index;