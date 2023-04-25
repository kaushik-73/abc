import React, { useState, useEffect } from 'react';
const About = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [posts, setPosts] = useState([]);
const [weather, setWeather] = useState([]);


// GET with fetch API
useEffect(() => {
  const fetchPost = async () => {
     const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
     );
     const data = await response.json();
     console.log(data);
     setPosts(data);
  };
  fetchPost();

  
  const fetchWeather = async () => {
    const response = await fetch(
       'https://api.weather.gov/alerts/active?area=KS'
    );
    const data = await response.json();
    console.log(data);
    setWeather(data.features[0].properties);
 };
 fetchWeather();

}, []);


return (
  <div className="posts-container">
  {posts.map((post) => {
     return (
        <div className="post-card" key={post.id}>
           <h2 className="post-title">{post.title}</h2>
           <p className="post-body">{post.body}</p>
        </div>
     );
  })}

  <h2>Weather</h2>

  Title: {weather.headline}<br/>
  Description: {weather.description}<br/> 
</div>
);
};

export default About;