var wxfx = function(option,jdk){
	var isArr = Object.prototype.toString.call(option) == '[object Array]';
	var title = (isArr && option[0]) || option.title || '填写标题';
	var desc = (isArr && option[1]) || option.desc || '填写描述';
	var link = (isArr && option[2]) || option.link || '填写地址';
	var imgUrl = (isArr && option[3]) || option.imgUrl || '填写图片地址';

	wx.config({
		debug: false,
		appId: jdk.appId,
		timestamp: jdk.timestamp,
		nonceStr: jdk.nonceStr,
		signature: jdk.signature,
		jsApiList: [
			'checkJsApi',
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getLocalImgData'
	// 所有要调用的 API 都要加到这个列表中
		]
	});

	wx.ready(function () {
		// 在这里调用 API
		console.log('wx-ready');
		wx.onMenuShareTimeline({
			title: title, // 分享标题
			link: link, // 分享链接
			imgUrl: imgUrl, // 分享图标
			success: function () { 
				// 用户确认分享后执行的回调函数
			},
			cancel: function () { 
				// 用户取消分享后执行的回调函数
			}
		});
			
		wx.onMenuShareAppMessage({
			title: title, // 分享标题
			desc: desc, // 分享描述
			link: link, // 分享链接
			imgUrl: imgUrl, // 分享图标
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function () { 
				// 用户确认分享后执行的回调函数
			},
			cancel: function () { 
				// 用户取消分享后执行的回调函数
			}
		});
	});

}