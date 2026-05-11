Page({
  data:{goals:['成为专业深耕者','转管理岗','平衡生活与工作','提升收入'],goal:'',profile:'',pathTasks:[]},
  onShow(){const g=getApp().globalData;this.setData({goal:g.goal,profile:g.profile,pathTasks:g.pathTasks});},
  pick(e){const goal=e.currentTarget.dataset.goal;this.setData({goal});getApp().globalData.goal=goal;},
  next(){wx.switchTab({url:'/pages/action/index'});}
})
