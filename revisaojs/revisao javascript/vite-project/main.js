"use strict";
//objetos
const user = {
    nome: "daniel",
    age: 50,
    address: {
      street: "rua sao paulo",
      city: "Serra da Saudade"
    }
  };
  

  document.body.innerText += Object.keys(user)
  document.body.innerText += "\n"
  document.body.innerText += Object.values(user)
  document.body.innerText += "\n"
  document.body.innerText += JSON.stringify(Object.values(user));
  document.body.innerText += "\n"
  document.body.innerText += JSON.stringify(Object.entries(user))
  document.body.innerText += "\n"
  //utilizando destructuring
  const {address} = user
  document.body.innerText += JSON.stringify(address);