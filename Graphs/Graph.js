// Undirected graph using adjacency list

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
  removeVertex(vertex) {
    const vertexToRemove = this.adjacencyList[vertex];

    for (let i = 0; i < vertexToRemove.length; i++) {
      const vertexToUpdate = this.adjacencyList[vertexToRemove[i]];
      vertexToUpdate = vertexToUpdate.filter((v) => v !== vertex);
    }

    delete this.adjacencyList[vertex];
  }
  DFSRecursive(start) {
    if (!start) return null;
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);
      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        if (!visited[this.adjacencyList[vertex][i]])
          dfs(this.adjacencyList[vertex][i]);
      }
    };

    dfs(start);

    /* Colt's Solution */
    // const adjacencyList = this.adjacencyList;
    // (function dfs(vertex) {
    //   if (!vertex) return null;
    //   visited[vertex] = true;
    //   result.push(vertex);
    //   adjacencyList[vertex].forEach((neighbor) => {
    //     if (!visited[neighbor]) dfs(neighbor);
    //   });
    // })(start);

    return result;
  }

  DFSIterative(start) {
    if (!start) return null;
    const stack = [];
    const result = [];
    const visited = {};

    stack.push(start);

    while (stack.length > 0) {
      const vertex = stack.pop();
      if (!visited[vertex]) result.push(vertex);
      visited[vertex] = true;

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) stack.push(neighbor);
      });
    }

    return result;
  }
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let vertex;

    while (queue.length > 0) {
      vertex = queue.shift();
      if (!visited[vertex]) result.push(vertex);
      visited[vertex] = true;

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) queue.push(neighbor);
      });
    }

    return result;
  }
  // My implementation
  BFSAlternative() {
    const result = [];
    const visited = {};

    Object.keys(this.adjacencyList).forEach((key) => {
      const vertex = this.adjacencyList[key];
      if (!visited[key]) {
        visited[key] = true;
        result.push(key);
      }
      vertex.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          result.push(neighbor);
        }
      });
    });
    return result;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
// graph.DFSRecursive('A');
// graph.DFSIterative('A');
