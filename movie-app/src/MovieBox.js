// import { Button, Modal, show } from 'react-bootstrap';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {

    const [show, setShow] = useState(false);

    // const handleShow = () => setShow(false);
    // const handleClose = () => setShow(true);

    // const router = useNavigate();


  return (
    <div className='card text-center bg-secondary mb-3 mt-3'>
        <div className='card-body'>
            <img className='card-img-top' src={API_IMG+poster_path} alt=''/>
            <div className='card-body'>
                <button type='button' className='btn btn-dark' onClick={() => setShow(true)}>View More</button>
                <Modal size='md' isOpen= { show } toggle={() => setShow(true)}>
                    <ModalHeader toggle={() => setShow(!show)}>
                        Movie
                    </ModalHeader>
                    <ModalBody>
                    <img className='card-img-top' style={{width: "30%", height: "30%"}} src={API_IMG+poster_path} alt=''/>
                    <h3>{title}</h3>
                    <h4>IMDB: {vote_average}</h4>
                    <h5>Release Date: {release_date}</h5>
                    <br></br>
                    <h6>Overview</h6>
                    <p>{overview}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='secondary' onClick={() => setShow(!show)} >Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default MovieBox
