/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);

  console.log("desafio 002");

  const nome1: string = 'Ubuntu1';
  const sobrenome1: string = 'Silva';
  const idade1: number = 33;
  const peso1: number = 88.5;
  const altura1: number = 1.65;
  const ehDev1: boolean = true;

  const nome2: string = 'Ubuntu2';
  const sobrenome2: string = 'Silva';
  const idade2: number = 33;
  const peso2: number = 88.5;
  const altura2: number = 1.65;
  const ehDev2: boolean = true;

  const nome3: string = 'Ubuntu3';
  const sobrenome3: string = 'Silva';
  const idade3: number = 33;
  const peso3: number = 88.5;
  const altura3: number = 1.65;
  const ehDev3: boolean = true;

  // R01
  const soma = idade1 + idade2 + idade3;
  console.log('A somas das idades é:', soma)

  //R02             1      2      3
  const ubuntus = [nome1, nome2, nome3]

  console.log(ubuntus)

  //R03
   function calculo_imc (this:any, altura:any, peso:any){

    let imc = peso / altura **2;     
    let texto = ', classificação:';

    if (imc < 18.5){
      console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} abaixo do peso`);
    }else if (imc >= 18.5 && imc <= 24.9){
      console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} peso normal`);
   }else if( imc >= 25 && imc <=29.9){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} Sobre peso`);
   }else if( imc >= 30 && imc <=34.9){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} Obesidade Grau 1`);
   }else if(imc >= 35 && imc <=39.9){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} Obesidade Grau 2`);
   }else if(imc >=40){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} Obesidade Grau 3 ou Mórbida`);
}
   }
 console.log(calculo_imc(1.65, 88.5));

  //R04 
  const arr = [ehDev1, ehDev2, ehDev3];
  const count = arr.filter((value) => value).length;

  console.log(`Existem ${count} devs na sua equipe`);

  //R05
  const arr2 = [Silva(sobrenome1),Silva(sobrenome2),Silva(sobrenome3)];
  const count2 = arr2.filter((value2) => value2).length;
  function Silva(sobrenome: string){
    if(sobrenome == 'Silva'){ return true;}
  
    else
    return false;

  }
  console.log(`temos ${count2} Ubuntus com sobrenome Silva`);


  console.log(nome1, idade1, peso1, altura1, ehDev1);
  console.log(nome2, idade2, peso2, altura2, ehDev2);
  console.log(nome3, idade3, peso3, altura3, ehDev3);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05
     
});
