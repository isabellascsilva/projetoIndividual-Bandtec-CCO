var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
var Doacao = require('../models').Doacao;
var Contato = require('../models').Contato;
var Doador = require('../models').Doador;
var Revista = require('../models').Revista;
var DoadorDoacao = require('../models').DoadorDoacao;


let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar', function(req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var login = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	
	
	let instrucaoSql = `select * from voluntario where email='${login}' and senha='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.email);
			console.log('sessoes: ',sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('Login e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Buscar doador */
router.post('/buscarDoador', function(req, res, next) {
	console.log('Buscando Doador');

	var nomeDoador = req.body.nomeDoador; // depois de .body, use o nome (name) do campo em seu formulário de login
	var dataNasc = req.body.dataNasc; // depois de .body, use o nome (name) do campo em seu formulário de login	
	
	let instrucaoSql = `select * from Doador where nomeDoador='${nomeDoador}' and dataNasc='${dataNasc}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Doador
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


/* Cadastrar usuário */
router.post('/cadastrar', function(req, res, next) {
	console.log('Criando um voluntario');
	
	Usuario.create({
		nomeVoluntario : req.body.nomeVoluntario,
		telefoneVoluntario: req.body.telefoneVoluntario,
		email: req.body.email,
		senha: req.body.senha,
		descricao: req.body.descricao,
		ajuda: req.body.ajuda,		
		disponibilidade: req.body.disponibilidade
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Cadastrar doacao */
router.post('/cadastrarDoacao', function(req, res, next) {
	console.log('Doacão');
	
	Doacao.create({
		nomeProduto : req.body.nomeProduto,
		descricaoProduto: req.body.descricaoProduto,
		dataValidade: req.body.dataValidade
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


/* Cadastrar contato */
router.post('/cadastrarContato', function(req, res, next) {
	console.log('Contato cadastrado');
	
	Contato.create({
		nomeContato : req.body.nomeContato,
		telefoneContato: req.body.telefoneContato,
		emailContato: req.body.emailContato,
		assunto : req.body.assunto,
		mensagem: req.body.mensagem,
		comoChegou: req.body.comoChegou
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


/* Cadastrar Doador */
router.post('/cadastrarDoador', function(req, res, next) {
	console.log('Doador cadastrado com sucesso!');
	
	Doador.create({
		nomeDoador : req.body.nomeDoador,
		dataNasc: req.body.dataNasc,
		logradouro: req.body.logradouro,
		bairro : req.body.bairro,
		cidade: req.body.cidade,
		estado: req.body.estado
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


/* Cadastrar Pessoa interessada na revista */
router.post('/cadastrarPessoa', function(req, res, next) {
	console.log('Cadastrado com sucesso!');
	
	Revista.create({
		nomePessoa : req.body.nomePessoa,
		sobrenomePessoa: req.body.sobrenomePessoa,
		emailPessoa : req.body.emailPessoa
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Cadastrar fk */
router.post('/cadastrarDoadorDoacao', function(req, res, next) {
	console.log('Cadastrado com sucesso!');
	
	DoadorDoacao.create({
		fkDoador : req.body.fkDoador,
		fkDoacao: req.body.fkDoacao,
		dataDoacao : req.body.dataDoacao
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});



/* Verificação de usuário */
router.get('/sessao/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}
	
});


/* Logoff de usuário */
router.get('/sair/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;
