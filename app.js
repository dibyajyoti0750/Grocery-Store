const modal = document.querySelector("#confirmationModal");
const orderButtons = document.querySelectorAll(".orderButton");
const contactUsButtons = document.querySelectorAll(".contactUsButton");
const cancelButton = document.querySelector("#cancelButton");
const callButton = document.querySelector("#callButton");

const customerName = document.querySelector("#exampleFormControlInput1");
const customerOrder = document.querySelector("#exampleFormControlTextarea1");
const customerAddress = document.querySelector("#exampleFormControlTextarea2");
const placeOrderBtn = document.querySelector("#place-order-btn");

const validationModal = document.querySelector("#validationModal");
const closeValidation = document.querySelector("#closeValidation");

for (let btn of orderButtons) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const phNo = "916291673760";
    const msg = "Hi, I want to place an order ";
    const encodedMsg = encodeURIComponent(msg);
    const waLink = `https://wa.me/${phNo}?text=${encodedMsg}`;
    window.open(waLink, "_blank");
  });
}

for (let btn of contactUsButtons) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.showModal();
  });
}

cancelButton.addEventListener("click", () => {
  modal.close();
});

callButton.addEventListener("click", () => {
  modal.close();
  window.location.href = "tel:6291673760";
});

closeValidation.addEventListener("click", () => {
  validationModal.close();
});

placeOrderBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    !customerName.value.trim() ||
    !customerOrder.value.trim() ||
    !customerAddress.value.trim()
  ) {
    validationModal.showModal();
    return;
  }

  const phNo = "916291673760";
  const orderDetails = `Hi, my name is ${customerName.value} and I want to order ${customerOrder.value} to the address ${customerAddress.value}`;
  const encodedMsg = encodeURIComponent(orderDetails);
  const waLink = `https://wa.me/${phNo}?text=${encodedMsg}`;
  window.open(waLink, "_blank");
});
