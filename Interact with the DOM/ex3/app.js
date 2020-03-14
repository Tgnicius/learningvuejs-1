new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function() {
            return this.value == 37 ? 'done' : 'not there yet';
      }
    },
    watch: {
        result: function() {
            var vm = this;
            setTimeout(function() {
                console.log('timeout');
                vm.value = 0;
            }, 5000);
        }
    }
});