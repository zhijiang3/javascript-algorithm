# 图数据结构

图的数据结构实现方式有两种：

1. 邻接矩阵
2. 邻接表

## 邻接矩阵

邻接矩阵使用二维数组 (Vertex * Vertex) 来表示图。
假设现有有向图的顶点关系如下（<V1, V2> 表示可以从 V1 到 V2，如果是双向/无向则用 (V1, V2) 表示）：

```text
VR = { <V1, V2>, <V1, V3>, <V3, V4>, <V4, V1> }
```

则用邻接矩阵表示为：

```text
   V1 V2 V3 V4
V1 0  1  1  0
V2 0  0  0  0
V3 0  0  0  1
V4 1  0  0  0
```

用二维数组表示为：

```js
[
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 0]
]
```

在有向图的矩阵中，行表示**入度（InDegree，记为ID(V)）**，列表示**出度（OutDegree，记为OD(V)）**，行列加起来就是该顶点的度，上例中 V1 的入度为 2，出度为 1（V1 的度为 3）。

注意: 对于无向图而言，其邻接矩阵始终是对角线(左上到右下)对称的。

## 邻接表

表示一个图，最常用的方式是邻接表。每个顶点都有一个记录着与它所相邻顶点的表。

其（有向图）数据结构大概如下：

```js
Graph {
  numVertexes: 4,
  numEdges: 4,
  adjList: [
    VertexNode {
      vertexType: '上海',
      firstNode: EdgeNode {
        adjvex: 1,
        weight: 110,
        next: null
      }
    },
    VertexNode {
      vertexType: '北京',
      firstNode: EdgeNode {
        adjvex: 2,
        weight: 150,
        next: null
      }
    },
    VertexNode {
      vertexType: '广州',
      firstNode: EdgeNode {
        adjvex: 0,
        weight: 140,
        next: null
      }
    },
    VertexNode {
      vertexType: '深圳',
      firstNode: EdgeNode {
        adjvex: 1,
        weight: 200,
        next: null
      }
    }
  ]
}
```
