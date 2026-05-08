// FREEZE CARD BUTTON
// BUTTON
const freezeCardBtn = document.getElementById("js-freezeCard");

// FREEZE CARD MODAL
const freezeCardModal = document.getElementById("js-freezeCardModal");

// EVENT LISTENER
freezeCardBtn.addEventListener('click', () => {
    console.log(freezeCardBtn, "clicked");
    freezeCardModal.showModal();
    freezeCardModal.classList.toggle("dialogActive");
});

// CANCEL BUTTON
const cancelFreezeCardModalBtn = freezeCardModal.querySelector("#js-close");
// console.log(cancelFreezeCardModalBtn);
cancelFreezeCardModalBtn.addEventListener('click', () => {
    console.log(cancelFreezeCardModalBtn, "clicked");
    freezeCardModal.close();
    freezeCardModal.classList.toggle("dialogActive");
});

// FREEZE CARD SUBMIT BUTTON
const submitFreezeCardModalBtn = freezeCardModal.querySelector("#js-submit");
// console.log(submitFreezeCardModalBtn);
submitFreezeCardModalBtn.addEventListener('click', () => {
    console.log(submitFreezeCardModalBtn, "clicked");
    freezeCardModal.close();
    freezeCardModal.classList.toggle("dialogActive");
    alert("Card Frozen Successfuly");
});


// REQUETST NEW CARD BUTTON
// BUTTON
const requestNewCardBtn = document.getElementById("js-requestNewCard");

// REQUEST NEW CARD MODAL
const requestNewCardModal = document.getElementById("js-requestNewCardModal");

// EVENT LISTENER
requestNewCardBtn.addEventListener('click', () => {
    console.log(requestNewCardBtn, "clicked");
    requestNewCardModal.showModal();
    requestNewCardModal.classList.toggle("dialogActive");
});

// CANCEL BUTTON
const cancelrequestNewCardModalBtn = requestNewCardModal.querySelector("#js-close");
// console.log(cancelrequestNewCardModalBtn);
cancelrequestNewCardModalBtn.addEventListener('click', () => {
    console.log(cancelrequestNewCardModalBtn, "clicked");
    requestNewCardModal.close();
    requestNewCardModal.classList.toggle("dialogActive");
});

// REQUEST NEW CARD SUBMIT BUTTON
const submitRequestNewCardModalBtn = requestNewCardModal.querySelector("#js-submit");
// console.log(submitRequestNewCardModalBtn);
submitRequestNewCardModalBtn.addEventListener('click', () => {
    console.log(submitRequestNewCardModalBtn, "clicked");
    requestNewCardModal.close();
    requestNewCardModal.classList.toggle("dialogActive");
    alert("Request Submited");
});

// VIEW DETAILS BUTTON
// BUTTON
const viewDetailsBtn =  document.getElementById("js-viewDetails");

// DETAILS
const detailsNumber = document.querySelector(".details .number");
const detailsDate = document.querySelector(".details .date");
const detailsCvv = document.querySelector(".details .cvv");

// EVENT LISTENER
viewDetailsBtn.addEventListener('click', () => {
    console.log(viewDetailsBtn," Clicked");
    if (viewDetailsBtn.textContent === 'View Details'){
        viewDetailsBtn.textContent = 'Hide Details';
        detailsNumber.textContent = '234 5847 2789 1009 5678';
        detailsDate.textContent = 'Expires End: 05/06';
        detailsCvv.textContent = 'CVV: 123';
}
else{
    viewDetailsBtn.textContent= 'View Details';
    detailsNumber.textContent = '234 **** **** **** 5678';
    detailsDate.textContent = 'Expires End: **/**';
    detailsCvv.textContent = 'CVV: ***';
    }
});