/*
Validation du formulaire dans la modale
*/
document.getElementById("submitOrder").addEventListener("click", function () {
  if (document.getElementById("orderForm").checkValidity()) {
    const clientName = document.getElementById("nom").value;
    const productName = document.getElementById("marchandise").value;
    const clientAddress = document.getElementById("adresse").value;
    const quantity = document.getElementById("quantite").value;
    const price = document.getElementById("prix").textContent;

    const message = `*COMMANDE* \n\nNom du Client: ${clientName}\n\nNom de la Marchandise: ${productName}\n\nAdresse: ${clientAddress}\n\nQuantité: ${quantity}\n\nPrix: ${price} \l'unité`;
    const whatsappUrl = `https://wa.me/243981961965?text=${encodeURIComponent(
      message
    )}`;

    // Ouvrir WhatsApp
    window.open(whatsappUrl, "_blank");

    //Rénitialiser le formulaire
    document.getElementById("orderForm").reset();

    // Fermer le modal
    $("#orderModal").modal("hide");

    clientName.innerText = "";
  } else {
    document.getElementById("orderForm").reportValidity();
  }

  console.log();
});

//SECTION EXPOSITION
function filterPhotos(category) {
  const photos = document.querySelectorAll(".photo");
  const gallery = document.getElementById("photosgallery");

  // photos.forEach((photo) => {
  //   if (category === "categorie-meuble") {
  //     photo.classList.remove("hidden");
  //   } else if (photo.classList.contains(category)) {
  //     photo.classList.remove("hidden");
  //   } else {
  //     photo.classList.add("hidden");
  //   }
  // });

  if (category === "categorie-meuble") {
    photos.forEach((photo) => {
      photo.style.display = "block";
      photo.classList.remove("single-colum");
    });
  } else {
    photos.forEach((photo) => {
      if (photo.classList.contains(category)) {
        photo.style.display = "block";
        photo.classList.add("single-colum");
      } else {
        photo.style.display = "none";
        photo.classList.remove("single-colum");
      }
    });
  }
}

// // const btnCommand = document.getElementById("commandez");
// // let nomClient = document.getElementById("nom");
// // let adresseClient = document.getElementById("adresse");
// // let nomMarchandise = document.getElementById("marchandise");
// // let quantite = document.getElementById("quantite");

// // btnCommand.addEventListener("click", Commande);

// function Commande() {}
