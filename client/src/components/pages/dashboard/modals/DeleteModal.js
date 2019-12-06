import React, { useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEntity } from '../../../../actions/generalActions';

function DeleteModal(props) {
    const entity = useSelector(state => state.entity);
    const dispatch = useDispatch();

    const boundOnDelete = (option, id) => dispatch(deleteEntity(option, id))
    
    useEffect(() => {
        if(entity.response !== '') {
            toggle();
            window.location.href="/admin-dashboard";
        }
    }, [entity])

    function toggle() {
        props.setShow(!props.show);
    } 

    function deleteOption() {
        boundOnDelete(props.option, props.objeto.id)
    }

    return(
        <Modal isOpen={props.show} toggle={toggle}>
            <ModalHeader toggle={toggle}>Eliminar {props.option} </ModalHeader>
            <ModalBody>
                Está seguro que desea eliminar {props.frase} <strong>{props.objeto.nombre || props.objeto.usuario}</strong> ? 
                Esta acción no se podrá deshacer
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={deleteOption}>Eliminar</Button>
                <Button color="secondary" onClick={toggle}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default DeleteModal;