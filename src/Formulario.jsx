import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
class Formulario extends React.Component{
    constructor(props){
        super(props);
        this.state={
          name:'',
          lastName:'',
          email:'',
          password:''
        };

    }


    onSaveText(event){
      this.setState({[event.target.name]:event.target.value});

      console.log(this.state);
    }

    handleClick(e){
      e.preventDefault();
      $.ajax({
                 data    :{name:this.state.name,lastName:this.state.lastName},
                 type     : "POST",
                 url: `http://localhost/backend/prueba.php`,
             })
             .done(function( data, textStatus, jqXHR ) {
               alert(data);

             });
    }

    render(){
        return(
          <div className="container">
              <div className="row" id="header">
                <h1>Formulario</h1>
                <p>Formulario demo de inscripción</p>
              </div>
              <div className="row" id="form">
                <form action="#">
                  <input type="text" placeholder="Nombres"  name="name" defaultValue={this.state.name} onChange={this.onSaveText.bind(this)} />
                  <input type="text" onChange={this.onSaveText.bind(this)} name="lastName" placeholder="Apellidos" defaultValue={this.state.lastName} />
                  <input type="text" onChange={this.onSaveText.bind(this)} name="email" placeholder="Email"    />
                  <input type="text" onChange={this.onSaveText.bind(this)} name="password" placeholder="Password" />
                  <button   onClick={this.handleClick.bind(this)}>Enviar</button>
                </form>
              </div>
            </div>
            )
    }
}

export default Formulario;
