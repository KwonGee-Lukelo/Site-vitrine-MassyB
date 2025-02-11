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
    const whatsappUrl = `https://wa.me/243972231759?text=${encodeURIComponent(
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

  photos.forEach((photo) => {
    if (category === "categorie-meuble") {
      photo.classList.remove("hidden");
    } else if (photo.classList.contains(category)) {
      photo.classList.remove("hidden");
    } else {
      photo.classList.add("hidden");
    }
  });
}

// BUTTON COMMANDE SECTION ESPOSITION
const btnCommander = document.getElementById("btn-commande");

btnCommander.addEventListener("click", ouvrirWhatsapp);

function ouvrirWhatsapp() {
  const message = `*COMMANDE* \n\nBonjour Monsieur \nJ'aimerais me renseigné par rapport à`;
  const whatsappUrl = `https://wa.me/243972231759?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");

  console.log(btnCommander);
}

// SPLIDE JS
/*var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  gap: "50px",
});

splide.mount();*/

// SLIDE JS VIDEO
new Splide(".splide").mount(window.splide.Extensions);
