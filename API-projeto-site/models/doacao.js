'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Doacao = sequelize.define('Doacao',{
		idDoacao: {
			field: 'idDoacao',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeProduto: {
			field: 'nomeProduto',
			type: DataTypes.STRING,
			allowNull: false
		},
		descricaoProduto: {
			field: 'descricaoProduto',
			type: DataTypes.STRING,
			allowNull: false
		},
		dataValidade: {
			field: 'dataValidade',
			type: DataTypes.DATE,
			allowNull: false
		},
		
	}, 
	{
		tableName: 'Doacao', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Doacao;
};
