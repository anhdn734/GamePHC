RPGJS.defines({
	canvas: "canvas_id",
	autoload: true
}).ready(function() {

	RPGJS.Player.init({
		actor: 1,
		start: {x: 1, y: 1, id: 1} // GAME_START
        // start: {x: 25, y: 10, id: 13}
	});

	RPGJS.Scene.map(function() {

        /* game begin intro */
        var common = Class.New("Game_CommonEvents", ["MAP_1_SHOWINTRO"]);
        common.exec();

        /* I need to set some variable here */
        // pass MAP-1
        /*RPGJS.Switches.set("MAP_1_NGUYENTRAI", true);
        RPGJS.Switches.set("MAP_1_THODIA", true);

        RPGJS.Switches.set("MAP_2_CONIEMTIN", true);
        RPGJS.Switches.set("MAP_3_MUALUONGTHUC", true);
        RPGJS.Switches.set("MAP_4_MOSAT", true);
        RPGJS.Switches.set("MAP_2_DADAUQUAN", true);
        RPGJS.Switches.set("STAGE_1_FINISH", true);
        RPGJS.Switches.set("MAP_13_CHUTHANH", true);
        RPGJS.Switches.set("STAGE_2_FINISH", true);
        RPGJS.Switches.set("MAP_6_CHO_BINH_THU", true);
        RPGJS.Switches.set("STAGE_3_FINISH", true);
        RPGJS.Switches.set("MAP_7_DALAYDUOCBONGHOA", true);*/

        /* to play a sound */
        // RPGJS.System.bgmPlay(1);
	});
});

function wait5s() {
    console.log('Waiting...')
    setTimeout(function() {
        console.log('SET')
        // RPGJS.Switches.set("MAP_6_TINTUC", true);
        var common = Class.New("Game_CommonEvents", ["MAP_6_CUOCCHIEN1"]);
        common.exec();
    }, 2000);
}