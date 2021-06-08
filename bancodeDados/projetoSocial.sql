create database projetoSocial;

use projetoSocial;

create table voluntario(
	idVoluntario int primary key auto_increment,
    nomeVoluntario varchar(50),
    telefoneVoluntario char(11),
    email varchar(45),
    senha varchar(45),
    descricao varchar(100),
    ajuda varchar(100),
    disponibilidade varchar(100)
    );
    

   create table Doador(
	idDoador INT PRIMARY KEY AUTO_INCREMENT,
    nomeDoador VARCHAR(45),
    dataNasc DATE,
    logradouro VARCHAR(45),
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    estado CHAR(2)
    );

select * from doador;
   
   
   create table DoadorDoacao(
	fkDoador INT,
    foreign key(fkDoador) references Doador(idDoador),
    fkDoacao INT,
    foreign key(fkDoacao) references Doacao(idDoacao),
    primary key(fkDoador, fkDoacao),
    dataDoacao DATETIME
    );
    
    select * from DoadorDoacao;
   
   create table Contato (
   idContato int primary key auto_increment,
   nomeContato varchar(45),
   telefoneContato char(11),
   emailContato varchar(45),
   assunto varchar(60),
   mensagem varchar(200),
   comoChegou varchar(45)
   );
    
    
    create table Revista(
    idRevistaPessoa int primary key auto_increment,
    nomePessoa varchar(45),
    sobrenomePessoa varchar(45),
    emailPessoa varchar(45)
    );
    
    select * from voluntario;
	select * from doador;
    select * from doacao;
	select * from revista;
    select * from contato;
    
    
    select idDoacao from Doacao order by idDoacao desc limit 1;
    
    
    select * from DoadorDoacao;
    
   