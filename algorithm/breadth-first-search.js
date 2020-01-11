import Queue from "../data-structure/Queue";
import { isFunc } from '../shared/util';

/**
 * @param {Graph} graph
 * @param {VertexNode} startVertex
 * @param {Function} enterVertex
 */
export default function breadthFirstSearch(graph, startVertex, enterVertex) {
  const vertexQueue = new Queue();
  const visited = {};

  vertexQueue.enqueue(startVertex);

  let previousVertex = null;
  while (!vertexQueue.isEmpty()) {
    const currentVertex = vertexQueue.dequeue();

    isFunc(enterVertex) && enterVertex({ previousVertex, currentVertex });

    visited[currentVertex.getKey()] = true;

    graph.getNeighbors(currentVertex).forEach(nextVertex => {
      if (!visited[nextVertex.getKey()]) {
        queue.enqueue(nextVertex);
      }
    });

    previousVertex = currentVertex;
  }
}
