import React, { useEffect, useState } from 'react';
import axios from "axios";
import DashBoardNavBar from './DashBoardNavBar';
import { Table } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/securityActions';
import DeleteModal from './modals/DeleteModal';
import CreateModal from './modals/CreateModal';
import EditModal from './modals/EditModal';

function AdminDashboard() {
    const [option, setOption] = useState('Productos');
    const [dataset, setDataset] = useState('');
    const [mostrarEliminarModal, setMostrarEliminarModal] = useState(false);
    const [mostrarCreateModal, setMostrarCreateModal] = useState(false);
    const [mostrarEditModal, setMostrarEditModal] = useState(false);
    const [frase, setFrase] = useState('el producto');
    const [objetoSeleccionado, setObjetoSeleccionado] = useState({});
    const [columns, setColums] = useState([]);

    const dispatch = useDispatch();

    const boundOnLogout = () => dispatch(logout());

    async function fetchProducts() {
        try {
            const resProd = await axios.get(`/api/producto`);
            setDataset(resProd.data.productos);
            for(var key in resProd.data.productos[0]){
                setColums(columns => [...columns, key]);
            } 
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    function logoutUser() {
        boundOnLogout()
        window.location.href = '/auth'
    }

    const toggleEliminar = (data) => {
        setMostrarEliminarModal(!mostrarEliminarModal);
        setObjetoSeleccionado(data);
    }

    const toggleEditar = (data) => {
        setMostrarEditModal(!mostrarEditModal);
        setObjetoSeleccionado(data);
    }

    const toggleCreate = () => {
        setMostrarCreateModal(!mostrarCreateModal);
    }

    async function listOption(number) {
        switch(number) {
            case 1: {
                setOption('Productos');
                setFrase('el producto');
                try {
                    const resProd = await axios.get(`/api/producto`);
                    setDataset(resProd.data.productos);
                    setColums([]);
                    for(var key in resProd.data.productos[0]){
                        setColums(columns => [...columns, key]);
                    } 
                } catch(err) {
                    console.log(err)
                }
                break;
            }
            case 2: {
                setOption('Categorías');
                setFrase('la categoría');
                try {
                    const resProd = await axios.get(`/api/categoria`);
                    setDataset(resProd.data.categorias);
                    setColums([]);
                    for(var key in resProd.data.categorias[0]){
                        setColums(columns => [...columns, key]);
                    } 
                } catch(err) {
                    console.log(err)
                }
                break;
            } 
            case 3: {
                setOption('Usuarios');
                setFrase('el usuario');
                try {
                    const resProd = await axios.get(`/api/usuario`);
                    setDataset(resProd.data.usuarios);
                    setColums([]);
                    for(var key in resProd.data.usuarios[0]){
                        setColums(columns => [...columns, key]);
                    } 
                } catch(err) {
                    console.log(err)
                }
                break;
            } 
            default: setOption('');
        }
    }

    function renderHeader(data, index) {
        return (
          <td className={`td-header${index}`}>{data}</td>
        )
      }
    
    function renderTbody(data, index) {
        var dataValues = [];
        for(var key in data){
            dataValues.push(data[key])
          } 
        return (
            <>
                <tr key={index}>
                    <th scope="row">{index}</th>
                    {dataValues.map((value, index) => 
                        <td className={`td-body${index}`} key={index}>{value.toString().substring(0,15)}</td>
                    )}
                    <td>
                        <span style={{cursor:'pointer'}} onClick={()=>toggleEditar(data)}>Editar</span>&nbsp;&nbsp;
                        <span style={{cursor:'pointer'}} onClick={()=>toggleEliminar(data)}>Eliminar</span>
                    </td>
                </tr>
            </>
        )
    }

    return(
        <div>
            <DashBoardNavBar />
            <div className="main-left">
                <nav className="left-sticky">
                    <ul>
                        <li onClick={() => listOption(1)}> Productos </li>
                        <li onClick={() => listOption(2)}> Categorías </li> 
                        <li onClick={() => listOption(3)}> Usuarios </li>
                        <li onClick={logoutUser}> Cerrar sesión </li>
                    </ul>
                </nav>
            </div>
            <div className="main-right">
                <p className='mb-4' style={{'fontSize': '30px'}}>
                    {option}
                </p>
                <p onClick={toggleCreate} style={{'fontSize': '15px', cursor:'pointer'}}>
                    Agregar
                </p>
                <Table>
                    <thead>
                        <tr>
                        <td>#</td>
                        {columns && columns.map(renderHeader)}
                        <td>Acciones</td>
                        </tr>
                    </thead>
                    <tbody>
                        {dataset && dataset.map(renderTbody)} 
                    </tbody>
                </Table>
            </div>
            <DeleteModal 
                option={option} 
                frase={frase} 
                objeto={objetoSeleccionado} 
                show={mostrarEliminarModal} 
                setShow={setMostrarEliminarModal}
            />
            <CreateModal
                option={option} 
                show={mostrarCreateModal} 
                setShow={setMostrarCreateModal}
            />
            <EditModal
                option={option} 
                objeto={objetoSeleccionado} 
                show={mostrarEditModal} 
                setShow={setMostrarEditModal}
            />
        </div>
    );
}

export default AdminDashboard;