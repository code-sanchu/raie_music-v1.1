export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","fonts/HelveticaNeue-Light.otf","fonts/HelveticaNeue-Thin.otf","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest","songs/earthbound/01-wax_n_wane-128.mp3","songs/earthbound/02-talkin_bout_you-128.mp3","songs/earthbound/03-blood-128.mp3","songs/earthbound/04-katyas_song-128.mp3","songs/earthbound/05-earthbound-128.mp3","songs/earthbound/06-goliath-128.mp3","songs/red_brick_angel/01-young_love.mp3","songs/red_brick_angel/02-grown_man.mp3","songs/red_brick_angel/03-crystal_girl.mp3","songs/red_brick_angel/04-red_brick_angel.mp3","songs/red_brick_angel/05-this_thing_called_love.mp3","songs/red_brick_angel/06-free_now.mp3","songs/red_brick_angel/07-back_room_angel.mp3","songs/red_brick_angel/08-bringing_me_back_home.mp3","songs/red_brick_angel/09-grey.mp3","songs/red_brick_angel/10-whisky_song.mp3","songs/red_brick_angel/11-you_cant_fly.mp3","songs/red_brick_angel/12-convoy_of_tears.mp3","songs/this_music_thing/01-healin_train-128.mp3","songs/this_music_thing/02-rebekahs_lullaby-128.mp3","songs/this_music_thing/03-pegasus-128.mp3","songs/this_music_thing/04-blackbird-128.mp3","songs/this_music_thing/05-national_tv-128.mp3","songs/this_music_thing/06-melody_for_ruth_fr-128.mp3","songs/this_music_thing/07-this_music_thing_mt-128.mp3","songs/this_music_thing/08-lena-128.mp3","songs/this_music_thing/09-the_trial_of_ruby_bates-128.mp3","songs/this_music_thing/10-jasmine-128.mp3","songs/this_music_thing/11-azhia-128.mp3","videos/young_love.mp4"]),
	mimeTypes: {".png":"image/png",".xml":"text/xml",".otf":"font/otf",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".mp3":"audio/mpeg",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dlm2bVpv.js","app":"_app/immutable/entry/app.DW0TzW8X.js","imports":["_app/immutable/entry/start.Dlm2bVpv.js","_app/immutable/chunks/entry.DfH_IOsH.js","_app/immutable/chunks/scheduler.DAkf0w5B.js","_app/immutable/entry/app.DW0TzW8X.js","_app/immutable/chunks/scheduler.DAkf0w5B.js","_app/immutable/chunks/index.VK0yDZc7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
