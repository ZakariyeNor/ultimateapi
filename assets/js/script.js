API_KEY = 'zwF3qlgEkeiylVP4ltnxHwWRt6w';
API_URL = 'https://ci-jshint.herokuapp.com/api';

const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));

document.getElementById('status').addEventListener('click', e => getStatus(e));

document.getElementById('submit').addEventListener('click', (e) => postForm(e));

function displayException(data) {
    let heading = `An Exception Occurred`;
    let results = `<div>The Api returned the status code ${data.status_code}</div>`;
    results += `<div>Err no: <span>${data.error_no}</span></div>`;
    results += `<div>Err text: <span>${data.error}</span></div>`;

    document.getElementById('resultsModalTitle').innerText = heading;
    document.getElementById('results-content').innerHTML = results;

    resultsModal.show();

}

function processOptions(data) {
    let optionsArray = [];

    if (entry[0] === 'options') {
        optionsArray.push(entry[1]);
    } else {
        form.delete([0]);

        form.append("options", optionsArray.join());

        return FormData
}
}

async function postForm(e) {
    const form = new FormData(document.getElementById('checksform'));

        const response = await fetch(API_URL, {
                                    method: 'POST',
                                    headers: {
                                        'Authorization': API_KEY,
                }, 
                body: form,
        });
        const data = await response.json();

        if (response.ok) {
            displayError(data);
        } else {
            displayException(data)
            throw new Error('Api was not found', data.error);
        }
}

function displayError(data) {
    
    let heading = `JSHint Results for ${data.file}`;

    if (data.total_error === 0) {
        results = `<div class="no_errors">No Errors found</div>`;
    } else {
        results = `<div>Total Errors: <span class="error_count">${data.total_errors}</span>/div>`;
        for (let error of data.error_list){
            results += `<div>At line: <span class="column">${error.line}</span>`;
            results += `<div><span class="column">${error.col}</span></div>`;
            results += `<div><span class="error">${error.error}</span></div>`;
        }
    }

    document.getElementById('resultsModalTitle').innerText = heading;
    document.getElementById('results-content').innerHTML = results;

    resultsModal.show();
}

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json()

    if (data) {
        displayStatus(data);
    } else {
        displayException(data)
        throw new Error('API not found', data.Error), 403
    }
}

function displayStatus(data) {
    let heading = "API Key Status";
    results = `<div>Your key is valid unitil</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById('resultsModalTitle').innerText = heading;
    document.getElementById('results-content').innerHTML = results;

    resultsModal.show();
}
