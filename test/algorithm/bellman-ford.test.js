import { default as Graph, VertexNode, EdgeNode } from "data-structure/Graph";
import bellmanFord from "algorithm/bellman-ford";

test("为负权边的有向图找到所有顶点的最短路径", () => {
  const vertexA = new VertexNode("A");
  const vertexB = new VertexNode("B");
  const vertexC = new VertexNode("C");
  const vertexD = new VertexNode("D");

  const edgeAB = new EdgeNode(vertexA, vertexB, 0);
  const edgeAC = new EdgeNode(vertexA, vertexC, 5);
  const edgeCB = new EdgeNode(vertexC, vertexB, -7);
  const edgeBD = new EdgeNode(vertexB, vertexD, 35);

  const graph = new Graph(true);

  graph
    .addEdge(edgeAB)
    .addEdge(edgeAC)
    .addEdge(edgeCB)
    .addEdge(edgeBD);

  expect(graph.toString()).toBe("A,B,C,D");

  const { previousVertices, distances, isNegativeWeightCircuit } = bellmanFord(graph, vertexA);

  expect(isNegativeWeightCircuit).toBe(false);

  expect(distances).toEqual({
    A: 0,
    B: -2,
    C: 5,
    D: 33
  });

  expect(previousVertices.A).toBeNull();
  expect(previousVertices.B.getKey()).toBe("C");
  expect(previousVertices.C.getKey()).toBe("A");
  expect(previousVertices.D.getKey()).toBe("B");
});

test("正确识别负权边回路", () => {
  const vertexA = new VertexNode("A");
  const vertexB = new VertexNode("B");
  const vertexC = new VertexNode("C");

  const edgeAB = new EdgeNode(vertexA, vertexB, 5);
  const edgeBC = new EdgeNode(vertexB, vertexC, 3);
  const edgeCA = new EdgeNode(vertexC, vertexA, -10);

  const graph = new Graph(true);

  graph
    .addEdge(edgeAB)
    .addEdge(edgeBC)
    .addEdge(edgeCA);

  expect(graph.toString()).toBe("A,B,C");

  const { previousVertices, distances, isNegativeWeightCircuit } = bellmanFord(graph, vertexA);

  expect(isNegativeWeightCircuit).toBe(true);

  expect(distances).toEqual({
    A: -4,
    B: 3,
    C: 6
  });

  expect(previousVertices.A.getKey()).toBe("C");
  expect(previousVertices.B.getKey()).toBe("A");
  expect(previousVertices.C.getKey()).toBe("B");
});
