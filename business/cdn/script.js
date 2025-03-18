async function listFiles() {
    try {
        const response = await fetch('file-list.json'); // Load the JSON file
        const files = await response.json();
        const fileList = document.getElementById('file-list');
        fileList.innerHTML = ''; // Clear loading message

        files.forEach(file => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="file/${file}">${file}</a>`; // Links to files in /business/cdn/file/
            fileList.appendChild(li);
        });
    } catch (error) {
        document.getElementById('file-list').innerText = 'Failed to load files.';
        console.error(error);
    }
}

listFiles();