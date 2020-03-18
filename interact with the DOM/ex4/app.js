new Vue({
    el: '#exercise',
    data: {
        classList: {
            highlight: true,
            shrink: false
        },
        shape: 'shape',
        colorful: 'colorful',
        classInput: '',
        marginLeft: 'marginLeft',
        floatRight: 'floatRight',
        alignCenter: 'alignCenter',
        eclipse: 'eclipse',
        sun: 'sun',
        frost: 'frost',
        classInput2: '',
        input2: '',
        cBlue: 'cBlue',
        cPurple: 'cPurple',
        cSilver: 'cSilver',
        input3: '',
        style: {
            marginTop: '1rem',
            height: '50px',
            width: '50px',
            backgroundColor: 'blue'
        },
        progressBar: {
            marginTop: '1rem',
            height: '30px',
            width: '0',
            backgroundColor: 'green'
        }
    },
    computed: {
        input2toggle: function() {
            if (this.input2.toLowerCase() == 'true') {
                return true;
            }
            return false;
        }
    },
    methods: {
        startEffect: function() {
            setInterval(() => {
                this.classList.highlight = !this.classList.highlight;
                this.classList.shrink = !this.classList.shrink;
            }, 1000);            
        },
        startProgressBar: function() {
            var count = 0;
            setInterval(() => {
                count = count + 15;
                this.progressBar.width = count + 'px';
            }, 500);
        }
    },
    watch: {
        input3: function() {
            this.style.width = this.input3 + 'px';
        }
    }
});