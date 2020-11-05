const citiesStates = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
}; 

const states = document.getElementById('state');
const btnSubmit = document.getElementById('submitbtn');
const formValues = document.querySelectorAll('.form-comp');
const results = document.getElementById('results');
const date = document.getElementById('date');
const home = document.getElementById('home');
const apto = document.getElementById('apto')

Object.keys(citiesStates).forEach(key => {
    let option = document.createElement('option');

    option.innerText = citiesStates[key];
    option.value = citiesStates[key];

    states.appendChild(option);
});

btnSubmit.addEventListener('click', function(event) {
    event.preventDefault();

    const dateValue = date.value;

    const [year, month, day] = dateValue.split('-');

    if ((year >=1900) && (year <= 2020)) {
        alert('O ano está incorreto');
    }

    formValues.forEach(element => {
        let paragraph = document.createElement('p');
        paragraph.innerText = `${element.name}: ${element.value}`

        results.appendChild(paragraph)
    });
});