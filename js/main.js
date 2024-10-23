const submitButtonElement = document.getElementById('submit-button');

submitButtonElement.addEventListener('click', () => {
	const indexPricePerKm = 0.21;

	const kmInputElement = document.getElementById('km-input');
	const ageInputElement = document.getElementById('age-input');

	const userKm = kmInputElement.value;
	const userAge = ageInputElement.value;
	const over18Discount = 0.2;
	const over65Discount = 0.4;

	let pricePerKm = indexPricePerKm * userKm;
	finalPrice = pricePerKm;

	// * APPLICO LO SCONTO SE NECESSARIO
	if (userAge > 65) {
		finalPrice -= pricePerKm * over65Discount;
	}
	if (userAge < 18) {
		finalPrice -= pricePerKm * over18Discount;
	}

	finalPrice = finalPrice.toFixed(2);
	console.log(finalPrice);

	console.log(
		`
        km utente: ${userKm}
        età utente: ${userAge}
        prezzo al km: ${indexPricePerKm}
        prezzo finale: ${finalPrice}
        `
	);

	alert(`Il prezzo del biglietto è di €${finalPrice}`);
});
