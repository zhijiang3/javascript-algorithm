interface Graph {
  isDirected: boolean;

  vertices: object;

  edges: object;

  addVertex(vertex: VertexNode): Graph;

  deleteVertex(deleteVertex: VertexNode): void;

  addEdge(edge: EdgeNode): Graph;

  deleteEdge(edge: EdgeNode): void;

  getNeighbors(vertex: VertexNode): VertexNode[];

  getVertexByKey(vertexKey: string): VertexNode;

  getAllVertices(): VertexNode[];

  findEdge(startVertex: VertexNode, endVertex: VertexNode): EdgeNode;

  getAdjacencyMatrix(): number[][];

  toString(): string;
}

interface VertexNode {
  value: any;

  edges: LinkedList;

  getKey(): any;

  getEdge(vertex: VertexNode): EdgeNode;

  addEdge(edge: EdgeNode): void;

  deleteEdge(deleteEdge: EdgeNode): void;

  getNeighbors(): VertexNode[];
}

interface EdgeNode {
  startVertex: VertexNode;

  endVertex: VertexNode;

  weight: number;

  getKey(): string;
}
