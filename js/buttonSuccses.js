const input=document.querySelector('.input');const buttonClearMessege=document.querySelector('.reviews__help-content-button');function succsesButton(){alert("Кнопка Сработала успешно input очищен")}
function clearInput(){input.value=""}
buttonClearMessege.onclick=function(){succsesButton()
clearInput()}
