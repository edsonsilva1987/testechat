const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
 

 
client.on('message', async (message) => {
	if (message.body.toLocaleLowerCase() === 'edson') {
	
		client.sendMessage(message.from, ' MARCOS REFRIGERAÇÃO >   Olá, seja bem vindo!'),
		client.sendMessage(message.from, '1 - Para instalação.'),
		client.sendMessage(message.from, '2 - Para limpeza.'),
		client.sendMessage(message.from, '3 - Para manutenção.'),
		client.sendMessage(message.from, '4 - Para falar com técnico.'),
		client.sendMessage(message.from, '0 - Para voltar ou início.');
	
	}
	if (message.body.toLocaleLowerCase() === 'boa noite') {
		client.sendMessage(message.from, '< MARCOS REFRIGERAÇÃO >   Olá, seja bem vindo!'),
		client.sendMessage(message.from, '1 - Para instalação.'),
		client.sendMessage(message.from, '2 - Para limpeza.'),
		client.sendMessage(message.from, '3 - Para manutenção.'),
		client.sendMessage(message.from, '4 - Para falar com técnico.'),
		client.sendMessage(message.from, '0 - Para voltar ou início.');
	
	}
	if (message.body.toLocaleLowerCase() === 'bom dia') {
		client.sendMessage(message.from, '< MARCOS REFRIGERAÇÃO >   Olá, seja bem vindo!'),
		client.sendMessage(message.from, '1 - Para instalação.'),
		client.sendMessage(message.from, '2 - Para limpeza.'),
		client.sendMessage(message.from, '3 - Para manutenção.'),
		client.sendMessage(message.from, '4 - Para falar com técnico.'),
		client.sendMessage(message.from, '0 - Para voltar ou início.');
	
	}
	if (message.body.toLocaleLowerCase() === 'boa tarde') {
		client.sendMessage(message.from, '< MARCOS REFRIGERAÇÃO >   Olá, seja bem vindo!'),
		client.sendMessage(message.from, '1 - Para instalação.'),
		client.sendMessage(message.from, '2 - Para limpeza.'),
		client.sendMessage(message.from, '3 - Para manutenção.'),
		client.sendMessage(message.from, '4 - Para falar com técnico.'),
		client.sendMessage(message.from, '0 - Para voltar ou início.');
	
	}
    if (message.body.toLocaleLowerCase() === '1') {
		client.sendMessage(message.from, 'Deixe seu telefone que, em breve retornaremos...');
	}

    if (message.body.toLocaleLowerCase() === '2') {
		client.sendMessage(message.from, 'Deixe seu endereço e contato...');
	}

    if (message.body.toLocaleLowerCase() === '3') {
		client.sendMessage(message.from, 'Podemos marcar manutenção para final de semana, qual dia e horário?');
	}
    if (message.body.toLocaleLowerCase() === '4') {
		client.sendMessage(message.from, 'Deixe seu contato, retornaremos em breve...');
	}
	if (message.body.toLocaleLowerCase() === '0') {
		client.sendMessage(message.from, 'Olá, para iniciar nosso atendimento digite uma opção:');
	}
});


 