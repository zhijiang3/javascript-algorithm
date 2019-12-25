export class Node {
  constructor(value) {
    this.value = value;
    this.adjacentList = []; // 邻接列表
  }

  addAdjacent(node) {
    this.adjacentList.push(node);
  }

  removeAdjacent(node) {
    const index = this.adjacentList.indexOf(node);

    if (index > -1) {
      this.adjacentList.splice(index, 1);
      return node;
    }
  }

  getAdjacentList() {
    return this.adjacentList;
  }

  isAdjacent(node) {
    return this.adjacentList.indexOf(node) > -1;
  }
}

export const UNDIRECTED_GRAPH = Symbol("undirected graph");
export const DIRECTED_GRAPH = Symbol("directed graph");

export default class Graph {
  constructor(edgeDirection = UNDIRECTED_GRAPH) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  addEdge(source, destination) {
    const sourceNode = this.addVertex(source)
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);
    if (this.edgeDirection === UNDIRECTED_GRAPH) {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);
      if (this.edgeDirection === UNDIRECTED_GRAPH) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, destinationNode];
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }

  removeVertex(value) {
    const vertex = this.nodes.get(value);

    if (vertex) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(vertex);
      }
    }

    return this.nodes.delete(value);
  }

  toString() {
    const result = [];

    for (let key of this.nodes.keys()) {
      const node = this.nodes.get(key);

      result.push(`${node.value}: [${node.adjacentList.map(node => node.value).join(", ")}]`);
    }

    return result.join(", ");
  }
}
