import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {NgGrid, NgGridItem} from 'angular2-grid';
declare var GIXI: any;

interface ITile {
  id?: number;
  isRevealed?: boolean;
  isMatched?: boolean;
  pattern?: any;
  xPos?: any;
  yPos?: any;
}

@Component({
  moduleId: module.id,
  selector: 'id-geny-app',
  templateUrl: 'id-geny.component.html',
  styleUrls: ['id-geny.component.css'],
  directives: [NgGrid, NgGridItem]
})

export class IdGenyAppComponent implements AfterViewInit {
 @ViewChild('myCanvas') myCanvas: ElementRef;
  tileObject: ITile;
 cover: any = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAdVBMVEX///9CPj/k4+MhHR4gHB0iHh/g394+Ojn6+vr8/Pz19fWamJjb2tqNi4skISKFg4Olo6OzsrLp6eldWluhoKBST0+TkZHW1dVKR0dyb2/NzMx8enoqJyhjYWI6NjesqqoxLi9OS0vFxMRraGhgXVx4dne4t7fPcN26AAADHklEQVRIiZWW27ajIAyGwYDjCRQVK63Wdti77/+IE6wHsO1anVy1wmfin5BACIlKTb80LWqCdm7Mo4i+skKZnxP6aLqMfG2ZGCNS/r4l0iRJ3zK2I/pxfJoUU3kx42gu5VQkx1WlCS3CR1E+XiVbTF5tHoXrBSU0eBQJyhkw4FxKzvEH470IdsR/AiSZekC7NaKalJoq0dzc//uUfEKiywAgdX7eBMnO+V1yGC71e6RogEPf7quz1S3FMH/id0ihgcvfmLxYYdBRE78iEfoY8j2kbE9X1g0cxvqIJBck2nQNxuh7Y/L1zWmLzCU5INPAZb4QD80ZysuAVotUaSf5oEIkRnXXynlcGcekcCeVWJjMoNZRgAiAfgnjRBluRpVQDT5MqwYUoPORiIJsl8ULErLJq8pirNCvguYSaOwhOQe9KBJRjMnUs1AuvNVNjTmodiQZGc+XpcfA+e383NWDfEbzjJ3ZZEOKKyy7CGnxI/RTiAxfzMoVOd/gWmzIJFmzZq7Dmm+S1aHnJWuYVBtSMhDrirLWdi5B6YOiZFKtC6gLbzcE/1TrQurMfUh5A4ne9yoVzEX5RFLDNmG2yLXLJaPn/VHFmUlXZGSe/zVwVwHaI4iSbEw+I38Hl3oRnB0fIa+BTehCdmFb8gMLPn9BMO/Xw3HzPz8QeUOgPxzpQGQ/lR+RMJWxVzAbwg5IWDCJZZAH60VVVSpsrliWZi9LrEW4HyI/WnQPip9E/X7EZvtrjCmDz+v487htB7kDTk/ehgrrmfp+T9gA59g3BN2C8d5aoWI+klkAHbaLuSl52T54ScVrU8LWx/fWh4qWZbm3ziTH010eWx+pR2yX78dmJrBZ2pcGi7+xKUtbvBIni33tZ9vmD4sY/QDND/mJOjcs7L4rGEl1iSOJ34U/kkSP2g3lh5GEn6k0nwffr6iUqsRvc2P4Ev34OPhcGHnvxitjbrwy1/9lH85khxyH+GSu8+6Zu5rpMMRPlOjDqXdXBdWWZrRGtCp+uSpMmgjz/gqTvr2PzBeSehT/de1xKT2NVn19ubLPXEfd91e4Dn38Axo5MsJaP50jAAAAAElFTkSuQmCC`;
  title = 'id-geny!';
  imageData: any;
  context: CanvasRenderingContext2D;
  imageSource: any;
  imgSource: Array<any> = [];

  public static TILE_WIDTH = 50;
  public static TILE_HEIGHT = 50;
  public static GRID_WIDTH = 300;
  public static GRID_HEIGHT = 300;


  constructor() {

  }

  // get icons(): number[][] {
  //   return this.createIcons();
  // }


  // shuffleTile(o) {
  //   for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  //   return o;
  // };

  createIcons() {
    this.imgSource = [];
    for (var x = 0; x < 18; x++) {
      let imgData = new GIXI(50).getImage();
      let tmpObj: ITile = {
        pattern: imgData,
        isMatched: false,
        isRevealed: true,
        xPos: x % 5,
        yPos: Math.floor(x / 5)
      };
      this.imgSource.push(tmpObj);
      this.imgSource.push(tmpObj);
    }

    return this.imgSource;
  }

  ngAfterViewInit() {
    // this.imageSource = this.imageData;
    // console.log('imageData', this.imageData);
      this.imgSource = [];
    for (var x = 0; x < 18; x++) {
      let imgData = new GIXI(50).getImage();
      let tmpObj: ITile = {
        pattern: imgData,
        isMatched: false,
        isRevealed: (Math.random() < 0.5),
        xPos: x % 5,
        yPos: Math.floor(x / 5)
      };
      this.imgSource.push(tmpObj);
      this.imgSource.push(tmpObj);
    }
    // for (var x = 0; x < 36; x++) {
    //   let imgData = new GIXI(50).getImage();
    //   let xx = x;
    //   let tmpObj = {
    //     img: imgData,
    //     xPos: xx % 5,
    //     yPos: Math.floor(xx / 5)
    //   };
    //   this.imgSource.push(tmpObj);
    // }
    // this.imgSource = this._icons;
    // console.log(this.imgSource);
  }

}
