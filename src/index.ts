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

  const nome1: string = 'Ubuntu1 Silva';
  const idade1: number = 33;
  const peso1: number = 88.5;
  const altura1: number = 1.65;
  const ehDev1: boolean = true;

  const nome2: string = 'Ubuntu2 Silva';
  const idade2: number = 33;
  const peso2: number = 88.5;
  const altura2: number = 1.65;
  const ehDev2: boolean = true;

  const nome3: string = 'Ubuntu3 Silva';
  const idade3: number = 33;
  const peso3: number = 88.5;
  const altura3: number = 1.65;
  const ehDev3: boolean = true;

  // R01
  const soma = idade1 + idade2 + idade3;
  console.log('A somas das idades é:', soma)

  //R02             1      2      3
  const alunos = [nome1, nome2, nome3]

  console.log(alunos)

  console.log(nome1, idade1, peso1, altura1, ehDev1);
  console.log(nome2, idade2, peso2, altura2, ehDev2);
  console.log(nome3, idade3, peso3, altura3, ehDev3);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05
});
