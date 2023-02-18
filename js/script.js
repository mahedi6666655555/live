document.getElementById("btn").addEventListener("click", function () {
  let forDoc = document.getElementById("mail");

  const forvalue = forDoc.value;

  let forpass = document.getElementById("pass");
  let forvalue2 = forpass.value;

  if (forvalue === "mahedi" && forvalue2 === "mahedi11") {
    window.location.href = "index3.html";
  } else {
    alert("put right value");
  }
});

// concatination use javascript

