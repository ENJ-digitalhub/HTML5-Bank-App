// Label 
labels = document.querySelectorAll(".label div span");

// Recipient section buttons
recipientCancel = document.getElementById("js-recipientCancel");
recipientNext = document.getElementById("js-recipientNext");

recipientCancel.addEventListener('click', () => {
    console.log(recipientCancel, "clicked");
    window.location.href = "/index.html";
}); 

recipientNext.addEventListener('click', () => {
    console.log(recipientNext, "clicked");
    window.location.href = "#js-amount"; 
    labels[0].classList.remove("active");
    labels[1].classList.add("active");
});

// Amount section buttons
amountBack = document.getElementById("js-amountBack");
amountNext = document.getElementById("js-amountNext");

amountBack.addEventListener('click', () => {
    console.log(amountBack, "clicked");
    window.location.href = "#js-recipient";
    labels[1].classList.remove("active");
    labels[0].classList.add("active");
});

amountNext.addEventListener('click', () => {
    console.log(amountNext, "clicked");
    window.location.href = "#js-confirm";
    labels[1].classList.remove("active");
    labels[2].classList.add("active");
});

// Confirm Section Buttons
confirmBack = document.getElementById("js-confirmBack");
confirmSubmit = document.getElementById("js-confirmSubmit");

confirmBack.addEventListener('click', () => {
    console.log(confirmBack, "clicked");
    window.location.href = "#js-amount";
    labels[2].classList.remove("active");
    labels[1].classList.add("active");
});

confirmSubmit.addEventListener('click', () => {
    console.log(confirmSubmit, "clicked");
    alert("Transfer Successful");
    window.location.href = "/index.html";
});

