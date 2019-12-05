import React, { Component } from 'react';

import '../css/Home.css';
import WT from '../wt.jpg';
import CV from '../cv.pdf';

class Home extends Component {
  render() {
    return (
      <div className='component'>
        <section className='main'>
          <div className='wtIMG'>
            <img src={WT} alt="Wesley Tansey" />
          </div>
          <div className='info'>
            <div className='wez'>
              <h2>Wesley Tansey</h2>
            </div>
            <div className='current'>
              <h3>Columbia University</h3>
              <div className='side'>
                <h4>Data Science Institute</h4>
                <h4>Department of Systems Biology</h4>
              </div>
            </div>
            <div>
            <h3>Contact</h3>
              <div className='side'>
                <a href={"mailto:wesley.tansey@columbia.edu"}>wesley.tansey@columbia.edu</a>
              </div>
            </div>
            <div>
            <h3>Useful Links</h3>
              <div className='side'>
                <a href={CV} target="_blank">CV</a><br></br>
                <a href={"https://github.com/tansey"} target="_blank">github</a><br></br>
                <a href={"https://scholar.google.com/citations?user=c8ZnNv4AAAAJ&hl=en"} target="blank">citations</a>
              </div>
            </div>
          </div>
        </section>
        <section className='bio'>
          <p>
            I am a postdoc at Columbia University and Columbia University Medical Center in New York.
            I work with <a href="http://www.cs.columbia.edu/~blei/">David Blei</a> and <a href="http://www.columbia.edu/~chw2/">Chris Wiggins</a> at the <a href="https://datascience.columbia.edu/">Data Science Institute</a>, and <a href="https://rabadan.c2b2.columbia.edu/">Raul Rabadan</a> in the <a href={"https://systemsbiology.columbia.edu/the-program-for-mathematical-genomics"}>Program for Mathematical Genomics</a> in Systems Biology.
            My work is focused on statistical methods and applications for cancer genomics.
          </p>

          <p>
            Before joining Columbia, I was a Computer Science PhD student at UT Austin working with <a href={"http://jgscott.github.io/"}>James Scott</a>.
            My PhD focused on machine learning methods with health and wellness applications, particularly those involving graphical models, Bayesian statistics, and scalable inference algorithms.
            I worked on projects ranging from obesity and nutrition modeling to wearable fitness devices and large-scale multiple hypothesis testing for fMRI studies.
          </p>

          <p>
            In a previous life, I was a software engineering researcher working with <a href={"http://people.cs.vt.edu/~tilevich/"}>Eli Tilevich</a> at Virginia Tech, where I got my BS and MS in Computer Science.
            My Master's thesis focused on inference techniques that learn transformation rules to automatically upgrade legacy applications to use the latest version of a given API.
            I've also co-founded a couple of startups and was a quant at a hedge fund.
          </p>
        </section>
      </div>
    )
  }
}

export default Home;
