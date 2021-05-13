let catFacts = document.querySelector('p');

fetch('http://efa-cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts')
.then(function(response) {
    console.log(response);
    return response.json();
})
.then(function(json) {
    console.log(json);
    let facts = json;
//console.log(facts);
    for(f of facts) {
        console.log(f);
        let dailyFact = document.createElement('li');
        dailyFact.innerHTML = '<p>' + f.text + '</p>';
        catFacts.appendChild(dailyFact);
    }
});