// Código de cambio de imagen

deja   myImage   =   documento  .  querySelector  (  'img'  )  ;

myImage  .  onclick   =   function  (  )   {
  deje   mySrc   =   myImage  .  getAttribute  (  'src'  )  ;
  if  (  mySrc   ===   'images / cat-4282123_1920.jpg'  )   {
    myImage  .  setAttribute   (  'src'  ,  'imágenes / cat-984097_1920.jpg'  )  ;
  }   más  {
    myImage  .  setAttribute   (  'src'  ,  'imágenes / cat-4282123_1920.jpg'  )  ;
  }
}

// Código de mensaje de bienvenida personalizado

deje   myButton   =   documento  .  querySelector  (  'botón'  )  ;
deje   myHeading   =   documento  .  querySelector  (  'h1'  )  ;

function   setUserName  (  )   {
  let   myName   =   prompt  (  'Por favor ingrese su nombre.'  )  ;
  if  ( ! myName  )   {
    setUserName  (  )  ;
  }   más  {
    localStorage  .  setItem  (  'nombre'  ,   miNombre  )  ;
    myHeading  .  innerHTML   =   'Miaw,'   +   myName  ;
  }
}

if  ( ! localStorage  .  getItem  (  'nombre'  )  )   {
  setUserName  (  )  ;
}   más  {
  deje   almacenadoNombre   =   localStorage  .  getItem  (  'nombre'  )  ;
  myHeading  .  innerHTML   =   'Miaw,'   +  nombre   almacenado  ;
}

myButton  .  onclick   =   function  (  )   {
  setUserName  (  )  ;
}