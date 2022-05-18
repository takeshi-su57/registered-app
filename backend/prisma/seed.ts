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
      {
        name: 'Lila Hudson',
        email: 'lila_hudson@hotmail.com',
        password: 'OoscW4dbwZZAcPy'
      },
      {
        name: 'Royne Tremblay',
        email: 'roy.tremblay2@hotmail.com',
        password: 'QtWFaPmp51NyrgO'
      },
      {
        name: 'Zaria Spencer',
        email: 'zaria_spencer41@gmail.com',
        password: 'DRCPTf72Zz58Mv2'
      },
      {
        name: 'Lenna Corwin',
        email: 'lenna.corwin@gmail.com',
        password: '2aV98pSDkSg1mw5'
      },
      {
        name: 'Ronalde Brito',
        email: 'roel27@gmail.com',
        password: 'ks3sMLbCpG8wydg'
      },
      {
        name: 'Rosella Nogueira',
        email: 'rosella_rath47@hotmail.com',
        password: 'Bm9iXnpnmAyoVVi'
      },
      {
        name: 'Catarina Gislason',
        email: 'catalina.gislason@gmail.com',
        password: 'ysZc8yb4s22VoH4'
      },
      {
        name: 'Alexanne Metrine',
        email: 'alexanne.metz34@gmail.com',
        password: 'bxsELJMuU9SY_zl'
      },
      {
        name: 'Willow Gomes',
        email: 'willow29@gmail.com',
        password: 'EgRCB4UeFRsExhT'
      },
      {
        name: 'Mariela Klein',
        email: 'mariela_klein@yahoo.com',
        password: 'x5rhzzdVXHoebNU'
      },
      {
        name: 'Herbert Abernathy',
        email: 'herbert_abernathy@yahoo.com',
        password: '6flZWNyTGZuOjt6'
      },
      {
        name: 'Aliza Ryan',
        email: 'aliza_ryan@yahoo.com',
        password: 'x8CzIVJMRo4mxtE'
      },
      {
        name: 'Geraldine Nader',
        email: 'geraldine.nader@gmail.com',
        password: '9llDFpuKbCSCsEL'
      },
      {
        name: 'Daniela Koch',
        email: 'daniela_koch@gmail.com',
        password: 'IH53sn5yZsrEJTu'
      },
      {
        name: 'Nelson Mc\'Kenzie',
        email: 'nelson_mckenzie@gmail.com',
        password: 'AiP6ZsEfZGodxTd'
      },
      {
        name: 'Marcellus Hahnan',
        email: 'marcellus.hahn65@yahoo.com',
        password: 'EidoZJvlO7WtEpX'
      },
      {
        name: 'Madyson Blick',
        email: 'madyson.blick41@gmail.com',
        password: 'ePrIJgzh_pjWGUS'
      },
      {
        name: 'Issac Bartell',
        email: 'issac.bartell@gmail.com',
        password: '59UwfLLpgL9G2LP'
      },
      {
        name: 'Samara Carroll',
        email: 'samara.carroll@yahoo.com',
        password: 'liRULDdwGziS5XR'
      },
      {
        name: 'Micheal Upton',
        email: 'micheal.upton51@yahoo.com',
        password: 'OtiXOdVFCuzLkWv'
      },
      {
        name: 'Werner Breitenberg',
        email: 'werner_breitenberg@gmail.com',
        password: 'ymH5FwInw_RYRpE'
      },
      {
        name: 'Claud Oberbrunner',
        email: 'claud_oberbrunner30@yahoo.com',
        password: 'V9NYLN092ytkDzA'
      },
      {
        name: 'Holden Larkin',
        email: 'holden_larkin95@yahoo.com',
        password: 'geIDBu29wRmI6Q2'
      },
      {
        name: 'Rosemary Scott',
        email: 'rosemary68@yahoo.com',
        password: 'TtC51pluhUFkycE'
      },
      {
        name: 'Vilma Dincley',
        email: 'vilma58@hotmail.com',
        password: 'AJr9AiPzekXP_lQ'
      },
      {
        name: 'Katheryn Wunsch',
        email: 'katheryn.wunsch@hotmail.com',
        password: 'ie9ZNkeTfEjYyy8'
      },
      {
        name: 'Jodie Raune',
        email: 'jodie.rau@yahoo.com',
        password: '7NTvS5PB14XWBlA'
      },
      {
        name: 'Jamie Cormier',
        email: 'jamie.cormier@yahoo.com',
        password: 'UT8qcThqFh4RFM7'
      },
      {
        name: 'Furman Rabelo',
        email: 'furman44@gmail.com',
        password: 'RLdwidhQOlE03o5'
      },
      {
        name: 'Willie Cruick',
        email: 'willie_cruickshank94@hotmail.com',
        password: '5Owmrjbdbrj1W8t'
      },
      {
        name: 'Erick Wisoky',
        email: 'erin.wisoky@hotmail.com',
        password: 'x4F7vq58SGdyEa7'
      },
      {
        name: 'Melvin O\'connell',
        email: 'melvin.oconnell@hotmail.com',
        password: 'sdIKcjKjyQEyuDC'
      },
      {
        name: 'Duane Howerng',
        email: 'duane.howe@gmail.com',
        password: 'S6URXSF3mchaljO'
      },
      {
        name: 'Shanel Cronack',
        email: 'shanel_crona69@hotmail.com',
        password: 'GVHapyvXJeAujfd'
      },
      {
        name: 'Pedro Wiegand',
        email: 'pedro.wiegand@yahoo.com',
        password: 'maFtkWwFwuPVYN0'
      },
      {
        name: 'Corbin Satthy',
        email: 'corbin56@hotmail.com',
        password: 'WBwH0mLhos6vTkq'
      },
      {
        name: 'Bertrand Ryan',
        email: 'bertrand.ryan64@hotmail.com',
        password: '6hrkiwBA4EmUHt1'
      },
      {
        name: 'Marcela Leite',
        email: 'marcelle33@hotmail.com',
        password: 'bHfjiLRHCq6W_d7'
      },
      {
        name: 'Wanda Crooks',
        email: 'wade_crooks65@yahoo.com',
        password: 'P5XxttAMYFpB1Pp'
      },
      {
        name: 'Claudia Neire',
        email: 'claudine.ernser14@yahoo.com',
        password: 'Lw8BQIk6yCYsMwC'
      }
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
