/*
const cannonsReady = (gunners) => {
  let ready = true;
  for(let i in gunners){
    if(gunners[i]=="nay"){
      ready = false;
    }
  }
  return ready ? "Fire!" : "Shiver me timbers!";
}
*/

const cannonsReady = (gunners) => {
    let ready = true;
    for (let i in gunners) {
        if (gunners[i] == "nay") {
            ready = false;
        }
    }
    return ready ? "Fire!" : "Shiver me timbers!";
}