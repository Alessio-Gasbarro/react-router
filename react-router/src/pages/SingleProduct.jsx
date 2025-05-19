import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleProduct = () => {
    //Dichiaro la Variabile id destrutturando ciò che mi restituisce il metodo useParams() (oggetto contenende i parametri passati tramite url)
    const { id } = useParams();

    const navigate = useNavigate();

    //Dichiaro la variabile di stato che conterrà il prodotto
    const [product, setProduct] = useState({});

    //Definizione della funzione che mi recupera le info del prodotto tramite parametro
    const getProductDetail = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data);
        })
    };

    useEffect(() => {
        getProductDetail();
    }, [id]);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Dettaglio Prodotto</h1>
                    </div>
                    <div className="col-12">
                        <img src={product.image} alt="" className='fixed-dim-img' />
                        <h2>{product.title}</h2>
                        <p>{product.price}EURO</p>
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                    </div>
                    <div className="col-12">
                        <button className='btn' onClick={() => { navigate(`/products/${parseInt(id) - 1}`) }} disable={parseInt(id) === 1 ? true : false}>Indietro</button>
                        <button className='btn' onClick={() => { navigate(`/products/${parseInt(id) + 1}`) }}>Avanti</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
