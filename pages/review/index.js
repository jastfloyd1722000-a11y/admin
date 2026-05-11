Page({
  data:{completed:0,total:0,xp:0,level:1,medals:0,radar:{},advice:''},
  onShow(){
    const g=getApp().globalData;const c=g.completed;
    this.setData({
      completed:c,total:g.actionTasks.length,xp:g.xp,level:g.level,medals:g.medals,
      radar:{emotion:60+c*8,execute:50+c*12,focus:45+c*10,influence:40+c*6,social:55+c*7},
      advice:c>=2?'保持节奏，下周增加1项社交型任务':'先完成每日学习任务，建立稳定行动节奏'
    });
  },
  restart(){
    const g=getApp().globalData;
    g.diagnosisAnswers=[];g.goal='';g.profile='';g.xp=0;g.level=1;g.medals=0;g.completed=0;
    g.actionTasks=g.actionTasks.map(t=>({...t,done:false}));
    wx.switchTab({url:'/pages/explore/index'});
  }
})
