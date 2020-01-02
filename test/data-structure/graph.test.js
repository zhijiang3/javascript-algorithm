import { default as Graph, VertexNode, EdgeNode } from "../../data-structure/Graph";

test("用乐谱换钢琴", () => {
  const graph = new Graph(true);

  const sheetMusicVertex = new VertexNode("sheetMusic");
  const posterVertex = new VertexNode("poster");
  const recordVertex = new VertexNode("record");
  const guitarVertex = new VertexNode("guitar");
  const pianoVertex = new VertexNode("piano");
  const drumKitVertex = new VertexNode("drumKit");

  const sheetMusicPosterEdge = new EdgeNode(sheetMusicVertex, posterVertex, 0);
  const sheetMusicRecordEdge = new EdgeNode(sheetMusicVertex, recordVertex, 5);
  const posterGuitarEdge = new EdgeNode(posterVertex, guitarVertex, 30);
  const posterDrumKitEdge = new EdgeNode(posterVertex, drumKitVertex, 35);
  const recordGuitarEdge = new EdgeNode(recordVertex, guitarVertex, 15);
  const recordDrumKitEdge = new EdgeNode(recordVertex, drumKitVertex, 20);
  const guitarPianoEdge = new EdgeNode(guitarVertex, pianoVertex, 20);
  const drumKitPianoEdge = new EdgeNode(drumKitVertex, pianoVertex, 10);

  graph
    .addVertex(sheetMusicVertex)
    .addVertex(posterVertex)
    .addVertex(recordVertex)
    .addVertex(guitarVertex)
    .addVertex(pianoVertex)
    .addVertex(drumKitVertex);

  expect(graph.toString()).toBe("sheetMusic,poster,record,guitar,piano,drumKit");

  graph
    .addEdge(sheetMusicPosterEdge)
    .addEdge(sheetMusicRecordEdge)
    .addEdge(posterGuitarEdge)
    .addEdge(posterDrumKitEdge)
    .addEdge(recordGuitarEdge)
    .addEdge(recordDrumKitEdge)
    .addEdge(guitarPianoEdge)
    .addEdge(drumKitPianoEdge);

  expect(graph.getAdjacencyMatrix()).toEqual([
    [Infinity,       0,        5, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity,       30, Infinity,       35],
    [Infinity, Infinity, Infinity,       15, Infinity,       20],
    [Infinity, Infinity, Infinity, Infinity,       20, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity,       10, Infinity]
  ]);

  graph.deleteVertex(drumKitVertex);

  expect(graph.getAdjacencyMatrix()).toEqual([
    [Infinity,        0,        5, Infinity, Infinity],
    [Infinity, Infinity, Infinity,       30, Infinity],
    [Infinity, Infinity, Infinity,       15, Infinity],
    [Infinity, Infinity, Infinity, Infinity,       20],
    [Infinity, Infinity, Infinity, Infinity, Infinity]
  ]);

  graph.deleteEdge(sheetMusicRecordEdge);

  expect(graph.getAdjacencyMatrix()).toEqual([
    [Infinity,        0, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity,       30, Infinity],
    [Infinity, Infinity, Infinity,       15, Infinity],
    [Infinity, Infinity, Infinity, Infinity,       20],
    [Infinity, Infinity, Infinity, Infinity, Infinity]
  ]);

});

test("无向图", () => {
  const graph = new Graph(false);

  const vertexA = new VertexNode("A");
  const vertexB = new VertexNode("B");
  const vertexC = new VertexNode("C");
  const vertexD = new VertexNode("D");

  const edgeAB = new EdgeNode(vertexA, vertexB);
  const edgeBC = new EdgeNode(vertexB, vertexC);
  const edgeCD = new EdgeNode(vertexC, vertexD);
  const edgeDA = new EdgeNode(vertexD, vertexA);

  graph
    .addEdge(edgeAB)
    .addEdge(edgeBC)
    .addEdge(edgeCD)
    .addEdge(edgeDA);

  expect(graph.toString()).toBe("A,B,C,D");

  expect(graph.getAdjacencyMatrix()).toEqual([
    [Infinity,        0, Infinity,        0],
    [       0, Infinity,        0, Infinity],
    [Infinity,        0, Infinity,        0],
    [       0, Infinity,        0, Infinity]
  ]);
});
