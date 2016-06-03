<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{message}}</p>
        <input type="text"/>
    </div>
</template>

<script>
const HomePage = {
    data() {
        return {
            title: '标题',
            message: '你好'
        }
    }
};

export default HomePage;
</script>
