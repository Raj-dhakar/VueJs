
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHealth <= 0) {
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' }
        },
        playerHealthBar() {
            if (this.playerHealth <= 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('Player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 18);
            this.playerHealth -= attackValue;
            this.addLogMessage('Monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('Monster', 'special-attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            this.addLogMessage('Player', 'Heal', healValue);
            if (this.playerHealth + healValue > 100) this.playerHealth = 100;
            else this.playerHealth += healValue;

            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A Draw
                this.winner = 'draw';
            }
            else if (value <= 0) {
                // Player
                this.winner = 'Monster';
            }
            else if (this.monsterHealth <= 0) {
                // Monster Lost
                this.winner = 'Player';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A Draw
                this.winner = 'draw';
            }
            else if (value <= 0) {
                // Monster
                this.winner = 'Player';
            }
            else if (this.playerHealth <= 0) {
                // Player Lost
                this.winner = 'Monster';
            }
        },

    }
})

app.mount("#game")