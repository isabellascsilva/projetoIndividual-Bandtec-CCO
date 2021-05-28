	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idVoluntario: {
			field: 'idVoluntario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeVoluntario: {
			field: 'nomeVoluntario',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefoneVoluntario: {
			field: 'telefoneVoluntario',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		descricao: {
			field: 'descricao',
			type: DataTypes.STRING,
			allowNull: false
		},
		ajuda: {
			field: 'ajuda',
			type: DataTypes.STRING,
			allowNull: false
		},
		disponibilidade: {
			field: 'disponibilidade',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'voluntario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
