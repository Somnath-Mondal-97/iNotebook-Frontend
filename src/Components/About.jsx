import React from "react";
import "./Component.css";

const About = (props) => {
  return (
    <div>
      <h1 className="text-center about-heading">{props.heading}</h1>
      <h3 className="text-center px-5">
        iNotebook is the ultimate companion for anyone who loves to organize
        their thoughts, jot down ideas, and keep track of their daily tasks.
        With robust user authentication and CRUD (Create, Read, Update, Delete)
        functionality for user-specific notes, iNotebook ensures your data
        remains secure while offering seamless control over your notes. One of
        the standout features of iNotebook is its intuitive user authentication
        system. Users can create their accounts securely, providing peace of
        mind knowing that their notes are accessible only to them. Once logged
        in, users are greeted with a clean and user-friendly interface, making
        it effortless to navigate through the app's features. The CRUD
        functionality empowers users to manage their notes with ease. Creating a
        new note is as simple as tapping a button, while editing and updating
        existing notes is a breeze. Whether you're brainstorming new ideas,
        making a to-do list, or jotting down meeting minutes, iNotebook adapts
        to your needs seamlessly. What sets iNotebook apart is its focus on
        user-specific notes. Each user has their own dedicated space within the
        app, ensuring privacy and organization. Whether you're a student,
        professional, or creative thinker, iNotebook tailors the note-taking
        experience to your preferences and requirements. With iNotebook, staying
        organized has never been easier. Say goodbye to scattered notes and
        hello to a streamlined note-taking experience that puts you in control.
        Whether you're on the go or relaxing at home, iNotebook is the perfect
        companion for capturing your thoughts and ideas wherever inspiration
        strikes.
      </h3>
    </div>
  );
};

export default About;
