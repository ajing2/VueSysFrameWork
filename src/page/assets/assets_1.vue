<template>
    <div>
       aaaaa
    </div>
</template>
export default{
		data(){
			return {
				banners: [],
				songList: []
			}
		},
		created(){
			this.getSongs()
		},
		methods: {
			getSongs(){
				console.info('xxxx');
			},
		}
	}