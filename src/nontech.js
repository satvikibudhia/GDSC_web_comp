import React, { useState } from 'react';
import './tech.css'; 
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import data from './nontech.json'; // Import the JSON data

const ItemCard = ({ image, name, text }) => {
    return (
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="200vh" 
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {text}
          </Typography>
        </CardContent>
      </Card>
    );
};

const Page = () => {
  const [selectedTopic, setSelectedTopic] = useState("All");

  const { sections } = data; // Extract sections from imported data

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <div className="container" style={{ overflow:'visible' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Select
          value={selectedTopic}
          onChange={handleTopicChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select a topic' }}
        >
          {sections.map((section, index) => (
            <MenuItem key={index} value={section.title}>
              {section.title === "All" ? "All" : section.title}
            </MenuItem>
          ))}
        </Select>
      </div>
      {sections.map((section, index) => (
        (selectedTopic === "All" || selectedTopic === section.title) && (
          <div key={index} className={`section ${index % 2 === 0 ? 'white' : 'grey'}`}>
            {(selectedTopic === "All" || selectedTopic === section.title) && 
              <div>
                {(selectedTopic === "All" && section.title !== "All") && 
                  <h2 style={{textAlign: 'center'}}>
                    {section.title}
                  </h2>
                }
                <div className="additional-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '20px' }}>
                  {section.cards && section.cards.map((card, cardIndex) => (
                    <ItemCard
                      key={cardIndex}
                      image={require(`${card.image}`)} // Use require dynamically
                      name={card.name}
                      text={card.text}
                    />
                  ))}
                </div>
              </div>
            }
          </div>
        )
      ))}
    </div>
  );
};

export default Page;
