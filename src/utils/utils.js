export const arrayToChartObject = (list) => {
  var map = {}, node, roots = [], i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i;
    list[i].children = [];
  }
  
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parent !== null) {
      node = { ...node, team: list[map[node.parent]].team !== 'All' ? list[map[node.parent]].team : node.team }
      list[map[node.parent]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

export const dataForListView = (list) => {
  const response = {}

  list.forEach((l) => {
    if(l.team !== 'All')
      if(response[l.team])
        response[l.team].push(l.name)
      else
        response[l.team] = [ l.name ];
  })

  return response;
}