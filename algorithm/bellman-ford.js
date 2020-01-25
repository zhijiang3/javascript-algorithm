import { hasOwn } from "shared/util";

/**
 * @param {Graph} graph
 * @param {VertexNode} startVertex
 * @return {{ previousVertices, distances, isNegativeWeightCircuit }}
 */
export default function bellmanFord(graph, startVertex) {
  const previousVertices = {};
  const distances = {};
  const vertices = graph.getAllVertices();

  // 初始化
  vertices.forEach(vertex => {
    previousVertices[vertex.getKey()] = null;
    distances[vertex.getKey()] = Number.POSITIVE_INFINITY;
  });
  distances[startVertex.getKey()] = 0;

  let relaxed;
  for (let i = 0; i < vertices.length - 1; i++) {
    relaxed = true;
    // 获取节点的邻边进行判断
    for (let vertexKey in distances) {
      if (!hasOwn(distances, vertexKey)) continue;

      const vertex = graph.getVertexByKey(vertexKey);

      graph.getNeighbors(vertex).forEach(neighborVertex => {
        const edge = graph.findEdge(vertex, neighborVertex);

        const newDistance = distances[vertexKey] + edge.weight;

        // 新的距离较短时, 使用新的距离
        if (newDistance < distances[neighborVertex.getKey()]) {
          relaxed = false;
          distances[neighborVertex.getKey()] = newDistance;
          previousVertices[neighborVertex.getKey()] = vertex;
        }
      });
    }
    // 没有松弛过, 可直接跳出循环
    if (relaxed) break;
  }

  // 检查负权边回路的情况，如果还能更新，表示有负权边回路
  let isNegativeWeightCircuit = false;
  for (let vertexKey in distances) {
    if (!hasOwn(distances, vertexKey)) continue;

    const vertex = graph.getVertexByKey(vertexKey);

    isNegativeWeightCircuit = graph.getNeighbors(vertex).some(neighborVertex => {
      const edge = graph.findEdge(vertex, neighborVertex);

      const newDistance = distances[vertex.getKey()] + edge.weight;

      if (newDistance < distances[neighborVertex.getKey()]) {
        return true;
      }

      return false;
    });

    if (isNegativeWeightCircuit) break;
  }

  return { previousVertices, distances, isNegativeWeightCircuit };
}
