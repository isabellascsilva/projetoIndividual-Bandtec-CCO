'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Contato = sequelize.define('Contato',{
		idContato: {
			field: 'idContato',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeContato: {
			field: 'nomeContato',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefoneContato: {
			field: 'telefoneContato',
			type: DataTypes.STRING,
			allowNull: false
		},
		emailContato: {
			field: 'emailContato',
			type: DataTypes.STRING,
			allowNull: false
		},
        assunto: {
			field: 'assunto',
			type: DataTypes.STRING,
			allowNull: false
		},
		mensagem: {
			field: 'mensagem',
			type: DataTypes.STRING,
			allowNull: false
		},
		comoChegou: {
			field: 'comoChegou',
			type: DataTypes.STRING,
			allowNull: false
		},
		
	}, 
	{
		tableName: 'Contato', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Contato;
};
