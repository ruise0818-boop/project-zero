import {randomUUID} from 'node:crypto';
export function createGame({code='4719',saved,onSave=()=>{}}={}){
 if(!/^\d{4}$/.test(code))throw Error('GAME_CODE must be four digits');
 const clues={archive:'第一段：'+code.slice(0,2),terminal:'第二段：'+code.slice(2),memo:'顺序：档案 → 终端'};
 let d=saved||{runId:randomUUID(),clues:[],verified:false,power:false,security:false,escaped:false,logs:[]};
 const state=()=>({runId:d.runId,clues:[...d.clues],verified:d.verified,power:d.power,security:d.security,escaped:d.escaped,progress:Math.round((d.clues.length+Number(d.verified)+Number(d.power)+Number(d.security)+Number(d.escaped))/7*100)});
 const logs=()=>structuredClone(d.logs);
 function act(tool,args={}){let result;switch(tool){case 'inspect_room':result={room:'E-01',objects:Object.keys(clues),systems:['power','security']};break;case 'read_clue':if(Object.hasOwn(clues,args.id)){if(!d.clues.includes(args.id))d.clues.push(args.id);result={ok:true,clue:clues[args.id]}}else result={ok:false,error:'未知线索'};break;case 'verify_code':if(d.clues.length===3&&args.code===code){d.verified=true;result={ok:true}}else result={ok:false,error:'线索不足或密码错误'};break;case 'activate_system':if(d.verified&&args.system==='power'){d.power=true;result={ok:true}}else if(d.power&&args.system==='security'){d.security=true;result={ok:true}}else result={ok:false,error:'前置条件未满足'};break;case 'unlock_door':if(d.verified&&d.power&&d.security){d.escaped=true;result={ok:true}}else result={ok:false,error:'出口锁定'};break;case 'get_game_state':result=state();break;case 'get_action_log':return {logs:logs()};default:result={ok:false,error:'权限拒绝'};}
 d.logs.push({id:d.logs.length+1,time:new Date().toISOString(),tool,args:tool==='verify_code'?{code:'[redacted]'}:args,result:tool==='read_clue'&&result.ok?{ok:true,clue:'[redacted]'}:result,state:state()});onSave(d);return result;}
 return {act,state,logs};}
