import React, { Component } from 'react';

class PubListItem extends Component {

  render(props){
    return (
      <div>
        <article>
          <p className='title'>{this.props.info.title}</p>
          <p>{this.props.info.authors}</p>
          <p> <span className='journal'>{this.props.info.journal}</span>, {this.props.info.date}.
          {this.props.info.paper ? <span> [<a href={this.props.info.paper} target='_blank'>paper</a>]</span> : ''}
          {this.props.info.code ? <span> [<a href={this.props.info.paper} target='_blank'>code</a>]</span> : ''}</p>
        </article>
      </div>
    )
  }
}

export default PubListItem;
