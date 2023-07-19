const cocteles = [
    {
      nombre: 'Mojito',
      metodo: 'Mezclar y macerar',
      ingredientes: '2 oz de ron blanco, 1 oz de jugo de limón, 2 cucharaditas de azúcar, hojas de menta, agua con gas',
      cristaleria: 'Vaso alto',
      garnish: 'Hoja de menta y rodaja de limón',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/mojito.jpg',
    },
    {
      nombre: 'Margarita',
      metodo: 'Agitar y colar',
      ingredientes: '2 oz de tequila, 1 oz de jugo de limón, 1 oz de jarabe de agave, sal',
      cristaleria: 'Copa de margarita',
      garnish: 'Rodaja de limón',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/margarita.jpg',
    },
   
    {
      nombre: 'Old Fashioned',
      metodo: 'Mezclar y servir en vaso bajo',
      ingredientes: '2 oz de whisky, 1 terrón de azúcar, 2-3 dashes de angostura, twist de naranja',
      cristaleria: 'Vaso Old Fashioned',
      garnish: 'Twist de naranja y cereza',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/oldFashioned.jpg',
    },
    {
      nombre: 'Negroni',
      metodo: 'Revolver y servir en vaso bajo',
      ingredientes: '1 oz de ginebra, 1 oz de Campari, 1 oz de vermut rojo',
      cristaleria: 'Vaso Old Fashioned',
      garnish: 'Twist de naranja',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/negroni.jpg',
    },
    {
      nombre: 'Martini',
      metodo: 'Agitar y servir en copa de martini',
      ingredientes: '2.5 oz de ginebra, 0.5 oz de vermut seco',
      cristaleria: 'Copa de martini',
      garnish: 'Aceituna o twist de limón',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/martini.jpg',
    },
    
    {
      nombre: 'Cosmopolitan',
      metodo: 'Agitar y servir en copa de martini',
      ingredientes: '1.5 oz de vodka, 1 oz de Cointreau, 0.5 oz de jugo de lima, 1.5 oz de jugo de arándano',
      cristaleria: 'Copa de martini',
      garnish: 'Twist de lima',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/cosmopolitan.jpg',
    },
    {
      nombre: 'Daiquiri',
      metodo: 'Agitar y servir en copa de cóctel',
      ingredientes: '2 oz de ron blanco, 1 oz de jugo de lima, 0.75 oz de jarabe simple',
      cristaleria: 'Copa de cóctel',
      garnish: 'Rueda de lima',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/daiquiri.jpg',
    },
    {
      nombre: 'Gimlet',
      metodo: 'Agitar y servir en copa de cóctel',
      ingredientes: '2 oz de ginebra, 1 oz de jugo de lima fresco, 0.5 oz de jarabe simple',
      cristaleria: 'Copa de cóctel',
      garnish: 'Rueda de lima',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/gimlet.jpg',
    },
    {
      nombre: 'Sazerac',
      metodo: 'Remover y servir en vaso Old Fashioned',
      ingredientes: '2 oz de ron blanco, 0.5 oz de jarabe de azúcar, 2 dashes de Peychaud’s Bitters, absenta',
      cristaleria: 'Vaso Old Fashioned',
      garnish: 'Cáscara de limón',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/Sazerac.jpg',
    },
    {
      nombre: 'Sidecar',
      metodo: 'Agitar y servir en copa de cóctel',
      ingredientes: '2 oz de brandy, 0.75 oz de Cointreau, 0.75 oz de jugo de limón',
      cristaleria: 'Copa de cóctel',
      garnish: 'Twist de limón',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/Sidecar.jpg',
    },
    {
      nombre: 'Manhattan',
      metodo: 'Revolver y servir en copa de cóctel',
      ingredientes: '2 oz de whisky de centeno, 1 oz de vermut rojo, 2 dashes de angostura',
      cristaleria: 'Copa de cóctel',
      garnish: 'Cereza',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/Manhattan.jpg',
    },
    {
      nombre: 'Mai Tai',
      metodo: 'Agitar y servir en vaso lleno de hielo',
      ingredientes: '1.5 oz de ron blanco, 1.5 oz de ron oscuro, 0.75 oz de Cointreau, 0.5 oz de jarabe de almendra, 1 oz de jugo de limón, 0.25 oz de jarabe de azúcar',
      cristaleria: 'Vaso highball',
      garnish: 'Cereza y rodaja de piña',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/MaiTai.jpg',
    },
    {
      nombre: 'Tom Collins',
      metodo: 'Revolver y servir en vaso highball',
      ingredientes: '2 oz de ginebra, 1 oz de jugo de limón, 0.5 oz de jarabe simple, agua con gas',
      cristaleria: 'Vaso highball',
      garnish: 'Rodaja de limón y cereza',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/TomCollins.jpg',
    },
    {
      nombre: 'Bloody Mary',
      metodo: 'Agitar y servir en vaso highball',
      ingredientes: '1.5 oz de vodka, 3 oz de jugo de tomate, 0.5 oz de jugo de limón, 2 dashes de salsa Worcestershire, 2 dashes de salsa Tabasco, sal y pimienta',
      cristaleria: 'Vaso highball',
      garnish: 'Apio, rodaja de limón y lima, aceituna',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/BloodyMary.jpg',
    },
    {
      nombre: 'Mint Julep',
      metodo: 'Revolver y servir en vaso con hielo picado',
      ingredientes: '2.5 oz de bourbon, 0.5 oz de jarabe de azúcar, hojas de menta',
      cristaleria: 'Vaso highball o julep',
      garnish: 'Ramas de menta',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/MintJulep.jpg',
    },
    {
      nombre: 'Whisky Sour',
      metodo: 'Agitar y servir en vaso old fashioned',
      ingredientes: '2 oz de whisky, 0.75 oz de jugo de limón, 0.5 oz de jarabe simple',
      cristaleria: 'Vaso Old Fashioned',
      garnish: 'Cereza y rodaja de naranja',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/WhiskySour.jpg',
    },
    {
      nombre: 'Caipirinha',
      metodo: 'Revolver y servir en vaso Old Fashioned',
      ingredientes: '2 oz de cachaça, 1 lima, 2 cucharaditas de azúcar',
      cristaleria: 'Vaso Old Fashioned',
      garnish: 'Rodaja de lima',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/Caipirinha.jpg',
    },
    {
      nombre: 'White Russian',
      metodo: 'Revolver y servir en vaso Old Fashioned',
      ingredientes: '2 oz de vodka, 1 oz de licor de café, crema',
      cristaleria: 'Vaso Old Fashioned',
      garnish: 'Nuez moscada rallada',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/WhiteRussian.jpg',
    },
    {
      nombre: 'Pisco Sour',
      metodo: 'Agitar y servir en copa de cóctel',
      ingredientes: '2 oz de pisco, 1 oz de jugo de limón, 0.75 oz de jarabe simple, clara de huevo',
      cristaleria: 'Copa de cóctel',
      garnish: 'Gotas de amargo de Angostura',
      categoria: 'clasicos',
      imagen: 'http://localhost:3000/PiscoSour.jpg',
    },
    //Cocteles de autor
    {
      nombre: 'Refrescante',
      metodo: 'Mezclar y servir en vaso alto',
      ingredientes: '2 oz de licor, 1 oz de jugo de fruta, 0.5 oz de jarabe',
      cristaleria: 'Vaso alto',
      garnish: 'Decoración de autor',
      categoria: 'autor',
      imagen: 'http://localhost:3000/mojito.jpg',
    },
    {
      nombre: 'Coctel de Autor 2',
      metodo: 'Mezclar y servir en vaso alto',
      ingredientes: '2 oz de licor, 1 oz de jugo de fruta, 0.5 oz de jarabe',
      cristaleria: 'Vaso alto',
      garnish: 'Decoración de autor',
      categoria: 'autor',
      imagen: 'http://localhost:3000/mojito.jpg',
    },
    {
      nombre: 'Coctel de Autor 3',
      metodo: 'Mezclar y servir en vaso alto',
      ingredientes: '2 oz de licor, 1 oz de jugo de fruta, 0.5 oz de jarabe',
      cristaleria: 'Vaso alto',
      garnish: 'Decoración de autor',
      categoria: 'autor',
      imagen: 'http://localhost:3000/mojito.jpg',
    },
    {
      nombre: 'Coctel de Autor 4',
      metodo: 'Mezclar y servir en vaso alto',
      ingredientes: '2 oz de licor, 1 oz de jugo de fruta, 0.5 oz de jarabe',
      cristaleria: 'Vaso alto',
      garnish: 'Decoración de autor',
      categoria: 'autor',
      imagen: 'http://localhost:3000/mojito.jpg',
    },
    {
      nombre: 'Coctel de Autor 5',
      metodo: 'Mezclar y servir en vaso alto',
      ingredientes: '2 oz de licor, 1 oz de jugo de fruta, 0.5 oz de jarabe',
      cristaleria: 'Vaso alto',
      garnish: 'Decoración de autor',
      categoria: 'autor',
      imagen: 'http://localhost:3000/mojito.jpg',
    },
    {
      nombre: 'Coctel de Autor 6',
      metodo: 'Mezclar y servir en vaso alto',
      ingredientes: '2 oz de licor, 1 oz de jugo de fruta, 0.5 oz de jarabe',
      cristaleria: 'Vaso alto',
      garnish: 'Decoración de autor',
      categoria: 'autor',
      imagen: 'http://localhost:3000/mojito.jpg',
    },
    {
      nombre: 'Coctel de Autor 7',
      metodo: 'Mezclar y servir en vaso alto',
      ingredientes: '2 oz de licor, 1 oz de jugo de fruta, 0.5 oz de jarabe',
      cristaleria: 'Vaso alto',
      garnish: 'Decoración de autor',
      categoria: 'autor',
      imagen: 'http://localhost:3000/mojito.jpg',
    },
    {
      nombre: 'Coctel de Autor 8',
      metodo: 'Mezclar y servir en vaso alto',
      ingredientes: '2 oz de licor, 1 oz de jugo de fruta, 0.5 oz de jarabe',
      cristaleria: 'Vaso alto',
      garnish: 'Decoración de autor',
      categoria: 'autor',
      imagen: 'http://localhost:3000/mojito.jpg',
    },
  ];
  
  module.exports = cocteles;