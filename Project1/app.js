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
                alert("You win!");
                this.resetGame();
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
        heal: function() {
            if (this.playerMana >= 35) {
                this.playerHP += 20;
                this.playerMana -= 35;
            } else {
                alert("not enough mana");
            }
        },
        giveup: function() {
            alert("You lose!");
            this.resetGame();
        },
        resetGame: function() {
            this.gameOn = false;

            if (this.interval) clearInterval(this.interval);
            this.interval = false;

            this.playerHP = 100;
            this.playerMana = 50;
            this.monsterHP = 100;
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