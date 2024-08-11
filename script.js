document.addEventListener('DOMContentLoaded', () => {
    function fetchData() {
        fetch('https://<tu-replit-url>/data') // Reemplaza con la URL pública de tu servidor en Replit
            .then(response => response.json())
            .then(data => {
                const dataDisplay = document.getElementById('data-display');
                dataDisplay.innerHTML = '';

                // Ordenar los datos por timestamp
                data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

                data.forEach(item => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${item.name}</td>
                        <td>${item.strength}</td>
                        <td>${item.quest}</td>
                        <td>${item.timestamp}</td>
                        <td>${item.serverLocation}</td>
                        <td>${item.serverId}</td>
                        <td>${item.status}</td>
                        <td>${item.rebirth}</td>
                    `;
                    dataDisplay.appendChild(tr);
                });
            })
            .catch(error => console.error('Error al cargar los datos:', error));
    }

    // Actualizar los datos cada 5 segundos
    setInterval(fetchData, 5000);

    // Cargar los datos inicialmente
    fetchData();
});
