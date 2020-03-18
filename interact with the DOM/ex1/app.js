new Vue({
    el: '#exercise',
    data: {
        name: 'Tio Patinhas',
        age: 13,
        imglink: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Mitraillette_%28fast_food%29.jpg'
    },
    methods: {
        randomFloat: function() {
            x = Math.random();
            return x;
        }
    }
});