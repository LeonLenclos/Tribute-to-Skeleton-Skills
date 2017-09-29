
function Skull (x, y, imgs, sound, pitch) {
	this.x = x;
	this.y = y;

	
	this.screaming = false;
	this.changing = false;
	
	this.sound = sound;
	this.sound.setVolume(0);
	this.sound.loop(0, 1/(pitch+3));
	this.vol = 0;
	this.volTarget = 0;
	
	this.frms = [];
	for (var i = 0; i < 5; i++) {
		this.frms[i]=imgs[i];
	}
	this.cursor = 0;
	this.fauxFixe = 0;
	
	this.isOver = function(x, y) {
		return x > this.x && x < this.x + this.frms[0].width && y > this.y && y < this.y + this.frms[0].width;
	};

	this.changeState = function(newState) {
		this.screaming = newState !== undefined ? newState : !this.screaming;
		this.changing = true;
		this.volTarget = this.screaming ? 1 : 0;
	};

	this.update = function () {
		this.fauxFixe = this.fauxFixe == 1 ? 0 : 1;
		if(this.changing) {
			this.cursor = 2;
			this.changing = false;
		} else if(this.screaming) {
			this.cursor = 3 + this.fauxFixe;
		} else {
			this.cursor = 0 + this.fauxFixe;
		}
	};

	this.show = function () {
		this.vol = lerp(this.vol,this.volTarget,0.05);
		this.sound.setVolume(this.vol);
		image(this.frms[this.cursor], this.x, this.y);
	};
}