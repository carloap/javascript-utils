/**
 * Função para controlar variáveis em filas.
 * Enfileira variáveis em uma array para serem usadas posteriormente, numa sequência FIFO.
 * @author carloap
 * @since 31/12/2016
 * @version 0.1
 */
function ControleDeFila() {
    this._fila = new Array();
};
/**
 * Enfileira uma nova variável para ser utilizada posteriormente
 */
ControleDeFila.prototype.enfileirar = function(variavel) {
    this._fila[this._fila.length] = variavel;
};
/**
 * Obtém a próxima variável, desenfileira a última variável inserida na fila, e reordena
 */
ControleDeFila.prototype.desenfileirar = function() {
    // Armazena variável auxiliar da primeira posição da fila
    var prox_variavel = this._fila[0];
    
    // Reordena a array
    for ( var counter = 1; counter < this._fila.length; counter++ ) {
        this._fila[counter - 1] = this._fila[counter];
    }
    // Reduz o tamanho restante
    this._fila.length = counter - 1;
    
    return prox_variavel;
};
/**
 * Faz o mesmo que this.desenfileirar()
 * Obtém a próxima variável da fila, e reordena
 */
ControleDeFila.prototype.getProximo = function() {
    return this.desenfileirar();
};
/**
 * Obtém o tamanho da array de fila
 */
ControleDeFila.prototype.getTamanho = function() {
    return this._fila.length;
};
/**
 * Limpa a array
 */
ControleDeFila.prototype.resetar = function() {
    this._fila=new Array();
};
// Fim do arquivo