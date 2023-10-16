const HomePage = {
    template: '<div><h1>Bem-vindo à ONG doAção</h1><p>Conectando pessoas e ONGs para fazer a diferença.</p></div>'
};

const SobrePage = {
    template: '<div><include-html src="sobre.html"></include-html></div>'
};

const ContatoPage = {
    template: '<div><include-html src="contato.html"></include-html></div>'
};

const routes = [
    { path: '/', component: HomePage },
    { path: '/sobre', component: SobrePage },
    { path: '/contato', component: ContatoPage }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#content',
    router
});

Vue.component('include-html', {
    template: '<div></div>',
    props: ['src'],
    mounted() {
        axios.get(this.src)
            .then(response => {
                this.$el.innerHTML = response.data;
            });
    }
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
});
