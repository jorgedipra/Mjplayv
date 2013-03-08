	$(document).ready(
		function()
		{
			$('#dock').Fisheye(
				{
					maxWidth: 150,
                    maxWidth: 150,
					items: 'a',
					itemsText: 'span',
					container: '.dock-container',
					itemWidth: 100,
					proximity: 90,
					halign : 'center'
				}
			)
			
		}
	);