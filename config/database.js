const sqlite3=require('sqlite3').verbose(); const path=require('path'); const fs=require('fs');
const dir=path.join(__dirname,'../data'); fs.mkdirSync(dir,{recursive:true});
const db=new sqlite3.Database(path.join(dir,'deliverypro.db'));
const run=(sql,params=[])=>new Promise((resolve,reject)=>db.run(sql,params,function(e){e?reject(e):resolve({id:this.lastID,changes:this.changes})}));
const get=(sql,params=[])=>new Promise((resolve,reject)=>db.get(sql,params,(e,row)=>e?reject(e):resolve(row)));
const all=(sql,params=[])=>new Promise((resolve,reject)=>db.all(sql,params,(e,rows)=>e?reject(e):resolve(rows)));
module.exports={db,run,get,all};
