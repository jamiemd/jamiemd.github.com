n.ready(function(){

	var current = false;

	function closeItem(e){
		current.setStyle('display', '')
		current = false
		e.stop()
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

		n.one('body').once('click', closeItem)
		e.stop()
	}

	n.all('.thumbnails li').each(function(li){
		li.on('click', clickThumbnail)
	})

	// Handle nav clicks
	n.one('#nav').on('click', function(e){

		if (e.target.get('nodeName').toLowerCase() !== 'a' ) {
			return
		}

		// Reset containers
		n.all('#main section').setStyle('display', 'none')

		var href = e.target.get('href')
			, id = href.substr(href.indexOf('#'))

		n.one(id).setStyle('display', 'block');
		e.stop();
	})
})