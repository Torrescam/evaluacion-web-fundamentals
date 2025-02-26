
document.addEventListener("DOMContentLoaded", () => {
	const form = document.forms.register;

	loadForm(form);

	form.addEventListener('change', () => {
		saveForm(form); 
	});

	form.addEventListener('submit', listensubmit);
});

function saveForm(form) {
	const formData = new FormData(form);
	const formDataObject = {};

	for (const [key, value] of formData.entries()) {
			if (key !== 'password') {
				formDataObject[key] = value;
			}
	}

	localStorage.setItem("formData", JSON.stringify(formDataObject));
}

function loadForm(form) {
	const saveData = localStorage.getItem("formData");

	if (saveData) {
			const formDataObject = JSON.parse(saveData);

			for (const [key, value] of Object.entries(formDataObject)) {
					const formField = form.querySelector(`[name="${key}"]`);
					if (formField) {
						formField.value = value;
					}
			}
	}
}

function listensubmit(event) {
	event.preventDefault();

	const form = event.target; 
	const formData = new FormData(form);
	const url = "https://mocktarget.apigee.net/echo";
	const options = {
			method: "POST",
			body: formData,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded' // Header necesario para el tipo de contenido
			}
	};

	fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
					const serverResponse = document.querySelector("#serverResponse");
					if (serverResponse) {
						const jsonString = JSON.stringify(data, null, 2);
						serverResponse.innerHTML = `<pre>${jsonString}</pre>`;
					}
			})
			.catch((error) => {
					const serverResponse = document.querySelector("#serverResponse");
					if (serverResponse) {
						serverResponse.innerHTML = `<pre>${JSON.stringify({ error: error.message }, null, 2)}</pre>`;
					}
			});
}
