import React, { useState } from 'react';
import './tech.css'; 
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ItemCard = ({ image, name, text }) => {
    return (
      <Card sx={{ maxWidth: 250 }}> {}
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

  const sections = [
    { title: "All", cards: [] },
    { title: "Artificial Intelligence", cards: [
      { image: require('./team_images/dhwani_parekh.png'), name: "Dhwani Parekh", text: "" },
      { image: require('./team_images/smriti_sinha.png'), name: "Smriti Sinha", text: "" }
    ]},
    { title: "Flutter", cards: [
      { image: require('./team_images/dev_bhanushali.png'), name: "Dev Bhanushali", text: "" },
      { image: require('./team_images/sumedh_dongre.png'), name: "Sumedh Dongre", text: "" }
    ]},
    { title: "Game Development", cards: [
      { image: require('./team_images/yash_parkhi.png'), name: "Yash Parkhi", text: "" },
    ]},
    { title: "Android", cards: [
      { image: require('./team_images/siddharth_prabhakar.png'), name: "Siddharth Prabhakar", text: "" },
    ]},
    { title: "Competitive Programming", cards: [
      { image: require('./team_images/yajushreshta_shukla.png'), name: "Yajushreshtha Shukla", text: "" },
      { image: require('./team_images/megha_beria.png'), name: "Megha Beria", text: "" },
      { image: require('./team_images/divyansh_kumar.png'), name: "Divyansh Kumar", text: "" },
    ]},
    { title: "Cloud", cards: [
      { image: require('./team_images/gautam_ranjhas.png'), name: "Gautam Ranjhas", text: "" },
      { image: require('./team_images/chahak_sengar.png'), name: "Chahak Sengar", text: "" }
    ]},
  ];

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <div className="container" style={{ overflow:'visible'  }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Select
          value={selectedTopic}
          onChange={handleTopicChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select a topic' }}
        >
          {sections.map((section, index) => (
            <MenuItem key={index} value={section.title}>
              {section.title === "All" ? "Team" : section.title}
            </MenuItem>
          ))}
        </Select>
      </div>
      {sections.map((section, index) => (
        (selectedTopic === "All" || selectedTopic === section.title) && (
          <div key={index} className={`section ${index % 2 === 0 ? 'white' : 'grey'}`}>
            {/* Conditionally render the text based on the selected topic */}
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
                      image={card.image}
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
