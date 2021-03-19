import React from 'react';
import { PhotoContainer } from './PhotoContainer';
// import faker from "faker"

Headers["x-api-key"] = "4b2d65ec-7f94-4d55-aab6-a2d4c501afd8";

class Product extends React.Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(response => {
        console.log('reponse', response);
        if (!response.ok) {
          throw Error("Error fetching photo");
        }
        return response.json()
          .then(allData => {
            allData.forEach(item => {
              item.name = "Cat"
              // item.name = faker.name.firstName()
              item.price = "3"
              // item.price = faker.commerce.price()
            });
            this.setState({ photos: allData });
          })
          .catch(err => {
            throw Error(err.message);
          });
      }
      );
  }

  render() {
    // you could manipulate the data here aswell
    return (
      <div className="main">
        <div className="header title">
          <h1>Cats4Lyf</h1>
        </div>
        <div className="products-section">
          {/* <button onClick={this.fetchData}>Get some</button> */}

          <PhotoContainer photos={this.state.photos} />

          {/* <p>{this.state.data && this.state.data.value}</p> */}
        </div>
      </div>
    );
  }
}


export default Product;
