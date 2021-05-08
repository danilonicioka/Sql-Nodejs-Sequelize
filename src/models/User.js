//Importa o Model e os DataTypes de dentro do sequelize
const {Model, DataTypes} = require('sequelize');

//Criando classe que extende esse Model
class User extends Model{
    //Método padrão do sequelize que recebe a conexão com o banco de dados
    static init(sequelize){
        super.init({ //Pega método init do Model que passa os campos da tabela
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize //objeto de configuração para conexão com banco de dados que recebe como padrão o sequelize
        })
    }
}

module.exports = User;