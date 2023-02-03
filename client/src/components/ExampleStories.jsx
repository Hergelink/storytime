import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/ExampleStories.module.css';
import octopusImg from '../images/octopus-story.png';
import spaceImg from '../images/space-story.png';
import dogImg from '../images/dog-story.png'
export default function ExampleStories() {
  const stories = [
    {
      id: 1,
      title: 'The Unbreakable Bond Between a Submarine and a Giant Octopus',
      story: `The deep blue sea was a mysterious place, but none were more
    mysterious than the bond between the submarine and the giant
    octopus. It was an unbreakable bond that no one could explain, but
    everyone could see. For years the submarine had been exploring the
    depths of the ocean, but it wasn't until the giant octopus appeared
    that the submarine found a true companion. The two were inseparable,
    and together they explored the depths of the ocean, uncovering
    secrets no one had ever seen before.`,
      photo: octopusImg,
    },
    {
      id: 2,
      title: 'The Intergalactic Space Race: Who Will Be the Fastest?',
      story: `It was a race like no other. A race that spanned galaxies, with competitors from all corners of the universe. It was the Intergalactic Space Race, and the stakes were high. A grand prize of unimaginable wealth and power awaited the winner. But who would be the fastest? Who would be the one to take home the prize? The competitors were ready, the starting line was set, and the countdown had begun. It was time to find out who would be the victor in the Intergalactic Space Race.`,
      photo: spaceImg,
    },
    {
      id: 3,
      title: 'A New Home for Fido: How a Dog Found His Forever Family at the Shelter',
      story: `Fido was a lonely pup when he first arrived at the animal shelter. He had been abandoned by his previous family and had no idea what his future would hold. But little did he know, his luck was about to change. As soon as he stepped through the shelter doors, he was met with a warm welcome from the staff and volunteers. With their help, he quickly found the perfect home and a new family to call his own. This is the story of how Fido found his forever home at the shelter.`,
      photo: dogImg,
    },
  ];
  return (
    <section>
      <h2 id={style.exampleTitle}>Example Stories</h2>
      
      {stories.map((story) => {
        return(
        <div className={style.storyContainer}>
        <div className={style.storyInfo}>
          <h3>{story.title}</h3>
          <p>{story.story}</p>
          <Link to='/' className={style.storyLinks}>
            Read Full Story
          </Link>
        </div>
        <div className={style.imageContainer}>
          <img
            src={story.photo}
            alt={story.title}
            className={style.exampleImage}
          />
        </div>
      </div>
      )})}
    </section>
  );
}
