export default {
  	
  	timeFormat: function(timeValue) {
		
		console.log(this.timeValue);
		
		this.str = timeValue+"";
		console.log(this.str);
		
		this.year = this.str.substring(11,15);
		console.log("this.year"+this.year);
	
		this.month = this.str.substring(4,7);
		if(this.month === 'Jun') {
			this.month = '01';
		}else if(this.month === 'Feb') {
			this.month = '02';
		}else if(this.month === 'Mar') {
			this.month = '03';
		}else if(this.month === 'Apr') {
			this.month = '04';
		}else if(this.month === 'May') {
			this.month = '05';
		}else if(this.month === 'Jun') {
			this.month = '06';
		}else if(this.month === 'Jul') {
			this.month = '07';
		}else if(this.month === 'Aug') {
			this.month = '08';
		}else if(this.month === 'Sep') {
			this.month = '09';
		}else if(this.month === 'Oct') {
			this.month = '10';
		}else if(this.month === 'Nov') {
			this.month = '11';
		}else if(this.month === 'Dec') {
			this.month = '12';
		}
		console.log("this.month"+this.month);
		
		this.day = this.str.substring(8,10);
		console.log("this.day"+this.day);
		
		this.time = this.str.substring(16,24);
		console.log("this.time"+this.time);
	
	return this.year+'-'+this.month+'-'+this.day+'-'+this.time;
  },
}