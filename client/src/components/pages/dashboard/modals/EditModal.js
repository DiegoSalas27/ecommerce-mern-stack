import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classnames from "classnames" 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { updateEntity } from '../../../../actions/generalActions';
import { useDispatch, useSelector } from 'react-redux';

function EditModal(props) {
    const [entityName, setEntityName] = useState('');
    const [entityDescription, setEntityDescription] = useState('');
    const [entityId, setEntityId] = useState('');
    const [precio, setPrecio] = useState('');
    const [categories, setCategories] = useState([]);
    const [category, setSelectedCategory] = useState('');
    const [usuario, setUsuario] = useState(props.objeto.usuario);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const propErrors = useSelector(state => state.errors);

    const boundOnUpdateEntity = (option, object) => dispatch(updateEntity(option, object))

    async function fetchCategories() {
        try {
            const resCat = await axios.get("/api/categoria");
            setCategories(resCat.data.categorias);
            setSelectedCategory(resCat.data.categorias[0].id);

        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(props.option === 'Productos') {
            fetchCategories();
            setEntityName(props.objeto.nombre);
            setEntityDescription(props.objeto.descripcion);
            setPrecio(props.objeto.precio);
            setSelectedCategory(props.objeto.categoriaId);
        } else if (props.option === 'Categorías') {
            setEntityName(props.objeto.nombre);
            setEntityDescription(props.objeto.descripcion);
        } else {
            setUsuario(props.objeto.usuario);
        }

        setEntityId(props.objeto.id);
            
    }, [props])

    function toggle() {
        props.setShow(!props.show);
    } 

    function updateOption() {
        let entity = {};

        switch(props.option) {
            case 'Productos': {
                entity['nombre'] = entityName;
                entity['descripcion'] = entityDescription;
                entity['categoriaId'] = category;
                entity['precio'] = precio;
                break;
            }
            case 'Categorías': {
                entity['nombre'] = entityName;
                entity['descripcion'] = entityDescription;
                break;
            }
            case 'Usuarios': {
                entity['usuario'] = usuario;
                entity['password'] = password;
                break;
            }
        }

        entity['id'] = entityId;

        boundOnUpdateEntity(props.option, entity)
    }

    function handleChangeCategory(e) {
        setSelectedCategory(e.target.value);
    }

    const common = (
        <>
            <div className="form-group">
                <span>Nombre</span>
                <input 
                    type="text" 
                    placeholder="ingrese nombre" 
                    className="form-control shadow-none" 
                    name="nombre"
                    value={entityName}  
                    onChange={e => setEntityName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <span>Descripción</span>
                <textarea 
                    className="form-control shadow-none" 
                    name="descripcion"
                    placeholder="ingrese descripción" 
                    value={entityDescription}  
                    onChange={e => setEntityDescription(e.target.value)}
                    style={{height:'100px'}}
                />
            </div>
        </>
    )

    const editProductForm = (
        <form>
            {common}
            <div className="form-group">
                <span>Categoría</span>
                <select className="form-control shadow-none" 
                    onChange={handleChangeCategory}>
                    {categories && categories.map(categoria => {
                        return props.objeto.categoriaId === categoria.id ?
                        <option key={categoria.id} value={categoria.id} selected>{categoria.nombre}</option> :
                        <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>;
                    })}
                </select>
            </div>
            <div className="form-group">
                <span>Precio</span>
                <input 
                    type="text" 
                    placeholder="ingrese precio" 
                    className="form-control shadow-none" 
                    name="precio"
                    value={precio}  
                    onChange={e => setPrecio(e.target.value)}
                />
            </div>
        </form>
    )

    const editUsuarios = (
        <form>
            <div className="form-group">
                <span>Nombre de usuario</span>
                <input 
                    type="text" 
                    placeholder="ingrese usuario" 
                    className={classnames("form-control shadow-none" , {
                                    "is-invalid": propErrors.message
                                })}
                    name="usuario"
                    value={usuario}  
                    onChange={e => setUsuario(e.target.value)}
                    readOnly
                />
                {
                    propErrors.message && (
                        <div className="invalid-feedback mt-3">{propErrors.message}</div>
                    )
                }
            </div>
            <div className="form-group">
                <span>Contraseña</span>
                <input 
                    type="password"
                    className="form-control shadow-none" 
                    name="password"
                    placeholder="ingrese nueva contraseña" 
                    value={password}  
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
        </form>
    )

    return(
        <Modal isOpen={props.show} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edición {props.option}</ModalHeader>
            <ModalBody>
                {props.option === 'Productos' ? editProductForm : 
                ( props.option === 'Usuarios' ? editUsuarios : common) }
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={updateOption}>Editar</Button>
                <Button color="secondary" onClick={toggle}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditModal;