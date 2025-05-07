
import Axios from 'axios';

export const sendData = (jsonData:any) => {
Axios.post('http://localhost:8000/uploadlink', jsonData, {
    headers: { 'Content-Type': 'application/json' },
    timeout: 70000
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
}
  