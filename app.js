
document.getElementById("btn2").addEventListener("click", function () {
    
  let fortext1 = document.getElementById("input1");
  let forvalue = fortext1.value;
  let forfolrt = parseFloat(forvalue);

  let fot2 = document.getElementById("input2");

  let forvalue33 = fot2.value;

  let parts = parseFloat(forvalue33);

  let concatination2 = forfolrt + parts;




  //   this is total

  let dd=document.getElementById("money")
  let forinner=dd.innerText
  let foint=parseInt(forinner)
  
  dd.innerText=concatination2+foint
});
