var date=require('../common/utils/dateUtil.js');

function say(msg){
	console.log(date.getDate());
	return "say list"+msg;
}

module.exports=say;