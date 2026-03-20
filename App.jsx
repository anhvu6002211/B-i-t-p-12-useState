import React, { useState } from 'react';
import './App.css';

// Import các file SVG
import horseSvg from './horse.svg';
import dogSvg from './dog.svg';
import gatorSvg from './gator.svg';
import heartSvg from './heart.svg';

// Danh sách các hình ảnh động vật
const animalImages = [
  { name: 'horse', image: horseSvg },
  { name: 'dog', image: dogSvg },
  { name: 'gator', image: gatorSvg },
];

function HeartButton() {
  const [isLarge, setIsLarge] = useState(false);
  return (
    <img
      src={heartSvg}
      alt="heart"
      className={`heart ${isLarge ? 'large' : ''}`}
      onClick={() => setIsLarge(!isLarge)}
    />
  );
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleAddAnimal = () => {
    // Chọn ngẫu nhiên một động vật từ danh sách
    const randomIndex = Math.floor(Math.random() * animalImages.length);
    const randomAnimal = animalImages[randomIndex];
    
    // Thêm động vật mới vào danh sách
    const newAnimal = {
      ...randomAnimal,
      id: Date.now() + Math.random(),
    };
    
    setAnimals([...animals, newAnimal]);
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="header"></div>
      
      {/* Add Animal Button */}
      <div className="button-container">
        <button className="add-animal-btn" onClick={handleAddAnimal}>
          Add Animal
        </button>
      </div>

      {/* Animal List */}
      <div className="animal-list">
        {animals.map((animal) => (
          <div key={animal.id} className="animal-card">
            <img src={animal.image} alt={animal.name} className="animal-image" />
            <HeartButton />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
