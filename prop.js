#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var server_list = __dirname + '/servers.json';
var exec = require('child_process').exec;

program
	.version('0.0.1')
	.usage('[options] <domain>')
	.option('-f, --full', 'Show full dig output.')
	.option('-w, --www', 'Also dig www version of domain.')
	.parse(process.argv);

fs.readFile(server_list, 'utf8', function(err, data)
{
	if (err)
	{
		console.log('Error reading server list: ' + err);
		return;
	}

	var data = JSON.parse(data);

	var short = " +short";
	if (program.full) short = "";

	for (i in data.servers)
	{
		var www = "";
		if (program.www) www = " && echo www && dig @" + data.servers[i].ip + " www." + program.args[0] + short;
		exec("echo " + data.servers[i].country + " && dig @" + data.servers[i].ip + " " + program.args[0] + short + www, output);
	}
});

function output(error, stdout, stderr)
{
    console.log(stdout);
}
