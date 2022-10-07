matriz = new Array;

matriz = [
["B", "C", "A", "V", "A", "L", "O", "D", "K", "O", "L", "P", "D", "K"], 
["G", "A", "T", "O", "B", "I", "C", "M", "L", "I", "N", "Q", "S", "S"], 
["J", "C", "B", "H", "P", "Ô", "N", "E", "I", "N", "J", "R", "L", "E"], 
["C", "H", "X", "V", "A", "U", "S", "Q", "W", "C", "C", "B", "C", "T"], 
["A", "O", "L", "C", "P", "S", "E", "O", "Ç", "A", "P", "M", "A", "Q"], 
["A", "R", "A", "R", "A", "U", "B", "Y", "W", "O", "A", "Ç", "N", "F"], 
["V", "R", "F", "F", "G", "J", "P", "C", "B", "P", "T", "Q", "Á", "T"], 
["M", "O", "O", "K", "Z", "O", "L", "O", "D", "K", "O", "B", "R", "K"],
["A", "H", "F", "K", "I", "T", "B", "N", "M", "I", "B", "Y", "I", "J"],
["X", "V", "R", "C", "O", "E", "L", "H", "O", "Ç", "W", "I", "O", "K"],
["B", "N", "V", "M", "C", "L", "O", "D", "N", "Y", "P", "G", "K", "I"],
["C", "H", "A", "M", "S", "T", "E", "R", "C", "U", "K", "A", "C", "W"], 
["G", "C", "E", "V", "G", "U", "K", "D", "W", "P", "T", "G", "E", "O"], 
["B", "V", "A", "Q", "A", "M", "O", "U", "Q", "B", "L", "O", "Q", "X"]];

document.write("<p>Caça Palavras</p><hr>");

document.write("<table>");
for (x = 0; x < 14; x++) {
    document.write("<tr>");
    for (y = 0; y < 14; y++) {
        if (x == 0 && y > 0 && y < 7 || x == 1 && y > -1 && y < 4 || x == 2 && y > 3 && y < 9 || x == 5 && y > -1 && y < 5 || x == 11 && y > 0 && y < 8 || x == 9 && y > 2 && y < 9 || y == 1 && x > -1 && x < 8 || y == 10 && x > 3 && x < 8 || y == 4 && x > 2 && x < 10 || y == 12 && x > 2 && x < 10) {
            document.write("<td id='palavra'>" + matriz[x][y] + "</td>");
        }
        else {
            document.write("<td>" + matriz[x][y] + "</td>");
        }
    }
    document.write("</tr>");
};
document.write("</table>");