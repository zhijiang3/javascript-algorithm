import breadthFirstSearch from "algorithm/breadth-first-search";
import Graph, { VertexNode, EdgeNode } from "data-structure/Graph";

test("在图中执行 BFS 操作", () => {
  const vertexA = new VertexNode("A");
  const vertexB = new VertexNode("B");
  const vertexC = new VertexNode("C");
  const vertexD = new VertexNode("D");
  const vertexE = new VertexNode("E");
  const vertexF = new VertexNode("F");

  const edgeAB = new EdgeNode(vertexA, vertexB);
  const edgeAD = new EdgeNode(vertexA, vertexD);
  const edgeBC = new EdgeNode(vertexB, vertexC);
  const edgeBD = new EdgeNode(vertexB, vertexD);
  const edgeCE = new EdgeNode(vertexC, vertexE);
  const edgeDE = new EdgeNode(vertexD, vertexE);
  const edgeDF = new EdgeNode(vertexD, vertexF);
  const edgeFE = new EdgeNode(vertexF, vertexE);

  const graph = new Graph(true);

  graph
    .addEdge(edgeAB)
    .addEdge(edgeAD)
    .addEdge(edgeBC)
    .addEdge(edgeBD)
    .addEdge(edgeCE)
    .addEdge(edgeDE)
    .addEdge(edgeDF)
    .addEdge(edgeFE);

  expect(graph.toString()).toBe("A,B,D,C,E,F");

  const enterVertex = jest.fn();
  breadthFirstSearch(graph, vertexA, enterVertex);

  expect(enterVertex).toHaveBeenCalledTimes(6);

  const enterVertexCallMap = [
    { previousVertex: null, currentVertex: vertexA },
    { previousVertex: vertexA, currentVertex: vertexB },
    { previousVertex: vertexB, currentVertex: vertexD },
    { previousVertex: vertexD, currentVertex: vertexC },
    { previousVertex: vertexC, currentVertex: vertexE },
    { previousVertex: vertexE, currentVertex: vertexF }
  ];

  for (let callIndex = 0; callIndex < 6; callIndex++) {
    const args = enterVertex.mock.calls[callIndex][0];

    expect(args.previousVertex).toBe(enterVertexCallMap[callIndex].previousVertex);
    expect(args.currentVertex).toBe(enterVertexCallMap[callIndex].currentVertex);
  }
});
