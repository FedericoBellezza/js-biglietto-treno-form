const submitButtonElement = document.getElementById('submit-button');
const inputForm = document.getElementById('form');

inputForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// * USER INPUT
	const kmInputElement = document.getElementById('km-input');
	const ageInputElement = document.getElementById('age-input');
	const nameInputElement = document.getElementById('name-input');

	// * USER TICKET
	const ticketName = document.getElementById('ticket-name');
	const ticketType = document.getElementById('ticket-type');
	const ticketKart = document.getElementById('ticket-kart');
	const ticketCost = document.getElementById('ticket-cost');

	const indexPricePerKm = 0.21;
	const userKm = kmInputElement.value;
	const userAge = ageInputElement.value;
	const under18Discount = 0.2;
	const over65Discount = 0.4;

	let pricePerKm = indexPricePerKm * userKm;
	finalPrice = pricePerKm;

	// * APPLICO LO SCONTO SE NECESSARIO
	if (userAge == 3) {
		finalPrice -= pricePerKm * over65Discount;
		ticketType.innerText = 'Biglietto Over65';
	}
	if (userAge == 2) {
		finalPrice -= pricePerKm * under18Discount;
		ticketType.innerText = 'Biglietto under18';
	}

	finalPrice = finalPrice.toFixed(2);
	console.log(finalPrice);

	console.log(
		`
        km utente: ${userKm}
        età utente: ${userAge}
        prezzo al km: ${indexPricePerKm}
        prezzo finale: €${finalPrice} 
        Nome: ${nameInputElement.value}
        `
	);

	ticketName.innerText = nameInputElement.value;
	ticketCost.innerText = `€${finalPrice}`;
});
