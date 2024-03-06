import React, { useState } from 'react';
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

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % popupImages.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? popupImages.length - 1 : prevIndex - 1));
    };

    const handleNextCard = () => {
        onNextClick();
        handleClose(); // Close the current card modal before opening the next one
    };

    return (
        <>
            <Card
                style={{ Width: 350, height: 'auto', margin: '10px', cursor: 'pointer' }}
                onClick={handleOpen}
            >
                <CardMedia
                    component="img"
                    height="300"
                    image={require(`${cardImage}`)} // Modified line
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
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <IconButton onClick={handlePrevImage}><ArrowBackIcon /></IconButton>
                        <img src={require(`${popupImages[currentImageIndex]}`)} alt={`Popup ${currentImageIndex}`} style={{ maxWidth: '100%', maxHeight: 300 }} />
                        <IconButton onClick={handleNextImage}><ArrowForwardIcon /></IconButton>
                    </div>
                    <Typography variant="body1" id="modal-description" align="center" style={{ marginTop: 16 }}>
                        {intro}
                    </Typography>
                    <Typography variant="body2" id="modal-description" align="center" style={{ marginTop: 16 }}>
                        <strong>Coordinators:</strong> {coordinators.join(', ')}
                    </Typography>
                    <Button onClick={handleNextCard} style={{ marginTop: 16 }}>Next</Button>
                </Box>
            </Modal>
        </>
    );
};

const Page = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) => prevIndex + 1);
    };

    return (
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
                        onNextClick={handleNextCard}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
