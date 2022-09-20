var elform = document.querySelector('.form');
var elinp = document.querySelector('.inp');
var elsubmit = document.querySelector('.submit');
var elrecord = document.querySelector('.record');
var ellist = document.querySelector('.list')

elform.addEventListener('submit', function (evt) {
    evt.preventDefault()
    var elinpvalue = elinp.value ;
    newitem = document.createElement('li');
    newitem.textContent = elinpvalue;
    ellist.appendChild(newitem);
    elinp.value = " "

})

var record = new webkitSpeechRecognition();
record.lang = 'uz-UZ'

elrecord.addEventListener('click', function () {
    record.start();
 })
 record.onresult = function (evt) {
	elinp.value = evt.results[0][0].transcript;}

