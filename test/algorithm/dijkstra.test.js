import { default as Graph, VertexNode, EdgeNode } from "../../data-structure/Graph";
import dijkstra from "../../algorithm/dijkstra";

test("为有向图找到所有顶点的最短路径", () => {
  const vertexA = new VertexNode("A");
  const vertexB = new VertexNode("B");
  const vertexC = new VertexNode("C");
  const vertexD = new VertexNode("D");
  const vertexE = new VertexNode("E");
  const vertexF = new VertexNode("F");
  const vertexG = new VertexNode("G");

  const edgeAB = new EdgeNode(vertexA, vertexB, 2);
  const edgeAC = new EdgeNode(vertexA, vertexC, 5);
  const edgeBD = new EdgeNode(vertexB, vertexD, 7);
  const edgeBC = new EdgeNode(vertexB, vertexC, 8);
  const edgeCD = new EdgeNode(vertexC, vertexD, 2);
  const edgeCE = new EdgeNode(vertexC, vertexE, 4);
  const edgeDF = new EdgeNode(vertexD, vertexF, 1);
  const edgeED = new EdgeNode(vertexE, vertexD, 6);
  const edgeEF = new EdgeNode(vertexE, vertexF, 2);

  const graph = new Graph(true);

  graph
    .addVertex(vertexG)
    .addEdge(edgeAB)
    .addEdge(edgeAC)
    .addEdge(edgeBD)
    .addEdge(edgeBC)
    .addEdge(edgeCD)
    .addEdge(edgeCE)
    .addEdge(edgeDF)
    .addEdge(edgeED)
    .addEdge(edgeEF);

  const { distances, previousVertices } = dijkstra(graph, vertexA);

  expect(distances).toEqual({
    A: 0,
    B: 2,
    C: 5,
    D: 7,
    E: 9,
    F: 8,
    G: Infinity
  });

  expect(previousVertices.A).toBeNull();
  expect(previousVertices.G).toBeNull();
  expect(previousVertices.F.getKey()).toBe("D");
  expect(previousVertices.D.getKey()).toBe("C");
  expect(previousVertices.C.getKey()).toBe("A");
  expect(previousVertices.B.getKey()).toBe("A");
  expect(previousVertices.E.getKey()).toBe("C");
});

test("为有向有环图找到所有顶点的最短路径", () => {
  const vertexA = new VertexNode("A");
  const vertexB = new VertexNode("B");
  const vertexC = new VertexNode("C");
  const vertexD = new VertexNode("D");
  const vertexE = new VertexNode("E");

  const edgeAB = new EdgeNode(vertexA, vertexB, 10);
  const edgeCD = new EdgeNode(vertexC, vertexD, 30);
  const edgeCE = new EdgeNode(vertexC, vertexE, 1);
  const edgeEB = new EdgeNode(vertexE, vertexB, 1);
  const edgeBC = new EdgeNode(vertexB, vertexC, 20);

  const graph = new Graph(true);

  graph
    .addEdge(edgeAB)
    .addEdge(edgeCD)
    .addEdge(edgeCE)
    .addEdge(edgeEB)
    .addEdge(edgeBC);

  const { distances, previousVertices } = dijkstra(graph, vertexA);

  expect(distances).toEqual({
    A: 0,
    B: 10,
    C: 30,
    D: 60,
    E: 31
  });

  expect(previousVertices.A).toBeNull();
  expect(previousVertices.B.getKey()).toBe("A");
  expect(previousVertices.C.getKey()).toBe("B");
  expect(previousVertices.D.getKey()).toBe("C");
  expect(previousVertices.E.getKey()).toBe("C");
});

