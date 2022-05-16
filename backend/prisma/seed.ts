import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('👉 Criando dados...');

  await prisma.user.createMany({
    data: [
      {
        name: 'Adilson Gabriel',
        email: 'adilsongb.rabelo@email.com',
        password: 'F4MAJVQ3hkFElTb'
      },
      {
        name: 'Carlos Nogueira',
        email: 'carlos_nogueira@email.com',
        password: 'GsI2Y00ca05Lftu'
      },
      {
        name: 'Amanda Sousa',
        email: 'amandinha2009@email.com',
        password: 'Up6CsttZ6mmKbcd'
      },
      {
        name: 'Bernardo Gomes',
        email: 'berngomess@email.com',
        password: 'IrbWXLmxziRXLlu'
      },
      {
        name: 'Beatriz Castro',
        email: 'beaahcas@email.com',
        password: 'sfD551gbKmfad9u'
      },
      {
        name: 'Eliza Marcena',
        email: 'elizzamar23@email.com',
        password: '5yF8V4CEhUXtub6'
      },
      {
        name: 'Matheus Santos',
        email: 'mathforsant@email.com',
        password: 'C4BDJ0pmghaKgEz'
      },
      {
        name: 'Joyce Vizoto',
        email: 'joysunviz@email.com',
        password: 'iArEIBlEA1mHow0'
      },
      {
        name: 'Anthony Barbosa',
        email: 'thonyukii@email.com',
        password: 'KYfqh4UcjRFbQao'
      },
      {
        name: 'João Marcelo',
        email: 'juaomar276@email.com',
        password: 'PSfasLke187BBzT'
      },
    ]
  });

  console.log('👍 Dados criados com sucesso!');
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
