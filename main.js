const form = document.getElementById('formContato');
const tabelaContatos = document.getElementById('tabelaContatos');
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents default form submission

    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();

    let isValid = true;

    if (!nome) {
        isValid = false;
        alert('O nome é obrigatório!');
    } else if (!/^[a-zA-Z ]+$/.test(nome)) {
        isValid = false;
        alert('O nome só pode conter letras e espaços.');
    }

    if (!telefone) {
        isValid = false;
        alert('O telefone é obrigatório!');
    } else if (!/^[\d]+$/.test(telefone)) {
        isValid = false;
        alert('O telefone só pode conter números.');
    }

    if (isValid) {
        adicionarContato(nome, telefone);

        nomeInput.value = '';
        telefoneInput.value = '';
    }
});

function adicionarContato(nome, telefone) {
    const linha = document.createElement('tr');
    const celulaNome = document.createElement('td');
    const celulaTelefone = document.createElement('td');

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    linha.appendChild(celulaNome);
    linha.appendChild(celulaTelefone);
    tabelaContatos.appendChild(linha);

    alert('Contato cadastrado com sucesso!');
}
