new Vue({
    el: "#app",
    data: {
        playerHP: 100,
        playerMana: 50,
        monsterHP: 100,
        interval: false,
        gameOn: false
    },
    methods: {
        attack: function() {
            this.monsterHP -= 5;
            if (this.monsterHP <= 0) {
                this.monsterHP = 0;
                this.gameOn = false;
                clearInterval(this.interval);
                // CRIAR RESET METHOD
                alert("You win!");
            }
        },
        special: function() {
            if (this.playerMana >= 25) {
                this.monsterHP -= 15;
                this.playerMana -= 25;
            } else {
                alert("not enough mana");
            }
        },
        startGame: function() {
            this.gameOn = true;
        }
    },
    watch: {
        playerMana: function() {
            if (this.playerMana < 50) {
                if (!this.interval) {
                    this.interval = setInterval(() => {
                        this.playerMana += 15;
                    }, 5000);
                }
            } else if (this.playerMana > 50) {
                this.playerMana = 50;
            }
        }
    }
});