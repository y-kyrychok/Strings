var padStart = function(string, length, char="0")
{
	string += ""
	char+= ""
	
	if(char == null || !(char + "")){
	while (string.length<length)
	    string = char + string
	    return string
				}else 
				string = char.substr(0,string.length)+string	
				 return string
		}

padStart(10, 4, "hello")

/*
Домашнее задание

padStart(10,4)

если у чара длинна больше длинны строки 

padStart(10, 4, "hello") // "he10" */

