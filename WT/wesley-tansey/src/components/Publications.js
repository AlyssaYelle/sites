import React, { Component } from 'react';

import Pubs from '../pubs';
import PubListItem from './PubListItem';

import '../css/Publications.css';

class Publications extends Component {

  constructor() {
    super();

    this.state = {
      pubs: Pubs
    }
  }

  componentDidMount() {
    console.log(Pubs)
  }

  render() {
    return (
      <div className='component'>
        <section className='pubs2019'>
          <h2>2019</h2>
          <div>
            {this.state.pubs['2019'].map((publication, key) => {
              return (
                <PubListItem key={key} info={publication} />
              )
            })
            }
          </div>
        </section>
        <section className='pubs2018'>
          <h2>2018</h2>
          <div>
            {this.state.pubs['2018'].map((publication, key) => {
              return (
                <PubListItem key={key} info={publication} />
              )
            })
            }
          </div>
        </section>
        <section className='pubs2017'>
          <h2>2017</h2>
          <div>
            {this.state.pubs['2017'].map((publication, key) => {
              return (
                <PubListItem key={key} info={publication} />
              )
            })
            }
          </div>
        </section>
        <section className='pubs2016'>
          <h2>2016</h2>
          <div>
            {this.state.pubs['2016'].map((publication, key) => {
              return (
                <PubListItem key={key} info={publication} />
              )
            })
            }
          </div>
        </section>
        <section className='pubs2015'>
          <h2>2015</h2>
          <div>
            {this.state.pubs['2016'].map((publication, key) => {
              return (
                <PubListItem key={key} info={publication} />
              )
            })
            }
          </div>
        </section>
        <section className='pubsPrev2014'>
          <h2>(-&#8734; - 2014]</h2>
            <div>
              {this.state.pubs['2008 - 2012'].map((publication, key) => {
                return (
                  <PubListItem key={key} info={publication} />
                )
              })
              }
            </div>
        </section>
      </div>
    )
  }
}

export default Publications;
