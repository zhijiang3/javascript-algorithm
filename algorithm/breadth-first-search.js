import Queue from "data-structure/Queue";
import { isFunc } from "shared/util";

/**
 * @param {Graph} graph
 * @param {VertexNode} startVertex
 * @param {function} enterVertex
 */
export default function breadthFirstSearch(graph, startVertex, enterVertex) {
  const vertexQueue = new Queue();
  const visited = {};

  vertexQueue.enqueue(startVertex);
  visited[startVertex.getKey()] = true;

  let previousVertex = null;
  while (!vertexQueue.isEmpty()) {
    const currentVertex = vertexQueue.dequeue();

    isFunc(enterVertex) && enterVertex({ previousVertex, currentVertex });

    graph.getNeighbors(currentVertex).forEach(nextVertex => {
      if (!visited[nextVertex.getKey()]) {
        vertexQueue.enqueue(nextVertex);
        visited[nextVertex.getKey()] = true;
      }
    });

    previousVertex = currentVertex;
  }
}
