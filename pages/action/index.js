Page({
  data:{tasks:[],xp:0,level:1,medals:0,rate:0},
  onShow(){this.sync();},
  sync(){const g=getApp().globalData;const total=g.actionTasks.length||1;this.setData({tasks:g.actionTasks,xp:g.xp,level:g.level,medals:g.medals,rate:Math.round(g.completed/total*100)});},
  done(e){
    const id=e.currentTarget.dataset.id;const g=getApp().globalData;const t=g.actionTasks.find(x=>x.id===id);
    if(!t||t.done) return; t.done=true; g.completed+=1; g.xp+=t.xp; g.level=1+Math.floor(g.xp/60); g.medals=Math.floor(g.completed/2); this.sync();
  },
  next(){wx.switchTab({url:'/pages/review/index'});}
})
