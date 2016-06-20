import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {NgGrid, NgGridItem} from 'angular2-grid';
declare var GIXI: any;



@Component({
  moduleId: module.id,
  selector: 'id-geny-app',
  templateUrl: 'id-geny.component.html',
  styleUrls: ['id-geny.component.css'],
  directives: [NgGrid, NgGridItem]
})

export class IdGenyAppComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  title = 'id-geny!';
  imageData: any;
  context: CanvasRenderingContext2D;
  imageSource: any;
  imgSource: Array<any> = [];

  public static TILE_WIDTH = 50;
  public static TILE_HEIGHT = 50;
  public static GRID_WIDTH = 300;
  public static GRID_HEIGHT = 300;
  _icons: any;
  constructor() {

  }

  get icons(): number[][] {
    return this._icons;
  }

  ngAfterViewInit() {

    this.imageSource = this.imageData;
    console.log('imageData', this.imageData);

    for (var x = 0; x < 25; x++) {
      let imgData = new GIXI(50).getImage();
      let xx = x;
      let tmpObj = {
        img: imgData,
        xPos: xx % 5,
        yPos: Math.floor(xx / 5)
      };
      this.imgSource.push(tmpObj);
    }
    console.log(this.imgSource);

  }

}
