import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from './gdsc_events.json';

const ItemCard = ({ id, cardImage, popupImages, coordinators, intro, itemName, date, onNextClick }) => {
    const [open, setOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('right');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNextImage = () => {
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % popupImages.length);
            setSlideDirection('right');
        }, 300); // Adjust slide transition time as needed
    };

    const handlePrevImage = () => {
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? popupImages.length - 1 : prevIndex - 1));
            setSlideDirection('left');
        }, 300); // Adjust slide transition time as needed
    };

    useEffect(() => {
        const interval = setInterval(() => {
        }, 2000); 

        return () => clearInterval(interval);
    }, []); 

    return (
        <>
            <Card
                style={{ Width: 350, height: 'auto', margin: '10px', cursor: 'pointer' }}
                onClick={handleOpen}
            >
                <CardMedia
                    component="img"
                    height="300"
                    image={require(`${cardImage}`)} 
                    alt={id}
                />
                <Typography gutterBottom variant="h6" component="div" align="center">
                     {itemName}
                </Typography>
                <Typography variant="body2" align="center">{date}</Typography>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <div style={{ overflowY: 'auto',overflowX:'hidden' , maxHeight: '80vh'}}> {/* Added style for vertical scrolling */}
                    <Box
                        style={{
                            width: 400,
                            backgroundColor: 'white',
                            border: '2px solid #000',
                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                            padding: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            outline: 'none',
                        }}
                    >
                        <IconButton style={{ alignSelf: 'flex-end' }} onClick={handleClose}><CloseIcon /></IconButton>
                        <Typography variant="h6" id="modal-title">
                            {itemName}
                        </Typography>
                        <div style={{ position: 'relative', width: '100%', marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
                            <IconButton style={{ position: 'absolute', left: 0 ,zIndex: 1}} onClick={handlePrevImage}><ArrowBackIcon /></IconButton>
                            <img
                                src={require(`${popupImages[currentImageIndex]}`)}
                                alt={`Popup ${currentImageIndex}`}
                                style={{
                                    maxWidth: 'auto',
                                    maxHeight: 300,
                                    transition: 'transform 0.3s ease-in-out',
                                    transform: slideDirection === 'left' ? 'translateX(+50%)' : 'translateX(0)',
                                }}
                            />
                            <IconButton style={{ position: 'absolute', right: 0 }} onClick={handleNextImage}><ArrowForwardIcon /></IconButton>
                        </div>
                        <Typography variant="body1" id="modal-description" align="justify" style={{ marginTop: 16 }}>
                            {intro}
                        </Typography>
                        <Typography variant="body2" id="modal-description" align="justify" style={{ marginTop: 16 }}>
                           <h3> <strong>Conducted by:</strong>{coordinators.join(', ')}</h3> 
                        </Typography>
                        <Button onClick={handleClose} style={{ marginTop: 16 }}>Close</Button>
                    </Box>
                </div>
            </Modal>
        </>
    );
};

const Page = () => {
    return (
        <div style={{ paddingTop: '70px' }}> {/* Adding padding to the top */}
            <Typography variant="h2" align="center" gutterBottom color={"grey"}><b>EVENTS</b></Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {data.map((item, index) => (
                        <ItemCard
                            key={item.id}
                            id={item.id}
                            itemName={item.name}
                            cardImage={item.cardImage}
                            popupImages={item.popupImages}
                            coordinators={item.coordinators}
                            intro={item.intro}
                            date={item.date} // Passing date prop to ItemCard component
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
