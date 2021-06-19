function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority = 1) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    if (this.values.length === 0) return this.values;

    function bubble(arr, currentIndex) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (arr[parentIndex] && arr[parentIndex].priority > priority) {
        [arr[parentIndex], arr[currentIndex]] = [
          arr[currentIndex],
          arr[parentIndex],
        ];
        bubble(arr, parentIndex);
      } else {
        return arr;
      }
    }
    bubble(this.values, this.values.length - 1);

    return this.values;
  }
  dequeue() {
    if (this.values.length === 0) {
      return undefined;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }

    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    let oldRoot = this.values.pop();

    function bubbleDown(arr, currentIndex) {
      if (currentIndex > arr.length) return arr;
      const leftIndex = 2 * currentIndex + 1;
      const rightIndex = 2 * currentIndex + 2;
      let swapper = null;

      if (leftIndex < arr.length) {
        if (arr[leftIndex].priority < arr[currentIndex].priority)
          swapper = leftIndex;
      }

      if (rightIndex < arr.length) {
        if (
          (arr[rightIndex].priority < arr[leftIndex].priority &&
            swapper !== null) ||
          (arr[rightIndex].priority < arr[currentIndex].priority &&
            swapper === null)
        )
          swapper = rightIndex;
      }
      if (swapper === null) return arr;

      swap(arr, swapper, currentIndex);
      bubbleDown(arr, swapper);
    }
    bubbleDown(this.values, 0);
    return oldRoot;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  removeVertex(vertex) {
    const vertexToRemove = this.adjacencyList[vertex];

    for (let i = 0; i < vertexToRemove.length; i++) {
      const vertexToUpdate = this.adjacencyList[vertexToRemove[i].node];
      vertexToUpdate = vertexToUpdate.filter((v) => v.node !== vertex);
    }

    delete this.adjacencyList[vertex];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (v) => v.node !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (v) => v.node !== v1
    );
  }
  dijkstra(start, end) {
    const distances = {};
    const visited = new PriorityQueue();
    let path = [];
    const previous = {};

    for (let key in this.adjacencyList) {
      distances[key] = key === start ? 0 : Infinity;
      visited.enqueue(key, distances[key]);
      previous[key] = null;
    }

    let smallest;
    while (visited.values.length) {
      smallest = visited.dequeue().val;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating how we got to neighbor - previous node
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            visited.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstra('D', 'E'));
