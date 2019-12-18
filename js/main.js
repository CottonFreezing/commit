var commentBox = {
		data() {
			return {
				zi:500,
				name: '',
				content: '',
			}
		},
		template: '#tmp',
		methods: {
			descInput(){  
				var txtVal = this.content.length;   
				this.zi = 500 - txtVal;
			
			},

			get: function(){
				//发送get请求
				this.$http.get('demo.php',{params:{name:this.name,content:this.content}}).then(function(res){
					var comment = {
					id: Date.now(),
					name: this.name,
					content: this.content
				}
				if(comment.name === "" || comment.content === "") {

					alert("用户名或评论不能为空")
					return
				} else {
					//从localStorage中获取所有的评论
					var list = JSON.parse(localStorage.getItem("cmts") || "[ ]")

					list.unshift(comment) //将评论插入到第一个

					//重新保存最新的评论数据
					localStorage.setItem('cmts', JSON.stringify(list)) //localStorage.setItem:字符串转换

					this.name = this.content = ''
					this.$emit('func') // 触发父组件的自定义事件
				}
				console.log(res.body)
				}),function(res){
					console.log("发送错误")
				}
				
			}
		}
//		post: function(){
//				//发送post请求
//				this.$http.post('demo.php',{name:"this.name",content:"this.content"},{emulateJSON:true}).then(function(res){
//					document.write(res.body) 
//				}),function(res){
//					console.log("cuowu")
//				}
//				
//			}
//		}
//
	}
	
	var likeBox = {
		data(){
			return{
				index:false,
				count: 0,
				
			}
		},
		template: '#like',
		methods:{
			zan: function() {
				
				var liked = this.index
				
				if(!liked){
					this.count++
					this.$refs.myzan.style.color = 'red'
					
				}else{
					this.count--
					this.$refs.myzan.style.color = ''
					
				}
				this.index = !this.index
				
				this.$http.get('demo2.php',{params:{count:this.count}}).then(function(res){
					console.log(res.body)
				},function(){
					console.log("请求错误")
				})
			}
			
		},

			
		}
	

	var vm = new Vue({
		el: "#app",
		data: {				

			list: [{
					id: Date.now(),
					name: 'wangwang',
					
					content: "hhhhhhhhhhhhh"
				},
				{
					id: Date.now(),
					name: 'wangwang',
					
					content: "hhhhhhhhhhhhh"
				},
				{
					id: Date.now(),
					name: 'wangwang',
					
					content: "hhhhhhhhhhhhh"
				}
			],
			
			 
		},
		beforeCreated() {

		},
		created() {
			this.loadComments()
		},
		methods: {
			loadComments() {
				var list = JSON.parse(localStorage.getItem('cmts') || '[ ]') //读取本地数据并转换
				this.list = list
			},
			
			
		},
		components: {
			'cmt-box': commentBox,
			'like-box':likeBox
		},

		
	});