

function capitalise (myName){
    return myName.charAt(0).toUpperCase() + myName.slice(1);
  }
  
  let myName = capitalise ("hana");
  console.log(`${myName}`);

  
  /*
  let myName = "hana"
  let myNameFirstCharacter = myName [0]
  let FirstCharacterCaps = myNameFirstCharacter.toUpperCase ()
  let nameFrom2toEnd = myName.slice(1)
  let nameCaps = FirstCharacterCaps + nameFrom2toEnd
  console.log (`${nameCaps}`)
  */
  