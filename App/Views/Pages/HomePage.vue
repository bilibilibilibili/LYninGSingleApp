<template>
	<h1>{{title}}</h1>
    <p>{{message}}</p>
    <input type="text">
</template>

<script>
	module.exports = {
		data: function(){
			return {
				title: '标题',
				message: '你好'
			}
		}
	}
</script>
