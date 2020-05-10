import React from 'react';
import styled from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';



const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    //utilizar custom hooks
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);
    // submit al form. pasar cotegoria al app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styled.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styled.heading}>Encuentra Noticias por Categoria</h2>

                    <SelectNoticias />
                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={`${styled['btn-block']} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;