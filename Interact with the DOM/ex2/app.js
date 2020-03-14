new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertSomething: function() {
            alert('Alert!');
        },
        storeValue: function(e) {
            this.value = e.target.value;            
        }
    }
});