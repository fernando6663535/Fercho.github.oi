document.addEventListener('DOMContentLoaded', () => {
    function fetchData() {
        fetch('https://your-replit-url/retrieve-data') // Usa la URL de tu Replit
            .then(response => response.json())
            .then(data => {
                const dataDisplay = document.getElementById('data-display');
                dataDisplay.innerHTML = '';

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

    setInterval(fetchData, 5000);

    fetchData();
});
