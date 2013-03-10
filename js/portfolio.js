n.ready(function(){

	var current = false;

	function closeItem(e){
		current.setStyle('display', '')
		n.one('body').removeClass('popup-active')
		current = false
		e.stop()
	}

	function showCurtain() {
		n.one('body').addClass('popup-active')
		var curtain = n.one('#curtain')
		curtain.setStyle('height', document.body.clientHeight + 'px')
	}

	function clickThumbnail(e) {

		if (current) {
			closeItem(e)
			return
		}

		current = this.one('.popup')

		current.setStyles({
			opacity: 0,
			display: 'block'
		}).anim({
			opacity:1
		}, 0.20)

		showCurtain()

		n.one('body').once('click', closeItem)
		e.stop()
	}

	n.all('.thumbnails li').each(function(li){
		li.on('click', clickThumbnail)
	})
})