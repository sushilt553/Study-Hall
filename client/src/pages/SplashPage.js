import React from "react";
import "./assets/CSS/splash.css";
import Rise from "./assets/images/rise_to_your_challenge.jpeg";
import Floor from "./assets/images/floor_study.jpeg";
import Desktop from "./assets/images/desktop_study.png";
import Tree from "./assets/images/info_tree.png";

export default () => {
  return (
    <>
      <div className="splash-container">
        <div className="header-container">
          <p className="header-statement1">
            The World's Fastest Learning Platform
          </p>
          <p className="header-statement2">
            Learn twice as fast, and remember longer.
          </p>
          <p className="header-statement2">
            Proven by decades of cognitive science.
          </p>
        </div>
        <div className="panel-container">
          <div className="img-container">
            <img src={Rise} alt="rise" />
          </div>
          <div className="panel-details">
            <h3 className="panel-title">
              Study Less, Remember More, {`&`} Improve Test Scores
            </h3>
            <p className="panel-paragraph">
              Study Hall's result driven repetition method is proven by decades
              of cognitive science research into how we learn and retain
              information.
            </p>
          </div>
        </div>
        <div className="panel-container">
          <div className="panel-details">
            <h3 className="panel-title">Social Learning for Your Class</h3>
            <p className="panel-paragraph">
              Are you an educator looking for a simple collaborative, adaptive
              learning solution? Study Hall allows teachers and professors to
              create a dynamic learning experience in minutes.
            </p>
            <p className="panel-paragraph">
              Students can study their categories or questions online and keep
              track of their progress through the amount of mastery points
              earned.
            </p>
          </div>
          <div className="img-container">
            <img src={Floor} alt="floor" />
          </div>
        </div>
        <div className="panel-container">
          <div className="img-container">
            <img src={Desktop} alt="Desktop" />
          </div>
          <div className="panel-details">
            <h3 className="panel-title">
              Perfect for Online Employee Training
            </h3>
            <p className="panel-paragraph">
              Did you know that people forget up to 90% of what they learn in
              live staff workshops, PPTs, PDFs, and static reading materials?
            </p>
            <p className="panel-paragraph">
              Study Hall's bite-sized, adaptive, web study system is guaranteed
              to help your team learn faster and retain knowledge for longer.
              It's ideal for product information, sales training, employee,
              onboarding, and more.
            </p>
          </div>
        </div>
        <div className="panel-container">
          <div className="panel-details">
            <h3 className="panel-title">Proven Cognitive Science</h3>
            <p className="panel-paragraph">
              Study Hall works by guaranteeing that each concept is repeated in
              just the right time for your brain's maximum benefit.
            </p>
            <p className="panel-paragraph">
              As you answer questions correctly, you earn mastery points
              allowing you to keep track of your progress for any given
              category.
            </p>
            <p className="panel-paragraph">
              This unique application of spaced repetition combines the key
              mental activities of Active Recall, Metacognition, and Spaced
              Repetition more effectively than any other learning tool. Each
              step of the Study Hall learning process activates your hippocampus
              to maximize the strength of new neuron connections in your
              prefrontal cortex.
            </p>
          </div>
          <div className="img-container">
            <img src={Tree} alt="tree" />
          </div>
        </div>
      </div>
    </>
  );
};
