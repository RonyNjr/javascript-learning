<?php
// Exibir texto na tela
echo "Olá, mundo!<br>";

// Variáveis
$nome = "Rony";
$idade = 25;

// Concatenar strings
echo "Meu nome é " . $nome . " e tenho " . $idade . " anos.<br>";

// Estruturas de decisão
if ($idade >= 18) {
    echo "Você é maior de idade.<br>";
} else {
    echo "Você é menor de idade.<br>";
}

// Laço de repetição
for ($i = 1; $i <= 5; $i++) {
    echo "Linha $i<br>";
}

// Função simples
function saudacao($nome) {
    return "Olá, $nome!";
}

echo saudacao($nome);
?>