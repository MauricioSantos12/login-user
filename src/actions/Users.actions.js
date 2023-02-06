import axios from 'axios';

export async function loginUser(params) {
  let _url = 'https://reqres.in/api/login'
  try {
    let response = await axios({
      url: _url,
      method: "POST",    
      headers: {
        'Content-Type': 'application/json',
      },
      data: params,
    })
    if(response) {
      return response
    }
    return null;
  } catch (error) {
    return error;
  };
}