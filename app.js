new Vue({
    el: '#app',
    data: {
        vidaJogador: 100,
        vidaMonstro: 100,
        ataqueJogador: [5, 10],
        ataqueMonstro: [7, 12],
        ataqueEspecial: 5,
        curarJogador: [10, 15],
        resulDanoJ: '',
        resulDanoM: '',
        resulCuradoJ: '',

        ocultarHidden: false

    },
    methods: {
        ataqueScores() {
            let danoJogador = Math.floor(Math.random() * (this.ataqueJogador[1] - this.ataqueJogador[0]) + this.ataqueJogador[0]);
      
            this.resulDano += this.vidaMonstro -= danoJogador;
            this.resulDanoJ = danoJogador;

            let danoMonstro = Math.floor(Math.random() * (this.ataqueMonstro[1] - this.ataqueMonstro[0]) + this.ataqueMonstro[0]);

            this.vidaJogador -= danoMonstro;
            this.resulDanoM = danoMonstro;
        },
        especialScores() {
            let danoEspecialJogador = Math.floor(Math.random() * (this.ataqueJogador[1] - this.ataqueJogador[0]) + this.ataqueJogador[0]) + this.ataqueEspecial;

            this.vidaMonstro -= danoEspecialJogador;

            let danoEspecialMonstro = Math.floor(Math.random() * (this.ataqueMonstro[1] - this.ataqueMonstro[0]) + this.ataqueMonstro[0]) + this.ataqueEspecial;

            this.vidaJogador -= danoEspecialMonstro;

            this.resulDanoM = danoEspecialMonstro;
            this.resulDanoJ = danoEspecialJogador;


        },
        curarScores() {
            let jogadorCurado = Math.floor(Math.random() * (this.curarJogador[1] - this.curarJogador[0]) + this.curarJogador[0]);
            let danoMonstro = Math.floor(Math.random() * (this.ataqueMonstro[1] - this.ataqueMonstro[0]) + this.ataqueMonstro[0]);

            this.vidaJogador -= danoMonstro;
            this.vidaJogador += jogadorCurado;

            this.resulDanoM = danoMonstro;
            this.resulCuradoJ = jogadorCurado;
        },
    
    },
    computed:{
        desistirJogo() {
            
        }

    }
})