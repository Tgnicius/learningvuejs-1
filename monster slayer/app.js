new Vue({
    el: "#app",
    data: {
        playerHP: 100,
        playerMana: 50,
        monsterHP: 100,
        intervalManaReg: false,
        intervalMonsterAttack: false,
        intervalMonsterHPReg: false,
        gameOn: false,
        actionLog: []
    },
    methods: {
        attack: function() {
            this.monsterHP -= 10;
            this.actionLog.unshift({
                player: true,
                log: "Player attack",
                value: 10,
                price: 0
            });
        },
        special: function() {
            if (this.playerMana >= 25) {
                this.monsterHP -= 20;
                this.playerMana -= 25;
                this.actionLog.unshift({
                    player: true,
                    log: "Player special attack",
                    value: 20,
                    price: 25
                });
            } else {
                alert("not enough mana");
            }
        },
        heal: function() {
            if (this.playerMana >= 35) {
                if (this.playerHP < 100) {
                    this.playerHP += 40;
                    if (this.playerHP > 100) this.playerHP = 100;
                    this.playerMana -= 35;
                    this.actionLog.unshift({
                        player: true,
                        log: "Player heal",
                        value: 40,
                        price: 35
                    });
                } else {
                    alert("HP is already full!");
                }
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

            if (this.intervalManaReg) clearInterval(this.intervalManaReg);
            this.intervalManaReg = false;

            if (this.intervalMonsterAttack) clearInterval(this.intervalMonsterAttack);
            this.intervalMonsterAttack = false;

            if (this.intervalMonsterHPReg) clearInterval(this.intervalMonsterHPReg);
            this.intervalMonsterHPReg = false;

            this.playerHP = 100;
            this.playerMana = 50;
            this.monsterHP = 100;
            this.actionLog = [];
        },
        startGame: function() {
            this.gameOn = true;
            setTimeout(() => {
                this.intervalMonsterAttack = setInterval(() => {
                    var dmg = Math.floor(Math.random() * 20 + 1);
                    this.playerHP -= dmg;
                    this.actionLog.unshift({
                        player: false,
                        log: "Monster attack",
                        value: dmg,
                        price: 0
                    });
                    if (this.playerHP <= 0) {
                        if (confirm("You lose! Want to continue? ")) {
                            this.resetGame();
                            this.startGame();
                        } else {
                            this.resetGame();
                        }
                    }
                }, 1500);
            }, 2000);
        }
    },
    watch: {
        playerMana: function() {
            if (this.playerMana < 50) {
                if (!this.intervalManaReg) {
                    this.intervalManaReg = setInterval(() => {
                        this.playerMana += 15;                        
                    }, 3000);
                }
            } else if (this.playerMana > 50) {
                this.playerMana = 50;
            }
        },
        monsterHP: function() {
            if (!this.intervalMonsterHPReg) {
                this.intervalMonsterHPReg = setInterval(() => {
                    this.monsterHP += Math.floor(Math.random() * 10 + 1);
                }, 1000);
            }
            if (this.monsterHP <= 0) {
                alert("You win!");
                this.resetGame();
            } else if (this.monsterHP > 100) {
                this.monsterHP = 100;
            }
        }
    }
});