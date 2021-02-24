function kmpSearch(pattern, text) {
    if (pattern.length == 0)
            return 0;  // daca pattern-ul este null atunci se va returna 0, adica se va afisa ca motivul nu exista
    if(pattern==" ")
        return 0;
    if(pattern==".")
        return 0; 
    if(pattern=="?")
        return 0; 
    if(pattern==",")
        return 0;  
    if(pattern==";")
        return 0;
    if(pattern.length == 1)
        return 0;                
 //Calculam longest suffix-prefix (LSP)
    var lsp = [0];  // cazul de baza
    for (var i = 1; i < pattern.length; i++) {
        var j = lsp[i - 1];  // presupunem ca extindem LSP-ul anterior
        while (j > 0 && pattern.charAt(i) != pattern.charAt(j))
            j = lsp[j - 1];
        if (pattern.charAt(i) == pattern.charAt(j))
        j++;
        lsp.push(j);
    }

// parcurgem textul
var j = 0;  // numarul de caractere care se potivesc in pattern
for (var i = 0; i < text.length; i++) {
while (j > 0 && text.charAt(i) != pattern.charAt(j))
j = lsp[j - 1];  // revenim la pattern
if (text.charAt(i) == pattern.charAt(j)) {
j++;  //Următorul caracter corespunde, poziția e incrementata
if (j == pattern.length)
    return i - (j - 1);
}
}
return -1;  // nu s-a gasit patternul in text
}