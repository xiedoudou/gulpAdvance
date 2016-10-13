var DateUtil={
	getDate:function(){
		return new Date().toLocaleDateString();
	}
}

module.exports=DateUtil;   //暴露接口

console.log("DateUtil is required");