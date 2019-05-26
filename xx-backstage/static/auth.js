const auth =
 [
    {
      "id": "1",
      "text": "投放数据",
      "parent": false,
      "parentId": "1",
      "path": "/home"
    },   
    {
      "id": "2",
      "text": "任务管理",
      "parent": false,
      "parentId": "2",
      "path": "",
      "children": [
        {
          "id": "2-1",
          "text": "任务列表",
          "parent": false,
          "parentId": "2",
          "path": "/taskList",
          "children": null
        },
        {
          "id": "2-2",
          "text": "历史任务",
          "parent": false,
          "parentId": "2",
          "path": "/historicalTask",
          "children": null
        }
      ]
    },
    {
      "id": "3",
      "text": "系统管理",
      "parent": false,
      "parentId": "3",
      "path": "",
      "children": [
        {
          "id": "3-1",
          "text": "账户信息",
          "parent": false,
          "parentId": "3",
          "path": "/accountInfo",
          "children": null
        }
      ]
    }


  ]

export {
  auth
}