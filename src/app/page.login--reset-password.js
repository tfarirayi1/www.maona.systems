import React        from 'react';
import LoginBroker  from 'broker.login';
import FormBroker   from 'broker.form';
import              'styles/login.reset-password.css';

export default class ResetPasswordPage extends React.Component{
    constructor(props){
        super(props);
        // load procedures
        this._resetPassword=LoginBroker.resetPassword.bind(this);
        this._handleInputChange=FormBroker.handleInputChange.bind(this);
        this._traverseForm=FormBroker.traverseForm.bind(this);
        // set state
        const {location}=props;
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailInput=location.state?location.state.emailInput?location.state.emailInput:'':'';
    }
    
    render(){
        return(
            <div className="login--reset-password">
                <div>
                    password-reset
                </div>
                <div ref={this.form}>
                    <div>
                        <label htmlFor="emailInput">
                            email
                        </label>
                        <input id="emailInput" type="email" autoComplete="off" value={this.state.emailInput}
                            onChange={this._handleInputChange} onKeyDown={this._traverseForm}/>
                    </div>
                    <div>
                        <div tabIndex="0" ref={this.formSubmitButton} onClick={this._resetPassword}>
                            submit 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}