const readline = require('readline');
const fs = require('fs');
const bd = require('./bd.js');

module.exports = 
{
	principal : principal
}

function principal( path, tempo )
{
	lerArquivo( path );
	setInterval(function()
	{
		lerArquivo( path );
	}, tempo);
}

function lerArquivo( path )
{
	if( fs.existsSync(path) )
	{
		const rl = readline.createInterface({
		  input: fs.createReadStream(path),
		  crlfDelay: Infinity
		});

		rl.on('line', (line) => 
		{
			//let res = ${line};
			trataRequisicao( line.split(';') );
		});

		fs.unlink(path, err => 
		{
	      if (err) throw err;
	    });
	}
	else
	{
		console.log('Arquivo não encontrado');
	}
}

function trataRequisicao( aRequisicao )
{
	console.log( aRequisicao[0] );
	switch( aRequisicao[0] )
	{
		case 'CHECKIN':
		bd.insert(aRequisicao);
		break;

		default:
		bd.delete(aRequisicao);
	}
}