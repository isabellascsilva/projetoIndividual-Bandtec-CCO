'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Doador = sequelize.define('Doador',{
		idDoador: {
			field: 'idDoador',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeDoador: {
			field: 'nomeDoador',
			type: DataTypes.STRING,
			allowNull: false
		},
		dataNasc: {
			field: 'dataNasc',
			type: DataTypes.DATE,
			allowNull: false
		},
		logradouro: {
			field: 'logradouro',
			type: DataTypes.STRING,
			allowNull: false
		},
        bairro: {
			field: 'bairro',
			type: DataTypes.STRING,
			allowNull: false
		},
		cidade: {
			field: 'cidade',
			type: DataTypes.STRING,
			allowNull: false
		},
		estado: {
			field: 'estado',
			type: DataTypes.STRING,
			allowNull: false
		},
		
	}, 
	{
		tableName: 'Doador', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Doador;
};
