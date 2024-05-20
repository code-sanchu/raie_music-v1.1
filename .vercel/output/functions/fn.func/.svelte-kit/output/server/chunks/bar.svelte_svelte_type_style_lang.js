import { w as writable } from "./exports.js";
import { o as set_current_component, r as run_all, p as current_component, j as getContext, s as setContext, c as create_ssr_component, q as onDestroy, f as compute_rest_props, h as subscribe, t as listen$1, u as bubble, w as prevent_default, x as stop_propagation, g as get_current_component, k as spread, n as escape_object, a as add_attribute, v as validate_component, m as missing_component, i as createEventDispatcher } from "./ssr.js";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
function objToArr(obj) {
  return Object.values(obj);
}
const follow = {
  facebook: { href: "https://www.facebook.com/raiemusic", id: "facebook", name: "Facebook" },
  instagram: { href: "https://www.instagram.com/raiemusic/", id: "instagram", name: "Instagram" }
};
const listen = {
  soundcloud: {
    href: "https://soundcloud.com/user966280536",
    id: "soundcloud",
    name: "Soundcloud"
  },
  spotify: {
    href: "https://open.spotify.com/artist/3lO2Uzw6i6zDtWqOygwSdq",
    id: "spotify",
    name: "Spotify"
  },
  youtube: {
    href: "https://www.youtube.com/channel/UCsJyxmD4BoTDQOocamxkgBQ",
    id: "youtube",
    name: "Youtube"
  }
};
const buy = {
  bandcamp: { href: "https://raie.bandcamp.com/", id: "bandcamp", name: "Bandcamp" },
  itunes: { href: "https://music.apple.com/us/artist/raie/382873306", id: "itunes", name: "Itunes" }
};
const raie_links = {
  follow,
  listen,
  buy
};
const raie_links_arrs = {
  follow: objToArr(follow),
  listen: objToArr(listen),
  buy: objToArr(buy)
};
const earthbound_track_names_only_obj = {
  wax_n_wane: {
    id: "earthbound-wax_n_wane",
    name: "Wax 'n Wane"
  },
  talkin_bout_you: {
    id: "earthbound-talkin_bout_you",
    name: "Talkin Bout You"
  },
  blood: {
    id: "earthbound-blood",
    name: "Blood"
  },
  katyas_song: {
    id: "earthbound-katyas_song",
    name: "Katya's song"
  },
  earthbound: {
    id: "earthbound-earthbound",
    name: "Earthbound"
  },
  goliath: {
    id: "earthbound-goliath",
    name: "Goliath"
  }
};
const earthbound_track_names_only = objToArr(
  earthbound_track_names_only_obj
);
const this_music_thing_track_names_only_obj = {
  healin_train: {
    id: "this_music_thing-healin_train",
    name: "Healin' train"
  },
  rebekahs_lullaby: {
    id: "this_music_thing-rebekahs_lullaby",
    name: "Rebekah's Lullaby"
  },
  pegasus: {
    id: "this_music_thing-pegasus",
    name: "Pegasus"
  },
  blackbird_for_liam: {
    id: "this_music_thing-blackbird_for_liam",
    name: "Blackbird for Liam"
  },
  national_tv: {
    id: "this_music_thing-national_tv",
    name: "National TV - A Lament for Anneli Alderton"
  },
  melody_for_ruth: {
    id: "this_music_thing-melody_for_ruth",
    name: "Melody for Ruth"
  },
  this_music_thing: {
    id: "this_music_thing-this_music_thing",
    name: "This Music Thing"
  },
  lenas_song: {
    id: "this_music_thing-lenas_song",
    name: "Lena's Song"
  },
  the_trial_of_ruby_bates: {
    id: "this_music_thing-the_trial_of_ruby_bates",
    name: "The Trial of Ruby Bates"
  },
  for_jasmine_a_ghost_story: {
    id: "this_music_thing-for_jasmine_a_ghost_story",
    name: "For Jasmine - a Ghost Story"
  },
  azhia: {
    id: "this_music_thing-azhia",
    name: "Azhia"
  }
};
const this_music_thing_track_names_only = objToArr(
  this_music_thing_track_names_only_obj
);
const red_brick_angel_track_names_only_obj = {
  young_love: {
    id: "red_brick_angel-young_love",
    name: "Young Love"
  },
  grown_man: {
    id: "red_brick_angel-grown_man",
    name: "Grown Man"
  },
  crystal_girl: {
    id: "red_brick_angel-crystal_girl",
    name: "Crystal Girl"
  },
  red_brick_angel: {
    id: "red_brick_angel-red_brick_angel",
    name: "Red Brick Angel"
  },
  this_thing_called_love: {
    id: "red_brick_angel-this_thing_called_love",
    name: "This Thing Called Love"
  },
  free_now: {
    id: "red_brick_angel-free_now",
    name: "Free Now"
  },
  back_room_angel: {
    id: "red_brick_angel-back_room_angel",
    name: "Back Room Angel"
  },
  bringing_me_back_home: {
    id: "red_brick_angel-bringing_me_back_home",
    name: "Bringing Me Back Home"
  },
  grey: {
    id: "red_brick_angel-grey",
    name: "Grey"
  },
  whisky_song: {
    id: "red_brick_angel-whisky_song",
    name: "Whisky Song"
  },
  you_cant_fly: {
    id: "red_brick_angel-you_cant_fly",
    name: "You Can't Fly"
  },
  convoy_of_tears: {
    id: "red_brick_angel-convoy_of_tears",
    name: "Convoy of Tears"
  }
};
const red_brick_angel_track_names_only = objToArr(
  red_brick_angel_track_names_only_obj
);
const songs_tracks_names_only = [
  ...this_music_thing_track_names_only,
  ...earthbound_track_names_only,
  ...red_brick_angel_track_names_only
];
const earthbound = {
  wax_n_wane: {
    albumName: "Earthbound",
    albumKey: "earthbound",
    id: "earthbound-wax_n_wane",
    name: "Wax 'n Wane",
    number: "1",
    length: "4:34",
    youtubeEmbed: null,
    lyrics: "Hey girl - you lookin worried<br /> Walkin home on a rainy night<br /> You in no hurry<br /> Like something on your mind<br /> Maybe you lost your man to sweet<br /> Or struggling to make ends meet<br /> Tryin' to make a house a home<br /> On nothing and dry bone<br /><br /> Stars that's fallin' <br /> Too far to catch <br /> Our pockets are empty<br /> But not our hearts<br /> Wax and wane the moon<br /> That day is comin' soon<br /> Its only a lifetime <br /> Of fallin' stars<br /> Before we're goin' home<br /><br /> Hey man — your load is heavy<br /> Walkin' home under moonlight <br /> You're pieced together<br /> With tape and tied on tight<br /> How you reach there I don't know<br /> Your broken body moves you so slow<br /> Jangled outa space and time <br /> A discord in your rhyme<br /><br /> Seems like the evening lasts<br /> Full of day time woe<br /> It holds the memories fast<br /> Until the light has passed<br /> And we can feel the glow of …<br /> Stars …..<br />© Bennett 2007",
    localSrc: "/songs/earthbound/01-wax_n_wane-128.mp3",
    description: "Wax 'n Wane is an Alternative Indie Ballad about acceptance of life and hardship.<br/><br/>As a young single parent, I often sat at my window in the evening and Wax 'n Wane describes two characters I usually saw on their separate ways home; I felt I could relate to their loneliness and their struggles.",
    credits: "© Original version Rachel Bennett, Dan Cochrane, Jem Clark 2007<br /> © Re-arranged version Rachel Bennett, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios & Sonic Cuisine<br/><br/>PRS CODE: 372291AN"
  },
  talkin_bout_you: {
    albumName: "Earthbound",
    albumKey: "earthbound",
    id: "earthbound-talkin_bout_you",
    name: "Talkin Bout You",
    number: "2",
    length: "3:15",
    youtubeEmbed: "https://www.youtube.com/embed/-8pC2h8qap0?si=PZxo87wanWUtNnRu",
    lyrics: "Losin love is bitter<br/>But livin is sweet<br/>Life can turn in a minute<br/>An you think you beat<br/>Then s'mbody comes along<br/>Puts you back on your feet<br/>Talking bout you<br/>I'm talking bout you<br/></br>You're my morning sun<br/> Such a sweet surprise<br/> You ain't been round but a minute<br/> An already you wise<br/> I hope you're listenin' now<br/> Hope you realize<br/> That I'm talking bout you<br/> I'm talking bout you<br/></br> A lot 'a people say<br/> I'm on a high<br/> An there aint nothing can bring me down<br/> I wanna tell them the reason why<br/> Its cos you're around<br/></br> You're a merchant of truth<br/> With a heart of gold<br/> You still but you movin<br/> Fragile but you bold<br/> I'm still tryin to figure out<br/> If you young or you old<br/> Talking bout you<br/> I'm talking bout you<br/> Talking bout you<br/> I'm talking bout you<br/> Talking bout you<br/> I'm talking bout you<br/>© Bennett 2007",
    localSrc: "/songs/earthbound/02-talkin_bout_you-128.mp3",
    description: "Talkin' Bout You is a Country Ballad about love and devotion when the 'chips are down<br/><br/>Talkin' Bout You is about my son's support during our early lives together and it's a description of his uncanny perception, his support, his honesty and his wisdom.",
    credits: " &copy; Original version Rachel Bennett, peter J Pinto 2007<br> &copy; Re-arranged version Rachel Bennett, Peter J Pinto, Wes Maebe 2011<br> Produced: Wes Maebe, Rachel Bennett 2011<br> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br> <br> Drums Matt Earnshaw / Guitars &amp; Bass Peter J Pinto / Background Vocals Lynieve Austin, Nazarene, Peter J Pinto / Lead Vocal Rachel Bennett <br> <br> PRS CODE: 372333AR"
  },
  blood: {
    albumName: "Earthbound",
    albumKey: "earthbound",
    id: "earthbound-blood",
    name: "Blood",
    number: "3",
    length: "4:51",
    youtubeEmbed: null,
    lyrics: "Do da'm do dap doo dap doo d'u doo do'm<br/><br/> There's this place I've seen<br/> I never been anywhere like that before<br/> Too many lost chances<br/> Second shots rappin' on the door<br/> Winter branches laden<br/> With the fruits of youth cut short<br/> The street end symbol<br/> Of a commodity a cheap import<br/><br/> Life can disappear round here<br/> Rockin' 'tween a hard place and fear<br/> Think you seen a grey sky oh my<br/> Why don't you try watchin' your line die<br/> In the twinkling of an eye<br/><br/> If it takes all the fight in my bein'<br/> I'm gonna' hold back the flood<br/> If it takes all the sight in my seein'<br/> I'm gonna' look out for my blood<br/><br/> All the mothers' tears<br/> Flowin' downstream on the Harlem river<br/> Won't wash that garbage to infinity<br/> Draggin' 'em down forever<br/> Project ghost towns<br/> Stand up like heartless centries in a line<br/> A legacy to the bereft<br/> An ongoin' theft of human dignity<br/><br/> If it takes….<br/><br/> This is a time for the survival of the fittest<br/> Forefathers' lines prophetic rhymes<br/> Of a re-visit<br/> The youth have found a scheme profound<br/> An ancient strategy<br/> A seeing sense frank and intense<br/> Their ghetto liturgy<br/> Truth has insistence<br/> Metamorphosising through the ages<br/> You have to recognize<br/> Its path in all its many stages<br/> It measures out its many treasures<br/> To the ones that hear<br/> This ain't no trend<br/> Just lend this Hip Hop troubadour your ear<br/> Cos his message is loud and clear<br/><br/> If it takes….<br/>© Bennett 2003",
    localSrc: "/songs/earthbound/03-blood-128.mp3",
    description: "Blood is a Rock Blues — a song for mothers/parents — about protecting 'their own' against all the odds It's also a tribute to the youth who create incredible poetry and beats — regardless of the pressures in their lives.<br/></br>Blood was actually inspired by a visit to Harlem where I saw a tree loaded with the trainers of young men who had been shot in the drug-war crossfire on that particular corner (there were many more trees) <br /> <br /> I could relate this to my own son&rsquo;s life, being a single parent living in a deprived area of London at the time where the increase in crack sales was evident and on more than one occasion I had to &lsquo;step into the fray&rsquo; for my young son&rsquo;s safety.",
    credits: " &copy; Original version Rachel Bennett, Dan Cochrane 2003<br /> &copy; Re-arranged version Rachel Bennett, Peter J Pinto, Nixon Rosembert, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br /> <br /> Drums &amp; Percussion Graham Cuttill / Guitars &amp; Bass Peter J Pinto / Keys Kevin Leo / Horns Mark Chandler / Background Vocals Nazarene, Peter J Pinto, Wes Maebe, Rachel Bennett / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 372313FP "
  },
  katyas_song: {
    albumName: "Earthbound",
    albumKey: "earthbound",
    id: "earthbound-katyas_song",
    name: "Katya's song",
    number: "4",
    length: "4:09",
    youtubeEmbed: null,
    lyrics: "You said in your dark pressed suit<br/>Things would change<br/>I remember the glass of wine<br/>You promisin' better circumstances<br/>Car window sped by fields of heavy soil<br/> The earth turned over<br/> I watched you spell out<br/> A new beginnin' for my heart<br/> An' I listened<br/> Yeah I listened<br/> But I didn't have a clue<br/> It wasn't really you<br/><br/> You brought me here to<br/>  This no mans land<br/> Inhabited by all your demons<br/> Alone and scared and talking to the walls<br/> Lookin' for conversation<br/> I turned my eyes from the truth<br/> For as long as I could close them<br/> But it didn't take too long before<br/> You prized them open<br/> So I watched you<br/> Yeah I watched you<br/> Like watchin someone else<br/> But you were just yourself<br/><br/> In the dark of blue night<br/> I recall your voice<br/> Becomin' like a stranger<br/> My mind reelin' from a deep confusion<br/> Of fast disappearin' colours<br/> And your insistent harsh and drivin' whisper<br/> That thin thread strainin' tighter<br/> Cross my heart<br/> But I held on<br/> Yeah I held on<br/> Till it broke in two<br/> There was nothing I could do<br/><br/> Now I feel you prowlin' in the corner of<br/> A distant doorway<br/> And I know that you want to blur the edges<br/> Of my picture frame<br/> And I know you find it hard to be<br/> Nothin' more than a shadow babe<br/> I made up my mind<br/> You're nothin' anyway<br/> Youre nothing babe<br/> Youre nothing babe<br/><br/> I'm not gonna listen<br/> To your dark suit lies<br/> Anymore<br/> I'm not gonna buy<br/> Your hard sales talk<br/> At my front door<br/>I'm not gonna wait at a chain<br/>Of empty coffee tables<br/>I'm not gonna lock up y heart<br/>Cos I see<br/>Yeah I see<br/>What you done to me<br/>Now I've broken free<br/>© Bennett 2002",
    localSrc: "/songs/earthbound/04-katyas_song-128.mp3",
    description: "Katya's Song is an Indie Blues — it's about abandonment and eventual release from a relationship.<br/><br/> Katya&rsquo;s Song is actually based on a true story — the experience of the mother of the first bassist in my band whose mother&rsquo;s name was Katya.<br /> <br /> Katya came to UK from Hungary in the 50&rsquo;s to an arranged marriage that turned into a fight for her life and her freedom; she had run a caf&eacute; in West London with her husband for many years before breaking away from his cruelty, to make a life for herself and her two children.",
    credits: "&copy; Original version Rachel Bennett, Dan Cochrane 2002<br /> &copy; Re-arranged version Rachel Bennett, Peter J Pinto, Nixon Rosembert, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br /> <br /> Guitars Peter J Pinto / Bass Guitar Mike Comber / Percussion Gabriel Nuzzoli / Background Vocals Kevin Mark Trail, Nazarene / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 372313FU"
  },
  earthbound: {
    albumName: "Earthbound",
    albumKey: "earthbound",
    id: "earthbound-earthbound",
    name: "Earthbound",
    number: "5",
    length: "4:56",
    youtubeEmbed: "https://www.youtube.com/embed/HJ0sxl7s3EU?si=eaQUmFPHp7Rfw4Nz",
    lyrics: "The will of someone who<br/>With rags and tin and paper shoe<br/>Can put together whats undone<br/>Sew bundle wrap and sell<br/>'Neath bindi sun<br/>The power of beast of burden under<br/>Toil and ache and monsoon thunder<br/>Sacred cow in pasture green<br/>Horns that trumpet to the Gods unseen<br/><br/> Stand still enough its real<br/> The love your heart can feel<br/> The force of earth beneath our feet moves round<br/> The angels coming down<br/> We need them here<br/> Earthbound<br/><br/> Salt lies white in water fields<br/> Patient hands tend soil to yield<br/> No portion hand to mouth but what is need<br/> Rhythm through the heat of day concede<br/> To sacrifice and bless so all can thrive<br/> Magic the acceptance just to be alive<br/> The rainbow dyes and bright, bright weaves<br/> Adorn earth body in devotion and belief<br/><br/> Stand still enough and long<br/> Your ear will know a joyful song<br/> Where heaven meets the earth no sweeter sound<br/> Than angels coming down<br/> We need them here earthbound<br/><br/> Our need is mmet by circumstance<br/> Diamond shoals and dolphin dance<br/> From dawn to dusk they laugh between the sands<br/> And mercury their soul from watered lands<br/> White horses bring the fishers home<br/> To waiting arms whose work is just begun<br/> No need for angels to come down<br/> They're walking here amongst us<br/><br/> Earthbound<br/> The angels have come down<br/>Earthbound<br/>There's no sweeter sound<br/>Earthbound<br/> The angels coming down<br/>They're walking here amongst us<br/>Earthbound<br/>© Bennett 2006",
    localSrc: "/songs/earthbound/05-earthbound-128.mp3",
    description: "Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.<br /> <br /> I journeyed to Goa in India with friends and Earthbound was inspired by seeing the incredible resourcefulness of the people.",
    credits: "&copy; Original version Rachel Bennett, Peter J Pinto 2006<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br /> <br /> Drums Ralph Salmins / Piano Manley O&rsquo;Connor / Double Bass Mike Comber / Background Vocals Lynieve Austin, Nazarene / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 372313GM"
  },
  goliath: {
    albumName: "Earthbound",
    albumKey: "earthbound",
    id: "earthbound-goliath",
    name: "Goliath",
    number: "6",
    length: "4:12",
    youtubeEmbed: null,
    lyrics: "Stone in ya' head<br/>Brought you down to your knees<br/>Cold, cold chill runnin' thru' you dread<br/>Somewhere at minus five degrees<br/>The thud of your heartbeat stops you dead<br/>In the mud at the bottom of your street<br/><br/> Goliath<br/> You done ruled the roost for years<br/> But something out there<br/> Is bigga' than you<br/><br/> Thought you had it nailed<br/> Put up all your fences<br/> But it's your heart that got impaled<br/> Love done got thru' to your senses<br/> Your reign of hate has failed<br/> You got no future tenses<br/><br/> Goliath …<br/><br/> You been playin' God<br/> Like you can judge an' jurify<br/> Just give the wink an' the nod<br/> An' your dogs gonna' let it fly<br/> You keep talkin' 'bout blood on the walls<br/> But when your destiny calls<br/> Goliath<br/><br/> Goliath there is no debate<br/> Power done made you insane<br/> Your giant heart broke way too late<br/> Now blood pumpin' fear thru' you veins<br/> You done made your final mistake<br/> Dust from you bones is all that remains<br/><br/> Goliath …<br/>© Bennett 2004",
    localSrc: "/songs/earthbound/06-goliath-128.mp3",
    description: "Goliath is a Contemporary Blues about war, world bullies &ndash; about how bullying begins in the back yard, the school yard then transfers to work, politics and world leaders&rsquo; tables &ndash; out on the frontline &#8230; in the homes of innocent victims <br /> It&rsquo;s a blues of hope that Love will eventually conquer all.<br /> <br /> I am proud to say that Elliot Randall (Doobie Brothers) requested to play on this track and his outro solo completes it beautifully! <br /> I wrote the song almost 20 years ago but once I put it in the hands of Wes Maebe it came to life &#8230;<br /> <br /> Goliath was inspired, on a personal level, by my experience as a child living in a broken home &#8230; and as the youngest, I was the victim of terrible bullying; I was raised in Dundee and subsequently in Glasgow; in both cities I saw the &lsquo;rougher side of life&rsquo; on the street.",
    credits: " &copy; Original version Rachel Bennett, Dan Cochrane 2004<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2011<br /> Produced: Wes Maebe, Rachel Bennett 2011<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br /> Track recorded @ Inspired Studios &amp; Sonic Cuisine <br /> <br /> Drums Matt Earnshaw / Bass Guitar Mike Comber / Guitars Elliot Randall, Jon Klein, Wes Maebe / Horns Mark Chandler / Background Vocals &amp; Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 372313KW"
  }
};
const this_music_thing = {
  healin_train: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-healin_train",
    name: "Healin' train",
    number: "1",
    length: "3:18",
    youtubeEmbed: "https://www.youtube.com/embed/K_kXYj2VMJs?si=2vItZhK0mF9SLMa",
    lyrics: "When we were young — we were wild yeah<br/>Always together just we three<br/>Me an' Jon and Gypsy Boy — tryin' to feel free<br/>Tattered jeans and sneakers<br/>Wanderin' on the train line<br/>Getting' high on weed an' pills — all at the same time<br/><br/> Take me back home — healin' train<br/>With my boys — where we went walkin'<br/>Let me sing to them once more<br/>Where we were true and rockin'<br/><br/> Singin' to truckers in the dark<br/>Down by the motorway café<br/>Hitched that ride down south — to break away<br/>They was old 'fore they got young<br/>Wish I could see them now<br/>Maybe they're still walkin' round free — I doubt it somehow<br/><br/> Take me back home…<br/><br/> We'd go walkin' in the shady wood		<br/>I was their chanteuse 				<br/> Didn't need to love them any other way  	<br/> I know they understood<br/><br/> Take me back home…<br/><br/> Oh healin' train	<br/> If I knew I could see my boys again<br/>I'd wait forever in the fallin' rain <br/>Just to see my boys again <br/>",
    localSrc: "/songs/this_music_thing/01-healin_train-128.mp3",
    description: "Healin&rsquo; Train is a Rock Country Blues about a chequered youth.<br /> <br /> Healin&rsquo; Train is a memory dedicated to my teen years spent with two guys &ndash; Jon and &rsquo;Gypsy Boy&rsquo;; we experimented with various stimulants and immersed ourselves in the music of the early 70&rsquo;s before I eventually hitch-hiked to London and a new life.",
    credits: "&copy; Written and Arranged: Rachel Bennett, Wes Maebe 2017<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Percussion Chris Bell, Wes Maebe / Keys Wes Maebe / Background Vocals Wes Maebe / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370760DM"
  },
  rebekahs_lullaby: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-rebekahs_lullaby",
    name: "Rebekah's Lullaby",
    number: "2",
    length: "4:30",
    youtubeEmbed: "https://www.youtube.com/embed/RnCEvBIZkR0?si=ni4zIWaeOUJZBgwU",
    lyrics: "On top of a coal tip I was nine years old<br/>Me an my soul mate — talkin' bout the world<br/>What'd it be like — to let go of it all<br/>So I stood up — scared but I was ready to fall<br/>I took a dare — felt the world give way<br/>I learned a hit hard lesson that day<br/><br/> Sippin' salt tears as I crawled to the top<br/>Slippin' and slidin' from half way up<br/>Thinkin' I'd never ever get back home<br/>Darkness fallin' and my friend — she already gone<br/>Scared to get a belt form her Da'<br/>An he done it too — you know that<br/><br/> I rolled to the bottom<br/>Over and down<br/>Down to the bottom<br/>All the way down<br/><br/> Well I ran all the way home in the darkness<br/>As scared a' the backstreets as that coalmine mess<br/>Sneakin' in the back door dust all on ma' dress<br/>Ma didn't even notice — she was doin' her best<br/>Her head was gettin' further from anywhere<br/>It didn't seem like it sometimes but she really did care<br/>My sisters all tellin' me where you been at — where<br/>To get dirt in your fingernails an' dust in your hair<br/><br/> I told 'em I rolled<br/>Over and down<br/><br/> A little time ago I remembered that day<br/>The feelin' came back like the ground givin' way<br/>Took me by surprise how it got control<br/>How easy it was to give way and roll …<br/>Buckle my knees and stop up my heart<br/>Tighten my throat make my eyes water and smart<br/><br/> Early in the morning in my dirty city, cold<br/>Out of her head a child in trouble — she was fifteen years old<br/>Lookin' down<br/>Over the muddy river water<br/>Alone an' hurtin' no sense in her thoughts, no<br/>Except knowing she couldn't go back home<br/>By sun up she was already gone<br/><br/> She went to the bottom <br/>Under and down <br/>Down to the bottom <br/>All the way down <br/><br/> She musta' ran all the way there in the darkness<br/>As scared of her future as that river mess<br/>Lookin' lost an' pretty in her dancin' dress<br/>Her ma didn't miss her — she was doin' her best<br/>Family broke up an' too angry to care<br/>She was way too alone an' runnin' scared<br/>They found her on the bank far from anywhere<br/>River mud in her fingernails 'n dirt in her hair <br/>",
    localSrc: "/songs/this_music_thing/02-rebekahs_lullaby-128.mp3",
    description: "Rebekah&rsquo;s Lullaby is a Rock Country Blues about a teen suicide.<br /> <br /> I wrote Rebekah&rsquo;s Lullaby on hearing about the suicide of a young girl whose sister I taught in an arts organisation; her tragic death brought back memories of a time when my friend and I attempted to end our lives on a coalmine slag heap in Hamilton near Glasgow.  ",
    credits: "&copy; Original version written Rachel Bennett 2018<br /> &copy; Background Vocal lyric Nathan Devonte, Abdul Shyllon, Kevin Mark Trail 2019<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Percussion Chris Bell / Keys Wes Maebe / Horns Wes Maebe / Strings Wes Maebe / Background Vocals Nathan Devonte, Abdul Shyllon, Kevin Mark Trail / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 418901AR"
  },
  pegasus: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-pegasus",
    name: "Pegasus",
    number: "3",
    length: "4:11",
    youtubeEmbed: null,
    lyrics: "My name is Pegasus<br/>This is my odyssey<br/>Name of a Greek horse<br/>But I am a hadji<br/><br/> It didn't start like this<br/>I was just a youth<br/>Bein' helpful and kind<br/>Runnin' favours for the man<br/>He was my Zeuss<br/>He helped me to survive<br/><br/> I am a brother in arms<br/>Out on the front line<br/>I am a brother in arms<br/>Fighting a war that ain't mine<br/><br/> They named me Broken Wing<br/>You know my history<br/>Proud of my Shawnee name<br/>But my people ain't free<br/><br/> Once we carried<br/>The thunderbolts of heaven<br/>We were sentient and live<br/>Once we ran<br/>With the braves in the crossfire<br/>White man cain't handle that jive<br/><br/> I am a brother …<br/><br/> But when I am still 	<br/> You can smell my sweat<br/>See my fragile heart<br/>Beat at the fine bones<br/>Under my skin<br/>That carry me on<br/>Thru this star filled night<br/><br/> I am a brother …<br/><br/> My name is young man<br/>An' I don't fit in<br/>An' this ain't your land<br/>An' I ain't your kin",
    localSrc: "/songs/this_music_thing/03-pegasus-128.mp3",
    description: "Pegasus is a Country Ballad about young boys who end up in &lsquo;the war game&rsquo;.<br /> <br /> I wrote Pegasus as a response to research I did on the young boys who traffic drugs in war torn Syria; the information I gathered led me to think about how children are &lsquo;lost&rsquo; to their families when their country is at war and how the bigger power bullies are happy to use them for their own purposes &ndash; like cannon fodder; this issue is ageless and eternal.",
    credits: "&copy; Original version written Rachel Bennett 2014<br /> &copy; Re-arranged version Rachel Bennett, Jon Klein 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jon Klein, Wes Maebe / Bass Mike Comber / Percussion Chris Bell, Wes Maebe / Keys Jon Klein / Trumpet Rick Leigh / Background Vocals Nathan Devonte, Abdul Shyllon / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644EU"
  },
  blackbird_for_liam: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-blackbird_for_liam",
    name: "Blackbird for Liam",
    number: "4",
    length: "4:39",
    youtubeEmbed: null,
    lyrics: "On my block the youth<br/>Spit rhymes of truth<br/>Their season has arrived<br/>Knowin' they belong<br/>Rooftop black bird song<br/>The reason to survive<br/>The storm it takes me<br/>You won't forsake me<br/>In the changin' tide<br/>Your flight is love<br/>I'm not afraid to move<br/>You are my guide (Nate)<br/><br/> You callin'<br/>Wake up get ready<br/>Wake up get ready<br/>Get up get ready<br/>Get up get ready<br/><br/> Blackbird testify<br/>Soar with The Most High<br/>This strange migration<br/>Warrior of light<br/>Stand up in the fight<br/>Improve this situation<br/>You need only look<br/>In the holy book<br/>To know your true potential<br/>It lies deep within<br/>Sinew heart an' skin<br/>A Love that is essential<br/><br/> You callin' …<br/><br/> Spoken Word section<br/>Transcendent<br/>Reverent<br/>Yes you shine in divine excellence! <br/>Blackbird — mysterious — freedom — lunar sun,<br/>Spiritual path embark — and pass-everyone! <br/>So now is the time, plus we see who you are,<br/>… cannot wait, it's your fait, having faith, be your star. <br/>Must just trust — the richness of self. <br/>The value of 'you' is far far beyond priceless wealth. <br/>Magnitude of magnificence — togetherness,<br/>Intelligence. Eternal. Wisdom & benevolence. <br/>Your extend wings it brings vulnerability,<br/>Reach possibilities, embracing serenity. <br/>Heights, spirit guide, find your truths through your dreams,<br/>Your presence is felt — even when it's unseen,<br/>Changes are happening — awakening minds. <br/>So get up get — get ready to just leave it all behind. Blackbird. <br/><br/> Wake up with the dawn<br/>Ready to move on<br/>To the prime position<br/>Standing by The One<br/>No one stands alone<br/>Lets move with this transition<br/>Carrying the word<br/>Beat your wings Blackbird<br/>So His Will be done — yeah<br/>Let the Trumpet sound<br/>In the Higher Ground<br/>We are going home<br/><br/> You callin' …<br/><br/> Have you got a song for me<br/>They seem to come so easy<br/>Have you got a song for me<br/>They seem to come so easy<br/>Yeah mmhmmh <br/>",
    localSrc: "/songs/this_music_thing/04-blackbird-128.mp3",
    description: "Blackbird for Liam is a Soft Rock Pop Ballad with a Hip Hop Beat and is a tribute to the youth around my area and with whom I have often worked (as a vocal coach) and who write and perform lyrics in UK Hip Hop and Grime styles.<br /> <br /> I am constantly in awe of the determined creativity of the youth who are brilliantly creative and who are peace-seekers regardless of their very challenging environment; their lyrics are extensive, deep and prophetic<br /> Any reference to &lsquo;holy&rsquo; in the song is not intended as a religious comment but is a wider analogy that pays tribute to the Aramaic word.",
    credits: "&copy; Original version written Rachel Bennett, Mike Comber 2010<br /> &copy; Re-arranged version Rachel Bennett, Jordan Brown (now Christiano Tortoioli), L Nkechi MgBado, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Percussion Chris Bell, Ben Danso-Bennett, Rachel Bennett, Niamh Webb / Keys Jordan Brown (now Christiano Tortoioli), Wes Maebe / Spoken Word Feat. LyricL courtesy of Westbury Music Limited / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene / Lead Vocal Rachel Bennett<br /> <br /> PRS CODE: 418901AU"
  },
  national_tv: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-national_tv",
    name: "National TV - A Lament for Anneli Alderton",
    number: "5",
    length: "4:51",
    youtubeEmbed: null,
    lyrics: "And if we captured that moment<br/>In the tree rings<br/>Picked up and touched<br/>The worn river pebbles<br/>Found the altered pattern<br/>In the blackbird's nest<br/>Saw the runaway fear<br/>In the fox's footprints<br/><br/> Oh but we watched you<br/>On national TV<br/>On a train<br/>In a police check scene<br/>Combin' your pretty blonde hair<br/>For the men to see<br/>In the window of a night train 	<br/>On the TV screen<br/><br/> How do the May tree seeds know<br/>To let go and fly<br/>And the turtles return<br/>When thirty years has passed by<br/>What brings the whale from the deep<br/>When the sailors cry<br/>Why couldn't we<br/>Hear the riverbed call out<br/>At your demise<br/><br/> When we could watch you …<br/><br/> We'd see you there<br/>Caught in a moment<br/>Caught in a moment<br/>In the before<br/>Caught in a moment<br/>And in the after<br/>In the before<br/>Caught in a moment<br/>And in the after<br/><br/> Oh but we watched you …",
    localSrc: "/songs/this_music_thing/05-national_tv-128.mp3",
    description: "National TV – A Lament for Anneli Alderton is a Contemporary Country Ballad about Anneli who was the 3rd victim of convicted 2006 Ipswich serial killer Wright.  I watched TV footage of Anneli on a train – a police ‘call out’ for any witnesses; it seemed bizarre and ‘upside down’ that police could not use their deeper knowledge and instincts to trace this killer (even though after this TV piece it transpires that they had already interviewed him) and in this context I struggled with the idea that we could use advanced technology to spread news of Anneli’s death; I found her particular story deeply tragic.",
    credits: "&copy; Original version written Rachel Bennett, Jamie Coe, Jordan Brown (now Christiano Tortoioli) 2010<br /> &copy; Re-arranged version Rachel Bennett, Jamie Coe, Jon Klein 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli / Banjo Tom Chudley Evans / Percussion Chris Bell / Keys Jon Klein / Violin Jo Eaton-Kent (now Joni Kent) / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene, Evie Rose, Abdul Shyllon / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644CV"
  },
  melody_for_ruth: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-melody_for_ruth",
    name: "Melody for Ruth",
    number: "6",
    length: "4:49",
    youtubeEmbed: null,
    lyrics: "One night my sweet friend<br /> She told me a story <br /> Bout Ruth in the bible<br /> Her love for Naomi<br /> Each word she said<br /> Brought me closer to God<br /> To a truth that we need<br /> To the sense of the Word <br /> <br /> And I heard her song <br /> Full of fire so strong <br /> Going on an&rsquo; on <br /> Bout the weight we carry<br /> The bond of humanity<br /> Heard her song <br /> Full of fire so strong <br /> Bout the way that we&rsquo;re living<br /> The ways that we&rsquo;ve forgotten to give <br /> <br /> Held in the darkness <br /> The city around us the sirens and traffic<br /> But something had found us<br /> A love that had bound us<br /> Dust on the moonbeam<br /> Red fox in the shadow<br /> The breath of the smallest of birds as he flies<br /> Bringin&rsquo; rhymes for tomorrow<br /> <br /> And I heard her song &#8230;. <br /> <br /> &#8230; And my soul &#8230;&#8230;.my soul <br /> Sang the melody <br /> So I could sing it to you<br /> Shoo do do do do do do<br /> Sang the melody <br /> Shoo do do do do <br /> So I could sing it to you<br /> Oh<br /> <br /> Where you go <br /> That&rsquo;s where I go<br /> Where you go <br /> That&rsquo;s where I go",
    localSrc: "/songs/this_music_thing/06-melody_for_ruth_fr-128.mp3",
    description: "Melody for Ruth is a Folk Country Ballad about deep friendship and commitment.<br /> <br /> I wrote Melody for Ruth on hearing the story of Ruth (in the bible) late one night from my dear friend Lynieve Austin who is a Christian; Lynieve&rsquo;s ability to narrate was so inspiring that I woke the next day and wrote the song in about one hour! The song is not a religious tribute though there is biblical reference.",
    credits: "&copy; Original version written Rachel Bennett, Mike Comber 2012<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Banjo Wes Maebe / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644DR"
  },
  this_music_thing: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-this_music_thing",
    name: "This Music Thing",
    number: "7",
    length: "4:24",
    youtubeEmbed: null,
    lyrics: "I get in a room<br/>With you<br/>We're gettin' in tune boy<br/>I know you're feelin' it too<br/>I'm not talkin' bout your body<br/>Although I 'preciate your moves<br/>I'm talkin' bout your soul<br/>And the music that you do<br/><br/> You read my mind<br/>Anticipate<br/>You're always right on time boy<br/>I don't ever have to wait<br/>I'm not talkin' bout a love thing<br/>Oh no that's not our fate<br/>I'm just feelin' your music<br/>And the way that you play it	<br/><br/>I'm proud to tell the people<br/>I got somethin' goin' on with you<br/>I'm not ashamed of what I feel<br/>About you<br/>You could sell all I own<br/>An' I wouldn't even know<br/>Cos I'm already sold on you<br/>On this new love<br/>On this old blues<br/><br/> I don't have to explain<br/>You understand<br/>You know l my joy and pain boy<br/>You're no ordinary man<br/>I don't even need to hold you<br/>I know that's not God's plan<br/>I just need to sing my song<br/>'N put it in your hands <br/>I need to sing my song<br/>'N put it in your hands <br/><br/> C'mon! This music thing<br/>Goes deeper",
    localSrc: "/songs/this_music_thing/07-this_music_thing_mt-128.mp3",
    description: "This Music Thing is a Soft Rock Country Blues about a deep love of music.<br /> <br /> I was initially coached and supported in my music career by Kevin Leo &ndash; a singer songwriter of renown; Kevin directed me with care and the utmost respect and the song is a tribute to this, particularly in an industry where &lsquo;support&rsquo; and &lsquo;relationships&rsquo; can be confused with other &lsquo;gains&rsquo;.",
    credits: "&copy; Original version written Rachel Bennett, Peter J Pinto 2010<br /> &copy; Re-arranged version Rachel Bennett, Jon Klein 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jon Klein, Wes Maebe / Bass Mike Comber/ Percussion Chris Bell, Jon Klein / Keys Wes Maebe / Background Vocals Nathan Devonte, Abdul Shyllon / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370645ET"
  },
  lenas_song: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-lenas_song",
    name: "Lena's Song",
    number: "8",
    length: "6:15",
    youtubeEmbed: null,
    lyrics: "I stood by the water<br/>An' I gazed in wonder<br/>An' it called me<br/>Sang its sweet ringin' music<br/>On a cold hazy mornin'<br/><br/> So I stepped in the water<br/>Walked on in<br/>Up to my middle<br/>An' I looked into the darkness 	<br/> An' I stepped on secret stones shinin' 	<br/> And the rushes they pulled me in<br/><br/> And they sang to me 	<br/> Of calamity<br/>And how to be free<br/>Free of all this<br/>Yes they sang to me<br/>Of their beauty<br/>And how to be free<br/>Free of all this	<br/><br/>An' above me the heavy sky opened	<br/> Chemical rain hit the water<br/>Makin' a show  <br/>Beautiful kaleidoscope sparkles<br/>In the waiting mornin'<br/>An' I gazed in wonder yeah<br/><br/> So I walked on in<br/>Under the water<br/>Just to be free<br/>Just to be free of all this<br/><br/> An I saw refuse in poisoned distended bird bellies<br/>Oily black feathers starin' eyes all dis-eased   <br/>An' polar bears swimmin' for days in the ocean<br/>On islands of ice that are too early broken  <br/>Reaching the shoreline to die in the essence<br/>There with the seals lookin' on in the silence  <br/>An' children's cries callin' on phone lines vibrating<br/>Tight ropes of tension hearts ready for breakin'  <br/>Echoing screams 'bout Mummy's new Daddy<br/>An' please can you help me not hurt in my body<br/><br/> I wanna be free of all this  <br/>Let me be free of all this  <br/>I wanna be free 	<br/> Let me be free of all this	<br/><br/>So I looked up one more time at the sky  <br/>To the arrow of geese callin' goodbye  <br/>An' I heard water's laughter<br/>An' I heard the wind song chasin' after<br/>An' I heard the faithful robin sing<br/>An' I heard the blackbird answer<br/>An' I heard the low clouds rumble<br/>An' I heard the water  <br/><br/> Callin' me down<br/>Just get closer<br/>Come on under<br/>Yeah<br/><br/> So I walked on in<br/>Under the water<br/>An' I felt it cold<br/>On my shoulders<br/><br/> An' I looked around  <br/>An' I saw duck feet paddle<br/>An' I saw the fish swimmin' by<br/>An' I saw my hair tangled in the rushes  <br/>An' I saw my body<br/>Floatin' on down  <br/>I saw my body<br/>Floatin' on down  <br/><br/> Free of all this  <br/>Let me be free of all this<br/>I was free of all this<br/>I was free of all this  <br/><br/> An' I saw the water<br/>An' I saw the water<br/>An' I heard distant birds singin' in my mornin'<br/>An' the water rushin' past my ears …",
    localSrc: "/songs/this_music_thing/08-lena-128.mp3",
    description: "Lena&rsquo;s Song is a Contemporary Folk Country Ballad and is a tribute to my mum Lena Maria<br /> <br /> The deeper description:<br /> Lena was a lonely and abused child who suffered schizophrenia from teen years into her old age; she was &ndash; regardless &ndash; a wonderful lady! The story relays her childhood attempt to drown herself in the River Annan on the borders of Scotland; in my adult life, she recalled this event <br /> My mum was my first Eco Warrior!",
    credits: "&copy; Original version written Rachel Bennett, Jordan Brown (now Christiano Tortoioli), Jamie Coe 2013<br /> &copy; Re-arranged version Rachel Bennett, Nathan Devonte, Jon Klein, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Percussion Chris Bell / Keys Jordan Brown (now Christiano Tortoioli), Wes Maebe / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene with WacArts Professional Singers / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 418901AS"
  },
  the_trial_of_ruby_bates: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-the_trial_of_ruby_bates",
    name: "The Trial of Ruby Bates",
    number: "9",
    length: "5:43",
    youtubeEmbed: null,
    lyrics: "Ruby is that you<br/>Runnin' cross my skyline<br/>Where the freight trains cry<br/>'Gainst the Alabama rain<br/>I'm callin' from your window<br/>Words fallin' on the wind<br/>Rusty nail torn curtains blowin'<br/>It's a dirty shame<br/><br/> Ruby don't run<br/>Wear out what's left 'a your shoes<br/>Don't burn out<br/>Everything might just<br/>Turn out<br/>I know you're frettin'<br/>'Bout what I can see<br/>But I believe your soul<br/>Needs to be free<br/>'Cos Ruby<br/>You dreamed me<br/><br/> Ruby you know<br/>Why I came here<br/>With my platinum hair<br/>An' my city ways<br/>You took me walkin'<br/>Real talkin' bout your first kiss<br/>'Gainst the rusty old turbines<br/>Lyin' in decay<br/><br/> Ruby don't fear<br/>What's inside of you<br/>Try'n' stay strong<br/>Even if you know<br/>You done wrong<br/>I know you're hidin'<br/>From your history<br/>But I believe your soul<br/>Is longin' to be free<br/>'Cos Ruby<br/>You dreamed me<br/><br/> You got so much goin' on<br/>But nothin' to lose<br/>From the Whitehouse lawn<br/>To the soup kitchen line<br/>A whole nation wanna' hear<br/>The truth you choose<br/>An' if you come right<br/>You might mend that ache<br/>If you come contrite<br/>I could open my eyes<br/>And live this dream<br/>When I awake<br/><br/><i>Newscaster</i><br/>Under a typical Charlottsville tin coloured sky,<br/>violent clashes between white nationalists and Black Lives Matter activists<br/> put an end to a noon rally that hadn't even begun. <br/>The activists are defending the right to remove a confederate statue<br/> that they believe represents white supremacy; in a time when unarmed black youth<br/> are still being shot down in cold blood between here and the county line<br/><br/><br/>Ruby you testified<br/>In your brand new clothes<br/>On the courthouse steps<br/>The camera caught you smilin'<br/>But runnin 'cross your eyes	<br/> I see your first boy	<br/> The one who kissed you 'gainst the turbines<br/>With the dark brown skin <br/><br/> Ruby you tangled with truth<br/>Till your life let you go		<br/>An now there's too many<br/>Firearms in the hands of fives<br/>An' saggin' in death row	<br/> But you can help us fight<br/>'Gainst the powers that be<br/>An' I believe you want to<br/>Cos Ruby you dreamed me<br/>Yeah Ruby Ruby Ruby<br/>You dreamed me<br/>Ruby Ruby Ruby<br/>You dreamed me <br/>",
    localSrc: "/songs/this_music_thing/09-the_trial_of_ruby_bates-128.mp3",
    description: "The Trial of Ruby Bates is a Contemporary Country Blues about Hollace Ransdall&rsquo;s revisit as a journalist to the Scottsboro Boys case in Alabama in the 30&rsquo;s.<br /> <br /> The song was inspired by Ellen Feldman&rsquo;s novel Scottsboro that was based on the re-investigation of Ruby Bate&rsquo;s false testimony of rape by nine African American boys who were subsequently incarcerated <br /> The voice is that of Hollace Ransdall.<br /> <br /> NB: I am proud to say that the curator of The Scottsboro Boys Museum in Alabama has listened to and praised the song (from the recording on the Raie album This Music Thing) and it now plays at the museum.",
    credits: "&copy; Original version written Rachel Bennett, Jamie Coe, Jordan Brown (now Christiano Tortoioli) 2014<br /> &copy; Re-arranged version Rachel Bennett, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli) / Trumpet Rick Leigh / Newscaster Voice Niamh Webb / Background Vocals Nathan Devonte, Kevin Mark Trail / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644DU"
  },
  for_jasmine_a_ghost_story: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-for_jasmine_a_ghost_story",
    name: "For Jasmine - a Ghost Story",
    number: "10",
    length: "5:24",
    youtubeEmbed: null,
    lyrics: "Hold on<br/>Jasmine<br/>With your jaune-skin love<br/>And your dark stone eyes<br/>That saw him<br/>Like I did 	<br/>Hold onto his memory<br/>And I will too<br/>I'll remember him<br/>For you<br/><br/> Hold on to thoughts<br/>To lay me down<br/>Eyes closed pain caught<br/>Behind a frown<br/>Skin on skin<br/>Mine can't feel<br/>Cold to touch<br/>Seems unreal<br/><br/> Stop and start<br/>No rhyme or reason<br/>Beats out of time<br/>My heavy heart<br/>Stars go on without us<br/>Shiny bright<br/>The moon and me<br/>Move into night<br/><br/> What you lose you find<br/>Mmmh<br/>What you lose you find<br/>Mmmh<br/><br/> Wake up to time<br/>With no seconds in it<br/>Grasp at lines of light<br/>Fragmented minutes<br/>A present tense<br/>That doesn't fit<br/>I mouth his name<br/>But cant make sense of it<br/><br/> Say hello<br/>To this tear stained face<br/>To this chasmic<br/>Inside me place<br/>To this most<br/>Unwelcome dawn<br/>To this he<br/>That cant be gone<br/><br/> What you lose …<br/><br/> You must have been there<br/>Before me<br/>Imagine my surprise<br/>When I learned to love<br/>Your love for him<br/>To see it all<br/>Through your eyes<br/>To empathise<br/><br/> We're left here now<br/>With signs and spirits<br/>Past understanding<br/>Just living with it<br/>I'm letting go<br/>Of bone and breath<br/>His beating heart<br/>There's little left<br/><br/> Except a trace<br/>That whispers by<br/>Too indistinct<br/>To quantify<br/>Too sweet to sour<br/>Too quick to still<br/>Too here too gone<br/>Too warm too chill<br/><br/> What you lose you'll find",
    localSrc: "/songs/this_music_thing/10-jasmine-128.mp3",
    description: "For Jasmine &ndash; A Ghost Story is a Contemporary Country Ballad about the death of a friend and lover.<br /> <br /> My dear friend and short-term lover Greg died in France in a road accident; he was there for me at the end of a very painful separation from a 5-year relationship; Greg and I studied at drama school together<br /> I met his long-term girlfriend Jasmine at his funeral and we talked with candid friendliness about him<br /> It was an experience that afforded me a great deal of healing and I am eternally grateful to Jasmine for her maturity and foresight in the circumstances &ndash; she was beautiful inside and out.",
    credits: "&copy; Original version written Rachel Bennett, Lynieve Austin, Jamie Coe, Jordan Brown (now Christiano Tortoioli) 2010<br /> &copy; Re-arranged version Rachel Bennett, Jamie Coe, Jon Klein 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Drums Chris Bell / Guitars Jamie Coe, Jon Klein, Wes Maebe / Bass Jordan Brown (now Christiano Tortoioli / Banjo Tom Chudley Evans / Violin Jo Eaton-Kent (now Joni Kent) / Accordion Tom Chudley Evans / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene, Evie Rose / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 370644LP"
  },
  azhia: {
    albumName: "This Music Thing",
    albumKey: "this_music_thing",
    id: "this_music_thing-azhia",
    name: "Azhia",
    number: "11",
    length: "5:26",
    youtubeEmbed: null,
    lyrics: "You settled for this place<br/>Old eyes in a child face<br/>Phosphorous blue<br/>Trusting in the arms that caught you<br/>Remember all the old ones taught you	<br/> Test your fear<br/>Learn to persevere<br/>Know the reason you came here<br/><br/> Out to sea the spirit keep<br/>Turtle song waves in the deep<br/>Wait upon their council<br/>Before you lay the walls to build<br/>It's easier to do His will<br/>See the lie of land<br/>The contours and His plan<br/>Listen look and understand<br/><br/> On and on the life force<br/>Till this old world<br/>Runs its course<br/>Spins its last days<br/>This is His way<br/><br/> Azhia Asiatic 	<br/> In your eyes	<br/>I see an old soul<br/>Azhia Asiatic	<br/> You hold on<br/>Stronger than strong<br/>And help us<br/>To make sense of it all<br/><br/> Earth memory has stayed impressed<br/>Millions of light years from the start<br/>The insight of a loving mothers quest<br/>To help a child endure and play her part<br/>To learn the wisdom of the East<br/>Bring understanding to her heart<br/><br/> Water washes stories in the stone<br/>Wind that bends horizons to its might<br/>Soil that many eons rain has known<br/>Fire igniting stars that fill the night<br/>The battles scream but morning comes anew<br/>The living breathing wonder that is you<br/><br/> On and on …<br/><br/> Azhia Asiatic …. <br/><br/> Lay the stones that will keep you here<br/>Wake me when the moon is up<br/>Inside the silence here that's falling down<br/>And the messages that drift ashore",
    localSrc: "/songs/this_music_thing/11-azhia-128.mp3",
    description: "Ahzia is a Contemporary Folk Country Blues about a mother&rsquo;s love.<br /> <br /> When I was a child of nine years my mother would wake me from sleep to see the series on TV &lsquo;India My India&rsquo; because she knew and understood my passion for traditional Indian sitar/flute music; I recall the nights at her side, watching this programme, with deep affection and gratitude for her insight and the seeds she sewed in me that grew to become my life long work with music.",
    credits: "&copy; Original version written Rachel Bennett, Manley O&rsquo;Connor 2014<br /> &copy; Re-arranged version Rachel Bennett, Max Anstruther, Wes Maebe 2019<br /> Produced: Wes &lsquo;Wesonator&rsquo; Maebe 2019<br /> Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2019<br /> Recorded and Engineered: Wes Maebe @ GMS<br /> <br /> Guitars Wes Maebe / Piano Max Anstruther / Vocals Feat. Kevin Mark Trail / Background Vocals Bukola Abdul, Nathan Devonte, Nazarene / Lead Vocal Rachel Bennett <br /> <br /> PRS CODE: 418901AQ"
  }
};
const red_brick_angel = {
  young_love: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-young_love",
    name: "Young Love",
    number: "1",
    length: "4:19",
    youtubeEmbed: null,
    lyrics: "Deep in my heart<br>I get a sweet old achin&rsquo;<br>Just when that evening sky <br>Turns an incandescent blue<br><br>Fixin&rsquo; my gaze <br>Beyond the horizon<br>Thinkin&rsquo; about the beautiful times<br>I spent with you<br><br>We didn&rsquo;t have no cares <br>&lsquo;Bout anything but each other<br>Nobody could hurt us<br>You were my best friend and my best lover<br><br>Know now that kind of freedom<br>You only get when you&rsquo;re young<br>No rules to bind us<br>We was high on somethin&rsquo; nobody could touch<br><br>An&rsquo; now I wanna&rsquo; hold you<br>To feel you near<br>Rockin&rsquo; in the back seat<br>Swimmin&rsquo; in the river <br>Lettin&rsquo; you take down my long hair <br>Layin&rsquo; together <br>Talkin&rsquo; till the dawn<br>I didn&rsquo;t know<br>That was love<br>And before I knew it<br>You were gone <br><br>We&rsquo;d be talkin&rsquo; soft and low<br>So we couldn&rsquo;t be heard<br>I shared my soul with you<br>An&rsquo; I know you was listenin&rsquo; to every word <br><br>Times now in the darkness<br>I&rsquo;m back with you in my mind<br>Hearin&rsquo; my night-time angel whisperin&rsquo; <br>Feelin&rsquo; your love wrapped around me tight<br> <br>An&rsquo; now I wanna&rsquo; hold you<br>To feel you near<br>Rockin&rsquo; in the back seat<br>Swimmin&rsquo; in the river <br>Lettin&rsquo; you take down my long hair <br>Layin&rsquo; together &ndash; laying together - Em<br>Talkin&rsquo; till the dawn<br>I didn&rsquo;t know<br>That was love<br>And before I knew it<br>You were gone <br><br>I know I won&rsquo;t love like that again oooh<br>No right and wrong oooh<br>No more thinkin&rsquo; bout tomorrow<br>Fearless, right and strong<br><br>INSTRUMENTAL<br><br>Chorus as above &#8230;<br>&#8230;.<br>And before I knew it<br>You were gone <br>MMMHH <br><br>&copy; Lyric Rachel Bennett 2021",
    localSrc: "/songs/red_brick_angel/01-young_love.mp3",
    localVideoSrc: "/videos/young_love.mp4",
    description: "Is a tribute to the memory of my first real love and heartbreak … I was 16 … running a bit wild … in a mining town just outside of Glasgow city…<br/>",
    credits: "Written Bennett/Maebe<br /> Drums and Percussion Chris Bell<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitar Louis Bell<br /> Piano Wes Maebe<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Ethan Fleming Damien James Wes Maebe Emily McLean"
  },
  grown_man: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-grown_man",
    name: "Grown Man",
    number: "2",
    length: "3:51",
    youtubeEmbed: null,
    lyrics: "You seem so sure with all this<br>But I don&rsquo;t know where I am <br>Seems like you&rsquo;re having fun yeah <br>But I don&rsquo;t know where I stand<br>One minute we&rsquo;re foolin&rsquo; like friends do<br>Next you&rsquo;re holdin&rsquo; my hand<br>Oh oo -oh <br>Like a grown man<br><br>You seem so easy with all this<br>Blowin&rsquo; hot and cold<br>Seem like you can switch your feelin&rsquo;s <br>But mine are out of control <br>One minute you distance yourself<br>Next you share your soul<br>Oh oo -oh <br>Like a grown man<br><br>It always felt so cool being with you <br>I know you like old familiar ground<br>You put a wall between us with some new <br>Love that you say you&rsquo;ve found <br>Why couldn&rsquo;t you wait for just a little while <br>Till I was ready to come around<br>Oh oo -oh <br>Like a grown man<br><br>This isn&rsquo;t easy any more<br>I don&rsquo;t know what to do or say<br>And falling in love with your friend<br>Makes it just too hard to walk away<br>I need you to tell me what to do<br>I need you to behave<br>Oh oo -oh Like a grown man x 2<br>Oh oo -oh <br>Like a grown man <br>MMMH <br><br><br>&copy; Lyric Rachel Bennett 2014",
    localSrc: "/songs/red_brick_angel/02-grown_man.mp3",
    description: "Is an address to a dear friend – a relationship that was best kept ‘as friends’!<br/>",
    credits: "Written Bennett<br /> Arranged Dunn/Tortoioli<br /> Drums and Percussion Chris Bell<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitars Louis Bell Jon Dunn<br /> Hammond Wes Maebe<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Rachel Bennett Nathan Devonte Wes Maebe <br /> Emily McLean Nazarene"
  },
  crystal_girl: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-crystal_girl",
    name: "Crystal Girl",
    number: "3",
    length: "3:12",
    youtubeEmbed: null,
    lyrics: "I&rsquo;m a city girl<br>An&rsquo; I ain&rsquo;t afraid of you<br>Just look twice <br>An&rsquo; you&rsquo;ll catch me watchin&rsquo; you<br>I&rsquo;m a silver spirit In the moonbeams <br>Waitin&rsquo; for the mornin&rsquo; in my dreams<br><br>I&rsquo;m a crystal girl in the starlight<br>Angel above my shadow<br>Caught up in the headlights<br>Walkin&rsquo; home on a dust road<br>In a urban wasteland <br>No fixed abode<br><br>You&rsquo;d like to know<br>How a young life goes so wrong <br>Wired in and hooked up<br>Nowhere to belong<br>&lsquo;N I&rsquo;m hidin&rsquo; my heart<br>Inside my winter coat<br>Keepin&rsquo; a low song in my throat<br><br>I&rsquo;m a duck and diver<br>Swimmin&rsquo; gainst the tide<br>I see everythin&rsquo; that&rsquo;s comin&rsquo;<br>There aint no use to hide<br>If you don&rsquo;t understand me<br>I&rsquo;ll leave you behind<br>You can criticise me <br>I don&rsquo;t mind<br><br>You&rsquo;d like to know &#8230;<br><br>Old owl cry <br>Callin&rsquo; in my sleep<br>I feel his night time gaze<br>Sittin&rsquo; on me deep<br>Yellow mornin&rsquo; <br>Sunlight sighin&rsquo;<br>Old men and children <br>The whole world in their eyes<br><br>You&rsquo;d like to know &#8230; <br><br>I&rsquo;m a love seeker<br>Eyes always open wide<br>Even in my darkest times<br>I&rsquo;m ready for the ride<br>I&rsquo;m a dream reader<br>Watching all the time<br>Truth speaker <br>Speakin&rsquo; in my rhymes <br><br>I&rsquo;m a dream reader<br>Watching all the time<br>Truth speaker <br>Speakin&rsquo; in my rhymes <br><br><br>&copy; Lyric Rachel Bennett 2021",
    localSrc: "/songs/red_brick_angel/03-crystal_girl.mp3",
    description: "A description of my young life … city born and bred but ever moving …<br/>",
    credits: "Written Bennett/Maebe and arranged Dunn/Tortoioli<br /> Drums Chris Bell <br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitars Louis Bell Wes Maebe<br /> Violin Maria Timus<br /> Mandolin Jill Cumberbatch<br /> Lead Vocal Rachel Bennett<br/>Background Vocal Emily McLean"
  },
  red_brick_angel: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-red_brick_angel",
    name: "Red Brick Angel",
    number: "4",
    length: "5:27",
    youtubeEmbed: null,
    lyrics: "You dreamed a red brick angel in the night<br>Woke up an&rsquo; wrote this on your guitar<br>I can see you workin&rsquo; it in the mornin&rsquo; light<br>Cos I that&rsquo;s how into playin&rsquo; that you are<br>Feels magic that you wrote it for my band<br>So I&rsquo;ve dedicated the words to you<br>Cos&rsquo; you&rsquo;re the only lovin&rsquo; person I know on this earth<br>Who could ever really know what I went through<br>Cos&rsquo; you went through it too<br>Yeah you went through it too<br>MMH riff x 2<br><br>I tried to played your old guitar when you left home<br>Sat in your room an&rsquo; held it in my arms<br>I listened to some of our tunes an&rsquo; thought of you<br>Prayin&rsquo; to the angels to keep you from harm<br>You an&rsquo; me we held together in a bad dream <br>We found our own way to light in the dark<br>Me singin&rsquo; all our songs up in your bedroom<br>You playin&rsquo; those riffs on your guitar<br>Firin a deep need for music in my heart <br>Yeah you fired the deepest need for music in my heart <br>MMH riff x 2<br><br>But you left when I was <br>Still too young to know <br>How much your insight <br>Gave me sense<br>Your logic bound me <br>To a set of rules<br>You couldn&rsquo;t ever know <br>How much they meant<br>Cos I broke every one of them <br>After you went <br><br>I been thinkin&rsquo; bout the angel in your dream <br>Shinin&rsquo; on a red brick tenement wall<br>He put this song into your lovin&rsquo; hands <br>So you could send it here from your beautiful soul<br>So we can go right back where we left off <br>Both of us enfolded in that angel&rsquo;s wings<br>Like we never even lost a single day<br>You still playin&rsquo; on your old guitar - an&rsquo; I sing <br>You have brought our music home again <br>Yeah you&rsquo;ve brought our music home again<br>MMH riff x 1<br><br>Yeah yeah &ndash; it was survival<br>Yeah yeah &ndash; it was survival<br><br>&copy; Lyric Rachel Bennett 2023",
    localSrc: "/songs/red_brick_angel/04-red_brick_angel.mp3",
    description: "This song was inspired by my brother’s beautiful guitar part … he woke from a dream about an angel on a tenement wall .. got up and wrote this part … he lives in NZ and we are on Face Time to communicate … he is my one close nuclear family sibling … we come from a broken home<br/>",
    credits: "Written Peter &amp; Rachel Bennett/Dunn and arranged Dunn/Tortoioli<br /> Drums Chris Bell<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitars Louis Bell Jon Dunn<br /> Electric Guitars Louis Bell Peter Bennett Wes Maebe <br /> Piano Tim Gardner<br /> Cello Altea Narici<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Ethan Fleming Damien James Wes Maebe Emily McLean"
  },
  this_thing_called_love: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-this_thing_called_love",
    name: "This Thing Called Love",
    number: "5",
    length: "3:49",
    youtubeEmbed: null,
    lyrics: "They say that love is blind<br>I think its good and its kind<br>That&rsquo;s what I say about love<br>Here today gone tomorrow<br>I say pick up and follow<br>That&rsquo;s the way of love<br>Symbolized by a band of gold <br>With us till we grow old and grey<br>C&rsquo;mon baby<br>What d&rsquo;you say<br>Lets find this thing called love<br><br>I say love laughs at locksmiths<br>You say you&rsquo;ll only love me if I<br>Give you something b&rsquo;sides love<br>You say its purely physical<br>But I believe loves a miracle <br>&lsquo;N that&rsquo;s what&rsquo;s so wonderful about love<br>It&rsquo;s a not a four letter word <br>Or something you just heard about<br>C&rsquo;mon baby<br>Check me out<br>Lets do this thing called love<br><br>Shoo dup doo doo <br>Shoo dup doo doo <br>Shoo doo dup doo dup <br>Shoo Doo<br>C&rsquo;mon baby <br>Lets do this thing called love <br>Rep &#8230;<br><br>You say that love&rsquo;s too elusive<br>I say that&rsquo;s cos you ain&rsquo;t tried to give<br>All of yourself to love<br>You say there&rsquo;s no-one to trust<br>But I suggest love&rsquo;s a must<br>And everybody got to have some love<br>You cant let love pass you by <br>You just goin&rsquo; have to try some more<br>C&rsquo;mon baby<br>Close the door<br>Lets make this thing called love<br><br>Sho dup doo doo &#8230;<br><br>&copy; Lyric Rachel Bennett 2007",
    localSrc: "/songs/red_brick_angel/05-this_thing_called_love.mp3",
    description: "Just a good time song about the trials of love …<br/>",
    credits: "Written Bennett<br /> Drums Chris Bell<br /> Percussion Wes Maebe<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitar Louis Bell<br /> Piano Mojo Wellington<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Rachel Bennett Nathan Devonte Ethan Fleming Damien James Emily McLean Nazarene"
  },
  free_now: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-free_now",
    name: "Free Now",
    number: "6",
    length: "5:29",
    youtubeEmbed: null,
    lyrics: "There were blue days<br>Or darker<br>Mornins&rsquo; when the moon was in the sky<br>Lonely days<br>Endless hours<br>And time I didn&rsquo;t know was passin&rsquo; by<br><br>I had questions<br>With no answers<br>Nights without sleepin&rsquo;<br>Till the dawn<br>Worried times<br>Full of fears<br>But all that is past and gone<br><br>An&rsquo; I&rsquo;ve lost that old longin&rsquo;<br>That old heartache<br>Lost that old yearnin&rsquo;<br>Yeah<br>I&lsquo;m livin&rsquo; my future now <br>Been lookin&rsquo; at myself <br>Beyond the glass<br><br>My freedom is comin&rsquo; <br>An&rsquo; I don&rsquo;t even have to try<br><br>Because I&rsquo;m free now<br>I can be now<br>I can be me<br>Just be<br><br>Yes I&rsquo;m free now<br>I can be now<br>I can be me<br>Just be<br><br>Free now x 6 build on rock out<br><br>&copy; Lyric Rachel Bennett 2022",
    localSrc: "/songs/red_brick_angel/06-free_now.mp3",
    description: "I wrote this for my dear friend who lost her son to a motor bike accident &#8230; her grief was overwhelming &#8230; she is un-named<br /> I am very proud that Jon Klein (Siouxie and the Banshees/Sinead O&rsquo;Connor/Jah Wobble) was involved in writing this track with me and that he is playing a solo on the outro!<br/>",
    credits: "Written Bennett/Klein<br /> Drums Chris Bell<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitars Louis Bell Wes Maebe<br /> Guitar solo Jon Klein<br /> Piano Tim Gardner<br /> Violins Tim Gardner Maria Timus <br /> Cello Altea Narici<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Nathan Devonte Wes Maebe Emily McLean Nazarene"
  },
  back_room_angel: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-back_room_angel",
    name: "Back Room Angel",
    number: "7",
    length: "4:19",
    youtubeEmbed: null,
    lyrics: "I fell in love with an angel<br>In the dark night in my dreams<br>In the back room of a pool hall<br>An&rsquo; I got to tell you girls &ndash; nothing&rsquo;s what it seems<br>Cos I believed all the while<br>He was only a man<br>But when he put his arms around me<br>I went straight to heaven<br><br>He had sweet an&rsquo; easy ways <br>A tobacco stained smile<br>Long lean body in an old brown overcoat<br>And a tenderness all the while<br>And when he held me in his embrace<br>I didn&rsquo;t hear a sound <br>My heart stopped &ndash; you could&rsquo;a heard a pin drop <br>As that whole pool room hush right down<br><br>And I felt his spirit<br>Ooh I was in the fire<br>And we started smokin&rsquo; hot an&rsquo; dirty<br>And the flames was getting&rsquo; higher<br>An&rsquo; I got to tell you girls<br>I was helpless with desire<br>He set me free <br>I got to say he saved me<br><br>And I believe that us girls<br>Have been meeting angels for such a long time <br>This story&rsquo;s older than the bible<br>And it ain&rsquo;t altered &ndash; not one line <br>And it explains all of our sins<br>From Eve to Mary Magdalene<br>From junkie hallway promsin&rsquo;<br>And those old rainy day .. please do it again <br><br>And I&rsquo;d rather wake up alone <br>Than with any someone <br>Who don&rsquo;t come near my backroom angel <br>Yes I&rsquo;d rather wake up alone<br>Than with any someone<br>Who don&rsquo;t come near my backroom angel<br>MMMH <br><br>&copy; Lyric Rachel Bennett 05",
    localSrc: "/songs/red_brick_angel/07-back_room_angel.mp3",
    description: "I actually dreamed this but in fact, in the dream, I was inside the angel’s ribs and could see the quill ends of his feathers in his spine; he was colossal inside yet I was unafraid<br/>",
    credits: "Written Bennett and arranged Dunn/Tortoioli<br /> Drums Chris Bell<br /> Percussion Wes Maebe<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitar Louis Bell<br /> Piano Tim Gardner<br /> Hammond Tim Gardner<br /> Keys Tim Gardner<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Nathan Devonte Wes Maebe Emily McLean Nazarene"
  },
  bringing_me_back_home: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-bringing_me_back_home",
    name: "Bringing Me Back Home",
    number: "8",
    length: "3:05",
    youtubeEmbed: null,
    lyrics: "Song started with the water of life<br>Sweet sailor song on the homeward tide<br>A lovin&rsquo; people spinnin&rsquo; tales in the evenin&rsquo; light<br>Gypsy by his fire at the roadside<br><br>Got a feelin&rsquo; that&rsquo;s somewhere I belong<br>I hear a moanin&rsquo; wind pullin&rsquo; at me strong<br>Bird callin&rsquo; a lonesome tune in the cold dawn <br>Country music bringin&rsquo; me back home <br><br>Pioneerin&rsquo; is how we called it <br>We came to the land of the brave and free<br>Took a wild country, tried to tame it<br>Hard hunger veiled in sweet melody <br><br>Got a feelin&rsquo; that&rsquo;s somewhere I belong<br>I hear a moanin&rsquo; wind pullin&rsquo; at me strong<br>Bird callin&rsquo; a lonesome tune in the cold dawn <br>Country music bringin&rsquo; me back home <br><br>That music kept starvation held down tight<br>Played by worn hands that tilled the earth<br>Sweet longin&rsquo; prayers in the dust bowl night<br>It took everythin&rsquo; they had to know their worth<br><br>In my song I ask forgiveness <br>For the hunger and the raz&eacute;d land <br>Cruel decimation birth&rsquo;d Country music<br>Sometimes that&rsquo;s so hard to understand<br><br>Got a feelin&rsquo; that&rsquo;s somewhere I belong<br>I hear a moanin&rsquo; wind pullin&rsquo; at me strong<br>Bird callin&rsquo; a lonesome tune in the cold dawn <br>Country music bringin&rsquo; me back home <br><br>&copy; Lyric Rachel Bennett 2021",
    localSrc: "/songs/red_brick_angel/08-bringing_me_back_home.mp3",
    description: "I have read a great deal about the origins of Country Music and just wanted to express my feelings about the hardships endured, particularly during the ‘dust bowl’ but also by the Nation People whose land was rent asunder<br/>",
    credits: "Written Bennett/Maebe/Dunn and arranged Dunn/Tortoioli<br /> Drums Chris Bell<br /> Percussion Wes Maebe<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitar Louis Bell<br /> Violins Tim Gardner Maria Timus <br /> Cello Altea Narici<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Wes Maebe Emily McLean"
  },
  grey: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-grey",
    name: "Grey",
    number: "9",
    length: "3:57",
    youtubeEmbed: null,
    lyrics: "First at the finishin&rsquo; line<br>Water bowl filled with wine<br>Master throws you a piece of meat<br>Then you left tired an&rsquo; alone<br>Layin&rsquo; on the cold cold stone<br>Runnin&rsquo; quiet races in your ache filled sleep<br><br>Come on now &#8230;. hey <br>My beautiful grey<br>No more racin&rsquo; pulse at the shot of the gun<br>I&rsquo;m gonna&rsquo; set you free<br>You win if you bet on me<br>There ain&rsquo;t no more need for you to run<br><br>Bettin&rsquo; rag is folded near<br>Winner on the page is clear<br>Every gamester markin&rsquo; out your name<br>Paradin&rsquo; round the high fence track<br>Your heavy heart beats way too fast<br>You the one payin&rsquo; the cost a&rsquo; your fame<br><br>Come on now &#8230;. hey <br>My beautiful grey<br>No more racin&rsquo; pulse at the shot of the gun<br>I&rsquo;m gonna&rsquo; set you free<br>You win if you bet on me<br>There ain&rsquo;t no more need for you to run<br><br>I wanna&rsquo; see your joy filled dance<br>Your pirouette and criss-cross prance<br>That&rsquo;s something I think I can understand<br>The ghost in you still runnin&rsquo; free<br>Loyalty dressed in dignity<br>When you were out there huntin&rsquo; for a good man<br><br>Come on now &#8230;. hey <br>My beautiful grey<br>No more racin&rsquo; pulse at the shot of the gun<br><br>&copy; Lyric Rachel Bennett 2022",
    localSrc: "/songs/red_brick_angel/09-grey.mp3",
    description: "I live with a beautiful rescue greyhound whom I named Isra; the name means &lsquo;nocturnal journey&rsquo; but is metaphorical for a journey through darkness; greyhounds are used until they cannot provide income and their &lsquo;endings&rsquo; are usually very difficult (they are often shot or abandoned)<br /> The sport itself is associated with many injuries and deaths on the track &ndash; I support Action For Greyhounds and this song is my protest against the sport<br /> I am so proud that my producer Wes Maebe contributed a beautiful classical guitar solo on the intro to lift this song to new heights<br />",
    credits: "Written Bennett/Dunn<br /> Drums Chris Bell<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitars Louis Bell Jon Dunn<br /> Electric Guitar Louis Bell <br /> Guitar solo Wes Maebe<br /> Piano Tim Gardner<br /> Violins Tim Gardner Maria Timus<br /> Cello Altea Narici<br /> Lead Vocal Rachel Bennett"
  },
  whisky_song: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-whisky_song",
    name: "Whisky Song",
    number: "10",
    length: "4:06",
    youtubeEmbed: null,
    lyrics: "Za za zoom<br><br>Seen my daddy fightin&rsquo; on the corner<br>Good drink in his bones<br>He looked down the bottle some<br>Needed somethin&rsquo; to lean on<br>Water&rsquo;s somethin&rsquo; that you feel<br>There ain&rsquo;t no need to think<br>If you wanna&rsquo; get away from everythin&rsquo; real<br>Just have a real good drink<br><br>Don&rsquo;t put water in my whisky<br>I like it strong<br>Makes me feel happy babe<br>No need to belong<br><br>I said the older the blend<br>The sweeter the taste<br>Take the bottle down slow<br>Don&rsquo;t let it go to waste<br>Guaranteed to blow your mind<br>The water takes you out of time<br>My medicine honey<br>Best way to cross the line<br><br>Feel a stone weight in your body <br>The rush is like I said<br>Feel a little weak at the knees <br>Blood rushin&rsquo; to your head<br>Nothin&rsquo; seems to matter <br>Then it hits you hard <br>Been distillin&rsquo; for years honey<br>In my back yard<br><br>Don&rsquo;t put water in my whisky &#8230;<br><br>I said the older the blend &#8230;<br><br>Instr.<br><br>I said the older the blend &#8230;<br><br>Daddy showed me somethin&rsquo; <br>When I was still a child<br>I found it hard to swallow babe<br>Kinda&rsquo; cut throat glass and wild<br>I was wonderin&rsquo; bout the bottle<br>By the time that I was ten<br>If you think you seein&rsquo; double now<br>Shoulda&rsquo; seen all those daddy&rsquo;s way back when<br><br>Single chorus<br><br>OUTRO <br>Sometimes when the night gets cold<br>I feel him all around me<br>Sayin&rsquo; don&rsquo;t be afraid to feel the heat<br>Now that you found me<br>They say the water&rsquo;s good for you<br>They say it thins the blood<br>If you keep on knockin&rsquo; it back like that<br>You gonna&rsquo; end like you should<br><br>&copy;Bennett/Cochrane &lsquo;02",
    localSrc: "/songs/red_brick_angel/10-whisky_song.mp3",
    description: "My father was a Londoner who loved Scotland and everything Scottish – particularly a good singe malt whisky!<br/>",
    credits: "Written Bennett/Cochrane and arranged Maebe/Dunn/Tortoioli<br /> Drums and Percussion Chris Bell <br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitar Louis Bell<br /> Keys Tim Gardner<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Ethan Fleming Damien James Wes Maebe Emily McLean"
  },
  you_cant_fly: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-you_cant_fly",
    name: "You Can't Fly",
    number: "11",
    length: "4:47",
    youtubeEmbed: null,
    lyrics: "You can&rsquo;t fly<br>You cant fly <br> <br>It started in your youth<br>No money no job frustration<br>Sellin&rsquo; tabs in subways<br>A kinda&rsquo; misspent recreation<br>Even your Mama gave up on you<br>&lsquo;no resolvin&rsquo; your determination<br>&#8230;.<br>To leave town &ndash; with a dream in your pocket<br>No directions &ndash; no map<br>Found your way for a little while<br>Hustlin&rsquo; on the right side of the tracks<br>You really could&rsquo;a been somebody <br>Cos you started out pretty smart<br>Now you workin&rsquo; the pavement corners<br>Dealin&rsquo; crystal meth and smack <br> <br>Let me elucidate<br>God don&rsquo;t negotiate<br><br>You cant fly<br>Said you cant fly<br>Only angels get that high<br>You cant fly<br>Said you cant fly<br>I know you got some people high <br>But you cant fly<br><br>You hollow like a burned-out spoon <br>Shoulders turned against the wind<br>Cold cold corruption <br>Poison blood getting&rsquo; in<br>You missed out on your daddy&rsquo;s love<br>So you wanna be the resurrection<br>Get a man in a den with a needle<br>He dead already &ndash; still walkin&rsquo;<br><br>You cant fly<br>Said you cant fly<br>Only angels get that high<br>You cant fly<br>Said you cant fly<br>I know you got some people high <br>But you cant fly<br><br><br>Down you slipped through the bottle-neck <br>Kinda lost your grip Oh! what the heck <br>The baton passed from bad dope to dirty crack <br>But it put the shirt on your back <br><br>You keep on doin&rsquo; the devil&rsquo;s work <br>Like you&rsquo;re incorruptible - divinity in the dirt <br>Think you swingin&rsquo; on paradise gate <br>Let me remind you &#8230; <br>The hinges won&rsquo;t take your weight<br>They won&rsquo;t take your weight<br>They won&rsquo;t take your weight<br><br>You cant fly<br>Said you cant fly<br>Only angels get that high<br>You cant fly<br>Said you cant fly<br>I know you got some people high <br>But you cant fly<br><br><br><br>You can&rsquo;t fly &ndash; rep<br><br>&copy; Lyric Bennett 2011",
    localSrc: "/songs/red_brick_angel/11-you_cant_fly.mp3",
    description: "This song is a protest I wrote to express my abhorrence of the usury and ugliness associated with the drug trade<br/>",
    credits: "Written Bennett/Dunn/Tortoioli<br /> Drums Chris Bell<br /> Percussion Wes Maebe<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitars Louis Bell Wes Maebe<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Ethan Fleming Damien James Wes Maebe Emily McLean"
  },
  convoy_of_tears: {
    albumName: "Red Brick Angel",
    albumKey: "red_brick_angel",
    id: "red_brick_angel-convoy_of_tears",
    name: "Convoy of Tears",
    number: "12",
    length: "7:14",
    youtubeEmbed: null,
    lyrics: "Orange light on your tattoo skin<br>Purple Hearts in the jasmine<br>Paper kite tigers Second to None<br>Sweet aroma &ndash; one eye on the gun<br><br>Cut me jungle flowers razor thin <br>Cut you toxic saccharine <br>High down here under napalm skies<br>Harvest Moon in our watering eyes<br><br>Mekong whisper<br>Laps the shoreline <br>Shells lie under <br>Riverine water<br>Chu Lai starlight<br>Lights up the skyline<br>Sweatin&rsquo; teardrops<br>Blindin&rsquo; my eyeline <br><br>There&rsquo;s no comin&rsquo; back from this <br>Nothin&rsquo; could&rsquo;a got us ready for this <br>Shadows droppin&rsquo; from a gasoline sky<br>Carryin&rsquo; us home where the stars and stripes fly <br><br>A pall of joy smoke under control<br>The night brings quiet &#8230; Hunter Patrol<br>A pot in each hand &ndash; weighin&rsquo; the scale<br>Moon-rock workin&rsquo; on the Ho Chi Min trail<br><br>Convoy of Tears on the road to hell<br>Target landings Skyhawk farewell<br>Iriquois Warrior guide my flight<br>Give me cunning and Eagle eyesight<br><br>Mekong whisper<br>Laps the shoreline <br>Shells lie under <br>Riverine water<br>Kingfisher wingspan<br>Fracture the skyline<br>Over fields where<br>Rusting dog tags lie down<br><br>There&rsquo;s no comin&rsquo; back from this &#8230;.<br><br>The world looks at us on their TV screens <br>Protest marches &lsquo;gainst Magnificent Evil<br>Dragon people in their nightmare dreams &#8230; but <br>We&rsquo;re still holdin&rsquo; our breath here fightin&rsquo; &lsquo;gainst some devil<br><br>There&rsquo;s no comin&rsquo; back from this &#8230;<br>Carry&rsquo;n us home <br>All the way home <br>Carryin&rsquo; us home where the stars and stripes fly <br><br>&copy; Lyric Rachel Bennett, Wes Maebe 2021",
    localSrc: "/songs/red_brick_angel/12-convoy_of_tears.mp3",
    description: "I wrote this song with Wes after many conversations; initially I wrote it independently, inspired by the Netflix series &lsquo;Vietnam&rsquo; then Wes got on board and told stories of friends&rsquo; fathers who are/were vets &ndash; he has a wide knowledge of the names of platoons, military codes for operations, names of flights and helicopters &#8230; and a lot more <br /> Somehow our united minds created a piece that I am extremely proud of <br /> Add to this the fact that when Elliott Randall (Doobie Bros./Steely Dan) heard the track, he requested permission to solo on the outro!<br />",
    credits: "Written Bennett/Maebe<br /> Drums Chris Bell<br /> Bass Cristiano Tortoioli<br /> Acoustic Guitar Jon Dunn<br /> Electric Guitars Louis Bell Jon Dunn Wes Maebe<br /> Guitar solo Elliott Randall<br /> Percussion Wes Maebe<br /> Violins Tim Gardner Maria Timus<br /> Cello Altea Narici<br /> Lead Vocal Rachel Bennett<br /> Background Vocals Ethan Fleming Damien James Emily McLean Altea Narici"
  }
};
const songsArr = {
  earthbound: Object.values(earthbound),
  this_music_thing: Object.values(this_music_thing),
  red_brick_angel: Object.values(red_brick_angel)
};
const songsList = [
  ...songsArr.this_music_thing,
  ...songsArr.earthbound,
  ...songsArr.red_brick_angel
];
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
var State;
(function(State2) {
  State2[State2["Open"] = 0] = "Open";
  State2[State2["Closed"] = 1] = "Closed";
})(State || (State = {}));
const OPEN_CLOSED_CONTEXT_NAME = "headlessui-open-closed-context";
function hasOpenClosed() {
  return useOpenClosed() !== void 0;
}
function useOpenClosed() {
  return getContext(OPEN_CLOSED_CONTEXT_NAME);
}
function useOpenClosedProvider(value) {
  setContext(OPEN_CLOSED_CONTEXT_NAME, value);
}
function match(value, lookup, ...args) {
  if (value in lookup) {
    let returnValue = lookup[value];
    return typeof returnValue === "function" ? returnValue(...args) : returnValue;
  }
  let error = new Error(`Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(lookup).map((key) => `"${key}"`).join(", ")}.`);
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, match);
  throw error;
}
let id = 0;
function generateId() {
  return ++id;
}
function useId() {
  return generateId();
}
let interactables = /* @__PURE__ */ new Set();
let originals = /* @__PURE__ */ new Map();
function inert(element) {
  element.setAttribute("aria-hidden", "true");
  element.inert = true;
}
function restore(element) {
  let original = originals.get(element);
  if (!original)
    return;
  if (original["aria-hidden"] === null)
    element.removeAttribute("aria-hidden");
  else
    element.setAttribute("aria-hidden", original["aria-hidden"]);
  element.inert = original.inert;
}
function useInertOthers(container, enabled = true) {
  if (!enabled)
    return;
  if (!container)
    return;
  let element = container;
  interactables.add(element);
  for (let original of originals.keys()) {
    if (original.contains(element)) {
      restore(original);
      originals.delete(original);
    }
  }
  document.querySelectorAll("body > *").forEach((child) => {
    if (!(child instanceof HTMLElement))
      return;
    for (let interactable of interactables) {
      if (child.contains(interactable))
        return;
    }
    if (interactables.size === 1) {
      originals.set(child, {
        "aria-hidden": child.getAttribute("aria-hidden"),
        // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
        inert: child.inert
      });
      inert(child);
    }
  });
  return () => {
    interactables.delete(element);
    if (interactables.size > 0) {
      document.querySelectorAll("body > *").forEach((child) => {
        if (!(child instanceof HTMLElement))
          return;
        if (originals.has(child))
          return;
        for (let interactable of interactables) {
          if (child.contains(interactable))
            return;
        }
        originals.set(child, {
          "aria-hidden": child.getAttribute("aria-hidden"),
          // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
          inert: child.inert
        });
        inert(child);
      });
    } else {
      for (let element2 of originals.keys()) {
        restore(element2);
        originals.delete(element2);
      }
    }
  };
}
function contains(containers, element) {
  for (let container of containers) {
    if (container.contains(element))
      return true;
  }
  return false;
}
var Keys;
(function(Keys2) {
  Keys2["Space"] = " ";
  Keys2["Enter"] = "Enter";
  Keys2["Escape"] = "Escape";
  Keys2["Backspace"] = "Backspace";
  Keys2["ArrowLeft"] = "ArrowLeft";
  Keys2["ArrowUp"] = "ArrowUp";
  Keys2["ArrowRight"] = "ArrowRight";
  Keys2["ArrowDown"] = "ArrowDown";
  Keys2["Home"] = "Home";
  Keys2["End"] = "End";
  Keys2["PageUp"] = "PageUp";
  Keys2["PageDown"] = "PageDown";
  Keys2["Tab"] = "Tab";
})(Keys || (Keys = {}));
let focusableSelector = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])"
].map((selector) => `${selector}:not([tabindex='-1'])`).join(",");
var Focus$1;
(function(Focus2) {
  Focus2[Focus2["First"] = 1] = "First";
  Focus2[Focus2["Previous"] = 2] = "Previous";
  Focus2[Focus2["Next"] = 4] = "Next";
  Focus2[Focus2["Last"] = 8] = "Last";
  Focus2[Focus2["WrapAround"] = 16] = "WrapAround";
  Focus2[Focus2["NoScroll"] = 32] = "NoScroll";
})(Focus$1 || (Focus$1 = {}));
var FocusResult;
(function(FocusResult2) {
  FocusResult2[FocusResult2["Error"] = 0] = "Error";
  FocusResult2[FocusResult2["Overflow"] = 1] = "Overflow";
  FocusResult2[FocusResult2["Success"] = 2] = "Success";
  FocusResult2[FocusResult2["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));
var Direction;
(function(Direction2) {
  Direction2[Direction2["Previous"] = -1] = "Previous";
  Direction2[Direction2["Next"] = 1] = "Next";
})(Direction || (Direction = {}));
function getFocusableElements(container = document.body) {
  if (container == null)
    return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
var FocusableMode;
(function(FocusableMode2) {
  FocusableMode2[FocusableMode2["Strict"] = 0] = "Strict";
  FocusableMode2[FocusableMode2["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));
function focusElement(element) {
  element?.focus({ preventScroll: true });
}
function focusIn(container, focus) {
  let elements = Array.isArray(container) ? container.slice().sort((a, b) => {
    let position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING)
      return -1;
    if (position & Node.DOCUMENT_POSITION_PRECEDING)
      return 1;
    return 0;
  }) : getFocusableElements(container);
  let active = document.activeElement;
  let direction = (() => {
    if (focus & (Focus$1.First | Focus$1.Next))
      return Direction.Next;
    if (focus & (Focus$1.Previous | Focus$1.Last))
      return Direction.Previous;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let startIndex = (() => {
    if (focus & Focus$1.First)
      return 0;
    if (focus & Focus$1.Previous)
      return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & Focus$1.Next)
      return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & Focus$1.Last)
      return elements.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })();
  let focusOptions = focus & Focus$1.NoScroll ? { preventScroll: true } : {};
  let offset = 0;
  let total = elements.length;
  let next = void 0;
  do {
    if (offset >= total || offset + total <= 0)
      return FocusResult.Error;
    let nextIdx = startIndex + offset;
    if (focus & Focus$1.WrapAround) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0)
        return FocusResult.Underflow;
      if (nextIdx >= total)
        return FocusResult.Overflow;
    }
    next = elements[nextIdx];
    next?.focus(focusOptions);
    offset += direction;
  } while (next !== document.activeElement);
  if (!next.hasAttribute("tabindex"))
    next.setAttribute("tabindex", "0");
  return FocusResult.Success;
}
const FocusTrap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { containers } = $$props;
  let { enabled = true } = $$props;
  let { options = {} } = $$props;
  let restoreElement = typeof window !== "undefined" ? document.activeElement : null;
  async function handleFocus() {
    if (!enabled)
      return;
    if (containers.size !== 1)
      return;
    let { initialFocus } = options;
    await tick();
    let activeElement = document.activeElement;
    if (initialFocus) {
      if (initialFocus === activeElement) {
        return;
      }
    } else if (contains(containers, activeElement)) {
      return;
    }
    restoreElement = activeElement;
    if (initialFocus) {
      focusElement(initialFocus);
    } else {
      let couldFocus = false;
      for (let container of containers) {
        let result = focusIn(container, Focus$1.First);
        if (result === FocusResult.Success) {
          couldFocus = true;
          break;
        }
      }
      if (!couldFocus)
        console.warn("There are no focusable elements inside the <FocusTrap />");
    }
  }
  function restore2() {
    focusElement(restoreElement);
    restoreElement = null;
  }
  onDestroy(() => {
    restore2();
  });
  if ($$props.containers === void 0 && $$bindings.containers && containers !== void 0)
    $$bindings.containers(containers);
  if ($$props.enabled === void 0 && $$bindings.enabled && enabled !== void 0)
    $$bindings.enabled(enabled);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  {
    enabled && containers ? handleFocus() : restore2();
  }
  return ``;
});
var StackMessage;
(function(StackMessage2) {
  StackMessage2[StackMessage2["Add"] = 0] = "Add";
  StackMessage2[StackMessage2["Remove"] = 1] = "Remove";
})(StackMessage || (StackMessage = {}));
const STACK_CONTEXT_NAME = "headlessui-stack-context";
const StackContextProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _cleanup;
  let { onUpdate } = $$props;
  let { element } = $$props;
  function notify(...args) {
    onUpdate?.(...args);
    parentUpdate?.(...args);
  }
  let parentUpdate = getContext(STACK_CONTEXT_NAME);
  setContext(STACK_CONTEXT_NAME, notify);
  onDestroy(() => {
    if (_cleanup) {
      _cleanup();
    }
  });
  if ($$props.onUpdate === void 0 && $$bindings.onUpdate && onUpdate !== void 0)
    $$bindings.onUpdate(onUpdate);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  _cleanup = (() => {
    if (_cleanup) {
      _cleanup();
    }
    if (!element)
      return null;
    let savedElement = element;
    notify(StackMessage.Add, savedElement);
    return () => notify(StackMessage.Remove, savedElement);
  })();
  return `${slots.default ? slots.default({}) : ``}`;
});
const DESCRIPTION_CONTEXT_NAME = "headlessui-description-context";
const DescriptionProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "slotProps"]);
  let $contextStore, $$unsubscribe_contextStore;
  let { name } = $$props;
  let { slotProps = {} } = $$props;
  let descriptionIds = [];
  let contextStore = writable({
    name,
    slotProps,
    props: $$restProps,
    register
  });
  $$unsubscribe_contextStore = subscribe(contextStore, (value) => $contextStore = value);
  setContext(DESCRIPTION_CONTEXT_NAME, contextStore);
  function register(value) {
    descriptionIds = [...descriptionIds, value];
    return () => {
      descriptionIds = descriptionIds.filter((descriptionId) => descriptionId !== value);
    };
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.slotProps === void 0 && $$bindings.slotProps && slotProps !== void 0)
    $$bindings.slotProps(slotProps);
  {
    contextStore.set({
      name,
      slotProps,
      props: $$restProps,
      register,
      descriptionIds: descriptionIds.length > 0 ? descriptionIds.join(" ") : void 0
    });
  }
  $$unsubscribe_contextStore();
  return `${slots.default ? slots.default({
    describedby: $contextStore.descriptionIds
  }) : ``}`;
});
const FORCE_PORTAL_ROOT_CONTEXT_NAME = "headlessui-force-portal-root-context";
function usePortalRoot() {
  return getContext(FORCE_PORTAL_ROOT_CONTEXT_NAME);
}
const ForcePortalRootContext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { force } = $$props;
  setContext(FORCE_PORTAL_ROOT_CONTEXT_NAME, writable(force));
  if ($$props.force === void 0 && $$bindings.force && force !== void 0)
    $$bindings.force(force);
  return `${slots.default ? slots.default({}) : ``}`;
});
const PORTAL_GROUP_CONTEXT_NAME = "headlessui-portal-group-context";
function usePortalGroupContext() {
  return getContext(PORTAL_GROUP_CONTEXT_NAME);
}
const PortalGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { target } = $$props;
  let targetStore = writable(target);
  setContext(PORTAL_GROUP_CONTEXT_NAME, targetStore);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  {
    targetStore.set(target);
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $groupTarget, $$unsubscribe_groupTarget;
  let $forceInRoot, $$unsubscribe_forceInRoot;
  let forceInRoot = usePortalRoot();
  $$unsubscribe_forceInRoot = subscribe(forceInRoot, (value) => $forceInRoot = value);
  let groupTarget = usePortalGroupContext();
  $$unsubscribe_groupTarget = subscribe(groupTarget, (value) => $groupTarget = value);
  (() => {
    if (!(forceInRoot && $forceInRoot) && groupTarget !== void 0 && $groupTarget !== null)
      return $groupTarget;
    if (typeof window === "undefined")
      return null;
    let existingRoot = document.getElementById("headlessui-portal-root");
    if (existingRoot)
      return existingRoot;
    let root = document.createElement("div");
    root.setAttribute("id", "headlessui-portal-root");
    tick().then(() => {
      if (root !== document.body.lastChild) {
        document.body.appendChild(root);
      }
    });
    return document.body.appendChild(root);
  })();
  $$unsubscribe_groupTarget();
  $$unsubscribe_forceInRoot();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const MODIFIER_DIVIDER = "!";
const modifierRegex = new RegExp(`^[^${MODIFIER_DIVIDER}]+(?:${MODIFIER_DIVIDER}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);
function forwardEventsBuilder(component, except = []) {
  let $on;
  let events = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    for (let exception of except) {
      if (typeof exception === "string" && exception === eventType) {
        const callbacks = component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      if (typeof exception === "object" && exception["name"] === eventType) {
        let oldCallback = callback;
        callback = (...props) => {
          if (!(typeof exception === "object" && exception["shouldExclude"]())) {
            oldCallback(...props);
          }
        };
      }
    }
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const modifierMatch = eventType.match(modifierRegex);
      if (modifierMatch) {
        const parts = eventType.split(MODIFIER_DIVIDER);
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen$1(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen$1(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
const components = [
  "a",
  "address",
  "article",
  "aside",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "button",
  "cite",
  "code",
  "data",
  "datalist",
  "dd",
  "dl",
  "dt",
  "div",
  "em",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "i",
  "input",
  "label",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "section",
  "span",
  "strong",
  "ul"
];
function isValidElement(element) {
  return !(typeof element === "string" && !components.includes(element));
}
var Features;
(function(Features2) {
  Features2[Features2["None"] = 0] = "None";
  Features2[Features2["RenderStrategy"] = 1] = "RenderStrategy";
  Features2[Features2["Static"] = 2] = "Static";
})(Features || (Features = {}));
var RenderStrategy;
(function(RenderStrategy2) {
  RenderStrategy2[RenderStrategy2["Unmount"] = 0] = "Unmount";
  RenderStrategy2[RenderStrategy2["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));
const Render = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedClass;
  let computedStyle;
  let show;
  let hidden;
  let propsWeControl;
  let $$restProps = compute_rest_props($$props, [
    "name",
    "as",
    "slotProps",
    "el",
    "use",
    "visible",
    "features",
    "unmount",
    "static",
    "class",
    "style"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { name } = $$props;
  let { as } = $$props;
  let { slotProps } = $$props;
  let { el = null } = $$props;
  let { use = [] } = $$props;
  let { visible = true } = $$props;
  let { features = Features.None } = $$props;
  let { unmount = true } = $$props;
  let { static: static_ = false } = $$props;
  let { class: classProp = void 0 } = $$props;
  let { style = void 0 } = $$props;
  if (!as) {
    throw new Error(`<${name}> did not provide an \`as\` value to <Render>`);
  }
  if (!isValidElement(as)) {
    throw new Error(`<${name}> has an invalid or unsupported \`as\` prop: ${as}`);
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.slotProps === void 0 && $$bindings.slotProps && slotProps !== void 0)
    $$bindings.slotProps(slotProps);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  if ($$props.unmount === void 0 && $$bindings.unmount && unmount !== void 0)
    $$bindings.unmount(unmount);
  if ($$props.static === void 0 && $$bindings.static && static_ !== void 0)
    $$bindings.static(static_);
  if ($$props.class === void 0 && $$bindings.class && classProp !== void 0)
    $$bindings.class(classProp);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    computedClass = typeof classProp === "function" ? classProp(slotProps) : classProp;
    computedStyle = typeof style === "function" ? style(slotProps) : style;
    show = visible || features & Features.Static && static_ || !(features & Features.RenderStrategy && unmount);
    hidden = !visible && !(features & Features.Static && static_) && features & Features.RenderStrategy && !unmount;
    propsWeControl = {
      class: computedClass,
      style: `${computedStyle ?? ""}${hidden ? " display: none" : ""}` || void 0
    };
    {
      if (propsWeControl.style === void 0) {
        delete propsWeControl.style;
      }
    }
    $$rendered = `${show ? `${typeof as === "string" ? `${((tag) => {
      return tag ? `<${as}${spread(
        [
          escape_object($$restProps),
          escape_object(propsWeControl),
          { hidden: hidden || void 0 || null }
        ],
        {}
      )}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(as)}` : `${validate_component(as || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign({}, { use: [...use, forwardEvents] }, $$restProps, propsWeControl, { hidden: hidden || void 0 }, { el }),
      {
        el: ($$value) => {
          el = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
var DialogStates;
(function(DialogStates2) {
  DialogStates2[DialogStates2["Open"] = 0] = "Open";
  DialogStates2[DialogStates2["Closed"] = 1] = "Closed";
})(DialogStates || (DialogStates = {}));
const DIALOG_CONTEXT_NAME = "headlessui-dialog-context";
function useDialogContext(component) {
  let context = getContext(DIALOG_CONTEXT_NAME);
  if (context === void 0) {
    throw new Error(`<${component} /> is missing a parent <Dialog /> component.`);
  }
  return context;
}
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dialogState;
  let visible;
  let enabled;
  let _cleanup;
  let _cleanupScrollLock;
  let _cleanupClose;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "open", "initialFocus"]);
  let $api, $$unsubscribe_api;
  let $openClosedState, $$unsubscribe_openClosedState;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { open = void 0 } = $$props;
  let { initialFocus = null } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["close"]);
  const dispatch = createEventDispatcher();
  let containers = /* @__PURE__ */ new Set();
  let openClosedState = useOpenClosed();
  $$unsubscribe_openClosedState = subscribe(openClosedState, (value) => $openClosedState = value);
  let internalDialogRef = null;
  const id2 = `headlessui-dialog-${useId()}`;
  onDestroy(() => {
    if (_cleanup) {
      _cleanup();
    }
  });
  let titleId;
  let api = writable({
    titleId,
    dialogState,
    setTitleId(id3) {
      if (titleId === id3)
        return;
      titleId = id3;
    },
    close() {
      dispatch("close", false);
    }
  });
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  setContext(DIALOG_CONTEXT_NAME, api);
  onDestroy(() => {
    if (_cleanupScrollLock) {
      _cleanupScrollLock();
    }
  });
  onDestroy(() => {
    if (_cleanupClose) {
      _cleanupClose();
    }
  });
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.initialFocus === void 0 && $$bindings.initialFocus && initialFocus !== void 0)
    $$bindings.initialFocus(initialFocus);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        open = open === void 0 && openClosedState !== void 0 ? match($openClosedState, {
          [State.Open]: true,
          [State.Closed]: false
        }) : open;
        let hasOpen = open !== void 0 || openClosedState !== void 0;
        if (!hasOpen) {
          throw new Error(`You forgot to provide an \`open\` prop to the \`Dialog\` component.`);
        }
        if (typeof open !== "boolean") {
          throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${open}`);
        }
      }
    }
    dialogState = open ? DialogStates.Open : DialogStates.Closed;
    visible = openClosedState !== void 0 ? $openClosedState === State.Open : dialogState === DialogStates.Open;
    enabled = dialogState === DialogStates.Open;
    _cleanup = (() => {
      if (_cleanup) {
        _cleanup();
      }
      return useInertOthers(internalDialogRef, enabled);
    })();
    {
      api.update((obj) => {
        return { ...obj, titleId, dialogState };
      });
    }
    _cleanupScrollLock = (() => {
      if (_cleanupScrollLock) {
        _cleanupScrollLock();
      }
      if (dialogState !== DialogStates.Open)
        return;
      return;
    })();
    _cleanupClose = (() => {
      if (_cleanupClose) {
        _cleanupClose();
      }
      if (dialogState !== DialogStates.Open)
        return;
      let container = internalDialogRef;
      if (!container)
        return;
      let observer = new IntersectionObserver((entries) => {
        for (let entry of entries) {
          if (entry.boundingClientRect.x === 0 && entry.boundingClientRect.y === 0 && entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
            $api.close();
          }
        }
      });
      observer.observe(container);
      return () => observer.disconnect();
    })();
    propsWeControl = {
      id: id2,
      role: "dialog",
      "aria-modal": dialogState === DialogStates.Open ? true : void 0,
      "aria-labelledby": titleId
    };
    slotProps = { open };
    $$rendered = ` ${validate_component(FocusTrap, "FocusTrap").$$render(
      $$result,
      {
        containers,
        enabled,
        options: { initialFocus }
      },
      {},
      {}
    )} ${validate_component(StackContextProvider, "StackContextProvider").$$render(
      $$result,
      {
        element: internalDialogRef,
        onUpdate: (message, element) => {
          return match(message, {
            [StackMessage.Add]() {
              containers = /* @__PURE__ */ new Set([...containers, element]);
            },
            [StackMessage.Remove]() {
              containers.delete(element);
              containers = /* @__PURE__ */ new Set([...containers]);
            }
          });
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(ForcePortalRootContext, "ForcePortalRootContext").$$render($$result, { force: true }, {}, {
            default: () => {
              return `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(PortalGroup, "PortalGroup").$$render($$result, { target: internalDialogRef }, {}, {
                    default: () => {
                      return `${validate_component(ForcePortalRootContext, "ForcePortalRootContext").$$render($$result, { force: false }, {}, {
                        default: () => {
                          return `${validate_component(DescriptionProvider, "DescriptionProvider").$$render($$result, { name: "DialogDescription", slotProps }, {}, {
                            default: ({ describedby }) => {
                              return `${validate_component(Render, "Render").$$render(
                                $$result,
                                Object.assign(
                                  {},
                                  { ...$$restProps, ...propsWeControl },
                                  { as },
                                  { slotProps },
                                  { use: [...use, forwardEvents] },
                                  { name: "Dialog" },
                                  { "aria-describedby": describedby },
                                  { visible },
                                  {
                                    features: Features.RenderStrategy | Features.Static
                                  },
                                  { el: internalDialogRef }
                                ),
                                {
                                  el: ($$value) => {
                                    internalDialogRef = $$value;
                                    $$settled = false;
                                  }
                                },
                                {
                                  default: () => {
                                    return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
                                  }
                                }
                              )}`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_openClosedState();
  return $$rendered;
});
var DisclosureStates;
(function(DisclosureStates2) {
  DisclosureStates2[DisclosureStates2["Open"] = 0] = "Open";
  DisclosureStates2[DisclosureStates2["Closed"] = 1] = "Closed";
})(DisclosureStates || (DisclosureStates = {}));
var Focus;
(function(Focus2) {
  Focus2[Focus2["First"] = 0] = "First";
  Focus2[Focus2["Previous"] = 1] = "Previous";
  Focus2[Focus2["Next"] = 2] = "Next";
  Focus2[Focus2["Last"] = 3] = "Last";
  Focus2[Focus2["Specific"] = 4] = "Specific";
  Focus2[Focus2["Nothing"] = 5] = "Nothing";
})(Focus || (Focus = {}));
var ListboxStates;
(function(ListboxStates2) {
  ListboxStates2[ListboxStates2["Open"] = 0] = "Open";
  ListboxStates2[ListboxStates2["Closed"] = 1] = "Closed";
})(ListboxStates || (ListboxStates = {}));
var MenuStates;
(function(MenuStates2) {
  MenuStates2[MenuStates2["Open"] = 0] = "Open";
  MenuStates2[MenuStates2["Closed"] = 1] = "Closed";
})(MenuStates || (MenuStates = {}));
var PopoverStates;
(function(PopoverStates2) {
  PopoverStates2[PopoverStates2["Open"] = 0] = "Open";
  PopoverStates2[PopoverStates2["Closed"] = 1] = "Closed";
})(PopoverStates || (PopoverStates = {}));
var Reason;
(function(Reason2) {
  Reason2["Finished"] = "finished";
  Reason2["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));
var TreeStates;
(function(TreeStates2) {
  TreeStates2["Visible"] = "visible";
  TreeStates2["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));
const TRANSITION_CONTEXT_NAME = "headlessui-transition-context";
const NESTING_CONTEXT_NAME = "headlessui-nesting-context";
function hasTransitionContext() {
  return getContext(TRANSITION_CONTEXT_NAME) !== void 0;
}
function useTransitionContext() {
  let context = getContext(TRANSITION_CONTEXT_NAME);
  if (context === void 0) {
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  }
  return context;
}
function useParentNesting() {
  let context = getContext(NESTING_CONTEXT_NAME);
  if (context === void 0) {
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  }
  return context;
}
function hasChildren(bag) {
  if ("children" in bag)
    return hasChildren(bag.children);
  return bag.filter(({ state }) => state === TreeStates.Visible).length > 0;
}
function useNesting(done) {
  let transitionableChildren = [];
  function unregister(childId, strategy = RenderStrategy.Hidden) {
    let idx = transitionableChildren.findIndex(({ id: id2 }) => id2 === childId);
    if (idx === -1)
      return;
    let hadChildren = hasChildren(transitionableChildren);
    match(strategy, {
      [RenderStrategy.Unmount]() {
        transitionableChildren.splice(idx, 1);
      },
      [RenderStrategy.Hidden]() {
        transitionableChildren[idx].state = TreeStates.Hidden;
      }
    });
    if (hadChildren && !hasChildren(transitionableChildren)) {
      done?.();
    }
  }
  function register(childId) {
    let child = transitionableChildren.find(({ id: id2 }) => id2 === childId);
    if (!child) {
      transitionableChildren.push({ id: childId, state: TreeStates.Visible });
    } else if (child.state !== TreeStates.Visible) {
      child.state = TreeStates.Visible;
    }
    return () => unregister(childId, RenderStrategy.Unmount);
  }
  return {
    children: transitionableChildren,
    register,
    unregister
  };
}
export {
  DialogStates as D,
  Features as F,
  NESTING_CONTEXT_NAME as N,
  Render as R,
  State as S,
  TreeStates as T,
  songs_tracks_names_only as a,
  raie_links as b,
  useId as c,
  useTransitionContext as d,
  useParentNesting as e,
  forwardEventsBuilder as f,
  useOpenClosedProvider as g,
  RenderStrategy as h,
  useNesting as i,
  useOpenClosed as j,
  TRANSITION_CONTEXT_NAME as k,
  hasTransitionContext as l,
  match as m,
  hasOpenClosed as n,
  Dialog as o,
  raie_links_arrs as r,
  songsList as s,
  useDialogContext as u
};
