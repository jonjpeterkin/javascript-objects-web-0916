// () => {
// 	var playlist = new Object()
// 	return playlist
// }
var playlist = new Object({1:'object'})

function updatePlaylist(playlist, artist, songTitle) {
	return Object.assign(playlist, {[artist]: songTitle})
}

function removeFromPlaylist(playlist, artist) {
	delete playlist[artist]
	return playlist
}