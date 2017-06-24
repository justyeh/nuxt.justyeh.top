define(function (){
　　　　emotions = {
		    // 支持多组表情
		    // 第一组，id叫做 'default' 
		    'default': {
		        title: '默认',  // 组名称
		        data: 'http://www.wangeditor.com/wangEditor/test/emotions.data'  // 服务器的一个json文件url，例如官网这里配置的是 http://www.wangeditor.com/wangEditor/test/emotions.data
		    },
		    // 第二组，id叫做'weibo'
		    'weibo': {
		        title: '微博表情',  // 组名称
		        data: [  // data 还可以直接赋值为一个表情包数组
		            // 第一个表情
		            {
		                'icon': 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif',
		                'value': '[草泥马]'
		            },
		            // 第二个表情
		            {
		                'icon': 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif',
		                'value': '[神马]'
		            }
		            // 下面还可以继续，第三个、第四个、第N个表情。。。
		        ]
		    }
		    // 下面还可以继续，第三组、第四组、、、
		};
　　　　return {
　　　　　　emotions
　　　　};
});