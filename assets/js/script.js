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
const catMeuble = document.getElementById("categorie-meuble");
const salon = document.getElementById("salon");
const salleManger = document.getElementById("salle-manger");
const chambre = document.getElementById("chambre");
const bureau = document.getElementById("bureau");

// NOS DEUX LIGNES CATEGORIE DANS LA SECTION EXPOSITION
const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
// LA LIGNE CATEGORIE PARENT
const rowParent = document.querySelector(".cat-expo-row");

catMeuble.addEventListener("click", meubleCategorie);
salon.addEventListener("click", meubleSalon);
salleManger.addEventListener("click", meubleManger);
chambre.addEventListener("click", meubleChambre);
bureau.addEventListener("click", meubleBureau);

function meubleCategorie() {
  row1.classList.remove("expo");
  row2.classList.remove("expo");
}

function meubleSalon() {
  row1.classList.add("expo");
  row2.classList.add("expo");

  const newRow1 = document.createElement("div");
  const newRow2 = document.createElement("div");

  newRow1.classList.add(
    "row1",
    "row",
    "gy-5",
    "gy-md-4",
    "gy-sm-3",
    "justify-content-md-around",
    "my-3"
  );

  newRow2.classList.add(
    "row2",
    "row",
    "gy-5",
    "gy-md-4",
    "gy-sm-3",
    "justify-content-md-around",
    "my-3"
  );

  // Créer et ajouter plusieurs div enfants
  for (i = 0; i < 4; i++) {
    var newCol1 = document.createElement("div");
    var newCol2 = document.createElement("div");

    newCol1.classList.add("col-lg-3", "col-md-5");
    newCol2.classList.add("col-lg-3", "col-md-5");

    newCol1.innerHTML = `<div class="card">
                <img
                  src="./assets/images/meubles/bureau/chaiseBu.jpg"
                  class="card-img-top"
                  alt=""
                />

                <div class="card-body">
                  <h5 class="card-title fw-bold">Chaise de bureau</h5>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, at.
                  </p>
                  <p class="card-text fw-semibold">
                    Prix :<span id="prix">150$</span>
                  </p>

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#orderModal"
                  >
                    Commandez
                  </button>

                  <!-- Ma modal -->
                  <div
                    class="modal fade"
                    id="orderModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="orderModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h2 class="modal-title fs-5" id="orderModalLabel">
                            Passez votre commande
                          </h2>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div class="modal-body">
                          <form id="orderForm" class="was-validated">
                            <div class="form-group mb-3">
                              <label for="nom" class="form-label">Nom</label>
                              <input
                                type="text"
                                id="nom"
                                class="form-control"
                                required
                              />
                              <div class="invalid-feedback">
                                Veuillez saisir votre nom
                              </div>
                            </div>

                            <div class="form-group mb-3">
                              <label for="adresse" class="form-label"
                                >Adresse</label
                              >
                              <input
                                type="text"
                                id="adresse"
                                class="form-control"
                                required
                              />
                              <div class="invalid-feedback">
                                Veuillez saisir votre adresse
                              </div>
                            </div>

                            <div class="form-group mb-3">
                              <label for="marchandise" class="form-label"
                                >Nom marchandise</label
                              >
                              <input
                                type="text"
                                id="marchandise"
                                class="form-control"
                                required
                              />
                              <div class="invalid-feedback">
                                Veuillez saisir le nom de la marchandise
                              </div>
                            </div>

                            <div class="form-group mb-3">
                              <label for="quantite" class="form-label"
                                >Quantité</label
                              >
                              <input
                                type="number"
                                id="quantite"
                                class="form-control"
                                min="1"
                                required
                              />
                              <div class="invalid-feedback">
                                Veuillez saisir la quantité
                              </div>
                            </div>
                          </form>
                        </div>

                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-primary"
                            id="submitOrder"
                          >
                            Commander
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Fermer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;

    newRow1.appendChild(newCol1);
    newRow2.appendChild(newCol2);
    rowParent.appendChild(newRow1, newRow2);
  }

  console.log(rowParent);
}

function meubleManger() {
  console.log("Hi!!!");
}
function meubleChambre() {
  console.log("Hi!!!");
}
function meubleBureau() {
  console.log("Hi!!!");
}

// // const btnCommand = document.getElementById("commandez");
// // let nomClient = document.getElementById("nom");
// // let adresseClient = document.getElementById("adresse");
// // let nomMarchandise = document.getElementById("marchandise");
// // let quantite = document.getElementById("quantite");

// // btnCommand.addEventListener("click", Commande);

// function Commande() {}
