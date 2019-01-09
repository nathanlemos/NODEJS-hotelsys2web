const mysql      = require('mysql');
module.exports = 
{
	insert : insert,
	delete : remove
}

function insert( aRegistro )
{
	let query = "INSERT INTO tabela";
	query += " (val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12)";
	query += " VALUES";
	query += " ('" + aRegistro[1] + "','" + aRegistro[2] + "','" + aRegistro[3] + "','" + aRegistro[4] + "','" + aRegistro[5] + "','" + aRegistro[6] + "','" + aRegistro[7] + "','" + aRegistro[8] + "','" + aRegistro[9] + "','" + aRegistro[10] + "','" + aRegistro[11] + "','" + aRegistro[12] + "')";

	console.log( 'Inserindo: ', aRegistro[1] );
	execSQLQuery( query );

}

function remove( aRegistro )
{
	console.log( 'Removendo: ', aRegistro[1] );
}


function execSQLQuery(sqlQry, res)
{
  const connection = mysql.createConnection({
	host     : 'localhost',
	port     : 3306,
	user     : 'root',
	password : 'vertrigo',
	database : 'hotel'
  });

  connection.query(sqlQry, function(error, results, fields)
  {
      if(error) 
        console.log('Erro: ', error);
      else
        //console.log('Executado com sucesso: ', results);
      connection.end();
      console.log('executou!');
  });
}