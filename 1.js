var userName = prompt('Ты кто такой?', '');

if (userName == 'Всемогущий') {

  var pass = prompt('Пароль?', '');

  if (pass == 'Гном') {
    alert( 'Добро пожаловать!' );
  } else if (pass == null) { // (*)
    alert( 'Вход отменён' );
  } else {
    alert( 'Пароль неверен' );
  }

} else if (userName == null) { // (**)
  alert( 'Вход отменён' );

} else {

  alert( 'Я вас не знаю' );

}