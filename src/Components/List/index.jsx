import React from 'react';

class List extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <div id='images-container'>
        {
          images.map(({ id, links }) =>
            <img
              key={id}
              src={links[0]}
              alt="Вложение"
            />
          )
        }
      </div>
    );
  }
}

export default List;