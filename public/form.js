const errorMessage = document.getElementById('errorMessage');

document.getElementById('opportunityForm')
    .addEventListener('submit', async function (e) {
        e.preventDefault();

        errorMessage.textContent = '';

        const formData = new FormData(e.target);

        const response = await fetch('/api/heroes', {
            method: 'post', body: formData
        });
        if (response.status === 200) {
            const data = await response.json();
            if (data.ok) {
                window.location.href = '/index.html';
            } else {
                console.error('There was a problem with fetch operation:', data.msg);
                errorMessage.textContent = 'There was a problem with fetch operation:' + data.msg;
            }
        } else {
            console.error('There was a problem with fetch operation:', response.body);
            errorMessage.textContent = 'There was a problem with fetch operation:' + response.body;
        }
    });

document.getElementById('photos').addEventListener('change', (e) => {
    errorMessage.textContent = '';
    let allAreImages = true;
    for (const file of e.target.files) {
        if (!file.type.startsWith('image/')) {
            allAreImages = false;
            break;
        }
    }
    if (allAreImages) {
        console.log('All selected files are images.');
    } else {
        console.log('At least one selected file is not an image.');
        errorMessage.textContent = 'Please select only image files.';
        e.target.value = '';
    }
});