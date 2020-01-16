import { default as Graph, VertexNode, EdgeNode } from "../data-structure/Graph";

/**
 * @param {Graph} graph
 * @param {VertexNode} startVertex
 * @return {{ previousVertices: { [string]: VertexNode }, distances: { [string]: number } }}
 */
export default function dijkstra(graph, startVertex) {
  const processed = {};
  const previousVertices = {};
  const distances = {};

  function findNearestVertex(distances) {
    let vertex = null;
    let min = Number.POSITIVE_INFINITY;
    for (let vertexKey in distances) {
      if (!processed[vertexKey] && min > distances[vertexKey]) {
        min = distances[vertexKey];
        vertex = graph.getVertexByKey(vertexKey);
      }
    }

    if (vertex) {
      processed[vertex.getKey()] = true;
    }

    return vertex;
  }

  graph.getAllVertices().forEach(vertex => {
    const vertexKey = vertex.getKey();

    previousVertices[vertexKey] = null;
    distances[vertexKey] = Number.POSITIVE_INFINITY;
  });
  distances[startVertex.getKey()] = 0;

  let vertex;
  while ((vertex = findNearestVertex(distances))) {
    graph.getNeighbors(vertex).forEach(neighborVertex => {
      const edge = vertex.getEdge(neighborVertex);

      const cost = distances[neighborVertex.getKey()];
      const newCost = distances[vertex.getKey()] + edge.weight;

      if (cost > newCost) {
        distances[neighborVertex.getKey()] = newCost;
        previousVertices[neighborVertex.getKey()] = vertex;
      }
    });
  }

  return { previousVertices, distances };
}
