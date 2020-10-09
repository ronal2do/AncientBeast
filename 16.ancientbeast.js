(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{186:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r(17),n=r(6),s=r(8),g=r(4),u=r(18);t.default=function(e){e.abilities[37]=[{trigger:"onCreatureMove",require:function(t){return!!this.testRequirements()&&(null==t&&(t=this.creature.hexagons[0]),this.message="",t.trap&&"mud-bath"==t.trap.type?(e.UI.abilitiesButtons[0].changeState("noclick"),!0):(this.message="Not in a mud bath.",this.creature.effects.forEach((function(e){"mud-bath"==e.trigger&&e.deleteEffect()})),!1))},activate:function(){var t=i.extend({},this.effects[0]);if(this.isUpgraded())for(var r in t)({}).hasOwnProperty.call(t,r)&&(t[r]=2*t[r]);var a=new u.a("Spa Goggles",this.creature,this.creature,"mud-bath",{alterations:t},e);this.creature.addEffect(a);var n,s="%CreatureName"+this.creature.id+"%'s ",g=!0;for(var d in t)({}).hasOwnProperty.call(t,d)&&(g||(s+="and "),s+=d+" ",g=!1,n=t[d]);s+="+"+n,e.log(s)}},{trigger:"onQuery",_targetTeam:n.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.adjacentHexes(1),{team:this._targetTeam})},query:function(){var t=this,r=this.creature;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:r.player.flipped,team:this._targetTeam,id:r.id,requireCreature:!0,x:r.x,y:r.y,sourceCreature:r,stopOnCreature:!1,distance:1})},activate:function(t,r){this.end();var i=g.d(t).creature,n=new a.a(this.creature,this.damages,1,[],e);if(!i.takeDamage(n).kill){var s=e.grid.getHexLine(i.x,i.y,r.direction,i.flipped);s.splice(0,1);for(var u=null,d=0;d<s.length&&s[d].isWalkable(i.size,i.id,!0)&&(u=s[d],this.isUpgraded());d++){for(var o=!0,h=0;h<i.size;h++){var c=e.grid.hexes[u.y][u.x-h];if(!c.trap||"mud-bath"!==c.trap.type){o=!1;break}}if(!o)break}null!==u&&i.moveTo(u,{callback:function(){e.activeCreature.queryMove()},ignoreMovementPoint:!0,ignorePath:!0,overrideSpeed:1200,animation:"push"})}}},{trigger:"onQuery",_targetTeam:n.a.enemy,require:function(){if(!this.testRequirements())return!1;var t=s.d,r=s.q,i=this.creature,a=g.b(e.grid.getHexMap(i.x,i.y-2,0,!1,t),!0,!0,i.id,i.team).concat(g.b(e.grid.getHexMap(i.x,i.y,0,!1,r),!0,!0,i.id,i.team),g.b(e.grid.getHexMap(i.x,i.y,0,!1,t),!0,!0,i.id,i.team),g.b(e.grid.getHexMap(i.x,i.y-2,0,!0,t),!0,!0,i.id,i.team),g.b(e.grid.getHexMap(i.x,i.y,0,!0,r),!0,!0,i.id,i.team),g.b(e.grid.getHexMap(i.x,i.y,0,!0,t),!0,!0,i.id,i.team));return!!this.atLeastOneTarget(a,{team:this._targetTeam})},query:function(){var t=s.d,r=s.q,i=this,a=this.creature,n=[e.grid.getHexMap(a.x,a.y-2,0,!1,t),e.grid.getHexMap(a.x,a.y,0,!1,r),e.grid.getHexMap(a.x,a.y,0,!1,t),e.grid.getHexMap(a.x,a.y-2,0,!0,t),e.grid.getHexMap(a.x,a.y,0,!0,r),e.grid.getHexMap(a.x,a.y,0,!0,t)];n.forEach((function(e){g.b(e,!0,!0,a.id)})),e.grid.queryChoice({fnOnConfirm:function(){i.animation.apply(i,arguments)},team:this._targetTeam,requireCreature:1,id:a.id,flipped:a.flipped,choices:n})},activate:function(t){this.end();var r=g.d(t).creature;if(this.isUpgraded()){var i=new u.a("Ground Ball",this.creature,r,"onDamage",{alterations:{meditation:-1}},e);r.addEffect(i),e.log("%CreatureName"+r.id+"%'s meditation is lowered by 1")}var n=new a.a(this.creature,this.damages,1,[],e);r.takeDamage(n)}},{trigger:"onQuery",_energyNormal:30,_energySelfUpgraded:10,require:function(){return this.isUpgraded()?(this.requirements={energy:this._energySelfUpgraded},this.costs={energy:this._energySelfUpgraded}):(this.requirements={energy:this._energyNormal},this.costs={energy:this._energyNormal}),this.testRequirements()},query:function(){var t=this,r=this.creature,i=[];this.isUpgraded()&&this.creature.energy<this._energyNormal||(i=e.grid.getFlyingRange(r.x,r.y,50,1,0)),i.push(e.grid.hexes[r.y][r.x]),e.grid.hideCreatureHexes(this.creature),e.grid.queryHexes({fnOnCancel:function(){e.activeCreature.queryMove(),e.grid.clearHexViewAlterations()},fnOnConfirm:function(){t.animation.apply(t,arguments)},hexes:i,hideNonTarget:!0})},activate:function(t){e.grid.clearHexViewAlterations();var r=this.creature,i=t.x===r.x&&t.y===r.y;this.isUpgraded()&&i?(this.requirements={energy:this._energySelfUpgraded},this.costs={energy:this._energySelfUpgraded}):(this.requirements={energy:this._energyNormal},this.costs={energy:this._energyNormal}),this.end();var a=[new u.a("Slow Down",this.creature,t,"onStepIn",{requireFn:function(){return!!this.trap.hex.creature&&"A1"!=this.trap.hex.creature.type},effectFn:function(e,t){t.remainingMove--}},e)];t.createTrap("mud-bath",a,this.creature.player),i&&e.onCreatureMove(r,t)}}]}}}]);