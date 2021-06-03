'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Revista = sequelize.define('Revista',{
		idResvistaPessoa: {
			field: 'idRevistaPessoa',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomePessoa: {
			field: 'nomePessoa',
			type: DataTypes.STRING,
			allowNull: false
		},
		sobrenomePessoa: {
			field: 'sobrenomePessoa',
			type: DataTypes.STRING,
			allowNull: false
		},
		emailPessoa: {
			field: 'emailPessoa',
			type: DataTypes.STRING,
			allowNull: false
		},
		
	}, 
	{
		tableName: 'Revista', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Revista;
};
