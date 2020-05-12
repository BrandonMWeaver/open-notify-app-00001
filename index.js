const positionDiv = document.querySelector(".position");
const peopleDiv = document.querySelector(".people");

fetch("http://api.open-notify.org/iss-now.json")
.then(response => response.json())
.then(json => {
	const p = document.createElement("p");
	p.innerHTML = `${json.iss_position.latitude} : ${json.iss_position.longitude}`;
	positionDiv.append(p);
});

fetch("http://api.open-notify.org/astros.json")
.then(response => response.json())
.then(json => {
	for (const person of json.people) {
		const p = document.createElement("p");
		p.innerHTML = person.name
		peopleDiv.append(p);
	}
});
