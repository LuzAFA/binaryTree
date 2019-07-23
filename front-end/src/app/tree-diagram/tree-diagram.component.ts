import {Component, OnInit, ViewChild} from '@angular/core';
import {ElementRef, Renderer2} from '@angular/core';


declare var vis: any;

@Component({
  selector: 'app-tree-diagram',
  templateUrl: './tree-diagram.component.html',
  styleUrls: ['./tree-diagram.component.css']
})
export class TreeDiagramComponent implements OnInit {

  // @ts-ignore
  @ViewChild('siteConfigNetwork') networkContainer: ElementRef;
  // @ts-ignore
  @ViewChild('svgNetwork') svgNetworkContainer: ElementRef;


  public network: any;

  father: string = '';
  leftChild: string = '';
  rigthChild: string = '';

  private nodes: Array<any> = [];
  private newNode: any = {};
  private editedNode: any = {};
  private edges: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
    this.refreshTree()
  }

  refreshTree() {
    var treeData = this.getTreeData();
    this.loadVisTree(treeData);     // RENDER STANDARD NODES WITH TEXT LABEL
  }

  loadVisTree(treedata) {
    var options = {
      interaction: {
        hover: true,
      },
      manipulation: {
        enabled: true
      }
    };
    var container = this.networkContainer.nativeElement;
    this.network = new vis.Network(container, treedata, options);

    var that = this;
    this.network.on("hoverNode", function (params) {
      console.log('hoverNode Event:', params);
    });
    this.network.on("blurNode", function (params) {
      console.log('blurNode event:', params);
    });
  }

  getTreeData() {
    var treeData = {
      nodes: this.nodes,
      edges: this.edges
    };
    return treeData;
  }

  addNodes() {
    this.nodes.push({id: this.newNode.father, label: ' ' + this.newNode.father},);
    if (this.newNode.leftChild !== undefined) {
      this.nodes.push({id: this.newNode.leftChild, label: ' ' + this.newNode.leftChild},);
      this.edges.push({from: this.newNode.father, to: this.newNode.leftChild},)
    }
    if (this.newNode.rigthChild !== undefined) {
      this.nodes.push({id: this.newNode.rigthChild, label: ' ' + this.newNode.rigthChild},);
      this.edges.push({from: this.newNode.father, to: this.newNode.rigthChild},)
    }
    this.newNode = {};
    this.refreshTree();
    console.log(this.nodes)
  }

  deleteNode(index) {
    this.nodes.splice(index, 1);
    this.refreshTree()
  }
}
