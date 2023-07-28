import React from 'react';

function About({ blogImageURL, aboutText }) {
  return (
    <aside>
      <img src={blogImageURL} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