test("为无向图找到所有顶点的最短路径", () => {
  const vertexA = new VertexNode("A");
  const vertexB = new VertexNode("B");
  const vertexC = new VertexNode("C");
  const vertexD = new VertexNode("D");
  const vertexE = new VertexNode("E");
  const vertexF = new VertexNode("F");
  const vertexG = new VertexNode("G");
  const vertexH = new VertexNode("H");

  const edgeAB = new EdgeNode(vertexA, vertexB, 4);
  const edgeAE = new EdgeNode(vertexA, vertexE, 7);
  const edgeAC = new EdgeNode(vertexA, vertexC, 3);
  const edgeBC = new EdgeNode(vertexB, vertexC, 6);
  const edgeBD = new EdgeNode(vertexB, vertexD, 5);
  const edgeEC = new EdgeNode(vertexE, vertexC, 8);
  const edgeED = new EdgeNode(vertexE, vertexD, 2);
  const edgeDC = new EdgeNode(vertexD, vertexC, 11);
  const edgeDG = new EdgeNode(vertexD, vertexG, 10);
  const edgeDF = new EdgeNode(vertexD, vertexF, 2);
  const edgeFG = new EdgeNode(vertexF, vertexG, 3);
  const edgeEG = new EdgeNode(vertexE, vertexG, 5);

  const graph = new Graph();
  graph
    .addVertex(vertexH)
    .addEdge(edgeAB)
    .addEdge(edgeAE)
    .addEdge(edgeAC)
    .addEdge(edgeBC)
    .addEdge(edgeBD)
    .addEdge(edgeEC)
    .addEdge(edgeED)
    .addEdge(edgeDC)
    .addEdge(edgeDG)
    .addEdge(edgeDF)
    .addEdge(edgeFG)
    .addEdge(edgeEG);

  const { distances, previousVertices } = dijkstra(graph, vertexA);

  expect(distances).toEqual({
    H: Infinity,
    A: 0,
    B: 4,
    E: 7,
    C: 3,
    D: 9,
    G: 12,
    F: 11
  });

  expect(previousVertices.F.getKey()).toBe("D");
  expect(previousVertices.D.getKey()).toBe("B");
  expect(previousVertices.B.getKey()).toBe("A");
  expect(previousVertices.G.getKey()).toBe("E");
  expect(previousVertices.C.getKey()).toBe("A");
  expect(previousVertices.A).toBeNull();
  expect(previousVertices.H).toBeNull();
});

test("为负权边的有向图找到所有顶点的最短路径", () => {
  const vertexS = new VertexNode("S");
  const vertexE = new VertexNode("E");
  const vertexA = new VertexNode("A");
  const vertexD = new VertexNode("D");
  const vertexB = new VertexNode("B");
  const vertexC = new VertexNode("C");
  const vertexH = new VertexNode("H");

  const edgeSE = new EdgeNode(vertexS, vertexE, 8);
  const edgeSA = new EdgeNode(vertexS, vertexA, 10);
  const edgeED = new EdgeNode(vertexE, vertexD, 1);
  const edgeDA = new EdgeNode(vertexD, vertexA, -4);
  const edgeDC = new EdgeNode(vertexD, vertexC, -1);
  const edgeAC = new EdgeNode(vertexA, vertexC, 2);
  const edgeCB = new EdgeNode(vertexC, vertexB, -2);
  const edgeBA = new EdgeNode(vertexB, vertexA, 1);

  const graph = new Graph(true);
  graph
    .addVertex(vertexH)
    .addEdge(edgeSE)
    .addEdge(edgeSA)
    .addEdge(edgeED)
    .addEdge(edgeDA)
    .addEdge(edgeDC)
    .addEdge(edgeAC)
    .addEdge(edgeCB)
    .addEdge(edgeBA);

  const { distances, previousVertices } = dijkstra(graph, vertexS);

  expect(distances).toEqual({
    H: Infinity,
    S: 0,
    A: 5,
    B: 5,
    C: 7,
    D: 9,
    E: 8
  });

  expect(previousVertices.H).toBeNull();
  expect(previousVertices.S).toBeNull();
  expect(previousVertices.B.getKey()).toBe("C");
  expect(previousVertices.C.getKey()).toBe("A");
  expect(previousVertices.A.getKey()).toBe("D");
  expect(previousVertices.D.getKey()).toBe("E");
});
