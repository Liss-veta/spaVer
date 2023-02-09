export default {
  template: 
`<header style="border-bottom: 1px solid grey;">
    <div class="uk-width-1-1 uk-flex uk-flex-around uk-flex-middle" style="height: 100px">
        <router-link to="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="uk-h2">Мир цветов</span>
        </router-link>

        <nav class="uk-width-1-2 uk-flex uk-flex-around">
            <router-link v-if="!token" to="/register">О нас</router-link>
            <router-link v-if="!token" to="/auth">Где мы находимся?</router-link>
            <router-link v-if="!token" to="/register">Регистрация</router-link>
            <router-link v-if="!token" to="/auth">Авторизация</router-link>
            <router-link to="/order">Мои заказы</router-link>
            <router-link to="/cart">Корзина</router-link>
            <router-link v-if="token" @click.prevent="clearToken" to="/auth">Выход</router-link>
        </nav>
    </div>
</header>`,
data(){
    return {
        token: localStorage.getItem('user_token')
    }
},
updated() {
    this.token = localStorage.getItem('user_token')
},
methods:{
    async clearToken(){
        let response = await fetch(`http://127.0.0.1:8000/api-samohod/logout`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer '+this.token
                }
            })
        delete localStorage.user_token
        return this.token = '';
    }
}
};


