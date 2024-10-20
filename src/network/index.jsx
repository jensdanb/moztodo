
import {useEffect} from "react"; 

const server_address = 'http://localhost:8080/';

function SetByServer(address, setter) {
  useEffect(() => {
    fetch(server_address + address)
      .then(response => response.json())
      .then(data => setter(data));
  }, []);
}

export {SetByServer}