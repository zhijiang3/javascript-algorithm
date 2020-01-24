import LinkedList from "data-structure/Linked-List";
import { hasOwn } from "shared/util";

export class VertexNode {
  /**
   * @param {*} value
   */
  constructor(value) {
    this.value = value;
    this.edges = new LinkedList();
  }

  /**
   * @return {*}
   */
  getKey() {
    return this.value;
  }

  /**
   * @param {VertexNode} vertex
   * @return {(EdgeNode|null)}
   */
  getEdge(vertex) {
    const edgeNode = this.edges.find(edge => {
      const { startVertex, endVertex } = edge;

      return endVertex === vertex || startVertex === vertex;
    });

    return edgeNode ? edgeNode.data : null;
  }

  /**
   * @param {EdgeNode} edge
   */
  addEdge(edge) {
    this.edges.append(edge);
  }

  /**
   * @param {EdgeNode} deleteEdge
   */
  deleteEdge(deleteEdge) {
    this.edges.delete(edge => edge === deleteEdge);
  }

  /**
   * @return {VertexNode[]}
   */
  getNeighbors() {
    const neighbors = this.edges.toArray();

    // 如果是无向图，结束顶点可能是指向自身的
    return neighbors.map(node => {
      return node.data.endVertex === this ? node.data.startVertex : node.data.endVertex;
    });
  }
}

export class EdgeNode {
  /**
   * @param {VertexNode} startVertex
   * @param {VertexNode} endVertex
   * @param {number} weight
   */
  constructor(startVertex, endVertex, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  /**
   * @return {string}
   */
  getKey() {
    return `${this.startVertex.getKey()}-${this.endVertex.getKey()}`;
  }
}

export default class Graph {
  /**
   * @param {boolean} isDirected
   */
  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  /**
   * @param {VertexNode} vertex
   * @return {Graph}
   */
  addVertex(vertex) {
    this.vertices[vertex.getKey()] = vertex;

    return this;
  }

  /**
   * @param {VertexNode} deleteVertex
   */
  deleteVertex(deleteVertex) {
    const vertices = this.getAllVertices();

    // 删除带有 vertex 节点的边
    vertices.forEach(vertex => {
      vertex.deleteEdge(vertex.getEdge(deleteVertex));
    });

    delete this.vertices[deleteVertex.getKey()];
  }

  /**
   * @param {EdgeNode} edge
   * @return {Graph}
   */
  addEdge(edge) {
    const startVertex = edge.startVertex;
    const endVertex = edge.endVertex;

    if (!this.vertices[startVertex.getKey()]) {
      this.addVertex(startVertex);
    }

    if (!this.vertices[endVertex.getKey()]) {
      this.addVertex(endVertex);
    }

    if (this.edges[edge.getKey()]) {
      throw new Error(`The Edge "${edge.getKey()}" has been added before`);
    } else {
      this.edges[edge.getKey()] = edge;
    }

    if (this.isDirected) {
      startVertex.addEdge(edge);
    } else {
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }

  /**
   * @param {EdgeNode} edge
   */
  deleteEdge(edge) {
    const startVertex = edge.startVertex;
    const endVertex = edge.endVertex;

    if (this.isDirected) {
      startVertex.deleteEdge(edge);
    } else {
      startVertex.deleteEdge(edge);
      endVertex.deleteEdge(edge);
    }

    delete this.edges[edge.getKey()];
  }

  /**
   * @param {VertexNode} vertex
   * @return {VertexNode[]}
   */
  getNeighbors(vertex) {
    return vertex.getNeighbors();
  }

  /**
   * @param {string} vertexKey
   * @return {(VertexNode|null)}
   */
  getVertexByKey(vertexKey) {
    return this.vertices[vertexKey];
  }

  /**
   * @return {VertexNode[]}
   */
  getAllVertices() {
    const vertices = [];

    for (let vertexKey in this.vertices) {
      if (!hasOwn(this.vertices, vertexKey)) continue;

      vertices.push(this.vertices[vertexKey]);
    }

    return vertices;
  }

  /**
   * @param {VertexNode} startVertex
   * @param {VertexNode} endVertex
   * @return {(EdgeNode|null)}
   */
  findEdge(startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex.getKey());

    if (!vertex) return null;

    return vertex.getEdge(endVertex);
  }

  /**
   * @return {number[][]}
   */
  getAdjacencyMatrix() {
    const vertices = this.getAllVertices();
    const verticesIndex = vertices.reduce((verticesIndex, vertex, index) => {
      verticesIndex[vertex.getKey()] = index;

      return verticesIndex;
    }, {});

    // 如果矩阵没有邻边，则权重默认为 Infinity
    /** @type {number[][]} */
    const adjacencyMatrix = [];
    for (let i = 0; i < vertices.length; i++) {
      adjacencyMatrix[i] = [];
      for (let j = 0; j < vertices.length; j++) {
        adjacencyMatrix[i][j] = Infinity;
      }
    }

    vertices.forEach((vertex, vertexIndex) => {
      // 这里只需要调整有邻边的顶点的权重即可
      vertex.getNeighbors().forEach(neighbor => {
        // 通过顶点索引的映射拿到该顶点在矩阵中的位置
        const neighborIndex = verticesIndex[neighbor.getKey()];
        adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight;
      });
    });

    return adjacencyMatrix;
  }

  /**
   * @return {string}
   */
  toString() {
    return Object.keys(this.vertices).toString();
  }
}
