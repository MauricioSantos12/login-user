import axios from 'axios';

export async function getVideos(query) {
    let _url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=8&playlistId=${query}&key=AIzaSyDyHI2yxkHUFlcLQYDd7UhzVlDYaSp65x0`
    try {
      let response = await axios({
        url: _url,
        method: "GET",    
        headers: {
          'Content-Type': 'application/json',
        },
        // params: {
        //     // q: 'react js',
        //     // part: 'snippet',
        //     // maxResults: 10,
        //     key: 'AIzaSyDyHI2yxkHUFlcLQYDd7UhzVlDYaSp65x0',
        // }
      })
      if(response) {
        return response
      }
      return null;
    } catch (error) {
      return error;
    };
  }