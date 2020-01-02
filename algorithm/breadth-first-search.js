import Queue from "../data-structure/Queue";
import { isFunc } from '../shared/util';
import {
  default as Graph,
  VertexNode,
  EdgeNode
} from "../data-structure/Graph";

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

var graph = new Graph(true);

var youV = new VertexNode("you");
var bobV = new VertexNode("bob");
var aliceV = new VertexNode("alice");
var claireV = new VertexNode("claireV");
var anujV = new VertexNode("anuj");
var peggyV = new VertexNode("peggy");
var thomV = new VertexNode("thom");
var jonnyV = new VertexNode("jonny");

var youAliceEdge = new EdgeNode(youV, aliceV);
var youClaireEdge = new EdgeNode(youV, claireV);
var youBobEdge = new EdgeNode(youV, bobV);

var bobPeggyEdge = new EdgeNode(bobV, peggyV);
var bobAnujEdge = new EdgeNode(bobV, anujV);

var alicePeggyEdge = new EdgeNode(aliceV, peggyV);

var claireJonnyEdge = new EdgeNode(claireV, jonnyV);
var claireThomEdge = new EdgeNode(claireV, thomV);

graph
  .addVertex(youV)
  .addVertex(bobV)
  .addVertex(aliceV)
  .addVertex(claireV)
  .addVertex(anujV)
  .addVertex(peggyV)
  .addVertex(thomV)
  .addVertex(jonnyV);

graph
  .addEdge(youAliceEdge)
  .addEdge(youClaireEdge)
  .addEdge(youBobEdge)
  .addEdge(bobPeggyEdge)
  .addEdge(bobAnujEdge)
  .addEdge(alicePeggyEdge)
  .addEdge(claireJonnyEdge)
  .addEdge(claireThomEdge);

breadthFirstSearch(graph, youV, ({ currentVertex }) => {
  if (currentVertex.value[vertex.value.length - 1] === 'm') {
    console.log('找到了最近的芒果商: ', currentVertex);
  }
});
