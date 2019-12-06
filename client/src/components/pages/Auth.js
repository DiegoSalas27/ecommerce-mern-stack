import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { login, createNewUser } from "../../actions/securityActions"
import { useHistory } from 'react-router-dom';
import classnames from "classnames" 

function Auth() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [authState, setAuthState] = useState(true);
    const dispatch = useDispatch();

    const propErrors = useSelector(state => state.errors);
    const security = useSelector(state => state.security);
    const history = useHistory();

    const boundLoginUser = (user) => dispatch(login(user));
    const boundRegisterUser = (user) => dispatch(createNewUser(user));

    useEffect(() => {
        if(security.validToken) {
            history.push('/admin-dashboard')
        }
    },[])

    function onSubmit(e) {
        e.preventDefault();
        const user = {
            usuario,
            password,
        }
        if(authState)
            boundLoginUser(user);
        else
            boundRegisterUser(user)
    }

    function changeAuthState() {
        setAuthState(!authState);
    }

    return(
        <div>
            <img className='logo-left' src={require('../../image/logol.png')} />
            <div className="auth">
                <h2 className='welcome'>Bienvenido!</h2>
                <form className='authForm' style={{'textAlign':'center'}} onSubmit={onSubmit}>
                    <p className='usuario-key'>Usuario</p> 
                    <input 
                        type='text'
                        placeholder='Ingrese nombre de usuario'
                        className={classnames("inputUsuario", {
                                    "is-invalid": propErrors.message
                                })}
                        name='usuario' 
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                        autoFocus 
                        tabIndex='0' 
                    />
                    {
                        propErrors.message && (
                            <div className="invalid-feedback">{propErrors.message}</div>
                        )
                    }
                    <p className='password-key'>Password</p> 
                    <input 
                        className='inputPassword' 
                        type='password' 
                        name='contrasena' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        tabIndex='0' />
                    <button className='btn' type='submit' tabIndex='1'>{authState === true ? 'Iniciar Sesión' : 'Registrarse'}</button>
                    <div className='link'>
                        <p className="my-0">{authState === true ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'} </p>
                        <a className="nav-link text-primary mb-4" onClick={changeAuthState}><b>
                        {authState === true ? 'Registrarse' : 'Inicia sesión'}</b></a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;