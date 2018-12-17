//requires
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        console.log('==================='.green);
        console.log(`tabla de ${base}`.green);
        console.log('==================='.green);
        if (!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }else {
     for (let i=0; i <= limite; i++){
          console.log(`${base}*${i}=${base*i}\n`);
     }}

})}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
    if (!Number(base)){
        reject(`El valor introducido ${base} no es un numero`);
        return;
    }
    
        let data = '';

    for (let i = 1; i <= limite; i++){
        data += `${base}*${i}=${+base*i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}al${limite}.txt`, data, (err) => {
         if (err) reject(err)
         else
            resolve(`tabla-${base}al${limite}.txt`.red)
        
  });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

