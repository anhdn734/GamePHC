RPGJS.defines({
	canvas: "canvas_id",
	autoload: true
}).ready(function() {

	RPGJS.Player.init({
		actor: 1,
		//start: {x: 1, y: 1, id: 1} // GAME_START
                start: {x: 1, y: 10, id: 2}
	});

	RPGJS.Scene.map(function() {

        /* game begin intro */
        var common = Class.New("Game_CommonEvents", ["MAP_1_SHOWINTRO"]);
        // common.exec();

        /* I need to set some variable here */
        // pass MAP-1
        RPGJS.Switches.set("MAP_1_NGUYENTRAI", true);
        RPGJS.Switches.set("MAP_1_THODIA", true);

        // RPGJS.Switches.set("MAP_2_CONIEMTIN", true);
        RPGJS.Switches.set("MAP_3_MUALUONGTHUC", true);
        /* to play a sound */
        // RPGJS.System.bgmPlay(1);
	});
});