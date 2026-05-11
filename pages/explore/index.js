Page({
  data:{
    questions:[
      {title:'最近你的主要困扰是？',options:['工作压力','方向迷茫','关系冲突']},
      {title:'当前情绪状态？',options:['焦虑','平稳','疲惫']},
      {title:'生活精力情况？',options:['不足','一般','充沛']},
      {title:'关键能力短板？',options:['表达','执行','影响力']},
      {title:'你最在意什么？',options:['成长','稳定','收入']}
    ],
    answers:[]
  },
  onLoad(){ this.setData({answers:getApp().globalData.diagnosisAnswers||[]}) },
  select(e){ const {qidx,value}=e.currentTarget.dataset; const answers=[...this.data.answers]; answers[qidx]=value; this.setData({answers}); },
  next(){
    const app=getApp();
    app.globalData.diagnosisAnswers=this.data.answers;
    const map={工作压力:'情绪调节+任务减负',方向迷茫:'职业探索+能力试错',关系冲突:'沟通练习+边界建立'};
    app.globalData.profile=map[this.data.answers[0]]||'职业探索+能力试错';
    wx.switchTab({url:'/pages/plan/index'});
  }
})
