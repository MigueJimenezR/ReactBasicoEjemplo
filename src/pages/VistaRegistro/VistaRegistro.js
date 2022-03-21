import React, { useState,useEffect, useMemo} from "react";
//import Cookies from "universal-cookie";
//import DataTable from "react-data-table-component";
import axios from "axios";
import './VistaRegistro.css';
import Cookies from "universal-cookie";
import {useTable,  useGlobalFilter, useFilters} from 'react-table';
import { GlobalFilter } from "./GobalFilter/GlobalFilter";
import { ColumnFilter } from "./ColumnFilter/ColumnFilter";
const cookie = new Cookies();
const productosUrl="http://localhost:3001/api/products/";

//########################YABLA CON FILTRO UNICO########################
// const columnas =[
//     {
//         name: 'id',
//         selector:'_id',
//         sortable: true
//     },
//     {
//         name: 'nombre',
//         selector:'name',
//         sortable: true
//     }, 
//     {
//         name: 'categoria',
//         selector:'category',
//         sortable: true
//     }, 
//     {
//         name: 'Precio',
//         selector:'price',
//         sortable: true
//     }, 
//     {
//         name: 'URL imagen',
//         selector:'imgURL',
//         sortable: true
//     },        
// ]
// const paginacionOpciones={
//     rowsPerPageText: 'Filas por pagina',
//     rangeSeparatorText: 'de',
//     selectAllRowsItem: true,
//     selectAllRowsItemText: 'Todos'
// }

const COLUMNAS =[
    {
        Header: 'id',
        Footer:'Id',
        accessor:'_id',
        Filter: ColumnFilter
    },
    {
        Header: 'nombre',
        Footer:'Nombre',
        accessor:'name',
        Filter: ColumnFilter
    }, 
    {
        Header: 'categoria',
        Footer:'Vategoria',
        accessor:'category',
        Filter: ColumnFilter
    }, 
    {
        Header: 'Precio',
        Footer:'Precio',
        accessor:'price',
        Filter: ColumnFilter
    }, 
    {
        Header: 'URL imagen',
        Footer:'Url Imagen',
        accessor:'imgURL',
        Filter: ColumnFilter
    },        
]


export const VistaRegistros = () =>{
    const [producto, setProducto] = useState([]);
    useEffect(  ()=>{
        if(producto.length===0){
            console.log("entro")
            axios.get(productosUrl)
        .then(response => {
            setProducto(response.data)
        })}
    }, [])

    const columns = useMemo(()=> COLUMNAS,[]);
    const data = useMemo(()=> producto, []);
    console.log(data);
    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    }, useFilters,
    useGlobalFilter)

    const {globalFilter}=state
    
    return(
            <>

            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <table { ...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroups)=>(
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map( (column) =>(
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>     
                                    </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row)=>{
                        prepareRow(row)
                        return(
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }
                        </tr>
                        )
                    })}
                </tbody>
                
            </table>
            </>
    )
}

// class VistaRegistros extends Component {
    //########################YABLA CON FILTRO UNICO########################
    // state={
    //     data:[],
    //     busqueda: '',
    //     producto: []
    // }
    // peticionesGet=()=>{
    //     axios.get(loginUrl).then(e => 
    //         this.setState({data: e.data}) )
    // }

   
    // onChange= async e =>{
    //     e.persist();
    //     await this.setState({busqueda: e.target.value});
    //     this.filtrarElementos();
    // }
    // filtrarElementos = () => {
    //     var search = this.state.data.filter(item =>{
    //                 if(item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda)
    //                 || item._id.toString().includes(this.state.busqueda)
    //                 ){
    //                     return item;  
    //                 }
    //                 return '';
    //         });
    //     this.setState({producto: search})
    // }
    // componentDidMount(){
    //     if(!cookie.get('token')){
    //         window.location.href='/';
    //     }
    //     this.peticionesGet();
    //     this.setState({producto: this.state.data})
    // }
    // render(){
    //     return(
    //         <div className="App">
    //            <div className="table-responsive">

    //            <div className="barraBusqueda">
    //         <input
    //           type="text"
    //           placeholder="Buscar"
    //           className="textField"
    //           name="busqueda"
    //           value={this.state.busqueda}
    //           onChange={this.onChange}
    //         />
            
            
    //       </div>

    //             <DataTable
    //             columns={columnas}
    //             data={this.state.producto}
    //             title='Registro xml'
    //             pagination
    //             paginationComponentOptions={paginacionOpciones}
    //             fixedHeader
    //             fixedHeaderScrollHeight="600PX"
    //             noDataComponent={<span>No se encontro ningun elemento</span>}
    //             />
    //             </div>
    //         </div>
    //     )
    // }

    
// };

export default VistaRegistros;