let age = Number(prompt(`Veuillez saisir votre âge`));

switch(true) {
case age < 0 :
    alert("Impossible");
    break;

case age >= 0 && age <= 3:
    alert("Trop jeune");
    break;
    
case age >= 3 && age <= 5:
    alert("Baby");
    break;

 case age >= 5 && age <= 7:
    alert("Poussin");
    break;

case age >= 7 && age <= 10:
     alert("Benjamin");
    break;
        
    case age >= 10 && age <= 12:
    alert("Pupille");
    break;
        
    case age >= 12 && age <= 15:
            alert("Cadet");
            break;
                
    case age >= 15 && age <= 18:
        alert("Confirmé");
        break;
            
    case age >= 18 && age <= 100:
        alert("Senior");
        break;
      
    case age > 100:
        alert("Probablement pas vivant");
        break;
}