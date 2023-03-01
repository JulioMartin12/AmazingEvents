let htmlEvent= "";

for (const event of data.events) {
    htmlEvent = crearCard(event);
    document.querySelector('.add-card').innerHTML += htmlEvent;
}




