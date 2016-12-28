nbMyst = (Math.floor((9)*Math.random()+1));

var essai = prompt('Devinez le nombre mystère, il est compris entre 0 et 9');        

 for(var i = 1; i<=3; i++){
    if (essai < nbMyst){
     alert('Le nombre mystère est plus grand !');
     var essai = prompt('Essai encore');
    } if (essai > nbMyst) {
      alert('Le nombre mystère est plus petit !');
      var essai = prompt('Devinez le nombre mystère, il est compris entre 0 et 9');
    } if (essai == nbMyst) {
      alert("Bravo ! le nombre mystère était bien " + nbMyst);
      break;
    }
 }