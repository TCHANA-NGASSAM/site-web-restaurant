// Ce fichier est spécifiquement destiné à la page des services. 
// Ajoutez ici le code JavaScript nécessaire pour gérer les fonctionnalités de cette page.

document.addEventListener('DOMContentLoaded', function() {
    // Exemple de code pour initialiser des éléments spécifiques à la page des services
    const serviceButtons = document.querySelectorAll('.service-button');

    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Logique pour afficher plus d'informations sur le service
            const serviceId = this.dataset.serviceId;
            console.log(`Service ID: ${serviceId}`);
            // Ajoutez ici le code pour afficher les détails du service
        });
    });
});