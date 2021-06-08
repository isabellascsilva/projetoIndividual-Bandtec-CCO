'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let DoadorDoacao = sequelize.define('DoadorDoacao',{
		fkDoador: {
			field: 'fkDoador',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		fkDoacao: {
			field: 'fkDoacao',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		dataDoacao: {
			field: 'dataDoacao',
			type: DataTypes.DATE,
			allowNull: false
		},
		
	}, 
	{
		tableName: 'DoadorDoacao', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return DoadorDoacao;
};
