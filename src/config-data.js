const races = [
    {
        id: 103, name: '恶魔', effet: '恶魔的普攻有40%几率灼烧目标20法力并为恶魔本身回复15/30/45法力', number: '2,4,6', heros: []
    },
    {
        id: 104, name: '龙', effet: '龙免疫75%魔法伤害', number: 2, heros: []
    },
    {
        id: 105, name: '浪人', effet: '战斗开始时，如果一名浪人的邻近格子没有友军，获得一层等同于自身最大生命值的护盾', number: 1, heros: []
    },
    {
        id: 106, name: '极地', effet: '极地生物们的攻击有20/33/50%几率对目标造成持续1.5秒的晕眩效果', number: '2,4,6', heros: []
    },
    {
        id: 107, name: '帝国', effet: '1名随机/所有的帝国单位造成双倍伤害', number: '2,4', heros: []
    },
    {
        id: 108, name: '忍者', effet: '提高忍者50/80攻击力和法术强度', number: '1,4', heros: []
    },
    {
        id: 109, name: '贵族', effet: '增加1个随机/所有友军50护甲和魔抗并且每次攻击治疗该友军30点生命值', number: '3,6', heros: []
    },
    {
        id: 110, name: '暗影', effet: '在战斗开始时诅咒一名随机的敌人，将其生命值设置为100', number: 2, heros: []
    },
    {
        id: 111, name: '海盗', effet: '在与另一名玩家作战之后，最多可赚取4枚额外的金币', number: 3, heros: []
    },
    {
        id: 112, name: '机器人', effet: '机器人在开始战斗时就有满额的法力值', number: 1, heros: []
    },
    {
        id: 113, name: '虚空', effet: '1名/所有己方的虚空英雄在本回合战斗中造成真实伤害', number: '2,4', heros: []
    },
    {
        id: 114, name: '狂野', effet: '野性友军/所有友军的攻击会生成怒气层数，最多5层，每层怒气提供10%的攻击速度加成。并且他们的普通攻击不会被闪避', number: '2,4', heros: []
    },
    {
        id: 115, name: '约德尔人', effet: '对友方约德尔人进行的攻击会有30/60/90%几率未命中', number: '3,6,9', heros: []
    },
    {
        id: 116, name: '海克斯科技', effet: '朝一名带着装备的敌方单位扔出一颗炸弹，并且禁用1/2格半径范围内的所有装备，持续7秒', number: '2,4', heros: []
    }]
    //以下为职业:
    const pros=[
    {
        id: 117, name: '刺客', effet: '刺客们会额外获得75%暴击伤害和5%暴击几率/150%暴击伤害和20%暴击几率/225%暴击伤害和30%暴击几率。非刺客类英雄的移动会在战斗开始时被减慢', number: '3,6,9', heros: []
    },
    {
        id: 118, name: '剑士', effet: '剑士们的每次攻击有45%几率打出1/2/4次额外攻击', number: '3,6,9', heros: []
    },
    {
        id: 119, name: '斗士', effet: '斗士获得额外的200/500/900点最大生命值', number: '2,4,6', heros: []
    },
    {
        id: 120, name: '元素使', effet: '元素使们的攻击提供双倍法力值，在战斗开始时，召唤一个元素魔像', number: 3, heros: []
    },
    {
        id: 121, name: '护卫', effet: '在战斗开始时，所有守护者和邻近格子的友军获得45点护甲加成。守护者们不会给自己提供增益', number: 2, heros: []
    },
    {
        id: 122, name: '枪手', effet: '在攻击之后，枪手们的攻击有50%几率对另一名随机/另两名随机/另四名随机敌人打出额外的攻击', number: '2,4,6', heros: []
    },
    {
        id: 123, name: '骑士', effet: '整支队伍无视来自所有来源的15/35/60伤害', number: '2,4,6', heros: []
    },
    {
        id: 124, name: '游侠', effet: '游侠们每过3秒都有25/70%几率来使他们在接下来的3秒内攻速翻倍', number: '2,4', heros: []
    },
    {
        id: 125, name: '换形师', effet: '换形师会在他们变形时获得额外的60/100%最大生命值', number: '3,6', heros: []
    },
    {
        id: 126, name: '法师', effet: '所有友军增加40/100/175%技能伤害', number: '3,6,9', heros: []
    }
]
const heros = [
    { id: 0, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561615390_204507.png", name: "暗裔剑魔", price: 3, race: "恶魔", pro: { "剑士": true }, proArr: ["剑士"] },
    { id: 1, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561615588_279793.png", name: "九尾妖狐", price: 2, race: "狂野", pro: { "法师": true }, proArr: ["法师"] },
    { id: 2, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561615757_554655.png", name: "离群之刺", price: 4, race: "忍者", pro: { "刺客": true }, proArr: ["刺客"] },
    { id: 3, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561621207_334923.png", name: "冰晶凤凰", price: 5, race: "极地", pro: { "元素使": true }, proArr: ["元素使"] },
    { id: 4, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561623547_650257.png", name: "寒冰射手", price: 3, race: "极地", pro: { "游侠": true }, proArr: ["游侠"] },
    { id: 5, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561623891_714589.png", name: "铸星龙王", price: 4, race: "龙", pro: { "法师": true }, proArr: ["法师"] },
    { id: 6, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561624150_325717.png", name: "蒸汽机器人", price: 2, race: "机器人", pro: { "斗士": true }, proArr: ["斗士"] },
    { id: 7, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561624243_682143.png", name: "复仇焰魂", price: 4, race: "恶魔", pro: { "元素使": true }, proArr: ["元素使"] },
    { id: 8, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561624815_453852.png", name: "布隆", price: 2, race: "极地", pro: { "护卫": true }, proArr: ["护卫"] },
    { id: 9, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561625338_598361.png", name: "科加斯", price: 4, race: "虚空", pro: { "斗士": true }, proArr: ["斗士"] },
    { id: 10, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561625554_116702.png", name: "诺克萨斯之手", price: 1, race: "帝国", pro: { "骑士": true }, proArr: ["骑士"] },
    { id: 11, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561625667_107675.png", name: "德莱文", price: 4, race: "帝国", pro: { "剑士": true }, proArr: ["剑士"] },
    { id: 12, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561625767_830528.png", name: "蜘蛛女皇", price: 1, race: "恶魔", pro: { "换形师": true }, proArr: ["换形师"] },
    { id: 13, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561628270_126105.png", name: "痛苦之拥", price: 3, race: "恶魔", pro: { "刺客": true }, proArr: ["刺客"] },
    { id: 14, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561628406_560952.png", name: "无双剑姬", price: 1, race: "贵族", pro: { "剑士": true }, proArr: ["剑士"] },
    { id: 15, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561628545_956173.png", name: "海洋之灾", price: 3, race: "海盗", pro: { "剑士": true, "枪手": true }, proArr: ["剑士", "枪手"] },
    { id: 16, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561630433_215664.png", name: "盖伦", price: 1, race: "贵族", pro: { "骑士": true }, proArr: ["骑士"] },
    { id: 17, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561631105_681136.png", name: "迷失之牙", price: 4, race: "狂野，约德尔人", pro: { "换形师": true }, proArr: ["换形师"] },
    { id: 18, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190708/1562569854_420238.png", name: "法外狂徒", price: 1, race: "海盗", pro: { "枪手": true }, proArr: ["枪手"] },
    { id: 19, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561631325_266409.png", name: "卡尔萨斯", price: 5, race: "暗影", pro: { "法师": true }, proArr: ["法师"] },
    { id: 20, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561631439_736670.png", name: "虚空行者", price: 1, race: "虚空", pro: { "法师": true }, proArr: ["法师"] },
    { id: 21, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561633736_419493.png", name: "卡特琳娜", price: 3, race: "帝国", pro: { "刺客": true }, proArr: ["刺客"] },
    { id: 22, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561634436_967926.png", name: "正义天使", price: 5, race: "贵族", pro: { "骑士": true }, proArr: ["骑士"] }, 
    { id: 23, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561634594_940597.png", name: "狂暴之心", price: 3, race: "忍者，约德尔人", pro: { "元素使": true }, proArr: ["元素使"]}, 
    { id: 24, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561634871_914945.png", name: "虚空掠夺者", price: 1, race: "虚空", pro: { "刺客": true }, proArr: ["刺客"] }, 
    { id: 25, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561635036_242750.png", name: "永猎双子", price: 4, race: "暗影", pro: { "游侠": true }, proArr: ["游侠"] }, 
    { id: 26, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561635381_155495.png", name: "曙光女神", price: 4, race: "贵族", pro: { "护卫": true }, proArr: ["护卫"] }, 
    { id: 27, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561635539_921395.png", name: "冰霜女巫", price: 2, race: "极地", pro: { "元素使": true }, proArr: ["元素使"] }, 
    { id: 28, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561635671_171096.png", name: "圣枪游侠", price: 2, race: "贵族", pro: { "枪手": true }, proArr: ["枪手"] }, 
    { id: 29, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561635796_879930.png", name: "仙灵女巫", price: 2, race: "约德尔人", pro: { "法师": true }, proArr: ["法师"] }, 
    { id: 30, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561635906_341283.png", name: "赏金猎人", price: 5, race: "海盗", pro: { "枪手": true }, proArr: ["枪手"] }, 
    { id: 31, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561636009_978219.png", name: "铁铠冥魂", price: 1, race: "暗影", pro: { "骑士": true }, proArr: ["骑士"] }, 
    { id: 32, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561636183_510092.png", name: "堕落天使", price: 3, race: "恶魔", pro: { "法师": true }, proArr: ["法师"] }, 
    { id: 33, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561636305_487610.png", name: "狂野女猎手", price: 1, race: "狂野", pro: { "换形师": true }, proArr: ["换形师"] }, 
    { id: 34, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561636404_689056.png", name: "圣锤之毅", price: 3, race: "约德尔人", pro: { "骑士": true }, proArr: ["骑士"] }, 
    { id: 35, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561636507_383796.png", name: "血港魅影", price: 2, race: "海盗", pro: { "刺客": true }, proArr: ["刺客"] }, 
    { id: 36, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561636784_760859.png", name: "虚空遁地兽", price: 2, race: "虚空", pro: { "斗士": true }, proArr: ["斗士"] }, 
    { id: 37, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561636870_227482.png", name: "傲之追猎者", price: 3, race: "狂野", pro: { "刺客": true }, proArr: ["刺客"] }, 
    { id: 38, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561637000_777917.png", name: "北地之怒", price: 4, race: "极地", pro: { "骑士": true }, proArr: ["骑士"] }, 
    { id: 39, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561637122_406412.png", name: "暮光之眼", price: 2, race: "忍者", pro: { "剑士": true }, proArr: ["剑士"] }, 
    { id: 40, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561637257_338866.png", name: "龙血武姬", price: 3, race: "龙", pro: { "换形师": true }, proArr: ["换形师"] }, 
    { id: 41, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561637389_579283.png", name: "斯维因", price: 5, race: "恶魔，帝国", pro: { "换形师": true }, proArr: ["换形师"] }, 
    { id: 42, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561637531_858310.png", name: "麦林炮手", price: 1, race: "约德尔人", pro: { "枪手": true }, proArr: ["枪手"] }, 
    { id: 43, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561637644_776662.png", name: "惩戒之箭", price: 2, race: "恶魔", pro: { "游侠": true }, proArr: ["游侠"] }, 
    { id: 44, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561637812_526023.png", name: "暗夜猎手", price: 1, race: "贵族", pro: { "游侠": true }, proArr: ["游侠"] }, 
    { id: 45, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561637938_687411.png", name: "邪恶小法师", price: 3, race: "约德尔人", pro: { "法师": true }, proArr: ["法师"] }, 
    { id: 46, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561638040_535844.png", name: "雷霆咆哮", price: 3, race: "极地", pro: { "斗士": true }, proArr: ["斗士"] }, 
    { id: 47, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561638183_921761.png", name: "祖安怒兽", price: 1, race: "狂野", pro: { "斗士": true }, proArr: ["斗士"] }, 
    { id: 48, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561638345_137725.png", name: "疾风剑豪", price: 5, race: "浪人", pro: { "剑士": true }, proArr: ["剑士"] }, 
    { id: 49, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190627/1561638465_269862.png", name: "影流之主", price: 2, race: "忍者", pro: { "刺客": true }, proArr: ["刺客"] }, 
    { id: 50, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190708/1562570602_674896.png", name: "卡牌大师", price: 2, race: "海盗", pro: { "法师": true }, proArr: ["法师"] }, 
    { id: 51, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190824/1566611634_137946.png", name: "卡蜜尔", price: 1, race: "海克斯科技", pro: { "剑士": true }, proArr: ["剑士"] }, 
    { id: 52, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190824/1566612877_247002.png", name: "杰斯", price: 2, race: "海克斯科技", pro: { "换形师": true }, proArr: ["换形师"] }, 
    { id: 53, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190824/1566613111_798566.png", name: "蔚", price: 3, race: "海克斯科技", pro: { "斗士": true }, proArr: ["斗士"] }, 
    { id: 54, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190824/1566613274_345642.png", name: "金克斯", price: 4, race: "海克斯科技", pro: { "枪手": true }, proArr: ["枪手"] }, 
    { id: 55, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190911/1568202931_207556.png", name: "潘森", price: 5, race: "龙", pro: { "护卫": true }, proArr: ["护卫"] }, 
    { id: 56, img: "https://ol.3dmgame.com/uploads/images/thumbnews/20190926/1569464670_498773.png", name: "卡莎", price: 5, race: "虚空", pro: { "刺客": true, "游侠": true }, proArr: ["刺客", "游侠"] }]

//comps小件  staffs大件
const comps=[
    {'id':53,'name':'暴击手套','img':'https://ol.3dmgame.com/uploads/images/common/20191010/1570674856_835702.jpg','info':['+10%暴击率,+10%回避率'],'need':false},{"id":0,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067180_897614.png","name":"金铲","info":["无属性加成，合成其他装备后，会翻倍合成装备属性。"],"need":false},{"id":1,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067203_315816.png","name":"锁子甲","info":["+20点护甲"],"need":false},{"id":2,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067224_980446.png","name":"巨人腰带","info":["+200点生命值"],"need":false},{"id":3,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067244_231178.png","name":"暴风大剑","info":["+15点攻击力"],"need":false},{"id":4,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067272_206092.png","name":"无用大棒","info":["+20%技能伤害"],"need":false},{"id":5,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067294_456248.jpg","name":"负极斗篷","info":["+20点魔法抗性"],"need":false},{"id":6,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067330_237490.png","name":"反曲之弓","info":["+20%攻击速度"],"need":false},{"id":7,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067451_899424.png","name":"女神之泪","info":["+20法力值"],"need":false}
]

const staffs = [{"id":8,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067530_623119.png","name":"自然之力","info":["+1人口"],"need":[0,0]},{"id":9,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067593_718913.png","name":"破败王者之刃","info":["攻击速度+40%","携带者也是剑士"],"need":[0,6]},{"id":10,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067663_592711.png","name":"饮血剑","info":["攻击力+15魔抗+20","+40%吸血效果。"],"need":[5,3]},{"id":11,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067807_761482.png","name":"诅咒之刃","info":["魔抗+20攻速+20%","攻击有较低机率缩小敌人，使敌人星级-1","可以将目标降低至0星阶"],"need":[5,6]},{"id":12,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562067953_343166.png","name":"冰霜之心","info":["护甲+20法力值+20","邻近格子的敌人降低35%攻击速度。"],"need":[1,7]},{"id":13,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562068191_686500.png","name":"冰霜之锤","info":["生命值+400","携带者也是冰川单位。"],"need":[0,2]},{"id":14,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562068262_322192.png","name":"守护天使","info":["攻击力+15护甲+20","2秒后复活并且回复1000生命值。"],"need":[3,1]},{"id":15,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562068367_187630.png","name":"鬼索的狂暴之刃","info":["技能伤害+20%攻速+20%","每次攻击增加4%攻击速度，无上限"],"need":[6,4]},{"id":16,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562071728_901220.png","name":"海克斯科技枪刃","info":["攻击力+15技能伤害+20%","回复造成伤害的25%生命值。（不受到装备效果的影响(例如带着荆棘之甲的希瓦娜)）"],"need":[4,3]},{"id":17,"img":"https://ol.3dmgame.com/uploads/images/common/20190702/1562071790_671047.png","name":"肃静","info":["魔抗+20法力值+20","命中时有33%的几率阻止敌方英雄获取法力值(我们称它为法力锁)，持续4秒。"],"need":[5,7]},{"id":18,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562133392_299726.png","name":"离子火花","info":["技能伤害+20%魔抗+20","每当敌人使用技能，他们受到125点真实伤害。"],"need":[5,4]},{"id":19,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562133473_711779.png","name":"骑士之誓","info":["护甲+40","携带者也是骑士单位。"],"need":[0,1]},{"id":20,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562133542_643028.png","name":"钢铁烈焰之匣","info":["技能伤害+20%护甲+20","战斗开始前，会为持有者及其左右两格内的英雄施加250点护盾，持续6秒。"],"need":[1,4]},{"id":21,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562133599_266552.png","name":"卢登的回声","info":["技能伤害+20%法力值+20","技能对命中目标造成180点溅射伤害。"],"need":[4,7]},{"id":22,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562133657_706900.png","name":"莫雷洛秘典","info":["技能伤害+20%生命值+200","技能造成灼烧伤害，持续10秒共20%最大生命值。"],"need":[4,2]},{"id":23,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562133711_822339.png","name":"幻影之舞","info":["攻击速度+20%护甲+20","携带者会闪避所有暴击。"],"need":[1,6]},{"id":24,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562133765_637141.png","name":"灭世者的死亡之帽","info":["技能伤害+40%","增加50%技能伤害。"],"need":[4,4]},{"id":25,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562133907_144892.png","name":"疾射火炮","info":["攻击速度+40%","携带者的攻击距离加倍。"],"need":[6,6]},{"id":26,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562133987_765364.png","name":"红BUFF","info":["生命值+200护甲+20","攻击造成灼烧伤害，持续10秒共20%最大生命值。"],"need":[2,1]},{"id":27,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562134042_289440.png","name":"救赎","info":["生命值+200魔法值+20","在25%生命值时触发，治疗附近所有友军1200点生命值。"],"need":[2,7]},{"id":28,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562134113_248782.png","name":"卢安娜的飓风","info":["魔抗+40","普攻对额外1个目标造成伤害，这些额外攻击造成25%的伤害，并附带普攻特效。"],"need":[0,5]},{"id":29,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562134379_211114.png","name":"炽天使之拥","info":["法力值+40","每次有技能被施放时，回复20法力值。"],"need":[7,7]},{"id":30,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562134494_700300.png","name":"斯塔缇克电刃","info":["攻速+20%法力值+20","每3次攻击，对3个额外的目标造成100点溅射魔法伤害。"],"need":[7,6]},{"id":31,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562134555_878406.png","name":"折剑者","info":["魔抗+20护甲+20","攻击将有33%几率缴械敌方单位3秒。"],"need":[5,1]},{"id":32,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562134997_386773.png","name":"荆棘之甲","info":["护甲+40","反弹所减免伤害的100%，造成魔法伤害。"],"need":[1,1]},{"id":33,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562135094_417321.png","name":"巨型九头蛇","info":["生命值+200攻速+20%","对目标和目标身后的敌人造成6%最大生命值的伤害。"],"need":[2,6]},{"id":34,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562135147_851247.png","name":"狂徒铠甲","info":["生命值+400","每秒恢复6%已损失生命值。（每段回复最大值为400）"],"need":[2,2]},{"id":35,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562135222_735290.png","name":"悠米","info":["技能伤害+40%","携带者也是法师单位。"],"need":[0,4]},{"id":36,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562135277_209719.png","name":"幽梦之灵","info":["攻击力+30","携带者也是刺客单位。"],"need":[0,3]},{"id":37,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562135330_222896.png","name":"基克的先驱","info":["攻击力+15生命值+200","为持有者左右两格内的友军提供15%攻击速度。"],"need":[3,2]},{"id":38,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562135387_523480.png","name":"灵风","info":["魔抗+20生命值+200","战斗开始时，放逐1个敌人持续6秒。"],"need":[2,5]},{"id":39,"img":"https://ol.3dmgame.com/uploads/images/common/20190703/1562154510_168268.png","name":"龙爪","info":["魔抗+40","对抗魔法伤害时获得75%抗性。"],"need":[5,5]},{"id":40,"img":"https://ol.3dmgame.com/uploads/images/common/20190711/1562808774_164978.png","name":"暗裔","info":["法力值+40","携带者也是恶魔单位。"],"need":[0,7]},{"id":41,"img":"https://ol.3dmgame.com/uploads/images/common/20190720/1563617364_555901.png","name":"朔极之矛","info":["攻击力+15法力值+20","在使用技能后，携带者的每次攻击回复15%最大法力值。"],"need":[3,7]},{"id":42,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569468053_678840.jpg","name":"复用型十字弩","info":["配方：拳套+反曲弓","效果：在携带者死亡时，这个装备会跳到一名友方英雄身上并提供额外的20%攻击速度和暴击几率。"],"need":[53,6]},{"id":43,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569468229_217838.jpg","name":"珠光护手","info":["(+20%法术强度，+20%暴击概率)","携带者的技能可以暴击。[唯一-每个英雄仅可装备一件]"],"need":[53,4]},{"id":44,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569468434_132065.jpg","name":"正义之手","info":["(+20法力值，+10%暴击概率，+10%闪避概率)","在每个备战环节开始时，获得以下效果之一：普攻和技能造成+40%伤害;普攻在命中时回复40生命值。"],"need":[53,7]},{"id":45,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569468501_706288.jpg","name":"冰脉护手","info":["(+20护甲，+20%闪避概率)","在携带者闪避时，创造一个冰霜领域。领域内的敌人会被减缓35%攻击速度。"],"need":[53,1]},{"id":46,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569468639_213758.jpg","name":"水银","info":["(+20魔抗，+20%闪避概率)","携带者获得一层护盾来防止下一个施加给其的控制效果。这个护盾会在3秒后刷新。"],"need":[53,5]},{"id":47,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569468720_477258.jpg","name":"伏击之爪","info":["(+200生命值，+20%闪避概率)","在每个备战环节开始时，携带者获得一个护盾来格挡其所受的第一个敌方技能。","打破该护盾的敌人会被晕眩5秒。"],"need":[53,2]},{"id":48,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569468788_990726.jpg","name":"连指手套","info":["(+20%暴击概率，+20%闪避概率)","携带者也是一个【约德尔人】。[唯一-每个英雄仅可装备一件]"],"need":[53,0]},{"id":49,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569468966_897604.jpg","name":"窃贼手套","info":["(+20%暴击概率，+20%闪避概率)","在每个备战环节开始时，携带者都会装备上2件临时装备。","临时装备的品质基于你的对局内等级。","[需要用掉3个装备格]"],"need":[53,53]},{"id":50,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569469064_518958.jpg","name":"死亡之刃","info":["(+30攻击力)","在携带者参与击杀一名敌人后，获得+15攻击力，持续至本回合战斗结束。","这个效果可以叠加任意层。"],"need":[3,3]},{"id":51,"img":"https://ol.3dmgame.com/uploads/images/common/20190926/1569469260_584567.jpg","name":"巨人杀手","info":["(+15攻击力，+20%攻击速度)","携带者的普通攻击造成相当于目标5%最大生命值的额外真实伤害。"],"need":[3,6]},{"id":52,"img":"https://ol.3dmgame.com/uploads/images/common/20191010/1570674880_271249.png","name":"无尽之刃","info":["(+15攻击力，+20%暴击概率)","携带者+150%暴击伤害。","(注：所有英雄初始暴击概率是25%，暴击伤害是125%。)"],"need":[53,3]}]


const icons=
{"103":{"default":"/race/em.png","active":"/race/em2.png","name":"恶魔"},"104":{"default":"/race/long.png","active":"/race/long2.png","name":"龙"},"105":{"default":"/race/liuwang.png","active":"/race/liuwang2.png","name":"浪人"},"106":{"default":"/race/binghe.png","active":"/race/binghe2.png","name":"极地"},"107":{"default":"/race/diguo.png","active":"/race/diguo2.png","name":"帝国"},"108":{"default":"/race/renzhe.png","active":"/race/renzhe2.png","name":"忍者"},"109":{"default":"/race/gaogui.png","active":"/race/gaogui2.png","name":"贵族"},"110":{"default":"/race/huanying.png","active":"/race/huanying2.png","name":"暗影"},"111":{"default":"/race/haidao.png","active":"/race/haidao2.png","name":"海盗"},"112":{"default":"/race/jiqiren.png","active":"/race/jiqiren2.png","name":"机器人"},"113":{"default":"/race/kongxu.png","active":"/race/kongxu2.png","name":"虚空"},"114":{"default":"/race/yeshen.png","active":"/race/yeshen2.png","name":"狂野"},"115":{"default":"/race/yordle.png","active":"/race/yordle2.png","name":"约德尔人"},"116":{"default":"/race/haiks.png","active":"/race/haiks2.png","name":"海克斯科技"},"117":{"default":"/race/cike.png","active":"/race/cike2.png","name":"刺客"},"118":{"default":"/race/daojiandashi.png","active":"/race/daojiandashi2.png","name":"剑士"},"119":{"default":"/race/jingzheng.png","active":"/race/jingzheng2.png","name":"斗士"},"120":{"default":"/race/yuansu.png","active":"/race/yuansu2.png","name":"元素使"},"121":{"default":"/race/jianhuren.png","active":"/race/jianhuren2.png","name":"护卫"},"122":{"default":"/race/shenqiang.png","active":"/race/shenqiang2.png","name":"枪手"},"123":{"default":"/race/qishi.png","active":"/race/qishi2.png","name":"骑士"},"124":{"default":"/race/youxia.png","active":"/race/youxia2.png","name":"游侠"},"125":{"default":"/race/bianxing.png","active":"/race/bianxing2.png","name":"换形师"},"126":{"default":"/race/wushi.png","active":"/race/wushi2.png","name":"法师"}}

heros.forEach(i=>{
    let race_arr=i.race.split('，');
    race_arr.forEach(r=>i.pro[r]=true)
})

export default {
    races,
    pros,
    staffs:staffs,
    staffComp:comps,
    heros,
    icons
}