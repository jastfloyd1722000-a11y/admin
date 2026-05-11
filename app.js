App({
  globalData: {
    diagnosisAnswers: [],
    goal: '',
    profile: '',
    pathTasks: ['每日学习15分钟', '每周1次实践任务', '每周1次复盘记录'],
    actionTasks: [
      { id: 1, title: '学习一节微课', xp: 20, done: false },
      { id: 2, title: '完成1个实践练习', xp: 20, done: false },
      { id: 3, title: '记录今日复盘3件事', xp: 20, done: false }
    ],
    xp: 0,
    level: 1,
    medals: 0,
    completed: 0
  }
})
