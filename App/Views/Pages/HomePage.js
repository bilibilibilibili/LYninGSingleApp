var Vue = require('Vue');

var data = {
    title: '新界面',
    message: '这是第一个界面'
};

var HomePage = Vue.extend({
    template: '<h1>{{title}}</h1>' +
    '<p id="pNode">{{message}}</p>' +
    '<input type="text" v-on:change="changeText">',

    data: function(){
        return data;
    },

    methods: {
        changeText: function(e){
            var pNode = document.getElementById('pNode');
            pNode.innerText = e.target.innerText;
        }
    }
});

module.exports = HomePage;