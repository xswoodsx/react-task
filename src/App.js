import React from 'react';
import './App.css';
import { Header, Hello } from './components/Header';
import AnimalList from './components/Animal.ul';

const user = 'Steven';

class App extends React.Component {
  state = {
    showImages: true,
    puppies: [
      {
        name: 'Betty',
        cuteness: 7,
        img:
          'https://cdn1-www.dogtime.com/assets/uploads/2020/01/golden-retriever-corgi-mixed-dog-breed-pictures-1.jpg'
      },
      {
        name: 'Rebel',
        cuteness: 8,
        img:
          'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232417/Greyhound-MP.jpg'
      },
      {
        name: 'Poppy',
        cuteness: 6,
        img:
          'https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg'
      }
    ],
    kittens: [
      {
        name: 'Nori',
        cuteness: 11,
        img:
          'https://vetstreet.brightspotcdn.com/dims4/default/4af17a9/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fda%2F3f%2Faaaf93ab43f1aa42df7fc0c38e28%2FExotic-Shorthair-AP-1CEWS1-645sm3614.jpg'
      },
      {
        name: 'Suki',
        cuteness: 7,
        img:
          'https://www.thesprucepets.com/thmb/zDe9ogiPL6LIBS3lyyl3bIbnTJo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-584178259-5a721010119fa80037ed3cce.jpg'
      },
      {
        name: 'Jiji',
        cuteness: 10,
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/1200px-American_Shorthair.jpg'
      },
      {
        name: 'Umi',
        cuteness: 8,
        img:
          'https://www.crosscountrytrains.co.uk/media/1773/hector-redruth-train-station-cat.jpg'
      }
    ],
    sortByCuteness: true
  };

  render() {
    return (
      <div className='App'>
        <Header name={user} />
        <button onClick={Hello(user)}>Click to get user</button>
        <button onClick={this.handleClick}>Show me the pups and kits!</button>
        <button onClick={this.sortByCuteness}>Sort The Cuteness</button>
        <AnimalList
          puppies={this.state.puppies}
          kittens={this.state.kittens}
          showImages={this.state.showImages}
          sortByCuteness={this.state.sortByCuteness}
        />
      </div>
    );
  }
  handleClick = () => {
    this.setState(currentState => {
      return { showImages: !currentState.showImages };
    });
    // showImages = !showImages; // <-----
  };
  sortByCuteness = () => {
    this.setState(currentState => {
      return { sortByCuteness: !currentState.sortByCuteness };
    });
  };
}

export default App;
