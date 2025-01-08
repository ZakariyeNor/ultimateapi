// const API_KEY = "zwF3qlgEkeiylVP4ltnxHwWRt6w";
// API_URL = 'https://ci-jshint.herokuapp.com/api';
// const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));

// document.getElementById('status').addEventListener('click', e => getStatus(e));

// document.getElementById('submit').addEventListener('click', e => postForom(e));

// function processOptions(formsData) {

//     let optionsArray = [];

//     for (let entry of formsData.entries()) {
//         if (entry[0] === "options") {
//             optionsArray.push(entry[1]);
//         }
//     }
//     formsData.delete("optios");

//     formsData.append("options", optionsArray.join());

//     return formsData
// }



// async function postForom(e) {
//     const formsData = processOptions(new FormData(document.getElementById('checksform')));

//         const response = await fetch(API_URL, {
//                                     method: 'POST',
//                                     headers: {
//                                         'Authorization': API_KEY,
//                 }, 
//                 body: formsData,
//         });

//         const data = await response.json();

//         if (response.ok) {
//             displayPostForm(data);
//         } else {
//             displayException(data)
//             throw new Error('Api was not found', data.error);
//         }
// }

// function displayPostForm(data) {

//     let heading = `JSHint Results for ${data.file}`;

//     if (data.total_errors === 0) {
//         results = `<div class="no_errors">No Errors reposted</div>`;
//     } else {
//         displayException(data);
//         results = `<div>Total Errors: <span class="error_count">${data.total_errors}</span>/div>`;
//         for (let error of data.error_list) {
//             results += `<div>At line <span class="line">${error.line}</span>,`;
//             results += `<div>At column <span class="column">${error.col}</span></div>`;
//             results += `<div class="error">${error.error}</div>`;
//         }
//     }

//     document.getElementById('resultsModalTitle').innerText = heading;
//     document.getElementById('results-content').innerHTML = results;

//     resultsModal.show();
// } 

// async function getStatus(e) {
//     const queryString = `${API_URL}?api_key=${API_KEY}`;

//     const response = await fetch(queryString);

//     const data = await response.json()

//     if (response.ok) {
//         displayStatus(data);
//     } else {
//         displayException(data);
//         throw new Error('Api not found', data.error);
        
//     }
// }

// function displayStatus(data) {
//     let heading = "API Key Status";
//     results = `<div>Your key is valid unitil</div>`;
//     results += `<div class="key-status">${data.expiry}</div>`;


//     document.getElementById('resultsModalTitle').innerText = heading;
//     document.getElementById('results-content').innerHTML = results
    
//     resultsModal.show();
// }


// function displayException(data) {

//         let heading = `An Exception Occurred`;
//         results = `<div>The API returned the status code ${data.status_code}</div>`;
//         results += `<div class="error-no">Err number: <strong>${data.error_no}</strong></div>`;
//         results += `<div class="error-txt">Err text: </strong>${data.error}</strong></div>`;


//         document.getElementById('resultsModalTitle').innerText = heading;
//         document.getElementById('results-content').innerHTML = results;
        
//         resultsModal.show();
// }