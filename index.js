function scuberGreetingForFeet(distance){
  //let ride = 4000;
  let charges = 30;
  if (distance <= 400){
    return 'This one is on me!'
  } else if(distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if(distance > 2500){
    return 'No can do.'
  }
};

scuberGreetingForFeet();

function ternaryCheckCity(destination){
      if (destination !== 'NYC'){
        return "No go."
      } else {
        return "Ok, sounds good."
      }
}

function switchOnCharmFromTip(tip){
  if (tip === "generous"){
    return "Thank you so much."
  } else if(tip == "not as generous"){
    return "Thank you."
  } else {
    return "Bye."
  }
  
}